import { create } from 'zustand';
import { type WorkProject } from '@/app/data/works';

// Separate store for category selection
interface CategoryState {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategory: 'All',
  setSelectedCategory: (category: string) => set({ selectedCategory: category }),
}));

// Separate store for project modal
interface ProjectModalState {
  selectedProject: WorkProject | null;
  setSelectedProject: (project: WorkProject | null) => void;
}

export const useProjectModalStore = create<ProjectModalState>((set) => ({
  selectedProject: null,
  setSelectedProject: (project: WorkProject | null) => set({ selectedProject: project }),
}));

// Hook to get only the setter function without subscribing to state changes
export const useProjectModalActions = () => {
  const store = useProjectModalStore.getState();
  return {
    setSelectedProject: store.setSelectedProject,
  };
};

// Combined store for backward compatibility (if needed)
interface WorksState {
  selectedCategory: string;
  selectedProject: WorkProject | null;
  setSelectedCategory: (category: string) => void;
  setSelectedProject: (project: WorkProject | null) => void;
}

export const useWorksStore = create<WorksState>((set) => ({
  selectedCategory: 'All',
  selectedProject: null,
  setSelectedCategory: (category: string) => set({ selectedCategory: category }),
  setSelectedProject: (project: WorkProject | null) => set({ selectedProject: project }),
})); 