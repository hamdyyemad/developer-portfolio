export interface Experience {
  id: number;
  company: string;
  period: string;
  description: string;
  link: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Giza Power Industry",
    period: "Nov 2024 - Present",
    description:
      "Refactored and modernized legacy views, improving UI/UX across internal HR systems. Utilized .NET technologies and modern frontend frameworks.",
    link: "https://github.com/hamdyyemad",
  },
  {
    id: 2,
    company: "Freelance Developer",
    period: "Jan 2024 - Oct 2024",
    description:
      "Developed full-stack web applications for various clients using MERN stack and .NET technologies. ",
    link: "https://github.com/hamdyyemad",
  },
];
