// import react from "../assets/react.png";
// import node from "../assets/node.svg";
// import cruzeiro from "../assets/cruzeiro.png";
// import postgreSQL from "../assets/postgreSQL.png";
// import palmeiras from "../assets/palmeiras.png"

import {
  react,
  node,
  cruzeiro,
  postgreSQL,
  palmeiras,
  farejador,
  linkedin,
  github,
  gmail,
} from "../assets";

export const BREAKPOINTS = {
  PHONE_SMALL: 350,
  PHONE: 600,
  PHONE_BIGGER: 768,
  TABLET_PORTRAIT: 900,
  TABLET_LANDSCAPE: 1200,
  DESKTOP: 1800,
};

export const skills = [
  {
    title: "React Native",
    backgroundColor: "rgb(1, 104, 151)",
    image: react,
  },
  {
    title: "React",
    backgroundColor: "rgb(113, 174, 214)",
    image: react,
  },
  {
    title: "Node JS",
    backgroundColor: "#65BABD",
    image: node,
  },
  {
    title:
      "<span style='color: rgba(0, 0, 0, 1);'>Postgre<span style='color: rgb(58, 108, 148);'>SQL</span></span>",
    backgroundColor: "rgb(255, 255, 255)",
    image: postgreSQL,
  },
];

export const projects = [
  {
    image: cruzeiro,
    projectName: "App/Site Cruzeiro",
    projectDescription: "App designed to boost fan membership engagement with the team.",
    onClick: () => window.open(`https://www.cruzeiro.com.br`),
    buttomLabel: "Open Site",
  },
  {
    image: palmeiras,
    projectName: "App Palmeiras",
    projectDescription:
      "App responsible for engaging club members with the team.",
    onClick: () =>
      window.open(
        "https://play.google.com/store/apps/details?id=com.cognyhub.palmeiras&pcampaignid=web_share"
      ),
    buttomLabel: "Open Play Story",
  },
  {
    image: palmeiras,
    projectName: "Avante Premiado",
    projectDescription:
      "Website focused on tracking raffles, winners, and lucky numbers.",
    onClick: () => window.open(`https://www.avantipremiado.com.br`),
    buttomLabel: "Open Site",
  },
  {
    image: farejador,
    projectName: "Farejador de Produtos",
    projectDescription: "Platform that makes finding top resale products faster and easier.",
    buttomLabel: "Show video",
    onClick: () =>
      window.open("https://youtu.be/4pqRuFj_KHg?si=dohOwfL9MoYL5rnv"),
  },
];

export const contacts = [
  {
    image: linkedin,
    link: `http://linkedin.com/in/walafi-ferreira`,
    title: "Linkedin",
  },
  {
    image: github,
    link: `https://github.com/Walafi02`,
    title: "Github",
  },
  {
    image: gmail,
    link: `mailto:walafif81@gmail.com`,
    title: "E-Mail",
  },
];
