import { useEffect, useRef } from "react";

/*
  Uso: const ref = useScrollReveal<HTMLDivElement>()
       <div ref={ref} className={styles.section}>
  
  El hook añade la clase 'visible' cuando el elemento
  entra en el viewport. El CSS aplica la animación.
  
  Después de animar, deja de observar (unobserve) para
  liberar recursos — un elemento que ya animó no necesita
  seguir siendo observado.
*/
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.07 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
