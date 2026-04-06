import { useLang } from "@/hooks/useLang";
import styles from "./Footer.module.css";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <a href="#hero" className={styles.link}>
          {t("Back to top ↑", "Volver arriba ↑")}
        </a>
        <span className={styles.copy}>© 2025 Jillian Ram</span>
      </div>

      <div className={styles.right}>
        <a
          href="https://linkedin.com/in/jillian-ram"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}>
          LinkedIn
        </a>
        <a
          href="https://github.com/jillian-ram"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}>
          GitHub
        </a>
        <a href="mailto:jillian@jillianram-dev.com" className={styles.link}>
          jillian@jillianram-dev.com
        </a>
      </div>
    </footer>
  );
}
