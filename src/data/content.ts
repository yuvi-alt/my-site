import type {
  AiFeature,
  ContactItem,
  ExperienceEntry,
  NavLink,
  Project,
  ProjectCategory,
  SkillGroup,
  StatItem,
  TechStackItem,
} from "@/lib/types";

export const profile = {
  name: "Yuvraj Bhavsar",
  firstName: "Yuvraj",
  title: "Software Engineer | Full-Stack Developer | API & Cloud Systems",
  intro:
    "I build enterprise APIs, cloud-based data solutions, and full-stack products using Java, Spring Boot, React, Next.js, TypeScript, AWS, and PostgreSQL — with thoughtful AI-assisted development to ship faster without compromising quality.",
  email: "bhavsaryuvraj10@gmail.com",
  linkedin: "https://www.linkedin.com/in/yuvraj1001",
  github: "https://github.com/yuvi-alt",
  resumePath: "/resume.pdf",
  photoPath: "/profile.jpg",
  location: "India",
  locationNote: "Open to UK, Canada, Europe opportunities",
  contactCta:
    "Open to Software Engineer, Full-Stack Developer, Backend Developer, and Cloud/API Engineering roles.",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const stats: StatItem[] = [
  { value: "1+", label: "Years Experience", icon: "experience" },
  { value: "3+", label: "Projects Built", icon: "projects" },
  { value: "10+", label: "Technologies", icon: "tech" },
  { value: "100%", label: "Passion", icon: "passion" },
];

export const techStack: TechStackItem[] = [
  { name: "Java", color: "#E76F3C" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#111827" },
  { name: "Node.js", color: "#339933" },
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "AWS", color: "#FF9900" },
  { name: "Python", color: "#3776AB" },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Lead Engineer / Software Engineer",
    company: "NatWest Group via Maxcurve Technologies",
    dates: "June 2025 – Present",
    bullets: [
      "Developed and enhanced Java & Spring Boot REST APIs for enterprise banking applications",
      "Worked on customer data platforms, validations, request/response handling, and structured error management",
      "Built and supported PySpark workflows in Jupyter for data processing and transformation",
      "Worked with AWS S3, Athena, and QuickSight for reporting and analytics use cases",
      "Collaborated with frontend teams, business analysts, and stakeholders in Agile delivery",
      "Supported testing, deployment, release activities, and system reliability improvements",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "AWS S3",
      "Athena",
      "QuickSight",
      "PySpark",
      "Jupyter",
      "Git",
      "JIRA",
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Full Stack",
  "Backend",
  "Cloud",
  "AI-Assisted",
  "Payments",
  "Data",
];

export const projects: Project[] = [
  {
    id: "habitat-finder",
    title: "Habitat Finder",
    description:
      "London neighbourhood research platform with interactive maps, rent estimates, safety scores, and area comparison.",
    image: "/projects/habitat-finder.svg",
    imageAlt: "Habitat Finder preview",
    featured: true,
    categories: ["Full Stack", "Data"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "MapLibre", "TanStack Query"],
    highlights: [
      "Interactive MapLibre map",
      "Search by area, station, or tube line",
      "Compare 2–3 areas side by side",
      "Shareable URL state",
    ],
    architecture: [
      "Next.js App Router with map-heavy client components",
      "PostgreSQL on Neon for neighbourhood metrics",
      "TanStack Query for caching and URL state",
      "MapLibre GL for geospatial overlays",
    ],
    liveUrl: "https://habitat-finder-mu.vercel.app/",
    githubUrl: "https://github.com/yuvi-alt",
  },
  {
    id: "make-a-dish",
    title: "Make a Dish",
    description:
      "Full-stack food marketplace connecting customers with local chefs for authentic homemade meals.",
    image: "/projects/make-a-dish.svg",
    logo: "/projects/logo.png",
    logoBg: "#faf8f5",
    imageAlt: "Make a Dish logo",
    featured: true,
    categories: ["Full Stack", "Payments", "AI-Assisted"],
    technologies: ["React", "Next.js", "TypeScript", "AWS S3", "Stripe", "Twilio"],
    highlights: [
      "Host onboarding and dish management",
      "Stripe checkout and payments",
      "Twilio WhatsApp notifications",
      "AI-assisted development workflow",
    ],
    architecture: [
      "Next.js REST API routes for marketplace operations",
      "Stripe Checkout for secure payments",
      "AWS S3 for structured media storage",
      "Twilio WhatsApp for order notifications",
    ],
    liveUrl: "https://www.makeadish.co.uk/",
    githubUrl: "https://github.com/yuvi-alt",
  },
  {
    id: "transcendent-talons",
    title: "Transcendent Talons",
    description:
      "Business website for a press-on nail studio with bookings, PayPal payments, admin dashboard, and emails.",
    image: "/projects/transcendent-talons.svg",
    logo: "/projects/transcendent-talons-logo.png",
    logoBg: "#f0ede8",
    imageAlt: "Transcendent Talons logo",
    featured: true,
    categories: ["Full Stack", "Payments"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "PayPal", "Nodemailer"],
    highlights: [
      "Multi-step booking wizard",
      "PayPal payment flow",
      "Admin dashboard and review moderation",
      "Email automation",
    ],
    architecture: [
      "Prisma ORM over PostgreSQL for bookings and reviews",
      "Multi-step wizard with server actions",
      "PayPal checkout integration",
      "Nodemailer for automated emails",
    ],
    liveUrl: "https://megs-website-iota.vercel.app/",
    githubUrl: "https://github.com/yuvi-alt",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: "backend",
    skills: ["Java", "Spring Boot", "REST APIs", "Node.js basics", "JSON"],
  },
  {
    title: "Cloud & Data",
    icon: "cloud",
    skills: ["AWS S3", "Athena", "QuickSight", "PySpark", "Jupyter", "SQL"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    icon: "tools",
    skills: ["Git", "GitHub", "JIRA", "Vercel", "Cursor", "ChatGPT", "Postman"],
  },
  {
    title: "AI-Assisted",
    icon: "ai",
    skills: ["Cursor", "ChatGPT", "Prompt engineering", "Code review", "Debugging", "Prototyping"],
  },
];

export const aiFeatures: AiFeature[] = [
  {
    title: "Faster Prototyping",
    description: "Rapidly explore UI flows and implementation options",
    icon: "prototype",
  },
  {
    title: "Smarter Debugging",
    description: "Trace issues and validate fixes more efficiently",
    icon: "debug",
  },
  {
    title: "Better Code Quality",
    description: "Review, test, and refine every AI-generated change",
    icon: "quality",
  },
  {
    title: "Continuous Learning",
    description: "Stay current with patterns, tools, and best practices",
    icon: "learning",
  },
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "bhavsaryuvraj10@gmail.com",
    href: "mailto:bhavsaryuvraj10@gmail.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    value: "yuvraj1001",
    href: "https://www.linkedin.com/in/yuvraj1001",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "yuvi-alt",
    href: "https://github.com/yuvi-alt",
    icon: "github",
  },
  {
    label: "Location",
    value: "India — UK, Canada, Europe",
    icon: "location",
  },
];
