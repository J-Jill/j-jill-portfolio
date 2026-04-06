import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/hooks/useLang";
import { projects } from "@/data/projects";
import styles from "./Work.module.css";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";

export function Work() {
  const { t } = useLang();
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="work" className={styles.section}>
      <div ref={headerRef} className={`${styles.header} reveal`}>
        <h2 className={styles.title}>{t("Work", "Trabajo")}</h2>
        <span className={styles.count}>
          {String(projects.length).padStart(2, "0")}{" "}
          {t("projects", "proyectos")}
        </span>
      </div>

      <div ref={gridRef} className={`${styles.grid} reveal delay-1`}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
