"use client";

import { useState } from "react";
import GradientH2 from "@/designs/typography/GradientH2";
import DesignGrid from "./components/DesignGrid";
import DesignFilters from "./components/DesignFilters";
import DesignDetail from "./components/DesignDetail";
import TopControls from "./components/TopControls";
import { designData } from "./data/designData";

export default function DesignsPage() {
  const [selectedDesign, setSelectedDesign] = useState<typeof designData[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTechnology, setSelectedTechnology] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("randomized");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  // Filter designs based on selected filters
  const filteredDesigns = designData.filter(design => {
    const matchesCategory = selectedCategory === "all" || design.category === selectedCategory;
    const matchesTechnology = selectedTechnology === "all" || design.technology === selectedTechnology;
    const matchesSearch = design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         design.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         design.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesTechnology && matchesSearch;
  });

  // Sort designs
  const sortedDesigns = [...filteredDesigns].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.id.localeCompare(a.id);
      case "oldest":
        return a.id.localeCompare(b.id);
      case "name":
        return a.title.localeCompare(b.title);
      case "randomized":
      default:
        return Math.random() - 0.5;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedDesigns.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDesigns = sortedDesigns.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full min-h-screen bg-[#181818] pt-12">
      <div className="flex flex-col lg:flex-row justify-center items-start w-full">
        {/* Main content */}
        <main className="flex-1 flex flex-col gap-12 w-full max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <section className="md:ml-8 pl-8">
            <GradientH2 firstText="UI" secondText="DESIGNS" />
            <p className="text-gray-300 text-lg max-w-2xl mt-4">
              Open-Source UI elements made with CSS or Tailwind
            </p>
          </section>
          
          {/* Main Layout */}
          <section className="md:ml-8 pl-8 w-full">
            {selectedDesign ? (
              // Detail View
              <DesignDetail 
                design={selectedDesign} 
                onBack={() => setSelectedDesign(null)}
              />
            ) : (
              // Grid View with Filters
              <div className="flex gap-8">
                {/* Left Sidebar - Categories Only */}
                <div className="w-64 flex-shrink-0">
                  <DesignFilters
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    designCount={filteredDesigns.length}
                  />
                </div>

                {/* Right Content - Grid with Top Controls */}
                <div className="flex-1">
                  {/* Top Controls */}
                  <TopControls
                    searchQuery={searchQuery}
                    selectedTechnology={selectedTechnology}
                    sortBy={sortBy}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={filteredDesigns.length}
                    onSearchChange={setSearchQuery}
                    onTechnologyChange={setSelectedTechnology}
                    onSortChange={setSortBy}
                    onPageChange={setCurrentPage}
                  />

                  {/* Design Grid */}
                  <div className="mt-6">
                    <DesignGrid 
                      designs={paginatedDesigns}
                      onSelectDesign={setSelectedDesign}
                    />
                  </div>
                </div>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
} 