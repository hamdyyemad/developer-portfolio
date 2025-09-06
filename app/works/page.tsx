'use client';

import Header from '../components/Works/Header';
import CategoryFilter from '../components/Works/CategoryFilter';
import WorksGrid from '../components/Works/WorksGrid';
import ProjectModal from '../components/Works/ProjectModal';

export default function WorksPage() {
  return (
    <div className="w-full min-h-screen bg-[#181818] pt-24">
      <div className="flex flex-col lg:flex-row justify-center items-start w-full">
        <main className="flex-1 flex flex-col gap-12 w-full max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header Section */}
          <Header />

          {/* Category Filter */}
          <CategoryFilter />

          {/* Works Grid */}
          <WorksGrid />
        </main>
      </div>

      {/* Project Modal */}
      <ProjectModal />
    </div>
  );
} 