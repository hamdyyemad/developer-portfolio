export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  status: 'current' | 'previous' | 'freelance';
  technologies?: string[];
  link?: string;
}

export const experienceData: Experience[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    description: "Leading development of enterprise-level web applications using React.js, Node.js, and TypeScript. Mentoring junior developers and implementing best practices for code quality and performance optimization.",
    status: "current",
    technologies: ["React.js", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"],
    link: "#"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    period: "2021 - 2023",
    description: "Developed and maintained multiple client projects including e-commerce platforms and SaaS applications. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    status: "previous",
    technologies: ["React.js", "Express.js", "PostgreSQL", "Redux", "TailwindCSS", "Git"],
    link: "#"
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "WebCraft Studio",
    period: "2019 - 2021",
    description: "Specialized in creating responsive and interactive user interfaces. Worked on various projects ranging from corporate websites to mobile applications.",
    status: "previous",
    technologies: ["JavaScript", "React.js", "Vue.js", "CSS3", "HTML5", "Webpack"],
    link: "#"
  },
  {
    id: 4,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2018 - 2019",
    description: "Provided web development services to small businesses and startups. Built custom websites and web applications tailored to client needs.",
    status: "freelance",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WordPress"],
    link: "#"
  },
  {
    id: 5,
    title: "Junior Developer",
    company: "StartupHub",
    period: "2017 - 2018",
    description: "Started my professional journey as a junior developer, learning the fundamentals of web development and working on small-scale projects.",
    status: "previous",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
    link: "#"
  }
]; 