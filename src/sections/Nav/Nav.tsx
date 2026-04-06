import { useScrolled } from "@/hooks/useScrolled";
import { useLang } from "@/hooks/useLang";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { href: "#work", en: "Work", es: "Trabajo" },
  { href: "#about", en: "About", es: "Sobre mí" },
  { href: "#skills", en: "Stack", es: "Stack" },
  { href: "#contact", en: "Contact", es: "Contacto" },
];
// Los links como constante fuera del componente — no se recrean en cada render

export function Nav() {
  const scrolled = useScrolled();
  const { lang, setLang, t } = useLang();

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <img
        src="/jillian-ram-favicon.png"
        alt="Jillian Ram Logo"
        className={styles.logo}
      />

      <ul className={styles.links} role="list">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{t(link.en, link.es)}</a>
          </li>
        ))}
      </ul>

      <div
        className={styles.langSwitch}
        role="group"
        aria-label="Language switcher">
        {(["en", "es"] as const).map((l, i) => (
          <>
            {i > 0 && <span aria-hidden="true">/</span>}
            <button
              key={l}
              className={lang === l ? styles.langActive : styles.langBtn}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}>
              {l.toUpperCase()}
            </button>
          </>
        ))}
      </div>
    </nav>
  );
}
