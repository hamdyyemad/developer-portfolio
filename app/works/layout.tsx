import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works",
  description: "Explore Hamdy Emad's latest works and projects. From e-commerce platforms to enterprise applications, showcasing full-stack development expertise.",
  keywords: [
    "Hamdy Emad works",
    "portfolio projects",
    "web development projects",
    "React projects",
    "Node.js projects",
    ".NET projects",
    "e-commerce platforms",
    "enterprise applications"
  ],
  openGraph: {
    title: "Works | Hamdy Emad - Full Stack Web Developer",
    description: "Explore Hamdy Emad's latest works and projects. From e-commerce platforms to enterprise applications.",
    type: "website",
    url: "https://hamdyyemad.com/works",
  },
  twitter: {
    card: "summary_large_image",
    title: "Works | Hamdy Emad - Full Stack Web Developer",
    description: "Explore Hamdy Emad's latest works and projects.",
  },
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 