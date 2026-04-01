import type { Project } from "../types";

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
    year: 2025,
    tags: ["React", "TypeScript", "React Query", "Vite"],
    url: "https://project-one.vercel.app",
    githubUrl: "https://github.com/jillianram/project-one",
    featured: true, // ocupa todo el ancho en el grid
  },
  {
    id: "02",
    name: "Project Two",
    description: "Another project description",
    year: 2024,
    tags: ["React", "Context API", "CSS Modules"],
    url: "https://project-two.vercel.app",
    githubUrl: "https://github.com/jillianram/project-two",
  },
  {
    id: "03",
    name: "Project Three",
    description: "Third project description",
    year: 2024,
    tags: ["JavaScript", "REST API", "Figma"],
    githubUrl: "https://github.com/jillianram/project-three",
    // Sin url — este proyecto no tiene demo pública
  },
];
