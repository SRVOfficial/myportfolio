import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an enthusiastic aspiring full stack developer with a strong foundation in modern web technologies. I have hands-on experience with React.js for building dynamic user interfaces, Spring Boot for creating robust back-end services, MongoDB for flexible data storage, and Django for rapid web application development. I'm eager to apply my skills and learn new technologies to contribute to innovative projects and grow as a developer.`;

export const ABOUT_TEXT = `I am an enthusiastic aspiring developer with a strong passion for Python and web technologies. My journey in programming began with Python, and I've fallen in love with its versatility and elegance. This passion has led me to explore web development, where I'm eager to grow and learn more every day.

I've been working on projects using Django, Python's powerful web framework, to build web applications. Additionally, I've dipped my toes into front-end development with React, backend services with Spring Boot, and database management with MongoDB. While I'm still at the beginning of my journey, I'm excited about the endless possibilities these technologies offer.

I believe in the power of continuous learning and am always looking for new challenges to expand my skills. I enjoy collaborating with others, solving problems, and contributing to projects that can make a difference. Outside of coding, I spend time reading tech blogs, participating in coding challenges, and exploring new libraries and frameworks.

My goal is to grow into a well-rounded full stack developer, and I'm committed to putting in the hard work to get there. I'm looking for opportunities where I can contribute my current skills while learning from more experienced developers and taking on new challenges.`;


export const EXPERIENCES = [
  {
    year: "April 2024 - July 2024",
    role: "Trainee Developer",
    company: "Kamjritztex IT Solution",
    description: `Actively contributed to the development of various Texsmartly modules such as employee self-service portal, vendor management system (VMS), collaboration tools, employee payroll, and bookkeeping. Utilized Spring Boot and React for application development, and MongoDB for database management.`,
    technologies: ["Spring Boot", "React", "MongoDB"],
  },
  {
    year: "July 2023 - January 2024",
    role: "Intern - Web Development",
    company: "DotPlus Technologies",
    description: `Contributed to the development of an Ad Management System web application. Utilized ASP.Net and C# programming languages to build robust and efficient features for the web application. Worked with MySQL database for data storage and retrieval.`,
    technologies: ["ASP.Net", "C#", "MySQL"],
  },
  {
    year: "July 2023 – August 2023",
    role: "Certification Course",
    company: "Astric Center of Excellence, Patna (Bihar)",
    description: `Completed an intensive certification course in MERN Stack development, covering MongoDB, Express.js, React.js, and Node.js. Gained hands-on experience in building full-stack web applications, creating RESTful APIs, and managing database operations. Developed a comprehensive understanding of front-end and back-end development, and implemented best practices for responsive and efficient web applications.`,
    technologies: ["MERN Stack"],
  },
];

export const PROJECTS = [
  {
    title: "Employee Self-Service Portal",
    image: project1,
    description:
      "A comprehensive employee self-service portal where employees can view and manage their profiles, track attendance, set goals, view documents, request travel, and apply for reimbursements. The application ensures a seamless user experience with robust authentication and secure data management.",
    technologies: ["React", "Spring Boot", "MongoDB", "CSS"],
    url: "https://aurora-ess.vercel.app/"
  },
  {
    title: "Vendor Management System (VMS)",
    image: project2,
    description:
      "A comprehensive Vendor Management System designed to streamline vendor interactions. Features include tracking vendor details, managing product catalogs, handling purchase orders, and monitoring the stages of each order. The system provides an efficient way to oversee vendor performance, ensure timely deliveries, and maintain transparent communication.",
    technologies: ["React", "Spring Boot", "MongoDB", "CSS"],
    url: "#"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS"],
    url: "https://srvportfolio.vercel.app/"
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Django", "HTML", "Tailwind CSS"],
    url: "https://srv-simpleblog.vercel.app/"
  },
];

export const CONTACT = {
  address: "Budh Nagar Road No - 03, South Chandmari Road, Kankarbagh, Patna - 20, 800020 ",
  phoneNo: "+91-6207713622 ",
  email: "sauryatapish159@gmail.com",
};
