import type { ArchLayer } from "@types";

export const archLayers: ArchLayer[] = [
  {
    id: "ui",
    label: { en: "UI Layer", es: "Capa UI" },
    description: { en: "What the user sees", es: "Lo que el usuario ve" },
    techs: [
      { name: "React", tooltip: "Component structure & JSX" },
      { name: "CSS Modules", tooltip: "Scoped styles per component" },
      { name: "Tailwind CSS", tooltip: "Utility-first styling" },
      { name: "Figma", tooltip: "Design to code handoff" },
    ],
  },
  {
    id: "state",
    label: { en: "State Layer", es: "Capa de Estado" },
    description: { en: "How data flows", es: "Cómo fluyen los datos" },
    techs: [
      { name: "useState", tooltip: "Local component state" },
      { name: "useEffect", tooltip: "Side effects & lifecycle" },
      { name: "Context API", tooltip: "Shared state without Redux" },
      { name: "useReducer", tooltip: "Complex state logic" },
      { name: "Custom Hooks", tooltip: "Reusable stateful logic" },
    ],
  },
  {
    id: "data",
    label: { en: "Data Layer", es: "Capa de Datos" },
    description: {
      en: "Server communication",
      es: "Comunicación con servidor",
    },
    techs: [
      { name: "React Query", tooltip: "Server state, cache & sync" },
      { name: "Axios", tooltip: "HTTP client" },
      { name: "TypeScript", tooltip: "Type-safe contracts" },
      { name: "REST", tooltip: "API design language" },
    ],
  },
  {
    id: "tooling",
    label: { en: "Tooling", es: "Herramientas" },
    description: { en: "Build & workflow", es: "Build y flujo" },
    techs: [
      { name: "Vite", tooltip: "Lightning-fast dev server" },
      { name: "Git/GitHub", tooltip: "Version control" },
      { name: "ESLint", tooltip: "Code quality" },
      { name: "Vercel", tooltip: "Instant deploy" },
    ],
  },
  {
    id: "learning",
    label: { en: "Learning now", es: "Aprendiendo ahora" },
    description: { en: "Next level", es: "Siguiente nivel" },
    isLearning: true,
    techs: [
      { name: "Next.js", tooltip: "SSR & App Router" },
      { name: "Vitest + RTL", tooltip: "Unit & integration tests" },
      { name: "Python", tooltip: "Scripts & automation" },
    ],
  },
];
