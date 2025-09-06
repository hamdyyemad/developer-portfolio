export interface WorkProject {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  date: string;
}

export const workProjects: WorkProject[] = [
  {
    id: "1",
    title: "Techsouq E-commerce Platform",
    description: "A full-featured multilingual e-commerce platform built with MERN stack. Supports both buyer and seller roles with PayPal integration, Redux state management, and responsive design.",
    category: "E-commerce",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Redux.js", "PayPal API", "i18n", "TailwindCSS"],
    imageUrl: "/works/techsouq.jpg",
    liveUrl: "https://techsouq.com",
    githubUrl: "https://github.com/hamdyyemad/techsouq",
    featured: true,
    date: "Apr 2024"
  },
  {
    id: "2",
    title: "Giza Power Industry HR System",
    description: "Modernized legacy HR systems using .NET Core, Razor Pages, and Dapper. Improved UI/UX with TailwindCSS and Alpine.js, achieving 15% performance improvement.",
    category: "Enterprise",
    technologies: [".NET Core", "Razor Pages", "Dapper", "SQL Server", "TailwindCSS", "Alpine.js", "Chart.js"],
    imageUrl: "/works/giza-power.jpg",
    featured: true,
    date: "Nov 2024"
  },
  {
    id: "3",
    title: "API Documentation Site",
    description: "Comprehensive API documentation site built with React, TypeScript, and TanStack Router. Features interactive code examples, real-time search, and structured content management.",
    category: "Documentation",
    technologies: ["React", "TypeScript", "TanStack Router", "Prism.js", "TailwindCSS", "JSON CMS"],
    imageUrl: "/works/api-docs.jpg",
    liveUrl: "https://api-docs.example.com",
    githubUrl: "https://github.com/hamdyyemad/api-docs-site",
    featured: true,
    date: "May 2024"
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Modern portfolio website showcasing web development and design skills. Built with Next.js, TypeScript, and TailwindCSS with blog functionality and SEO optimization.",
    category: "Portfolio",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "React Markdown", "Prism.js", "SEO"],
    imageUrl: "/works/portfolio.jpg",
    liveUrl: "https://hamdyyemad.com",
    githubUrl: "https://github.com/hamdyyemad/portfolio",
    featured: false,
    date: "Dec 2024"
  },
  {
    id: "5",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    category: "Productivity",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js", "DnD Kit"],
    imageUrl: "/works/task-manager.jpg",
    liveUrl: "https://task-manager.example.com",
    githubUrl: "https://github.com/hamdyyemad/task-manager",
    featured: false,
    date: "Mar 2024"
  },
  {
    id: "6",
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts, interactive maps, and historical data visualization using Chart.js.",
    category: "Dashboard",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API", "Leaflet Maps", "TailwindCSS"],
    imageUrl: "/works/weather-dashboard.jpg",
    liveUrl: "https://weather.example.com",
    githubUrl: "https://github.com/hamdyyemad/weather-dashboard",
    featured: false,
    date: "Feb 2024"
  },
  {
    id: "7",
    title: "Restaurant Management System",
    description: "Complete restaurant management solution with order tracking, inventory management, and customer relationship features.",
    category: "Business",
    technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "Stripe API", "Socket.io"],
    imageUrl: "/works/restaurant-system.jpg",
    liveUrl: "https://restaurant.example.com",
    githubUrl: "https://github.com/hamdyyemad/restaurant-system",
    featured: false,
    date: "Jan 2024"
  },
  {
    id: "8",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with multi-platform integration, content scheduling, and performance metrics.",
    category: "Analytics",
    technologies: ["React", "TypeScript", "Chart.js", "Social APIs", "Node.js", "MongoDB"],
    imageUrl: "/works/social-dashboard.jpg",
    liveUrl: "https://social-dashboard.example.com",
    githubUrl: "https://github.com/hamdyyemad/social-dashboard",
    featured: false,
    date: "Dec 2023"
  }
];

export const getFeaturedWorks = (): WorkProject[] => {
  return workProjects.filter(work => work.featured);
};

export const getAllWorks = (): WorkProject[] => {
  return workProjects;
};

export const getWorksByCategory = (category: string): WorkProject[] => {
  return workProjects.filter(work => work.category === category);
};

export const getCategories = (): string[] => {
  return [...new Set(workProjects.map(work => work.category))];
}; 