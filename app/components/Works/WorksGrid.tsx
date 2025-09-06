import WorksList from "./WorksGrid/WorksList";

export default function WorksGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <WorksList />
    </section>
  );
} 