import {
  mobile,
  backend,
  web,
  cpp,
  css,
  git,
  html,
  java,
  javascript,
  kotlin,
  php,
  reactjs,
  sql,
  car,
  carRental,
  studyflow,
  currentlyHere,
  jl,
  bob,
  pc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Sales Assistant / POS Operator",
    company_name: "BOB d.o.o.",
    icon: bob,
    iconBg: "#E6DEDD",
    date: "2022 - 2025",
    points: [
      "Worked on a POS system handling fiscal receipts, daily sales, and VAT reporting.",
      "Assisted in managing and processing daily sales data and fiscal documentation.",
      "Participated in ordering and tracking stock and construction materials.",
      "Gained practical knowledge of inventory control, profit margins, and retail operations.",
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "Joyride Logistics (Internship)",
    icon: jl,
    iconBg: "#5a0606",
    date: "27/10/2025 - 09/01/2026",
    points: [
    "Developed a mobile logistics application for drivers using React Native and Expo (TMS System)",
    "Implemented load management, stop tracking, and real-time status updates (scheduled, in-progress, completed loads)",
    "Built interactive map features including route polylines, dynamic stop progression, and current destination updates",
    "Integrated REST APIs for fetching loads, stops, vehicles, and driver-related data",
    "Designed clean, driver-focused UI screens such as Home, Loads (Scheduled/In Progress), and Load Details",
    "Handled application state using React Context and optimized data fetching and screen updates",
    "Improved code structure and performance through refactoring and final testing before project wrap-up",
  ],
  },
  {
    title: "Web Designer",
    company_name: "Freelance",
    icon: pc,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Developed responsive websites for friends and a startup using HTML, CSS, and JavaScript.",
      "Focused on modern layouts, clean navigation, and mobile-first design principles.",
      "Ensured full compatibility across desktop, tablet, and mobile devices.",
    ],
  },
  
];



const projects = [
  {
    name: "Car Rental",
    description:
      "Full-stack Car Rental Web Application with Authentication, Admin dashboard for complete management (cars, users, locations, reservations), and user interface for booking and managing reservations.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
      {
        name: "php",
        color: "navy-blue-text-gradient"
      },
      
    ],
    image: carRental,
    source_code_link: "https://github.com/susicharis7/car-rental",
  },
  {
    name: "StudyFlow",
    description:
      "Fully functional Android app for managing study tasks, subjects, and exams. Built with Jetpack Compose and modern UI principles. Uses a local database for persistent data storage and offline access.",
    tags: [
      {
        name: "kotlin",
        color: "orange-text-gradient",
      },
      {
        name: "room database",
        color: "green-text-gradient",
      },
      
    ],
    image: studyflow,
    source_code_link: "https://github.com/susicharis7/mobile-programming",
  },
  {
    name: "Personal Portfolio",
    description:
      "Responsive personal portfolio showcasing projects, experience, and skills with smooth animations, modern layout, and clear CTA sections for contact and social links and easy navigation.",
    tags: [
      {
        name: "react",
        color: "navy-blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: currentlyHere,
    source_code_link: "https://github.com/susicharis7/Personal-Portfolio",
  },
];

export { services, technologies, experiences, projects };
