import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ShootingStars from "./components/ShootingStars";
import GradientCircles from "./components/GradientCircles";
import GridPattern from "./components/GridPattern";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: "Hamdy Emad | Full Stack Web Developer",
    template: "%s | Hamdy Emad",
  },
  description:
    "Full Stack Web Developer specializing in React.js, Node.js, TypeScript, and .NET technologies. Experienced in building scalable, multilingual web applications and e-commerce platforms. Based in Egypt.",
  keywords: [
    "Hamdy Emad",
    "Full Stack Developer",
    "React.js developer",
    "Node.js developer",
    "TypeScript developer",
    ".NET developer",
    "MERN stack",
    "e-commerce developer",
    "Egypt web developer",
    "MongoDB",
    "Express.js",
    "Redux.js",
    "TailwindCSS",
    "Razor Pages",
    "Dapper",
    "SQL Server",
    "API documentation",
    "multilingual applications",
    "PayPal integration",
    "Chart.js",
  ],
  authors: [{ name: "Hamdy Emad" }],
  creator: "Hamdy Emad",
  publisher: "Hamdy Emad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hamdyyemad.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamdyyemad.com",
    title: "Hamdy Emad | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React.js, Node.js, TypeScript, and .NET technologies. Building scalable, multilingual web applications.",
    siteName: "Hamdy Emad Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hamdy Emad - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamdy Emad | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React.js, Node.js, TypeScript, and .NET technologies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "EG",
    "geo.placename": "Egypt",
    "geo.position": "30.0444;31.2357",
    ICBM: "30.0444, 31.2357",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GridPattern />
        <Navbar />
        <div className="pt-16">
          <GradientCircles />
          <GridPattern />
          {/* Floating particles */}
          <ShootingStars />
          {children}
        </div>
      </body>
    </html>
  );
}
