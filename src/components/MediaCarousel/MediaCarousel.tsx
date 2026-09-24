import { useEffect, useRef, useState } from "react";
import type { ProjectMedia } from "@/types";
import { useLang } from "@/hooks/useLang";
import styles from "./MediaCarousel.module.css";

interface MediaCarouselProps {
  media: ProjectMedia[];
  label: string;
}

/*
  Carrusel horizontal con scroll-snap nativo:
  swipe en móvil, trackpad/flechas en desktop, sin librerías.

  Los vídeos se reproducen solo cuando son visibles (tanto en el
  scroll vertical de la página como en el horizontal del carrusel)
  y nunca con prefers-reduced-motion.
*/
export function MediaCarousel({ media, label }: MediaCarouselProps) {
  const { lang, t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const videos = track.querySelectorAll("video");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          const video = target as HTMLVideoElement;
          if (isIntersecting) video.play().catch(() => {});
          else video.pause();
        });
      },
      { threshold: 0.6 },
    );

    videos.forEach((v) => observer.observe(v));
    return () => observer.disconnect();
  }, [media]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  const hasMany = media.length > 1;

  return (
    <div className={styles.carousel}>
      <div
        ref={trackRef}
        className={styles.track}
        onScroll={hasMany ? handleScroll : undefined}
        tabIndex={hasMany ? 0 : undefined}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}>
        {media.map((item, i) => (
          <div
            key={item.src}
            className={styles.slide}
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${media.length}`}>
            {item.type === "video" ? (
              <video
                className={styles.media}
                src={item.src}
                poster={item.poster}
                aria-label={item.alt[lang]}
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                className={styles.media}
                src={item.src}
                alt={item.alt[lang]}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        ))}
      </div>

      {hasMany && (
        <div className={styles.controls}>
          <span className={styles.counter}>
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(media.length).padStart(2, "0")}
          </span>
          <div className={styles.dots}>
            {media.map((item, i) => (
              <button
                key={item.src}
                type="button"
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => goTo(i)}
                aria-label={t(`Go to slide ${i + 1}`, `Ir a la imagen ${i + 1}`)}
                aria-current={i === active}
              />
            ))}
          </div>
          <div className={styles.arrows}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label={t("Previous", "Anterior")}>
              ←
            </button>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => goTo(active + 1)}
              disabled={active === media.length - 1}
              aria-label={t("Next", "Siguiente")}>
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
