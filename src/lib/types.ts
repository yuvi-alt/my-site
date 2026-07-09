export type ProjectCategory =
  | "Full Stack"
  | "Backend"
  | "Cloud"
  | "APIs"
  | "AI-Assisted"
  | "Payments"
  | "Data";

export type ExperienceEntry = {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
  technologies: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  logo?: string;
  logoBg?: string;
  featured?: boolean;
  categories: ProjectCategory[];
  technologies: string[];
  highlights: string[];
  architecture: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
  icon: "frontend" | "backend" | "cloud" | "database" | "tools" | "ai";
};

export type NavLink = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
  icon: "experience" | "projects" | "tech" | "passion";
};

export type TechStackItem = {
  name: string;
  color: string;
};

export type AiFeature = {
  title: string;
  description: string;
  icon: "prototype" | "debug" | "quality" | "learning";
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: "email" | "linkedin" | "github" | "location";
};
