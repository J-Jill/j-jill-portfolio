import type { ExperienceKind, Lang } from "@/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/hooks/useLang";
import { experience } from "@/data/experience";
import styles from "./Experience.module.css";

const KIND_LABELS: Record<ExperienceKind, { en: string; es: string }> = {
  mentorship: { en: "Mentorship", es: "Mentoría" },
  fulltime: { en: "Full-time", es: "Jornada completa" },
  internship: { en: "Internship", es: "Prácticas" },
  bootcamp: { en: "Bootcamp", es: "Bootcamp" },
  degree: { en: "Degree", es: "Licenciatura" },
};

// "2023-03" → "Mar 2023" / "mar 2023"; "2013" → "2013"
function formatDate(date: string, lang: Lang) {
  if (date.length === 4) return date;
  const [year, month] = date.split("-").map(Number);
  return new Intl.DateTimeFormat(lang, { month: "short", year: "numeric" })
    .format(new Date(year, month - 1))
    .replace(".", "");
}

export function Experience() {
  const { lang, t } = useLang();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLOListElement>();

  return (
    <section id="experience" className={styles.section}>
      <p className={styles.label}>{t("Experience", "Experiencia")}</p>

      <div ref={titleRef} className="reveal">
        <h2 className={styles.title}>
          {t("Recent Experience", "Experiencia reciente")}
        </h2>
      </div>

      <ol ref={listRef} className={`${styles.timeline} reveal delay-1`}>
        {experience.map((item) => {
          const current = !item.end;
          return (
            <li key={item.id} className={styles.item}>
              <div className={styles.logoWrap}>
                <img className={styles.logo} src={item.logo} alt="" />
              </div>

              <div className={styles.content}>
                <div className={styles.head}>
                  <div>
                    <h3 className={styles.org}>{item.org}</h3>
                    <p className={styles.role}>{item.role[lang]}</p>
                  </div>
                  <p className={styles.dates}>
                    {current && (
                      <span className={styles.liveDot} aria-hidden="true" />
                    )}
                    {formatDate(item.start, lang)} —{" "}
                    {item.end
                      ? formatDate(item.end, lang)
                      : t("Present", "Actualidad")}
                  </p>
                </div>

                <p className={styles.meta}>
                  <span className={styles.kind}>
                    {KIND_LABELS[item.kind][lang]}
                  </span>
                  {item.location && <span>{item.location[lang]}</span>}
                </p>

                <p className={styles.summary}>{item.summary[lang]}</p>

                {item.highlights && (
                  <ul className={styles.highlights}>
                    {item.highlights.map((h) => (
                      <li key={h.en}>{h[lang]}</li>
                    ))}
                  </ul>
                )}

                {item.stack && (
                  <ul
                    className={styles.stack}
                    aria-label={t("Tech stack", "Tecnologías")}>
                    {item.stack.map((tech) => (
                      <li key={tech} className={styles.tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
