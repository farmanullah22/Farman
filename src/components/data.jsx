import { MdOutlineWeb } from "react-icons/md";
import { FaLaptopCode, FaMobileAlt, FaCamera   } from "react-icons/fa";
import testimonial1 from "../assets/girl.png"
import testimonial2 from "../assets/boy.png"
import Digital from "../assets/Digital.jpg"
import Clothify from "../assets/Clothify.png"
import Nike from "../assets/Nike.jpg"


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
        title:"Mobile Apps",
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
        name:"Vanshika Sondhiya",
        para:"Rohit is a highly talented website developer! He understands requirements well and creates clean, user-friendly websites. Great work and highly recommended! ",
        img: testimonial1
    },
    {
        name:"Aman Sharma",
        para:"Rohit is an excellent website developer! He is skilled, professional, and delivers fast, responsive websites. Highly recommended!",
        img: testimonial2
    },
   
]

export const timeline = [
    {
      icon: workIcon,
      date: '2023 - present',
      title: 'Web Developer',
      subtitle: 'Website Development',
      desc: 'Web Development, Frontend & Backend, Team Leading',
    },
    {
      icon: workIcon,
      date: '2023 - 2024',
      title: 'Full Stack',
      subtitle: 'Full Stack Developer',
      desc: 'Creating a full fledg website, Team leading',
    },
    {
      icon: workIcon,
      date: '2023 - 2024',
      title: 'Web Designer',
      subtitle: 'Designing',
      desc: 'User Experience, Visual Design',
    },
    {
      icon: workIcon,
      date: '2023 - 2025',
      title: 'Customer Support Executive',
      subtitle: 'Lyfesolve Marketing Service',
      desc: 'User Experience, Visual Design',
    },
    {
      icon: schoolIcon,
      date: '204-2025',
      title: 'Software House',
      subtitle: 'Peshware',
      desc: 'Strategy, Solve Tech Problem',
    },
    {
      icon: schoolIcon,
      date: '2016-2018',
      title: 'Higher Secondary (HS)',
      subtitle: 'Adarsh Madhyamik Vidhyalaya',
      desc: 'Creative Direction, User Experience, Visual Design',
    },
    {
      icon: schoolIcon,
      date: '204-2025',
      title: 'Software House',
      subtitle: 'Peshware',
      desc: 'Strategy, Solve Tech Problem',
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
      title: "Food Shop",
      description:
        "Our shop provides a wide range of high-quality products, combining affordability, convenience, and excellent customer service. With a seamless shopping experience.",
      techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
      link: "https://dev-aneelas.pantheonsite.io/shop/",
      github: 'https://dev-aneelas.pantheonsite.io/shop/',
      image: Nike, // Replace with your project screenshot
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
  ];