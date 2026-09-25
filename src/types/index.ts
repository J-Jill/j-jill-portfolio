import type { SimpleIcon } from "simple-icons";

export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt: { en: string; es: string };
  poster?: string; // solo vídeo: imagen mientras carga
  fit?: "contain" | "cover"; // por defecto contain; cover rellena el hueco recortando
}

export interface Project {
  id: string;
  name: string;
  tagline: { en: string; es: string };
  description: { en: string; es: string };
  year: number;
  tags: string[];
  url?: string;
  githubUrl?: string;
  media: ProjectMedia[];
  hidden?: boolean;
  comingSoon?: boolean;
}

export interface Testimonial {
  id: string;
  quote: { en: string; es: string };
  name: string;
  role: string;
  source: string;
}

export interface SkillGroup {
  id: string;
  label: { en: string; es: string };
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: SimpleIcon; // sin icon: se muestran las iniciales
}

export interface StandOutCard {
  id: string;
  num: string;
  title: { en: string; es: string };
  body: { en: string; es: string };
}

export interface FitItem {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  highlight?: boolean;
}

export type Lang = "en" | "es";
