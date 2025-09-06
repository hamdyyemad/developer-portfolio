import CategoryCard from "./CategoryCard";

import { getCategories } from "@/app/data/works";
const categories = ['All', ...getCategories()];

export default function CategoriesList() {
    return (
        <>
            {categories.map((category, index) => (
                <CategoryCard key={`${index} - ${category}`} category={category} />
            ))}
        </>
    )
}