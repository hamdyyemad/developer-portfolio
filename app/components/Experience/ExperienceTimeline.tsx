"use client";

import { useEffect, useRef, useState } from "react";
import { experienceData } from "../../data/experienceData";
import TimelineItem from "./TimelineItem";

export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const timelineRect = timeline.getBoundingClientRect();
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const windowHeight = window.innerHeight;

      // Calculate which section should be active based on scroll position
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - timelineTop) / timelineHeight));
      const newActiveIndex = Math.floor(scrollProgress * experienceData.length);
      
      setActiveIndex(Math.min(newActiveIndex, experienceData.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={timelineRef} className="relative">
      {/* Fixed active section indicator */}
      <div className="sticky top-32 z-10 mb-8">
        <div className="bg-[#181818] rounded-xl p-6 shadow border border-[#232323]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-1">
                {experienceData[activeIndex]?.title}
              </h3>
              <p className="text-orange-400 font-semibold mb-1">
                {experienceData[activeIndex]?.company}
              </p>
              <p className="text-gray-400 text-sm">
                {experienceData[activeIndex]?.period}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${
                experienceData[activeIndex]?.status === 'current' 
                  ? 'bg-orange-500 animate-pulse' 
                  : 'bg-gray-500'
              }`} />
              <span className="text-sm text-gray-300 capitalize">
                {experienceData[activeIndex]?.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line - hidden on mobile, visible on desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-500 to-gray-600 h-full rounded-full" />
        
        <div className="space-y-8 md:space-y-16">
          {experienceData.map((experience, index) => (
            <TimelineItem
              key={index}
              experience={experience}
              index={index}
              isActive={index === activeIndex}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 