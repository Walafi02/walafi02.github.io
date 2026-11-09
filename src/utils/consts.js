import { react, node, cruzeiro, postgreSQL, palmeiras, farejador } from "../assets";

export const BREAKPOINTS = {
  PHONE_SMALL: 350,
  PHONE: 600,
  PHONE_BIGGER: 768,
  TABLET_PORTRAIT: 900,
  TABLET_LANDSCAPE: 1200,
  DESKTOP: 1800,
};

export const profile = {
  name: "Walafi Ferreira",
  role: "Senior Full-Stack Engineer & Tech Lead",
  headline: "I build and lead fast, reliable mobile and web products.",
  summary:
    "Senior full-stack engineer and tech lead specialized in React Native, Expo, Next.js, Node.js and TypeScript. I've built apps for Flamengo, Grêmio, Cruzeiro, Chicago Fire and Orlando City.",
  stack: ["React Native", "Expo", "Next.js", "Node.js", "TypeScript"],
  location: "Remote · UTC-3",
  clients: ["Flamengo", "Grêmio", "Cruzeiro", "Chicago Fire", "Orlando City"],
  email: "walafif81@gmail.com",
  linkedin: "https://linkedin.com/in/walafi-ferreira",
  github: "https://github.com/Walafi02",
};

export const navLinks = [
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    title: "React Native",
    description: "Cross-platform iOS & Android apps for millions of fans.",
    image: react,
  },
  {
    title: "Expo",
    description: "Fast iteration, OTA updates and streamlined app releases.",
    monogram: "EX",
  },
  {
    title: "Next.js",
    description: "Performant, SEO-friendly web apps with React.",
    monogram: "N",
  },
  {
    title: "TypeScript",
    description: "Type-safe, maintainable code across the whole stack.",
    monogram: "TS",
  },
  {
    title: "Node.js",
    description: "Scalable REST APIs, integrations and backend services.",
    image: node,
  },
  {
    title: "PostgreSQL",
    description: "Relational data modeling, queries and performance tuning.",
    image: postgreSQL,
  },
];

export const projects = [
  {
    image: cruzeiro,
    category: "Mobile & Web",
    projectName: "Cruzeiro — App & Website",
    projectDescription:
      "Official app and website designed to boost fan membership engagement with the club.",
    stack: ["React Native", "React", "Node.js"],
    link: "https://www.cruzeiro.com.br",
    linkLabel: "Visit website",
  },
  {
    image: palmeiras,
    category: "Mobile",
    projectName: "Palmeiras App",
    projectDescription:
      "Mobile app responsible for engaging club members with the team and its content.",
    stack: ["React Native", "Node.js"],
    link: "https://play.google.com/store/apps/details?id=com.cognyhub.palmeiras&pcampaignid=web_share",
    linkLabel: "View on Google Play",
  },
  {
    image: palmeiras,
    category: "Web",
    projectName: "Avante Premiado",
    projectDescription:
      "Website focused on tracking raffles, winners and lucky numbers in real time.",
    stack: ["React", "Node.js", "PostgreSQL"],
    link: "https://www.avantipremiado.com.br",
    linkLabel: "Visit website",
  },
  {
    image: farejador,
    category: "SaaS",
    projectName: "Farejador de Produtos",
    projectDescription:
      "Platform that makes finding top-selling resale products faster and easier.",
    stack: ["React", "Node.js"],
    link: "https://youtu.be/4pqRuFj_KHg?si=dohOwfL9MoYL5rnv",
    linkLabel: "Watch demo",
  },
];
