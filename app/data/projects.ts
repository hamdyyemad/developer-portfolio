export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  imageClass: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AttendPay",
    description: "HR Payroll Management",
    image: "/projects/project-attendpay.jpg",
    alt: "AttendPay Project",
    link: "https://pre-attendanceclock.com",
    imageClass: "",
  },
  {
    id: 2,
    title: "SQL Manager",
    description: "SQL Connection Manager",
    image: "/projects/project-sqlservermanager.jpg",
    alt: "SQL Connection Manager Project",
    link: "https://github.com/hamdyyemad/sql-server-connection-manager",
    imageClass: "",
  },
  {
    id: 3,
    title: "TechSouq",
    description: "Multilingual E-commerce Platform",
    image: "/projects/project-techsouq.jpg",
    alt: "TechSouq Project",
    link: "https://github.com/hamdyyemad/Techsouq",
    imageClass: "",
  },
];
