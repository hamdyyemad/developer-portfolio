import { projects } from "@/app/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
    return (
        <>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </>
    )
}