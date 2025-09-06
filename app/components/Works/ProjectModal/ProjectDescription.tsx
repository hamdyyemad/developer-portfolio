import { WorkProject } from '@/app/data/works';

interface ProjectDescriptionProps {
  project: WorkProject;
}

export default function ProjectDescription({ project }: ProjectDescriptionProps) {
  return (
    <div className="lg:col-span-2">
      <h3 className="text-xl font-bold text-white mb-4">Description</h3>
      <p className="text-gray-300 leading-relaxed mb-6">
        {project.description}
      </p>

      <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1 bg-[#232323] text-orange-500 text-sm rounded-full border border-[#333]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
} 