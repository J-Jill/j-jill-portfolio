import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/hooks/useLang";
import { projects } from "@/data/projects";
import styles from "./Work.module.css";
import { ProjectSlide } from "@/components/ProjectSlide/ProjectSlide";

export function Work() {
  const { t } = useLang();
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="work" className={styles.section}>
      <div ref={headerRef} className={`${styles.header} reveal`}>
        <h2 className={styles.title}>{t("Work", "Trabajo")}</h2>
        <span className={styles.count}>
          {String(projects.length).padStart(2, "0")}{" "}
          {t("projects", "proyectos")}
        </span>
      </div>

      <div className={styles.list}>
        {projects.map((project) => (
          <ProjectSlide
            key={project.id}
            project={project}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
}
