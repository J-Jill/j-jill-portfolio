export interface Project {
  id: string;
  name: string;
  description: string;
  year: number;
  tags: string[];
  url?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: { en: string; es: string };
  name: string;
  role: string;
  source: string;
}

export interface ArchLayer {
  id: string;
  label: { en: string; es: string };
  description: { en: string; es: string };
  techs: ArchTech[];
  isLearning?: boolean;
}

export interface ArchTech {
  name: string;
  tooltip: string;
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
