import type { Project } from "@/types";
import distillImg from "@/assets/distill.webp";
import wildSphereImg from "@/assets/wildsphere.webp";
import memoryGameImg from "@/assets/memorygame.webp";
import wildSphereDemo from "@/assets/wildsphere-demo.mp4";
import wildSpherePoster from "@/assets/wildsphere-poster.jpg";
import retailStoreDemo from "@/assets/retailstore-demo.mp4";
import retailStorePoster from "@/assets/retailstore-poster.jpg";
import retailStoreArchitecture from "@/assets/retailstore-architecture.jpg";
import memoryGameDemo from "@/assets/memorygame-demo.mp4";
import memoryGamePoster from "@/assets/memorygame-poster.jpg";

/*
  Los proyectos como constante tipada.
  Para añadir un nuevo proyecto: solo añades un objeto aquí.
  La sección Work.tsx no necesita ningún cambio.

  Esto es "separación de datos y presentación" en acción.

  - tagline: una frase corta que resume el proyecto.
  - description: el detalle.
  - media: fotos y vídeos del carrusel, en orden. El primero es la portada.
    Para un vídeo: importa el .mp4 desde src/assets y usa
    { type: "video", src: miVideo, poster: miCaptura, alt: {...} }.
    Sin media, se muestra un placeholder con el número del proyecto.
*/
export const projects: Project[] = [
  {
    id: "01",
    name: "WildSphere",
    tagline: {
      en: "Explore real-time wildlife sightings on an interactive 3D globe.",
      es: "Explora avistamientos de fauna en tiempo real sobre un globo 3D interactivo.",
    },
    description: {
      en: "Interactive 3D globe that visualizes real-time wildlife observations worldwide. Click any hotspot to explore species photos, taxonomy, and location data sourced live from the iNaturalist API.",
      es: "Globo 3D interactivo que visualiza observaciones de fauna en tiempo real de todo el mundo. Haz clic en cualquier punto para ver fotos de especies, taxonomía y ubicación, con datos en directo de la API de iNaturalist.",
    },
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
    media: [
      {
        type: "video",
        src: wildSphereDemo,
        poster: wildSpherePoster,
        alt: {
          en: "Demo: exploring wildlife observations on the WildSphere globe",
          es: "Demo: explorando observaciones de fauna en el globo de WildSphere",
        },
      },
      {
        type: "image",
        src: wildSphereImg,
        alt: {
          en: "WildSphere 3D globe with wildlife observation hotspots",
          es: "Globo 3D de WildSphere con puntos de observaciones de fauna",
        },
      },
    ],
  },
  {
    id: "02",
    name: "Distill",
    tagline: {
      en: "Ask your docs anything — answers grounded only in your sources.",
      es: "Pregúntale lo que quieras a tu documentación — respuestas basadas solo en tus fuentes.",
    },
    description: {
      en: "Upload any technical documentation. Ask in plain English — get instant, source-grounded answers. Built on RAG: the LLM can only answer from your documents, so it can't hallucinate.",
      es: "Sube cualquier documentación técnica. Pregunta en lenguaje natural y obtén respuestas al instante, basadas en la fuente. Construido con RAG: el LLM solo puede responder a partir de tus documentos, así que no puede inventarse nada.",
    },
    year: 2026,
    tags: ["React", "TypeScript", "Python", "FastAPI", "LangChain", "Groq"],
    url: "https://trydistill.vercel.app/",
    githubUrl: "https://github.com/J-Jill/distill",
    media: [
      {
        type: "image",
        src: distillImg,
        alt: {
          en: "Distill chat answering a question with cited sources",
          es: "Chat de Distill respondiendo una pregunta con fuentes citadas",
        },
      },
    ],
  },
  {
    id: "03",
    name: "RetailStore",
    tagline: {
      en: "A full-stack serverless storefront on AWS Amplify Gen 2.",
      es: "Una tienda online full-stack y serverless sobre AWS Amplify Gen 2.",
    },
    description: {
      en: "E-commerce app built with Next.js following AWS's official Amplify Gen 2 workshop. GraphQL API on AppSync backed by DynamoDB, Cognito auth with three access levels (public, owner and admin group), server-side data fetching through a Next.js Route Handler, and CI/CD that redeploys the whole stack on every push. Live with 20 categories and 2,465 products.",
      es: "Tienda online hecha con Next.js siguiendo el workshop oficial de AWS Amplify Gen 2. API GraphQL en AppSync sobre DynamoDB, autenticación con Cognito en tres niveles de acceso (público, propietario y grupo admin), carga de datos en servidor con un Route Handler de Next.js, y CI/CD que redespliega todo el stack en cada push. En producción con 20 categorías y 2.465 productos.",
    },
    year: 2026,
    tags: [
      "Next.js",
      "TypeScript",
      "AWS Amplify Gen 2",
      "AppSync",
      "GraphQL",
      "DynamoDB",
      "Cognito",
    ],
    url: "https://main.d1h48dgclkbfwa.amplifyapp.com/",
    githubUrl: "https://github.com/J-Jill/AmplifyWorkshop-RetailStore",
    media: [
      {
        type: "video",
        src: retailStoreDemo,
        poster: retailStorePoster,
        alt: {
          en: "Demo: browsing product categories in the RetailStore storefront",
          es: "Demo: navegando por las categorías de productos de RetailStore",
        },
      },
      {
        type: "image",
        src: retailStoreArchitecture,
        fit: "contain",
        alt: {
          en: "RetailStore architecture: GitHub and Amplify Hosting CI/CD, CloudFront, Cognito auth, Next.js app, AppSync GraphQL and DynamoDB",
          es: "Arquitectura de RetailStore: CI/CD con GitHub y Amplify Hosting, CloudFront, autenticación con Cognito, app Next.js, AppSync GraphQL y DynamoDB",
        },
      },
    ],
  },
  {
    id: "04",
    name: "Observability Dashboard",
    tagline: {
      en: "Logs, metrics and traces in one real-time view.",
      es: "Logs, métricas y trazas en una sola vista en tiempo real.",
    },
    description: {
      en: "Dashboard to monitor system health: logs, metrics, and traces in one place. Real-time alerting and configurable panels for on-call visibility.",
      es: "Dashboard para monitorizar la salud de un sistema: logs, métricas y trazas en un mismo lugar. Alertas en tiempo real y paneles configurables para tener visibilidad durante las guardias.",
    },
    year: 2026,
    tags: ["React", "TypeScript", "D3.js", "WebSockets"],
    media: [],
    comingSoon: true,
  },
  {
    id: "05",
    name: "Memory Game",
    tagline: {
      en: "A hand-illustrated memory card game in vanilla JavaScript.",
      es: "Un juego de memoria ilustrado a mano en JavaScript vanilla.",
    },
    description: {
      en: "First project built during Ironhack bootcamp — a memory card game inspired by the Dumb Ways to Die campaign. 100% vanilla JavaScript, with every card illustration hand-drawn in Adobe Illustrator.",
      es: "Primer proyecto del bootcamp de Ironhack — un juego de memoria inspirado en la campaña Dumb Ways to Die. 100% JavaScript vanilla, con cada ilustración dibujada a mano en Adobe Illustrator.",
    },
    year: 2022,
    tags: ["JavaScript", "HTML", "CSS", "Adobe Illustrator"],
    url: "https://j-jillian.github.io/Memory-game/",
    githubUrl: "https://github.com/J-Jillian/Memory-game",
    media: [
      {
        type: "video",
        src: memoryGameDemo,
        poster: memoryGamePoster,
        alt: {
          en: "Demo: playing a round of the Memory Game",
          es: "Demo: jugando una partida del Memory Game",
        },
      },
      {
        type: "image",
        src: memoryGameImg,
        alt: { en: "Memory Game board", es: "Tablero del Memory Game" },
      },
    ],
  },
];
