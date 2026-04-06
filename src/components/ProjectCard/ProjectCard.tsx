import type { Project } from "@/types";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, year, tags, url, githubUrl, featured, id } =
    project;

  const href = url ?? githubUrl ?? "#";
  // ?? = nullish coalescing: usa url si existe, si no githubUrl, si no '#'

  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`${styles.card} ${featured ? styles.featured : ""}`}
      aria-label={`${name} — ${description}`}>
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

        <div className={styles.arrow} aria-hidden="true">
          ↗
        </div>
      </div>
    </a>
  );
}
