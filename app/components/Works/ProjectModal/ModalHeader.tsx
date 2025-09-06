import { WorkProject } from '@/app/data/works';

interface ModalHeaderProps {
  project: WorkProject;
  onClose: () => void;
}

export default function ModalHeader({ project, onClose }: ModalHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold text-white">{project.title}</h2>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
} 