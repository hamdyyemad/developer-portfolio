'use client';
import WorkCard from "./WorkCard";
import { useMemo } from 'react';
import { useCategoryStore } from '../store/worksStore';
import { getAllWorks } from '@/app/data/works';

const allWorks = getAllWorks();

export default function WorksList() {
    const { selectedCategory } = useCategoryStore();

    const filteredWorks = useMemo(() => {
        return selectedCategory === 'All'
            ? allWorks
            : allWorks.filter(work => work.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <>
            {filteredWorks.map((work) => (
                <WorkCard key={work.id} work={work} />
            ))}
        </>
    )
}