'use client';

import { useProjectModalStore } from './store/worksStore';
import ModalHeader from './ProjectModal/ModalHeader';
import ProjectImage from './ProjectModal/ProjectImage';
import ProjectDescription from './ProjectModal/ProjectDescription';
import ProjectInfo from './ProjectModal/ProjectInfo';

export default function ProjectModal() {
  const { selectedProject, setSelectedProject } = useProjectModalStore();

  if (!selectedProject) return null;

  const handleClose = () => setSelectedProject(null);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#181818] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#232323]">
        <div className="p-8">
          {/* Modal Header */}
          <ModalHeader project={selectedProject} onClose={handleClose} />

          {/* Project Image */}
          <ProjectImage />

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ProjectDescription project={selectedProject} />
            <ProjectInfo project={selectedProject} />
          </div>
        </div>
      </div>
    </div>
  );
} 