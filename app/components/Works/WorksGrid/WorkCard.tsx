import { type WorkProject } from '@/app/data/works';
import ImageCard from './WorkCard/ImageCard';
import ProjectInfo from './WorkCard/ProjectInfo';

interface WorkCardProps {
  work: WorkProject;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <div
      className="group relative bg-[#181818] rounded-xl overflow-hidden border border-[#232323] hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer"
    >
      {/* Project Image */}
      <ImageCard work={work} />

      {/* Project Info */}
      <ProjectInfo work={work} />
    </div>
  );
} 