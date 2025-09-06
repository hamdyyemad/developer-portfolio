"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Experience } from "../../data/experienceData";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isActive: boolean;
  isEven: boolean;
}

export default function TimelineItem({ experience, index, isActive, isEven }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'current':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6 text-orange-500"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'previous':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6 text-orange-500"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        );
    }
  };

  return (
    <div
      ref={itemRef}
      className={`relative flex items-center md:flex-row flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Content Card */}
      <div
        className={`w-full md:w-5/12 ${
          isEven ? "md:pr-8 md:text-right text-left" : "md:pl-8 text-left"
        } mb-4 md:mb-0`}
      >
        <div
          className={`relative bg-[#181818] rounded-xl p-6 shadow flex flex-col items-start cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] hover:z-20 hover:-translate-y-2 border border-[#232323] ${
            isActive ? "ring-2 ring-orange-500/50" : ""
          }`}
        >
          {/* Status indicator */}
          <div className={`flex items-center space-x-2 mb-4 ${
            isEven ? "md:justify-end justify-start" : "justify-start"
          }`}>
            <div className={`w-3 h-3 rounded-full ${
              experience.status === 'current' 
                ? 'bg-orange-500 animate-pulse' 
                : experience.status === 'previous'
                ? 'bg-gray-500'
                : 'bg-orange-500'
            }`} />
            <span className="text-sm text-gray-300 capitalize font-medium">
              {experience.status}
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-white mb-1 transition-all duration-500 hover:text-orange-400">
            {experience.title}
          </h3>

          <p className="text-orange-400 font-semibold mb-2 transition-all duration-500">
            {experience.company}
          </p>

          <p className="text-gray-400 text-base mb-2 transition-all duration-500">
            {experience.period}
          </p>

          <p className="text-gray-300 text-base mb-4 transition-all duration-500">
            {experience.description}
          </p>

          {/* Technologies */}
          {experience.technologies && (
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-[#232323] text-gray-300 text-xs rounded-full border border-[#333] hover:border-orange-500 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Arrow icon */}
          {experience.link && (
            <Link href={experience.link} passHref className="absolute top-4 right-4 text-orange-500 hover:text-orange-600 transition-all duration-500 hover:scale-150">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-500 hover:rotate-45">
                <path d="M8 12h8M12 8l4 4-4 4" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Timeline Middle */}
      <div className="relative z-10 flex-shrink-0 order-first md:order-none">
        <div
          className={`w-16 h-16 rounded-full bg-[#181818] border-4 border-[#232323] flex items-center justify-center transition-all duration-500 ${
            isActive 
              ? "border-orange-500 shadow-lg shadow-orange-500/25 scale-110" 
              : "hover:border-orange-500 hover:scale-105"
          }`}
        >
          <div className={`transition-all duration-500 ${
            isActive ? "animate-bounce" : ""
          }`}>
            {getStatusIcon(experience.status)}
          </div>
        </div>
      </div>

      {/* Spacer - hidden on mobile */}
      <div className="hidden md:block w-5/12" />
    </div>
  );
} 