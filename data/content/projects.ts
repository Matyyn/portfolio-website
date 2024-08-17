import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "MindCare Web App",
    desc: "MindCare is a mental health platform that provides online therapy and counseling services. It is a platform where you can connect with professional therapists and counselors to talk about your mental health issues and get help.",
    img: `https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/portfolio%2FIndex.png?alt=media&token=bd72573d-0714-4883-8974-67e6184c1023`,
    link: "https://github.com/Matyyn/Mind-Care-Front-End",
    tags: ["React", "CSS", "Redux", "Daily.co", "Node", "Express", "MongoDB", "Chakra UI"]
  },
  {
    id: 1,
    title: "MindCare Mobile App",
    desc: "MindCare is a mental health platform that provides online therapy and counseling services. It is a platform where you can connect with professional therapists and counselors to talk about your mental health issues and get help.",
    img: `https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/portfolio%2FIndex.png?alt=media&token=bd72573d-0714-4883-8974-67e6184c1023`,
    link: "https://github.com/Matyyn/mindcare-mobile",
    tags: [
      "React Native",
      "Zustand",
      "Daily.co", "Node", "Express", "MongoDB"]
  },
  {
    id: 2,
    title: "Education",
    desc: "A platform where students can take online quizzes to test their knowledge. Teachers can assign tests and assignments to students and the admin can manage both students and teachers.",
    img: `https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/portfolio%2FEducation.png?alt=media&token=d816927b-78f0-4cf2-be32-b9088ac78313`,
    link: "https://github.com/Matyyn/Education",
    tags: ["React", "CSS", "Material UI", "Tailwind CSS", "Headless UI"]
  },
  {
    id: 3,
    title: "Azeem Travels",
    desc: "Explore the beauty and culture of the United Arab Emirates with our comprehensive tourism guide. Discover the top attractions, landmarks, and activities in Dubai, Abu Dhabi, and other Emirates.",
    img: `https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/portfolio%2FEducation.png?alt=media&token=d816927b-78f0-4cf2-be32-b9088ac78313`,
    link: "https://github.com/faaiz99/azeem-travels",
    tags: ["React", "Material UI", "MongoDB", "Node", "Express","Cloudinary"]
  },
  {
    id: 4,
    title: "News Website",
    desc: "A website that provides news and information on various topics.",
    img: `https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/portfolio%2FEducation.png?alt=media&token=d816927b-78f0-4cf2-be32-b9088ac78313`,
    link: "https://github.com/Matyyn/News-Website",
    tags: ["Javascript", "HTML", "CSS"]
  },
  {
    id: 5,
    title: "Notes App",
    desc: "A simple web app for taking and managing notes daily.",
    img: `https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/portfolio%2FEducation.png?alt=media&token=d816927b-78f0-4cf2-be32-b9088ac78313`,
    link: "https://github.com/Matyyn/iNoteBook",
    tags: ["Javascript", "HTML", "CSS"]
  },

];

export const allTags = [];

projects.forEach(project => {
  project.tags.forEach(tag => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default projects;
