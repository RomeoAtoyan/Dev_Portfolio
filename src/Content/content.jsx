import HTML from "../assets/HTML";
import CSS from "../assets/CSS";
import JS from "../assets/JS";
import RJS from "../assets/React";
import Next from "../assets/Next";
import Mongo from "../assets/Mongo";
import Bootstrap from "../assets/Bootstrap";
import Git from "../assets/Git";
import NPM from "../assets/NPM";
import MUI from "../assets/MUI";
import Figma from "../assets/Figma";
import Jira from "../assets/Jira";
import bps from "/images/bps.gif";
import digiverse from "/images/digiverse.gif";
import verbafim from "/images/verbafim.gif";
import cinehub from "/images/cinehub.gif";
import coupepure from "/images/coupepure.gif";

export const tech = [
  {
    name: "HTML",
    icon: <HTML size={35} />,
  },
  {
    name: "CSS",
    icon: <CSS size={35} />,
  },
  {
    name: "Bootstrap",
    icon: <Bootstrap size={35} />,
  },
  {
    name: "JavaScript",
    icon: <JS size={35} />,
  },
  {
    name: "React.js",
    icon: <RJS size={35} />,
  },
  {
    name: "Next.js",
    icon: <Next size={35} />,
  },
  {
    name: "MongoDB",
    icon: <Mongo size={35} />,
  },
];

export const additionalTech = [
  {
    name: "Git",
    icon: <Git size={35} />,
  },
  {
    name: "Npm",
    icon: <NPM size={35} />,
  },
  {
    name: "Material UI",
    icon: <MUI size={35} />,
  },
  {
    name: "Figma",
    icon: <Figma size={35} />,
  },
  {
    name: "Jira",
    icon: <Jira size={35} />,
  },
];

export const projects = [
  {
    name: "Verbafim",
    stack: "Next.js - Material UI - SwiperJS - Hook Form",
    href: "",
    img: verbafim,
  },
  {
    name: "BPS Estates",
    stack: "Next.js - Material UI - Hook Form",
    href: "",
    img: bps,
  },
  {
    name: "Coupe Pure",
    stack: "Next.js - SwiperJS - Leaflet Maps API",
    href: "",
    img: coupepure,
  },
  {
    name: "DigiVerse",
    stack: "React.js - Coingecko API - Recharts ",
    href: "https://digi-verse.vercel.app/",
    img: digiverse,
  },
  {
    name: "CineHub",
    stack: "React.js - TMDb Movie API",
    href: "https://cine-hub.vercel.app/",
    img: cinehub,
  },
];
