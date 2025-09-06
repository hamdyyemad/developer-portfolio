import GradientH2 from "@/designs/typography/GradientH2";
import ProjectsList from "./Projects/ProjectsList";

export default function Projects() {
  return (
    <section id="projects" className="md:ml-8 pl-8">
      <GradientH2 firstText="Recent" secondText="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectsList />
      </div>
    </section>
  );
}
