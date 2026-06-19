import type { Project } from "@/types";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    name,
    description,
    year,
    tags,
    url,
    githubUrl,
    featured,
    id,
    image,
    hidden,
    comingSoon,
  } = project;

  if (hidden) {
    const gameUrl = url ?? githubUrl ?? "#";
    return (
      <a
        href={gameUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.card} ${styles.hidden}`}
        aria-label="Mystery project — play the memory game to find out">
        <div className={styles.bg} aria-hidden="true">
          <span className={styles.bgNum}>{id}</span>
        </div>
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.hiddenCenter}>
          <p className={styles.hiddenLabel}>[ CLASSIFIED ]</p>
          <p className={styles.hiddenHint}>
            This one is hiding. Want to find it?
          </p>
          <p className={styles.hiddenCta}>Play the memory game →</p>
        </div>
      </a>
    );
  }

  if (comingSoon) {
    return (
      <div
        className={`${styles.card} ${styles.comingSoon}`}
        aria-label={`${name} — in progress`}>
        <span className={styles.badge}>In progress</span>
        <div className={styles.bg} aria-hidden="true">
          <span className={styles.bgNum}>{id}</span>
        </div>
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.info}>
          <div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.sub}>
              {description} · {year}
            </p>
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const href = url ?? githubUrl ?? "#";

  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`${styles.card} ${featured ? styles.featured : ""}`}
      aria-label={`${name} — ${description}`}>
      <div
        className={styles.bg}
        aria-hidden="true"
        style={
          image
            ? {
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }>
        {!image && <span className={styles.bgNum}>{id}</span>}
      </div>

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.info}>
        <div>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.sub}>
            {description} · {year}
          </p>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.arrow} aria-hidden="true">
          ↗
        </div>
      </div>
    </a>
  );
}
