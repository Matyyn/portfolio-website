type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name?: string;
  job?: string;
};

export const skills: Skill[] = [
  {
    title: "Chakra UI",
    icon: "static/doodles/hero/chakra-ui.svg"
},
  {
    title: "Express",
    icon: "static/doodles/hero/express-js.svg"
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    title: "Headless UI",
    icon: "static/doodles/hero/headless-ui.svg"
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    title: "Material UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
  },
  {
    title: "Mongo DB",
    icon: "static/doodles/hero/mongodb-icon.svg"
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" }
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    title: "PostgreSQL",
    icon: "static/doodles/hero/postgresql.svg"
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    title: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    title: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
  },
  {
    title: "TailwindCSS",
    icon: "static/doodles/hero/tailwind.svg"
  },
  {
    title: "Trello",
    icon: "static/doodles/hero/trello.svg"
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    title: "Zustand",
    icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngaaa.com%2Fdetail%2F2507875&psig=AOvVaw3AffB18XK0sgmZyOquFoYU&ust=1722762374313000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiE-I282IcDFQAAAAAdAAAAABAb"
  }
];

