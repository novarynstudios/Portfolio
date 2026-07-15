import {
  BookOpen,
  Bot,
  Braces,
  CloudCog,
  Code2,
  FileText,
  Github,
  Globe2,
  Mail,
  MessageCircle,
  Network,
  Server,
  ShieldCheck,
  TerminalSquare,
  Twitter
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  tags: string[];
  status: string;
  links: { label: string; href: string }[];
};

export type Metric = { value: number; suffix: string; label: string };
export type Affiliation = { name: string; image: string; alt: string };
export type ExperienceCard = { title: string; description: string };
export type ToolPlatform = { name: string; image: string; alt: string };
export type IconName = LucideIcon;

export const portfolio = {
  person: {
    name: "Farid Rahman",
    handle: "@faridrahman1843",
    role: "Minecraft Plugin Developer and Full-Stack Web Developer",
    studio: "Novaryn Studios",
    email: "hello@novarynstudios.com",
    location: "Dhaka, Bangladesh"
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/faridrahman1843", icon: Github },
    { label: "Discord", href: "https://discord.com/users/faridrahman1843", icon: MessageCircle },
    { label: "X/Twitter", href: "https://x.com/faridrahman1843", icon: Twitter },
    { label: "Email", href: "mailto:hello@novarynstudios.com", icon: Mail }
  ],
  hero: {
    profileImage: "/profile/farid-pfp.webp",
    intro:
      "Hi, I'm Farid - a Minecraft plugin developer and full-stack web developer focused on polished server tools, licensing platforms, modern web experiences, and reliable infrastructure.",
    body:
      "I build plugins, dashboards, docs, deployment workflows, and infrastructure for communities that need their tools to feel fast, reliable, and easy to run."
  },
  projects: [
    {
      slug: "novaryn-announcer",
      title: "Novaryn Announcer",
      summary: "Modern rotating announcements for Paper, Purpur, Spigot, and Bukkit.",
      description:
        "A configurable announcement plugin with PlaceholderAPI support, schedule-aware rotation, and careful formatting for production Minecraft networks.",
      image: "/projects/novaryn-announcer.svg",
      tags: ["Java", "Paper API", "PlaceholderAPI"],
      status: "Active plugin",
      links: [{ label: "Project notes", href: "https://github.com/faridrahman1843" }]
    },
    {
      slug: "novaryn-queue-bar",
      title: "Novaryn Queue Bar",
      summary: "StrikePractice queue status shown through an action bar.",
      description:
        "A focused utility that keeps practice players informed with clean action-bar updates and PlaceholderAPI-friendly configuration.",
      image: "/projects/novaryn-queue-bar.svg",
      tags: ["Java", "StrikePractice", "PlaceholderAPI"],
      status: "Active plugin",
      links: [{ label: "GitHub profile", href: "https://github.com/faridrahman1843" }]
    },
    {
      slug: "novaryn-strike-core",
      title: "Novaryn Strike Core",
      summary: "Practice-server menus, duels, stats, friend features, and optional Lunar Client integration.",
      description:
        "A practice-network core layer that connects player workflows, menus, stats, duels, and optional client integrations in one maintainable plugin system.",
      image: "/projects/novaryn-strike-core.svg",
      tags: ["Java", "Paper", "StrikePractice"],
      status: "In development",
      links: [{ label: "Novaryn Studios", href: "https://github.com/faridrahman1843" }]
    },
    {
      slug: "sniper-region-router",
      title: "Sniper Region Router",
      summary: "Velocity region routing between Bangladesh, Singapore, and North America using Redis.",
      description:
        "A Velocity routing concept designed for multi-region practice servers, using Redis-backed state to guide players into the best available region.",
      image: "/projects/sniper-region-router.svg",
      tags: ["Java", "Velocity", "Redis"],
      status: "Prototype",
      links: [{ label: "Architecture notes", href: "https://github.com/faridrahman1843" }]
    },
    {
      slug: "novaryn-spectrum",
      title: "Novaryn Spectrum",
      summary: "Experimental Minecraft performance and PvP systems project.",
      description:
        "A research-oriented project exploring networking, performance patterns, combat feel, and operational tooling for modern Minecraft servers.",
      image: "/projects/novaryn-spectrum.svg",
      tags: ["Java", "Performance", "Networking"],
      status: "Experimental",
      links: [{ label: "Follow progress", href: "https://x.com/faridrahman1843" }]
    },
    {
      slug: "license-platform",
      title: "License Platform",
      summary: "Licensing backend, dashboard, Discord workflow, validation, and deployment tooling.",
      description:
        "A full-stack product operations platform for validating plugin licenses, handling Discord-driven workflows, and deploying updates with confidence.",
      image: "/projects/license-platform.svg",
      tags: ["Next.js", "FastAPI", "PostgreSQL"],
      status: "Private platform",
      links: [{ label: "Discuss a build", href: "#contact" }]
    },
    {
      slug: "novaryn-wiki",
      title: "Novaryn Wiki",
      summary: "Responsive documentation platform for Novaryn plugins.",
      description:
        "A fast documentation experience for plugin setup, commands, permissions, configuration examples, and support-friendly troubleshooting.",
      image: "/projects/novaryn-wiki.svg",
      tags: ["React", "TypeScript", "Nginx"],
      status: "Documentation",
      links: [{ label: "Docs concept", href: "#contact" }]
    },
    {
      slug: "auksdc-website",
      title: "AUKSDC Website",
      summary: "Modern college website with programs, notices, results, gallery, and contact sections.",
      description:
        "A responsive institutional website concept built around clear notices, searchable content, gallery storytelling, and CMS-ready sections.",
      image: "/projects/auksdc-website.svg",
      tags: ["Web", "Responsive UI", "CMS-ready"],
      status: "Website concept",
      links: [{ label: "Website inquiry", href: "#contact" }]
    }
  ] satisfies Project[],
  metrics: [
    { value: 10, suffix: "+", label: "Projects" },
    { value: 3, suffix: "", label: "Global Regions" },
    { value: 4, suffix: "", label: "Core Platforms" },
    { value: 1, suffix: "", label: "Focused Studio" }
  ] satisfies Metric[],
  currentAffiliations: [
    { name: "Novaryn Studios", image: "/affiliations/novaryn-studios.svg", alt: "Novaryn Studios wordmark" },
    { name: "Sniper Network", image: "/affiliations/sniper-network.svg", alt: "Sniper Network wordmark" },
    { name: "NYCToHost", image: "/affiliations/nyctohost.svg", alt: "NYCToHost wordmark" }
  ] satisfies Affiliation[],
  selectedExperience: [
    {
      title: "Novaryn Studios - Founder & Developer",
      description:
        "I build and maintain Novaryn's plugin ecosystem, documentation, licensing flows, and production-ready tooling for Minecraft server owners."
    },
    {
      title: "Practice Network Systems",
      description:
        "I work on queue displays, duels, stats, menus, PlaceholderAPI integrations, and the details that make competitive practice servers easier to run."
    },
    {
      title: "Web Platforms & Infrastructure",
      description:
        "I create dashboards, documentation sites, Linux/Nginx deployments, database-backed services, and backend workflows for product operations."
    }
  ] satisfies ExperienceCard[],
  pastExperience: [
    {
      title: "Plugin Licensing Infrastructure",
      description:
        "Designed licensing validation, Discord workflow concepts, admin dashboards, and deployment paths for private Minecraft product distribution."
    },
    {
      title: "Documentation and Product Websites",
      description:
        "Built responsive documentation and product web experiences with clear setup steps, support-friendly pages, and CMS-ready content structure."
    },
    {
      title: "Multi-Region Server Routing",
      description:
        "Explored Velocity and Redis-backed routing concepts for Bangladesh, Singapore, and North America server regions."
    }
  ] satisfies ExperienceCard[],
  toolsOrPlatforms: [
    { name: "Java", image: "/technologies/java.svg", alt: "Java language card" },
    { name: "TypeScript", image: "/technologies/typescript.svg", alt: "TypeScript language card" },
    { name: "JavaScript", image: "/technologies/javascript.svg", alt: "JavaScript language card" },
    { name: "Python", image: "/technologies/python.svg", alt: "Python language card" },
    { name: "SQL", image: "/technologies/sql.svg", alt: "SQL language card" },
    { name: "HTML", image: "/technologies/html.svg", alt: "HTML language card" },
    { name: "CSS", image: "/technologies/css.svg", alt: "CSS language card" }
  ] satisfies ToolPlatform[],
  technologies: [
    "Java",
    "Paper",
    "Purpur",
    "Spigot",
    "Velocity",
    "Redis",
    "PostgreSQL",
    "MySQL",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "Docker",
    "Nginx",
    "Linux"
  ],
  services: [
    { title: "Minecraft Plugin Development", description: "Custom Paper, Spigot, Bukkit, and Velocity systems built for real server workflows.", icon: Bot },
    { title: "Practice Server Integrations", description: "Duels, queues, stats, PlaceholderAPI, StrikePractice, and client-aware features.", icon: Network },
    { title: "Licensing Systems", description: "License validation, dashboards, Discord workflows, deployment tools, and admin controls.", icon: ShieldCheck },
    { title: "Web Development", description: "Modern Next.js sites, product dashboards, documentation, and polished responsive interfaces.", icon: Code2 },
    { title: "Deployment & Infrastructure", description: "Linux servers, Docker, Nginx, databases, observability, and reliable release paths.", icon: CloudCog },
    { title: "Technical Documentation", description: "Readable setup guides, API references, permission tables, and support-ready plugin docs.", icon: FileText }
  ],
  footerLinks: [
    { label: "GitHub", href: "https://github.com/faridrahman1843", icon: Github },
    { label: "Discord", href: "https://discord.com/users/faridrahman1843", icon: MessageCircle },
    { label: "X/Twitter", href: "https://x.com/faridrahman1843", icon: Twitter },
    { label: "Email", href: "mailto:hello@novarynstudios.com", icon: Mail }
  ],
  contact: {
    heading: "Tell me what you are building.",
    description:
      "Share the plugin, platform, or infrastructure problem you want solved. I'll respond with practical next steps and the questions that matter."
  },
  icons: { BookOpen, Braces, Globe2, Server, TerminalSquare }
} as const;
