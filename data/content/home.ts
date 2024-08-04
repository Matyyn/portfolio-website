type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  explanation: string;
  service: string;
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
    icon: "static/doodles/hero/zustand.svg"
  }
];

export const testimonials: Testimonial[] = [
  {
    service: "Front End Development",
    explanation:
      "My work stands out due to its attention to detail, user-centric design, and seamless functionality, resonating with users' needs."
  },
  {
    service: "Back End Development",
    explanation:
      "I deliver robust and scalable server-side solutions, ensuring seamless integration and optimal performance for all applications."
  },
  {
    service: "Mobile App Development",
    explanation:
      "Creating intuitive and engaging mobile experiences, I focus on performance, usability, and cross-platform compatibility for users."
  }
];