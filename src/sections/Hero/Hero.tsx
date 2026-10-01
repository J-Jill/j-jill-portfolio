import { useLang } from "@/hooks/useLang";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useLang();

  return (
    <section className={styles.hero} id="hero" aria-label="Introduction">
      <div className={styles.spacer} aria-hidden="true" />

      <div className={styles.eyebrow}>
        <span className={styles.pulse} aria-hidden="true" />
        <span>
          {t(
            "Full Stack Developer · AI-powered interfaces",
            "Desarrolladora Full Stack · Interfaces impulsadas por IA",
          )}
        </span>
      </div>

      <h1 className={styles.title}>
        <span className={styles.line1}>Jillian</span>
        <span className={styles.line2}>Full Stack</span>
        <span className={styles.line3}>Developer</span>
      </h1>

      <div className={styles.footer}>
        <p className={styles.desc}>
          {t("I build ", "Construyo ")}
          <strong>
            {t("products that think", "productos que piensan")}
          </strong>
          {t(
            " — from AI features and APIs to the cloud they run on, designed to look as good as they work.",
            " — desde funcionalidades con IA y APIs hasta la nube donde se ejecutan, diseñados para verse tan bien como funcionan.",
          )}
        </p>

        <div className={styles.meta}>
          <p className={styles.location}>
            {t(
              "Toronto, Canada · Open to remote or hybrid",
              "Toronto, Canadá · Disponible en remoto o híbrido",
            )}
          </p>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollBar} />
        <span>scroll</span>
      </div>
    </section>
  );
}
