import SidebarBio from "./components/Home/SidebarBio";
import Hero from "./components/Home/Hero";
import Feature from "./components/Home/Feature";
import Projects from "./components/Home/Projects";
import Experience from "./components/Home/Experience";
import PremiumTools from "./components/Home/PremiumTools";
import Blog from "./components/Home/Blog";
import Contact from "./components/Home/Contact";

import { generateMetadata } from "@/app/lib/metadata";
export const metadata = generateMetadata("home");

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#181818] pt-12">
      <div className="flex flex-col lg:flex-row justify-center items-start w-full relative overflow-hidden">
        {/* SidebarBio: fixed left on desktop, full width on mobile */}
        <SidebarBio />
        {/* Main content sections */}
        <main className="flex-1 flex flex-col gap-12 w-full max-w-3xl mt-0 lg:mt-0 lg:ml-[430px]">
          {/* Hero Section */}
          <Hero />

          {/* Feature Grid Section */}
          <Feature />

          {/* Projects Section */}
          <Projects />

          {/* Experience Section */}
          <Experience />

          {/* Premium Tools Section */}
          <PremiumTools />

          {/* Blog Section */}
          <Blog />

          {/* Contact Section */}
          <Contact />
        </main>
      </div>
    </div>
  );
}
