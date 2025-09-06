"use client";
import { useCategoryStore } from "../store/worksStore";

export default function CategoryCard({ category }: { category: string }) {
    const { selectedCategory, setSelectedCategory } = useCategoryStore();
    return (
        <button
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${selectedCategory === category
                ? 'bg-orange-500 text-white'
                : 'bg-[#232323] text-gray-300 hover:bg-[#333] hover:text-white border border-[#333]'
                }`}
        >
            {category}
        </button>
    )
}