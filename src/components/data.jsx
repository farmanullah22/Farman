import { MdOutlineWeb } from "react-icons/md";
import { FaLaptopCode, FaMobileAlt, FaCamera   } from "react-icons/fa";
import testimonial1 from "../assets/girl.png"
import testimonial2 from "../assets/boy.png"
import Digital from "../assets/Digital.jpg"
import Clothify from "../assets/Clothify.png"
import Nike from "../assets/Nike.jpg"
// NOTE: Place your Lurniva screenshot at `src/assets/lurinva.jpg`
// Example source on your machine: c:\Users\T460s\Desktop\lurinva.JPG
import lurinva from "../assets/lurinva.jpg"
// NOTE: Place the student dashboard images at `src/assets/studentdashboard.jpg` and `src/assets/login1.jpg`
// Example desktop locations: c:\Users\T460s\Desktop\studentdashboard.JPG, c:\Users\T460s\Desktop\login1.jpg
import studentdashboard from "../assets/studentdashboard.jpg"
import login1 from "../assets/login1.jpg"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faSchool,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

export const service = [
    {
        title:"Web Design",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <MdOutlineWeb/>
    },
    {
        title:"Web Development",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaLaptopCode/>
    },
    {
        title:"Lurniva App",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaMobileAlt/>
    },
    {
        title:"Photography",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaCamera/>
    },
]

export const testimonials = [
    {
        name:"Eng khizer",
        para:"Khizer is a highly talented website developer! He understands requirements well and creates clean, user-friendly websites. Great work and highly recommended! ",
        img: testimonial1
    },
    {
        name:"Ihsan Ulah",
        para:"Ihsan is an excellent website developer! He is skilled, professional, and delivers fast, responsive websites. Highly recommended!",
        img: testimonial2
    },
  {
    name: "Farhat Ullah",
    para: "Farhat is a skilled Full Stack Developer who builds scalable, maintainable web applications and collaborates effectively with teams.",
    img: testimonial2
  },
  {
    name: "Hamza Jamil",
    para: "Hamza is a Flutter developer who delivers beautiful, high-performance cross-platform mobile apps and pays attention to UX details.",
    img: testimonial1
  },
   
]

export const timeline = [
  {
    icon: workIcon,
    date: '2023 - present',
    title: 'Frontend Developer',
    subtitle: 'React · Tailwind · UI/UX',
    desc: 'Build responsive, accessible user interfaces and reusable component libraries. Focus on performance, accessibility, and polished animations.',
  },
  {
    icon: workIcon,
    date: '2023 - present',
    title: 'Backend Developer',
    subtitle: 'Node.js · Express · MongoDB',
    desc: 'Design and implement robust APIs, authentication, database schemas, and server-side business logic with attention to security and scalability.',
  },
  {
    icon: workIcon,
    date: '2024 - present',
    title: 'Full Stack Developer',
    subtitle: 'MERN / Full-Stack',
    desc: 'Deliver end-to-end applications including frontend, backend, deployment (CI/CD) and cloud hosting. Lead small teams and coordinate releases.',
  },
  {
    icon: workIcon,
    date: '2024 - present',
    title: 'Flutter Developer',
    subtitle: 'Cross-platform Mobile',
    desc: 'Develop high-performance mobile apps with Flutter, focusing on smooth animations, state management, and native integrations.',
  },
  {
    icon: workIcon,
    date: '2024 - 2025',
    title: 'Web Designer',
    subtitle: 'Design & Prototyping',
    desc: 'Create user-centered designs, wireframes, and visual prototypes to improve UX and visual consistency across projects.',
  },
  {
    icon: workIcon,
    date: '2024 - 2025',
    title: 'Project Completed: Client Platform',
    subtitle: 'Team Lead',
    desc: 'Delivered a major client platform over a 9-month period (2023-2025 and still). Led a team of 4 developers, coordinated sprints, handled code reviews, and managed deployment and post-launch support.',
  },
  { icon: starIcon },
];

export const projects = [
    {
      title: "Thinking Model School",
      description:
        "Thinking Model School promotes innovation, critical thinking, and academic excellence through a modern curriculum and dedicated educators, preparing students for a successful future.",
      techStack: ["Node.js", "MongoDB", "Tailwind"],
      link: " https://engrkhizarkhan.github.io/Thinking-School-Website/",
      github: 'https://github.com/Engrkhizarkhan/Thinking-School-Website',
      image: Digital, // Replace with your project screenshot
    },
    {
      title: "Lurniva",
      description:
        "Lurniva — AI-powered personalized learning platform. Future of Learning, powered by AI: personalized experiences that adapt to pace, needs, and challenges with every interaction.",
      techStack: ["React", "AI", "Tailwind"],
      link: "https://lurniva.com",
      github: 'https://lurniva.com',
      image: lurinva, // Please add `src/assets/lurinva.jpg` (see note above)
    },
    {
      title: "LawParks",
      description:
        "LawParks is a dedicated platform offering legal insights, expert advice, and professional services. With a user-friendly interface and reliable resources, we connect individuals with the legal assistance they need for informed decision-making.",
      techStack: ["Next.js", "MongoDB", "Clerk Authentication"],
      link: "http://lawparks.org",
      github: 'https://github.com/Engrkhizarkhan/law-farm',
      image: Clothify, // Replace with your project screenshot
    },
    {
      title: "Lurniva App",
      description:
        "A Flutter mobile app (student dashboard) that includes student-facing screens plus Parent and Teacher dashboards (mentioned). Built with Flutter for fast cross-platform mobile experiences.",
      techStack: ["Flutter", "Dart"],
      link: "https://drive.google.com/file/d/1kes7fAjUzUJQ_BaURNWulgybE9zWNoWn/view?usp=sharing",
      github: 'https://drive.google.com/file/d/1kes7fAjUzUJQ_BaURNWulgybE9zWNoWn/view?usp=sharing',
      // Use an array of images so the UI can render a slider for the app screenshots.
      // Please place `studentdashboard.jpg` and `login1.jpg` into `src/assets`.
      image: [studentdashboard, login1], // place images in src/assets
    },
  ];