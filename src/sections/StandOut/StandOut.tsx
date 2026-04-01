import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useLang } from "../../hooks/useLang";
import { standoutCards } from "../../data/standout";
import styles from "./standOut.module.css";

export function StandOut() {
  const { t } = useLang();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className={styles.section}>
      <p className={styles.label}>
        {t("Why I stand out", "Por qué me destaco")}
      </p>

      <div ref={titleRef} className="reveal">
        <h2 className={styles.title}>
          {t("What I ", "Lo que ")}
          <em className={styles.titleEm}>{t("bring", "aporto")}</em>
        </h2>
      </div>

      <div ref={gridRef} className={`${styles.grid} reveal delay-1`}>
        {standoutCards.map((card) => (
          <div key={card.id} className={styles.card}>
            {/* Número decorativo de fondo */}
            <span className={styles.bgNum} aria-hidden="true">
              {card.num}
            </span>

            <span className={styles.num}>{card.num}</span>
            <h3 className={styles.cardTitle}>
              {t(card.title.en, card.title.es)}
            </h3>
            <p className={styles.cardBody}>{t(card.body.en, card.body.es)}</p>
            <div className={styles.line} aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
