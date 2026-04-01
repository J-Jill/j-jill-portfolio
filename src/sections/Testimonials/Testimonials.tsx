import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useLang } from "../../hooks/useLang";
import { testimonials } from "../../data/testimonials";
import styles from "./testimonials.module.css";

// Palabras del marquee — duplicadas para el loop continuo
const MARQUEE_WORDS = ["What people say", "about me"];

export function Testimonials() {
  const { t } = useLang();
  const cardsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="testimonials">
      {/*
        Marquee sin border-top porque visualmente separa
        la sección anterior sin necesitar más espacio.
        Las palabras alternan entre solid y outline.
      */}
      <div className={styles.marqueeWrap} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map(
            (word, i) => (
              <span
                key={i}
                className={`${styles.marqueeWord} ${i % 2 === 0 ? styles.solid : styles.outline}`}>
                {word}
              </span>
            ),
          )}
        </div>
      </div>

      <div ref={cardsRef} className={`${styles.grid} reveal`}>
        {testimonials.map((item) => (
          <article key={item.id} className={styles.card}>
            {/* Comilla tipográfica grande — decorativa */}
            <span className={styles.quote} aria-hidden="true">
              “
            </span>

            <blockquote className={styles.text}>
              {t(item.quote.en, item.quote.es)}
            </blockquote>

            <footer className={styles.author}>
              <p className={styles.name}>— {item.name}</p>
              <p className={styles.role}>{item.role}</p>
              <p className={styles.source}>{item.source}</p>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
