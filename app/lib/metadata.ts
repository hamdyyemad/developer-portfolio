import type { Metadata } from "next";

// Base metadata that can be shared across pages
const baseKeywords = [
  "Hamdy Emad",
  "Egypt web developer",
  "Full Stack Developer",
  "React.js",
  "Node.js",
  "TypeScript",
  ".NET",
];

export type PageKey = "home" | "blog";

// Page-specific metadata
export const pageMetadata: Record<PageKey, Metadata> = {
  home: {
    title: "Hamdy Emad | Full Stack Web Developer",
    description:
      "Hamdy Emad - Full Stack Web Developer from Egypt. Specializing in React.js, Node.js, TypeScript, and .NET technologies. Experienced in building MERN stack e-commerce platforms and multilingual applications.",
    keywords: [
      ...baseKeywords,
      "MERN stack",
      "e-commerce",
      "multilingual applications",
      "PayPal integration",
      "MongoDB",
      "Express.js",
      "Redux.js",
      "TailwindCSS",
    ] as string[], // Explicit type assertion
    openGraph: {
      title: "Hamdy Emad | Full Stack Web Developer",
      description:
        "Full Stack Web Developer specializing in React.js, Node.js, TypeScript, and .NET technologies. Building scalable, multilingual web applications and e-commerce platforms.",
      url: "https://hamdyyemad.com",
      siteName: "Hamdy Emad Portfolio",
      locale: "en_US",
      type: "website" as const,
    },
  },
  blog: {
    title: "Blog",
    description:
      "Hamdy Emad's blog featuring insights on React.js, Node.js, TypeScript, .NET development, MERN stack, e-commerce platforms, and multilingual web applications. Expert articles on modern web development.",
    keywords: [
      ...baseKeywords,
      "Hamdy Emad blog",
      "React.js articles",
      "Node.js development",
      "TypeScript tutorials",
      ".NET development",
      "MERN stack guides",
      "e-commerce development",
      "multilingual applications",
      "web development tips",
      "Full Stack development",
      "Egypt developer blog",
      "PayPal integration",
      "MongoDB tutorials",
      "Redux.js guides",
      "TailwindCSS tips",
    ] as string[], // Explicit type assertion
    openGraph: {
      title: "Blog | Hamdy Emad - Full Stack Web Developer",
      description:
        "Expert articles on React.js, Node.js, TypeScript, .NET development, and modern web technologies. Insights from a Full Stack Developer based in Egypt.",
      type: "website",
      url: "https://hamdyyemad.com/blogs",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | Hamdy Emad - Full Stack Web Developer",
      description:
        "Expert articles on React.js, Node.js, TypeScript, .NET development, and modern web technologies.",
    },
  },

  // You can add more pages here
};

// Helper function to generate metadata
export function generateMetadata(page: PageKey): Metadata {
  return pageMetadata[page];
}
