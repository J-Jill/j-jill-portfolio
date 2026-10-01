import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/hooks/useLang";
import styles from "./About.module.css";

// Recorrido: de dónde vengo hasta dónde estoy
const JOURNEY = [
  { en: "Mexico", es: "México" },
  { en: "United States", es: "Estados Unidos" },
  { en: "Spain", es: "España" },
  { en: "Canada", es: "Canadá" },
];

export function About() {
  const { lang, t } = useLang();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const bodyRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className={styles.section}>
      <p className={styles.label}>{t("About", "Sobre mí")}</p>

      <div ref={titleRef} className="reveal">
        <h2 className={styles.title}>
          {t("About ", "Sobre ")}
          <em className={styles.titleEm}>{t("me", "mí")}</em>
        </h2>
      </div>

      <div ref={bodyRef} className={`${styles.grid} reveal delay-1`}>
        <p className={styles.lead}>
          {t(
            "For more than three years I've built web products for enterprise clients — from AI-powered interfaces in React and TypeScript to the APIs and cloud services behind them. I care about the whole journey of a feature: understanding the problem, shaping it with product and design, and seeing it work in production.",
            "Soy desarrolladora full-stack y empecé como diseñadora. Durante más de tres años he construido productos web para clientes enterprise, desde interfaces con IA en React y TypeScript hasta las APIs y servicios cloud que las sostienen. Me importa todo el recorrido de una funcionalidad: entender el problema, darle forma junto a producto y diseño, y verla funcionar en producción para quienes la usan.",
          )}
        </p>

        <div className={styles.story}>
          <p>
            {t(
              "I was born in Mexico, where I studied Digital Interactive Design. After graduating, I moved to the United States for a year and a half on a cultural exchange, and then to Spain — where I started writing code.",
              "Nací en México, donde estudié Diseño Interactivo Digital. Al terminar la carrera me mudé a Estados Unidos un año y medio con un intercambio cultural, y después a España, donde empecé a programar.",
            )}
          </p>
          <p>
            {t(
              "In Spain I completed two bootcamps at Ironhack: full-stack web development, and later Java. After the first, I joined Instructr as an apprentice — my first time shipping code with a real team. After the second, I joined Accenture, where I fell even more in love with code.",
              "En España hice dos bootcamps en Ironhack: desarrollo web full-stack y, más tarde, Java. Después del primero entré en Instructr como aprendiz, mi primera vez programando con un equipo real. Después del segundo me uní a Accenture, donde me enamoré aún más del código.",
            )}
          </p>
          <p>
            {t(
              "There I worked in Agile, cross-functional teams — sprints, Jira, and every challenge and project pushed forward together as a team. I love building for enterprise clients: the solutions are carefully thought out, well organized and carry real weight.",
              "Allí trabajé con metodologías ágiles en equipos multidisciplinares: sprints, Jira y cada reto y proyecto sacado adelante en equipo. Me encanta trabajar para clientes enterprise, porque son soluciones muy bien pensadas, organizadas y con mucho peso.",
            )}
          </p>
          <p>
            {t(
              "Outside of work, you'll find me doing CrossFit, enjoying a good vegetarian dish or spending time with my two cats.",
              "Fuera del trabajo puedes encontrarme haciendo CrossFit, disfrutando de algún platillo vegetariano o en compañía de mis dos gatos.",
            )}
          </p>

          <ol
            className={styles.journey}
            aria-label={t("Where I've lived", "Dónde he vivido")}>
            {JOURNEY.map((place) => (
              <li key={place.en}>{place[lang]}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
