import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0,
      my = 0;
    let rx = 0,
      ry = 0;
    let rafId: number;

    // ── Event listeners FUERA del loop ──────────────────────
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const addHover = () => {
      dotRef.current?.classList.add(styles.hovered);
      ringRef.current?.classList.add(styles.hovered);
    };
    const removeHover = () => {
      dotRef.current?.classList.remove(styles.hovered);
      ringRef.current?.classList.remove(styles.hovered);
    };

    const interactives = document.querySelectorAll(
      "a, button, [data-cursor-hover]",
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });
    document.addEventListener("mousemove", onMove);

    // ── Loop solo anima posición ─────────────────────────────
    const loop = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (dot && ring) {
        dot.style.left = mx + "px";
        dot.style.top = my + "px";
        rx += (mx - rx) * 0.1;
        ry += (my - ry) * 0.1;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    // ── Cleanup FUERA del loop, en el return del useEffect ──
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
