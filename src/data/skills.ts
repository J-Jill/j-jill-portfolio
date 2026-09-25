import type { SkillGroup } from "@/types";
import {
  siCss,
  siCssmodules,
  siEslint,
  siFastapi,
  siFigma,
  siFramer,
  siGit,
  siGithub,
  siGraphql,
  siHtml5,
  siJavascript,
  siLangchain,
  siNetlify,
  siNextdotjs,
  siPython,
  siReact,
  siReactquery,
  siTailwindcss,
  siThreedotjs,
  siTypescript,
  siVercel,
  siVite,
  siAxios,
} from "simple-icons";

/*
  Tecnologías agrupadas por categoría.
  Los logos vienen de simple-icons (se importan uno a uno, solo entra
  en el bundle lo que usas). Las marcas que simple-icons no incluye
  (AWS, Adobe, Groq) van sin `icon` y se muestran con sus iniciales.

  Para añadir una: busca su nombre en https://simpleicons.org,
  impórtala aquí como si<Nombre> y añádela al grupo.
*/
export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: { en: "Languages", es: "Lenguajes" },
    skills: [
      { name: "JavaScript", icon: siJavascript },
      { name: "TypeScript", icon: siTypescript },
      { name: "Python", icon: siPython },
      { name: "HTML", icon: siHtml5 },
      { name: "CSS", icon: siCss },
    ],
  },
  {
    id: "frontend",
    label: { en: "Frontend", es: "Frontend" },
    skills: [
      { name: "React", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "CSS Modules", icon: siCssmodules },
      { name: "Three.js", icon: siThreedotjs },
      { name: "Framer Motion", icon: siFramer },
      { name: "TanStack Query", icon: siReactquery },
      { name: "Axios", icon: siAxios },
    ],
  },
  {
    id: "backend",
    label: { en: "Backend, Cloud & AI", es: "Backend, cloud e IA" },
    skills: [
      { name: "FastAPI", icon: siFastapi },
      { name: "GraphQL", icon: siGraphql },
      { name: "AWS Amplify" },
      { name: "AppSync" },
      { name: "DynamoDB" },
      { name: "Cognito" },
      { name: "LangChain", icon: siLangchain },
      { name: "Groq" },
    ],
  },
  {
    id: "tooling",
    label: { en: "Tooling & Deploy", es: "Herramientas y despliegue" },
    skills: [
      { name: "Vite", icon: siVite },
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "ESLint", icon: siEslint },
      { name: "Vercel", icon: siVercel },
      { name: "Netlify", icon: siNetlify },
    ],
  },
  {
    id: "design",
    label: { en: "Design", es: "Diseño" },
    skills: [
      { name: "Figma", icon: siFigma },
      { name: "Adobe Illustrator" },
    ],
  },
];
