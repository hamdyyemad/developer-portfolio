import { WorkProject } from "@/app/data/works";

interface WorkCardProps {
    work: WorkProject;
}

export default function ProjectInfo({ work }: WorkCardProps) {
    return (
        <div className="p-6">
            {/* Category Badge */}
            <CategoryBadge category={work.category} date={work.date} />

            {/* Title */}
            <Title title={work.title} />

            {/* Description */}
            <Description description={work.description} />

            {/* Technologies */}
            <Technologies technologies={work.technologies} />

            {/* Links */}
            <Links liveUrl={work.liveUrl} githubUrl={work.githubUrl} />
        </div>
    )
}

function CategoryBadge({ category, date }: { category: string, date: string }) {
    return (
        <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#232323] text-orange-500 text-xs rounded-full border border-[#333]">
                {category}
            </span>
            <span className="text-gray-400 text-sm">{date}</span>
        </div>
    )
}

function Title({ title }: { title: string }) {
    return (
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
            {title}
        </h3>
    )
}

function Description({ description }: { description: string }) {
    return (
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {description}
        </p>
    )
}

function Links({ liveUrl, githubUrl }: { liveUrl?: string; githubUrl?: string }) {
    return (
        <div className="flex gap-3">
            {liveUrl && (
                <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-orange-500 text-white text-center py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                >
                    Live Demo
                </a>
            )}
            {githubUrl && (
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#232323] text-white text-center py-2 rounded-lg text-sm font-semibold hover:bg-[#333] transition-colors border border-[#333]"
                    onClick={(e) => e.stopPropagation()}
                >
                    GitHub
                </a>
            )}
        </div>
    )
}

function Technologies({ technologies }: { technologies: string[] }) {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech) => (
                <span
                    key={tech}
                    className="px-2 py-1 bg-[#232323] text-gray-300 text-xs rounded border border-[#333]"
                >
                    {tech}
                </span>
            ))}
            {technologies.length > 3 && (
                <span className="px-2 py-1 bg-[#232323] text-gray-400 text-xs rounded border border-[#333]">
                    +{technologies.length - 3} more
                </span>
            )}
        </div>
    )
}