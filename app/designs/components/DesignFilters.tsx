"use client";

interface DesignFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  designCount: number;
}

const categories = [
  { id: "all", name: "All", icon: "📦" },
  { id: "button", name: "Buttons", icon: "🔘" },
  { id: "card", name: "Cards", icon: "🃏" },
  { id: "form", name: "Forms", icon: "📝" },
  { id: "loader", name: "Loaders", icon: "⚡" },
  { id: "navigation", name: "Navigation", icon: "🧭" },
  { id: "modal", name: "Modals", icon: "🪟" },
];

export default function DesignFilters({
  selectedCategory,
  onCategoryChange,
  designCount
}: DesignFiltersProps) {
  return (
    <div className="bg-[#1e1e1e] rounded-xl border border-[#232323] p-6 h-fit">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-2">Categories</h3>
        <p className="text-sm text-gray-400">{designCount} designs found</p>
      </div>

      {/* Categories */}
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              selectedCategory === category.id
                ? "bg-orange-500 text-white"
                : "text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Show More Arrow */}
      <div className="mt-4 flex justify-center">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
} 