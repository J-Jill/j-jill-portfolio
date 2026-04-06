import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/hooks/useLang";
import { archLayers } from "@/data/stack";
import styles from "./Stack.module.css";

export function Stack() {
  const { t } = useLang();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const tableRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className={styles.section}>
      <p className={styles.label}>Stack</p>

      <div ref={titleRef} className="reveal">
        <h2 className={styles.title}>{t("Architecture", "Arquitectura")}</h2>
      </div>

      <div ref={tableRef} className={`${styles.table} reveal delay-1`}>
        {archLayers.map((layer) => (
          <div
            key={layer.id}
            className={`${styles.row} ${layer.isLearning ? styles.learningRow : ""}`}>
            {/* Columna izquierda: nombre de la capa */}
            <div className={styles.layerInfo}>
              <span className={styles.layerLabel}>
                {t(layer.label.en, layer.label.es)}
              </span>
              <span className={styles.layerDesc}>
                {t(layer.description.en, layer.description.es)}
              </span>
            </div>

            {/* Columna derecha: pills de tecnologías */}
            <div className={styles.techs}>
              {layer.techs.map((tech) => (
                <span
                  key={tech.name}
                  className={styles.tech}
                  data-tooltip={tech.tooltip}>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
