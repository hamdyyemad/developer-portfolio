import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/app/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      key={project.id}
      className="relative bg-[#181818] rounded-xl p-6 shadow flex flex-col items-start cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:shadow-2xl hover:shadow-black/50 hover:z-10 hover:-translate-y-1"
    >
      {/* Next.js Image component with link indicator */}
      <div
        className={`w-full h-36 relative rounded-lg mb-4 overflow-hidden transition-all duration-300 hover:scale-110 ${project.imageClass}`}
      >
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Link indicator on top right of image */}
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 w-8 h-8 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-orange-500 hover:text-orange-400 transition-all duration-300 hover:scale-125 hover:bg-black/80"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="transition-transform duration-300 hover:rotate-12 -rotate-45"
          >
            <path d="M8 12h8M12 8l4 4-4 4" />
          </svg>
        </Link>
      </div>

      <h3 className="text-2xl font-extrabold text-white mb-1 transition-all duration-300 hover:text-orange-400">
        {project.title}
      </h3>

      <p className="text-gray-400 text-base mb-2 transition-all duration-300">
        {project.description}
      </p>
    </div>
  );
}
