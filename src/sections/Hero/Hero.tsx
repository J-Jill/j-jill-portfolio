import { useLang } from "@/hooks/useLang";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useLang();

  return (
    <section className={styles.hero} id="hero" aria-label="Introduction">
      <div className={styles.spacer} aria-hidden="true" />

      {/* <div className={styles.eyebrow}>
        <span className={styles.pulse} aria-hidden="true" />
        <span>
          {t(
            "Frontend Developer · React · UI/UX Sensibility",
            "Desarrolladora Frontend · React · Sensibilidad UI/UX",
          )}
        </span>
      </div> */}

      <h1 className={styles.title}>
        <span className={styles.line1}>Jillian</span>
        <span className={styles.line2}>Software</span>
        <span className={styles.line3}>Developer</span>
      </h1>

      <div className={styles.footer}>
        <p className={styles.desc}>
          {t("I build ", "Construyo ")}
          <strong>
            {t("interfaces that think", "interfaces que piensan")}
          </strong>
          {t(
            " — combining React, clean architecture and design sensibility to craft experiences that work as well as they look.",
            " — combinando React, arquitectura limpia y sensibilidad de diseño para crear experiencias que funcionan tan bien como se ven.",
          )}
        </p>

        <div className={styles.meta}>
          <p className={styles.location}>
            {t(
              "Málaga, Spain / Toronto from May 2026",
              "Málaga, España / Toronto desde Mayo 2026",
            )}
          </p>
          <div className={styles.stack}>
            {["React", "TypeScript", "Vite", "Figma"].map((tech) => (
              <span key={tech} className={styles.stackTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollBar} />
        <span>scroll</span>
      </div>
    </section>
  );
}
