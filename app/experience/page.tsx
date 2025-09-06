"use client";

import ExperienceTimeline from "../components/Experience/ExperienceTimeline";
import GradientH2 from "@/designs/typography/GradientH2";

export default function ExperiencePage() {
  return (
    <div className="w-full min-h-screen bg-[#181818] pt-12">
      <div className="flex flex-col lg:flex-row justify-center items-start w-full">
        {/* Main content */}
        <main className="flex-1 flex flex-col gap-12 w-full max-w-6xl mx-auto px-4">
          {/* Header Section */}
          <section className="md:ml-8 pl-8">
            <GradientH2 firstText="MY" secondText="EXPERIENCE" />
            <p className="text-gray-300 text-lg max-w-2xl mt-4">
              My professional journey through the world of software development
            </p>
          </section>

          {/* Timeline Section */}
          <section className="md:ml-8 pl-8">
            <ExperienceTimeline />
          </section>
        </main>
      </div>
    </div>
  );
}
