import { WorkProject } from '@/app/data/works';

interface ProjectInfoProps {
  project: WorkProject;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <div>
      <div className="bg-[#232323] rounded-lg p-6">
        <h3 className="text-lg font-bold text-white mb-4">Project Info</h3>

        <div className="space-y-4">
          <div>
            <span className="text-gray-400 text-sm">Category</span>
            <p className="text-white font-semibold">{project.category}</p>
          </div>

          <div>
            <span className="text-gray-400 text-sm">Date</span>
            <p className="text-white font-semibold">{project.date}</p>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-orange-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              View Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#181818] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#333] transition-colors border border-[#333] mt-3"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 