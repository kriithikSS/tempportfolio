import { FaYoutube, FaFacebook, FaGooglePlay } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { IconType } from "react-icons";

// ---------------- TYPES ----------------

export type FooterLink = {
  icon?: IconType;
  name: string;
  link: string;
};

export type FooterColumn = {
  title: string;
  data: FooterLink[];
};

export type SkillType = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};

// ---------------- SKILL DATA ----------------

export const SKILL_DATA: SkillType[] = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
];

// ---------------- SOCIALS ----------------

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/_kriithik_/?igsh=NXN3aTg3ZDBiNTI3#",
  },
  {
    name: "GooglePlay",
    icon: FaGooglePlay,
    link: "https://play.google.com/store/apps/dev?id=8141597240886587947&hl=en",
  },
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/kriithikSS",
  },
  {
    name: "LinkedinLogo",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/kriithikss/",
  },
];

// ---------------- SKILLS ----------------

export const FRONTEND_SKILL: SkillType[] = [];

export const BACKEND_SKILL: SkillType[] = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
];

export const FULLSTACK_SKILL: SkillType[] = [];

export const OTHER_SKILL: SkillType[] = [];

// ---------------- PROJECTS ----------------

export const PROJECTS: readonly any[] = [];

// ---------------- FOOTER DATA ----------------

export const FOOTER_DATA: FooterColumn[] = [
  {
    title: "Socials",
    data: [
      {
        icon: RxInstagramLogo,
        name: "Instagram",
        link: "https://www.instagram.com/_kriithik_/",
      },
      {
        icon: RxGithubLogo,
        name: "GitHub",
        link: "https://github.com/kriithikSS",
      },
      {
        icon: RxLinkedinLogo,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/kriithikss/",
      },
    ],
  },
  {
    title: "Apps",
    data: [
      {
        icon: FaGooglePlay,
        name: "Play Store",
        link: "https://play.google.com/store/apps/dev?id=8141597240886587947&hl=en",
      },
    ],
  },
];

// ---------------- NAV LINKS ----------------

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Work Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

// ---------------- LINKS ----------------

export const LINKS = {};
