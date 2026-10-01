import type { ExperienceItem } from "@/types";
import awsSheBuildsLogo from "@/assets/logos/aws-she-builds.png";
import accentureLogo from "@/assets/logos/accenture.png";
import ironhackLogo from "@/assets/logos/ironhack.svg";
import instructrLogo from "@/assets/logos/instructr.png";
import iberoLogo from "@/assets/logos/ibero.png";

/*
  Línea de tiempo, de lo más reciente a lo más antiguo (por fecha de fin).
  Fechas como "YYYY-MM" (o "YYYY" si solo importa el año);
  se formatean según el idioma. Sin `end` = "Present".
*/
export const experience: ExperienceItem[] = [
  {
    id: "aws-she-builds",
    org: "AWS She Builds",
    logo: awsSheBuildsLogo,
    role: { en: "Mentee", es: "Mentee" },
    kind: "mentorship",
    start: "2026-09",
    location: {
      en: "Toronto, Canada · Remote",
      es: "Toronto, Canadá · Remoto",
    },
    summary: {
      en: "Selected for the 2026 cohort of AWS She Builds, a mentorship program connecting women in tech with senior AWS leaders. Working 1:1 with a Sr. Manager in Solutions Architecture to build technical depth in cloud and AWS, and grow toward a software engineering career.",
      es: "Seleccionada para la cohorte 2026 de AWS She Builds, un programa de mentoría que conecta a mujeres en tecnología con líderes sénior de AWS. Mentoría 1:1 con Sr. Manager de Solutions Architecture para ganar profundidad técnica en cloud y AWS, y crecer hacia una carrera en ingeniería de software.",
    },
  },
  {
    id: "accenture",
    org: "Accenture",
    logo: accentureLogo,
    role: { en: "Full Stack Developer", es: "Full Stack Developer" },
    kind: "fulltime",
    start: "2023-03",
    end: "2026-05",
    location: { en: "Spain · Remote", es: "España · Remoto" },
    summary: {
      en: "Building AI-powered web applications for global enterprise clients across regulated industries.",
      es: "Desarrollo de aplicaciones web con IA para clientes empresariales globales en sectores regulados.",
    },
    highlights: [
      {
        en: "Developed scalable, responsive frontend interfaces integrating LLM-powered features and real-time communication with React, TypeScript and WebSockets.",
        es: "Desarrollé interfaces frontend escalables y responsive que integran funcionalidades con LLMs y comunicación en tiempo real con React, TypeScript y WebSockets.",
      },
      {
        en: "Developed RESTful API endpoints for a merchandising client with Node.js and Docker Compose.",
        es: "Desarrollé endpoints de una API REST para un cliente de merchandising con Node.js y Docker Compose.",
      },
      {
        en: "Collaborated with cross-functional teams across design, product and backend engineering to deliver client-facing features.",
        es: "Colaboré con equipos multidisciplinares de diseño, producto y backend para entregar funcionalidades de cara al cliente.",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "AWS",
      "WebSockets",
      "REST APIs",
      "Docker",
      "Vitest",
      "Figma",
      "Agile/Scrum",
    ],
  },
  {
    id: "ironhack-java",
    org: "Ironhack",
    logo: ironhackLogo,
    role: {
      en: "Java Development Bootcamp",
      es: "Bootcamp de desarrollo Java",
    },
    kind: "bootcamp",
    start: "2023-04",
    end: "2023-06",
    location: { en: "Spain · Remote", es: "España · Remoto" },
    summary: {
      en: "9-week intensive bootcamp focused on Java development, from APIs and microservices to an Angular frontend.",
      es: "Bootcamp intensivo de 9 semanas centrado en desarrollo con Java, desde APIs y microservicios hasta un frontend en Angular.",
    },
    stack: [
      "Java",
      "Spring Boot",
      "JPA",
      "Maven",
      "JUnit",
      "SQL",
      "Microservices",
      "TypeScript",
      "Angular",
    ],
  },
  {
    id: "instructr",
    org: "Instructr",
    logo: instructrLogo,
    role: {
      en: "Software Developer Intern",
      es: "Software Developer (prácticas)",
    },
    kind: "internship",
    start: "2023-01",
    end: "2023-03",
    location: { en: "Denmark · Remote", es: "Dinamarca · Remoto" },
    summary: {
      en: "Frontend development with React in an Agile/Scrum team. Worked closely with backend developers on API integrations, tested with Cypress and supported the team's Git workflows.",
      es: "Desarrollo frontend con React en un equipo Agile/Scrum. Trabajé con el equipo de backend en la integración de APIs, hice tests con Cypress y di soporte a los flujos de trabajo del equipo con Git.",
    },
    stack: ["React", "Cypress", "Git", "Scrum"],
  },
  {
    id: "ironhack-fullstack",
    org: "Ironhack",
    logo: ironhackLogo,
    role: {
      en: "Full-Stack Web Development Bootcamp",
      es: "Bootcamp de desarrollo web full-stack",
    },
    kind: "bootcamp",
    start: "2022-04",
    end: "2022-07",
    location: { en: "Spain · Remote", es: "España · Remoto" },
    summary: {
      en: "Intensive bootcamp covering the full JavaScript stack, from frontend to backend.",
      es: "Bootcamp intensivo que cubre todo el stack de JavaScript, de frontend a backend.",
    },
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Axios",
    ],
  },
  {
    id: "ibero",
    org: "Universidad Iberoamericana León",
    logo: iberoLogo,
    role: {
      en: "Bachelor's degree, Digital Interactive Design",
      es: "Licenciatura en Diseño Interactivo Digital",
    },
    kind: "degree",
    start: "2013",
    end: "2018",
    summary: {
      en: "A discipline born from the growth of the internet, focused on designing digital interactions around the user experience.",
      es: "Una disciplina nacida con el crecimiento de internet, centrada en diseñar interacciones digitales a partir de la experiencia de usuario.",
    },
  },
];
