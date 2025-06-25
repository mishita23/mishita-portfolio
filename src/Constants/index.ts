import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IconType } from 'react-icons';


interface Social {
  name: string;
  icon: IconType;
  link: string;
}

export const Socials: Social[] = [
  {
    name: 'GitHub',
    icon: FaGithub,
    link: 'https://github.com/mishita23',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://linkedin.com/in/mishita-arora-520331227/',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    link: 'mailto:mishita.1@unthinkable.co',
  },
];


export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
];
export const Projects = [
  {
    title: "Beauty-E-commerce website",
    text: "Worked on a beauty Ecommerce website for a client",
    skills : "NextJs, MUI, TypeScript, Redux"
  },
  {
    title: "QA automation Tool",
    text: "Worked on Frontend of a QA automation tool",
    skills : "ReactJS, MUI, TypeScript, ContextAPI, WebSockets"
  },
];


