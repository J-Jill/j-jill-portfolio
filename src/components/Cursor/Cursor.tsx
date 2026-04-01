import { useEffect, useRef } from "react";
import styles from "./cursor.module.css";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Posición real del ratón
    let mx = 0,
      my = 0;
    // Posición interpolada del anillo (lag)
    let rx = 0,
      ry = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const loop = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) {
        rafId = requestAnimationFrame(loop);
        return;
      }

      // Punto: posición exacta del ratón
      dot.style.left = mx + "px";
      dot.style.top = my + "px";

      // Anillo: interpolación lineal para el lag
      // Cada frame se mueve el 10% de lo que queda hasta el ratón
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";

      rafId = requestAnimationFrame(loop);
    };

    // Hover: clases para agrandar cursor sobre elementos interactivos
    const addHover = () => {
      dot.classList.add(styles.hovered);
      ring.classList.add(styles.hovered);
    };
    const removeHover = () => {
      dot.classList.remove(styles.hovered);
      ring.classList.remove(styles.hovered);
    };

    // Seleccionar todos los elementos interactivos
    const interactives = document.querySelectorAll(
      "a, button, [data-cursor-hover]",
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
}
