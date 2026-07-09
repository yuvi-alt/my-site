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
    summary:
      "Building enterprise banking APIs, customer data platforms, and data pipelines across Java/Spring Boot, Jupyter notebooks, PySpark jobs, Neo4j graph queries, and AWS analytics tooling.",
    areas: [
      {
        title: "Backend & APIs",
        bullets: [
          "Developed and enhanced Java & Spring Boot REST APIs for enterprise banking applications",
          "Implemented request/response validation, structured error handling, and customer data platform integrations",
          "Worked with Neo4j for graph-based data relationships and customer/entity lookups",
          "Collaborated with frontend teams, business analysts, and stakeholders in Agile delivery",
        ],
      },
      {
        title: "Data Engineering & Pipelines",
        bullets: [
          "Built and maintained PySpark data processing jobs for transformation and enrichment workflows",
          "Developed extensively in Jupyter notebooks — prototyping pipelines, validating data, and iterating on job logic",
          "Wrote and supported batch jobs and ETL-style pipelines for customer and reporting datasets",
          "Supported testing, deployment, and release activities for data jobs moving into production",
        ],
      },
      {
        title: "Cloud, Reporting & Analytics",
        bullets: [
          "Worked with AWS S3 for data storage and pipeline inputs/outputs",
          "Used Athena and QuickSight for reporting, analytics, and business-facing dashboards",
          "Supported system reliability improvements and production issue resolution across API and data layers",
        ],
      },
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Neo4j",
      "PySpark",
      "Jupyter",
      "AWS S3",
      "Athena",
      "QuickSight",
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
    id: "make-a-dish",
    title: "Make a Dish",
    role: "Solo full-stack developer",
    summary:
      "Food marketplace connecting local home chefs with customers — browse cuisines, discover chefs nearby, order homemade dishes, and manage listings from a chef dashboard.",
    image: "/projects/make-a-dish.svg",
    logo: "/projects/logo.png",
    logoBg: "#faf8f5",
    imageAlt: "Make a Dish logo",
    featured: true,
    categories: ["Full Stack", "Payments", "AI-Assisted"],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "React",
      "AWS S3",
      "Prisma",
      "PostgreSQL",
      "Nodemailer",
      "Capacitor",
      "Zod",
    ],
    whatIBuilt: [
      "Customer marketplace — browse cuisines, search dishes/chefs, and view chef profiles with available meals",
      "Cuisine discovery pages with chef listings filtered by food type (Indian, Italian, vegan, and more)",
      "Shopping cart with quantity controls and checkout flow for ordering from local chefs",
      "Chef dashboard — login, add/edit/delete dishes (name, cuisine, price, quantity, availability)",
      "Multi-step chef onboarding so home cooks can register and start selling their cuisines",
      "Admin tools to manage chef signups, review listings, and export data",
    ],
    technicalDetail: [
      "Next.js App Router pages: `/cuisines`, `/cuisine/[slug]`, `/chef/[chefId]`, `/cart`, `/checkout/payment`",
      "Host APIs: `/api/host/dishes` CRUD + public `/api/dishes` listing filtered by cuisine",
      "AWS S3 storage for chef profiles, dish listings, and onboarding data",
      "Cart state via React context with localStorage persistence; Capacitor mobile shell for iOS/Android",
    ],
    liveUrl: "https://www.makeadish.co.uk/",
    githubUrl: "https://github.com/yuvi-alt",
  },
  {
    id: "habitat-finder",
    title: "Habitat Finder",
    role: "Solo full-stack developer",
    summary:
      "London neighbourhood research app — rent explorer, house-price explorer, area comparison, and TfL-powered data pipelines.",
    image: "/projects/habitat-finder.svg",
    imageAlt: "Habitat Finder preview",
    featured: true,
    categories: ["Full Stack", "Data"],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Drizzle ORM",
      "Neon Postgres",
      "Typesense",
      "MapLibre",
      "TanStack Query",
      "Tailwind CSS 4",
    ],
    whatIBuilt: [
      "Rent Explorer with MapLibre map, filters, and side-by-side area comparison",
      "House Prices / Buy Explorer with mortgage estimates and affordability scoring",
      "Typesense search API with autocomplete and weekly cron reindex",
      "TfL transit data pipeline — tube, rail, and bus routes per neighbourhood",
      "Lifestyle-based recommendation engine (safety, transit, walkability, green space)",
      "Shareable URL state for filters and compared areas",
    ],
    technicalDetail: [
      "Next.js App Router with `/api/v1/cities`, `/neighborhoods`, and `/search` routes",
      "Drizzle schema for cities + neighbourhoods with JSONB buying data on Neon",
      "Node scripts: `refresh-london-transit.mjs`, OSM scoring, geocode validation → generated JSON",
      "Client hooks: `useExplorerUrlState`, `useSavedAreas` (localStorage bookmarks)",
    ],
    liveUrl: "https://habitat-finder-mu.vercel.app/",
    githubUrl: "https://github.com/yuvi-alt",
  },
  {
    id: "transcendent-talons",
    title: "Transcendent Talons",
    role: "Solo full-stack developer",
    summary:
      "Press-on nail studio site — commission booking, PayPal deposits, customer reviews, and admin studio dashboard.",
    image: "/projects/transcendent-talons.svg",
    logo: "/projects/transcendent-talons-logo.png",
    logoBg: "#f0ede8",
    imageAlt: "Transcendent Talons logo",
    featured: true,
    categories: ["Full Stack", "Payments"],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "PayPal REST",
      "Nodemailer",
      "Tailwind CSS",
      "jsPDF",
    ],
    whatIBuilt: [
      "Multi-step commission booking form — nail shape, sizing, addons, reference image uploads",
      "Addon pricing engine (3D nails, chrome, rhinestones) with CAD line-item breakdown",
      "PayPal deposit checkout — server-side create/capture order flow",
      "Customer review system with star ratings, photo uploads, and admin publish/delete moderation",
      "Admin dashboard — commission request list, status updates, review management",
      "Business card generator with PNG/PDF/ZIP export at print resolution",
    ],
    technicalDetail: [
      "Prisma models: `CommissionRequest` (full nail spec + status enum), `CustomerReview` (base64 photos)",
      "API routes: `/api/commission`, `/api/reviews`, `/api/paypal/create-order`, `capture-order`",
      "HMAC-signed admin session cookie with multi-email allowlist",
      "Server actions for status updates; Nodemailer with attachment support on new commissions",
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
    skills: ["AWS S3", "Athena", "QuickSight", "PySpark", "Jupyter", "Neo4j", "SQL"],
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
