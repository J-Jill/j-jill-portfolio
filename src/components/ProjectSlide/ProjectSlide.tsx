import type { Project } from "@/types";
import { useLang } from "@/hooks/useLang";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MediaCarousel } from "@/components/MediaCarousel/MediaCarousel";
import styles from "./ProjectSlide.module.css";

interface ProjectSlideProps {
  project: Project;
  total: number;
}

/*
  Un proyecto = un bloque a pantalla casi completa.
  Desktop: texto a la izquierda, carrusel a la derecha.
  Mobile:  cabecera → carrusel → detalle (grid-template-areas).
*/
export function ProjectSlide({ project, total }: ProjectSlideProps) {
  const { lang, t } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const {
    id,
    name,
    tagline,
    description,
    year,
    tags,
    url,
    githubUrl,
    media,
    hidden,
    comingSoon,
  } = project;

  const counter = `${id} / ${String(total).padStart(2, "0")}`;

  if (hidden) {
    const gameUrl = url ?? githubUrl ?? "#";
    return (
      <article ref={ref} className={`${styles.slide} ${styles.hidden} reveal`}>
        <p className={styles.meta}>{counter}</p>
        <p className={styles.hiddenLabel}>[ CLASSIFIED ]</p>
        <p className={styles.tagline}>
          {t(
            "This one is hiding. Want to find it?",
            "Este se esconde. ¿Quieres encontrarlo?",
          )}
        </p>
        <a
          href={gameUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}>
          {t("Play the memory game", "Juega al memory game")} ↗
        </a>
      </article>
    );
  }

  return (
    <article
      ref={ref}
      className={`${styles.slide} reveal`}
      aria-labelledby={`project-${id}`}>
      <header className={styles.head}>
        <p className={styles.meta}>
          <span>{counter}</span>
          <span>{year}</span>
          {comingSoon && (
            <span className={styles.badge}>
              {t("In progress", "En desarrollo")}
            </span>
          )}
        </p>
        <h3 id={`project-${id}`} className={styles.name}>
          {name}
        </h3>
        <p className={styles.tagline}>{tagline[lang]}</p>
      </header>

      <div className={styles.media}>
        {media.length > 0 ? (
          <MediaCarousel
            media={media}
            label={t(`${name} screenshots`, `Capturas de ${name}`)}
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <span className={styles.placeholderNum}>{id}</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <p className={styles.description}>{description[lang]}</p>

        <ul className={styles.tags} aria-label={t("Tech stack", "Tecnologías")}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>

        {(url || githubUrl) && (
          <div className={styles.links}>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonPrimary}`}>
                {t("Live demo", "Ver demo")} ↗
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}>
                {t("Code", "Código")} ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
