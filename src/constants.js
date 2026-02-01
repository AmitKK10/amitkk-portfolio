// ===============================
// SKILLS SECTION LOGOS
// ===============================
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// ===============================
// EDUCATION LOGOS
// ===============================
import collegeLogo from './assets/education_logo/college.png';
import schoolLogo from './assets/education_logo/school.png';

// ===============================
// ACHIEVEMENT PROOF IMAGES
// ===============================
import classXProof from "./assets/achievement/class-x.jpeg";
import classXIIProof from "./assets/achievement/class-xii.jpeg";

// ===============================
// PROJECT IMAGES
// ===============================
import work1 from "./assets/work_logo/work1.jpeg";
import work2 from "./assets/work_logo/work2.jpeg";
import work3 from "./assets/work_logo/work3.jpeg";

// ===============================
// COMPANY LOGOS
// ===============================
import oasisLogo from "./assets/company_logo/oasis.jpeg";


// ===============================
// SKILLS DATA
// ===============================
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript (ES6+)', logo: javascriptLogo },
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Redux Toolkit', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'MongoDB Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

// ===============================
// EXPERIENCE SECTION
// ===============================
export const experiences = [
  {
    id: 0,
    img: oasisLogo,
    role: "Web Full Stack Development Intern (MERN)",
    company: "Oasis Infobyte",
    date: "June 2025 – August 2025",
    desc:
      "Worked as a Full Stack MERN Intern building scalable and production-ready web applications. Developed RESTful APIs using Node.js and Express, implemented secure JWT-based authentication, and integrated Razorpay payment gateway with reliable transaction handling. Collaborated in an Agile environment using Git and GitHub.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Razorpay",
      "Git",
    ],
  },
];

// ===============================
// EDUCATION SECTION
// ===============================
export const education = [
  {
    id: 0,
    img: collegeLogo,
    school: 'Netaji Subhash Engineering College',
    date: '2022 – 2026',
    grade: 'CGPA: 8.07',
    degree: 'B.Tech in Information Technology',
    desc:
      'Currently pursuing B.Tech in Information Technology with a strong foundation in Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, and Full Stack Web Development.',
  },
  {
    id: 1,
    img: schoolLogo,
    school: 'Digha D J Sikshasadan High School',
    date: '2019 – 2021',
    grade: '90.2% | School Topper',
    degree: 'Higher Secondary (WBCHSE)',
    desc:
      'Completed higher secondary education with Physics, Chemistry, and Mathematics. Secured top position in the school with consistent academic excellence.',
  },
  {
    id: 2,
    img: schoolLogo,
    school: 'Digha D J Sikshasadan',
    date: '2013 – 2019',
    grade: '92.0% | School Topper',
    degree: 'Secondary (WBBSE)',
    desc:
      'Completed secondary education under the WBBSE board. Ranked as the school topper, demonstrating strong academic performance and early aptitude for analytical and mathematical subjects.',
  },
];

// ===============================
// PROJECTS SECTION
// ===============================
export const projects = [
  {
    id: 0,
    title: "Offer Bridge – Fintech Escrow Platform",
    description:
      "Offer Bridge is a full-stack MERN platform that securely connects users who don’t have credit cards with credit card holders, enabling them to access card-based discounts through an admin-controlled escrow system & designed to securely manage transactions between buyers and sellers. Implemented role-based access control, real-time updates using Socket.IO, and an atomic wallet ledger to eliminate transaction disputes.",
    image: work1,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Redux Toolkit",
    ],
    github: "https://github.com/AmitKK10/Offer-Bridge",
    webapp: "https://offer-bridge.onrender.com/",
  },
  {
    id: 1,
    title: "Pizza Dispatch – Real-Time Ordering App",
    description:
      "A real-time food ordering application with automated inventory tracking and online payments. Integrated Razorpay payment gateway, optimized frontend performance using lazy loading, and implemented secure order processing with JWT authentication.",
    image: work2,
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Razorpay",
      "JWT",
    ],
    github: "https://github.com/AmitKK10/OIBSIP-PIZZA-APP",
    webapp: "https://oibsip-pizza-app-ykex.onrender.com/login",
  },
  {
    id: 2,
    title: "AI Virtual Assistant",
    description:
      "An AI-powered virtual assistant capable of performing voice-based interactions, answering queries, and assisting users with real-time responses.",
    image: work3,
    tags: [
      "JavaScript",
      "AI",
      "Speech Recognition",
      "Web APIs",
      "Frontend",
    ],
    github: "https://github.com/AmitKK10/AI-Virtual-Assistant-",
    webapp: "https://amity1-ai-virtual-assistance.netlify.app/",
  },
];

// ===============================
// ACHIEVEMENTS (MERGED)
// ===============================
export const achievements = [
  {
    type: "coding",
    title: "GeeksforGeeks",
    subtitle: "500+ DSA Problems Solved",
    description:
      "Solved 500+ Data Structures and Algorithms problems with a consistent 406-day coding streak.",
    link: "https://www.geeksforgeeks.org/profile/amitkiran10",
    highlight: "406 Days Streak",
  },
  {
    type: "coding",
    title: "LeetCode",
    subtitle: "100+ Problems Solved",
    description:
      "Solved 100+ algorithmic problems across multiple data structures and algorithms.",
    link: "https://leetcode.com/u/AMITKK/",
    highlight: "Active Profile",
  },
  {
    type: "coding",
    title: "HackerRank",
    subtitle: "3⭐ SQL Badge",
    description:
      "Earned a 3-star SQL badge validating strong relational database knowledge.",
    link: "https://www.hackerrank.com/profile/amitkiran1007",
    highlight: "SQL Specialist",
  },
  {
    type: "certificate",
    title: "SQL and Relational Databases 101",
    subtitle: "IBM | CognitiveClass.ai",
    description:
      "IBM-certified course on relational databases and SQL.",
    link: "https://courses.cognitiveclass.ai/certificates/204b1fccecb44be2b5e6749db1a449cf",
    highlight: "IBM Certified",
  },
  {
    type: "certificate",
    title: "Full Stack Development with MERN Stack",
    subtitle: "Academy of Skill Development",
    description:
      "Certified in MERN stack development.",
    link: "https://certificates.asd.org.in/generate/52012",
    highlight: "Verified Certificate",
  },
  {
    type: "academic",
    title: "Rank 1 – Higher Secondary (WBCHSE)",
    subtitle: "Digha D J Sikshasadan High School",
    description:
      "Secured Rank 1 in Higher Secondary examination.",
    highlight: "School Topper",
    proof: classXIIProof,
  },
  {
    type: "academic",
    title: "Rank 1 – Secondary (WBBSE)",
    subtitle: "Digha D J Sikshasadan",
    description:
      "Achieved Rank 1 in Secondary examination.",
    highlight: "School Topper",
    proof: classXProof,
  },
];

// ===============================
// SOCIAL LINKS
// ===============================
export const socialLinks = {
  github: 'https://github.com/AmitKK10',
  linkedin: 'https://www.linkedin.com/in/amit-kiran-kar-975744277',
  instagram: 'https://www.instagram.com/amit_kiran_kar_10',
  youtube: 'https://youtube.com/@amitkk-jz3ji',
  facebook: 'https://www.facebook.com/share/1C9b3GkQDk/',
  twitter: 'https://x.com/AmitKK1007',
};