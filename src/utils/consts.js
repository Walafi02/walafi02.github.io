import { react, node, cruzeiro, gremio, postgreSQL, palmeiras, farejador, orlando, chicagoFire, flamengo } from "../assets";

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
  {
    title: "Redis",
    description: "Caching, queues and background jobs for fast, scalable backends.",
    monogram: "RD",
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
    stores: {
      appStore: "https://apps.apple.com/app/id1632719034",
      googlePlay: "https://play.google.com/store/apps/details?id=br.com.cruzeiro.nacaoazul",
    },
  },
  {
    image: gremio,
    largeImage: true,
    category: "Mobile & Web",
    projectName: "Grêmio — App & Website",
    projectDescription:
      "Official app and website for Grêmio fans and members, built on Cogny's white-label fan engagement platform.",
    stack: ["React Native", "Expo", "Next.js", "Node.js"],
    link: "https://portal.gremio.net/",
    linkLabel: "Visit website",
    stores: {
      appStore: "https://apps.apple.com/app/id1618055110",
      googlePlay: "https://play.google.com/store/apps/details?id=io.gremio.app",
    },
  },
  {
    image: orlando,
    wideImage: true,
    category: "Mobile",
    projectName: "Orlando City SC — LionNation App",
    projectDescription:
      "Official fan engagement app for Orlando City SC and Orlando Pride, with a custom white-label layout built on Cogny's platform.",
    stack: ["React Native", "Node.js"],
    link: "https://play.google.com/store/apps/details?id=com.ocsc.lionnation",
    linkLabel: "View on Google Play",
    stores: {
      appStore: "https://apps.apple.com/app/id1454834946",
      googlePlay: "https://play.google.com/store/apps/details?id=com.ocsc.lionnation",
    },
  },
  {
    image: flamengo,
    category: "Mobile",
    projectName: "Flamengo App",
    projectDescription:
      "Fan engagement app for Clube de Regatas do Flamengo, one of the biggest football clubs in the world, built on Cogny's white-label platform.",
    stack: ["React Native", "Node.js"],
    note: "Past project",
  },
  {
    image: chicagoFire,
    category: "Mobile",
    projectName: "Chicago Fire FC App",
    projectDescription:
      "Official fan engagement app for Chicago Fire FC, the MLS club, built on Cogny's white-label platform.",
    stack: ["React Native", "Node.js"],
    note: "Past project",
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
    stores: {
      appStore: "https://apps.apple.com/app/id1577292124",
      googlePlay: "https://play.google.com/store/apps/details?id=com.cognyhub.palmeiras&pcampaignid=web_share",
    },
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
    stack: ["React", "Node.js", "PostgreSQL", "Redis"],
    link: "https://youtu.be/4pqRuFj_KHg?si=dohOwfL9MoYL5rnv",
    linkLabel: "Watch demo",
  },
];
