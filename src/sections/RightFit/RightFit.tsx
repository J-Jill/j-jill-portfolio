import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/hooks/useLang";
import { fitItems } from "@/data/fit";
import styles from "./RightFit.module.css";

export function RightFit() {
  const { t } = useLang();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="fit" className={styles.section}>
      <p className={styles.label}>
        {t("What I'm looking for", "Lo que busco")}
      </p>

      <div ref={titleRef} className="reveal">
        <h2 className={styles.title}>
          {t("The right ", "El ")}
          <em className={styles.titleEm}>{t("fit", "encaje")}</em>
          {t(" matters", " importa")}
        </h2>
      </div>

      <div ref={listRef} className={`${styles.list} reveal delay-1`}>
        {fitItems.map((item) => (
          <div
            key={item.id}
            className={`${styles.row} ${item.highlight ? styles.highlight : ""}`}>
            <div className={styles.rowLeft}>
              <span className={styles.dash} aria-hidden="true">
                —
              </span>
              <h3 className={styles.rowTitle}>
                {t(item.title.en, item.title.es)}
              </h3>
            </div>
            <p className={styles.rowDesc}>
              {t(item.description.en, item.description.es)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
