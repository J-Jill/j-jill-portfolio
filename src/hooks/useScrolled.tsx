import { useState, useEffect } from "react";

export function useScrolled(threshold = 80): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    // { passive: true } — le dice al navegador que nunca llamaremos a preventDefault
    // El navegador puede optimizar el scroll sabiendo esto — mejor performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
