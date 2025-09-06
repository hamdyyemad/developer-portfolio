"use client";

interface TopControlsProps {
  searchQuery: string;
  selectedTechnology: string;
  sortBy: string;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onSearchChange: (query: string) => void;
  onTechnologyChange: (technology: string) => void;
  onSortChange: (sort: string) => void;
  onPageChange: (page: number) => void;
}

const technologies = [
  { id: "all", name: "All", icon: "🔧" },
  { id: "tailwind", name: "Tailwind", icon: "🎨" },
  { id: "css", name: "CSS", icon: "💅" },
];

const sortOptions = [
  { id: "randomized", name: "Randomized" },
  { id: "newest", name: "Newest" },
  { id: "oldest", name: "Oldest" },
  { id: "name", name: "Name" },
];

export default function TopControls({
  searchQuery,
  selectedTechnology,
  sortBy,
  currentPage,
  totalPages,
  totalItems,
  onSearchChange,
  onTechnologyChange,
  onSortChange,
  onPageChange
}: TopControlsProps) {
  return (
    <div className="space-y-4">
      {/* Page Info */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Browse all</h2>
        <span className="text-gray-400 text-sm">
          {totalItems} UI elements found
        </span>
      </div>

      {/* Controls Row */}
      <div className="flex items-center justify-between gap-4">
        {/* Left: Pagination Info */}
        <div className="text-gray-400 text-sm">
          {totalPages > 0 && (
            <span>Page {currentPage} of {totalPages}</span>
          )}
        </div>

        {/* Center: Technology Filters */}
        <div className="flex items-center space-x-2">
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => onTechnologyChange(tech.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                selectedTechnology === tech.id
                  ? "bg-orange-500 text-white"
                  : "bg-[#2a2a2a] text-gray-300 hover:text-white hover:bg-[#333]"
              }`}
            >
              <span className="text-sm">{tech.icon}</span>
              <span className="text-sm font-medium">{tech.name}</span>
            </button>
          ))}
        </div>

        {/* Right: Sort and Search */}
        <div className="flex items-center space-x-4">
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-[#2a2a2a] text-gray-300 border border-[#333] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none pr-8"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  Sort: {option.name}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search tags, users, posts..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="bg-[#2a2a2a] border border-[#333] rounded-lg px-4 py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm w-64"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 bg-[#2a2a2a] text-gray-300 rounded-lg hover:bg-[#333] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  currentPage === page
                    ? "bg-orange-500 text-white"
                    : "bg-[#2a2a2a] text-gray-300 hover:bg-[#333]"
                }`}
              >
                {page}
              </button>
            );
          })}
          
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 bg-[#2a2a2a] text-gray-300 rounded-lg hover:bg-[#333] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
} 