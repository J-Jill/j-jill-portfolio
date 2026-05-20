import type { Project } from "@/types";
import wildSphereImg from "@/assets/wildsphere.webp";
import memoryGameImg from "@/assets/memorygame.webp";

/*
  Los proyectos como constante tipada.
  Para añadir un nuevo proyecto: solo añades un objeto aquí.
  La sección Work.tsx no necesita ningún cambio.
  
  Esto es "separación de datos y presentación" en acción.
*/
export const projects: Project[] = [
  {
    id: "01",
    name: "Project One",
    description:
      "Short description of what this app does and the problem it solves",
    year: 2026,
    tags: ["React", "TypeScript", "React Query", "Vite"],
    url: "https://project-one.vercel.app",
    githubUrl: "https://github.com/jillianram/project-one",
    featured: true, // ocupa todo el ancho en el grid
  },
  {
    id: "02",
    name: "WildSphere",
    description:
      "Interactive 3D globe that visualizes real-time wildlife observations worldwide. Click any hotspot to explore species photos, taxonomy, and location data sourced live from the iNaturalist API.",
    year: 2025,
    tags: [
      "React",
      "TypeScript",
      "Three.js",
      "TanStack Query",
      "Tailwind CSS",
      "Framer Motion",
    ],
    url: "https://wildsphere.netlify.app",
    githubUrl: "https://github.com/J-Jill/wildsphere",
    image: wildSphereImg,
  },
  {
    id: "03",
    name: "Memory Game",
    description:
      "First project built during Ironhack bootcamp — a memory card game inspired by the Dumb Ways to Die campaign. 100% vanilla JavaScript, with every card illustration hand-drawn in Adobe Illustrator.",
    year: 2022,
    tags: ["JavaScript", "HTML", "CSS", "Adobe Illustrator"],
    url: "https://j-jillian.github.io/Memory-game/",
    githubUrl: "https://github.com/J-Jillian/Memory-game",
    image: memoryGameImg,
  },
];
