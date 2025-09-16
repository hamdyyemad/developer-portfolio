import GradientH2 from "@/designs/typography/GradientH2";
import ExperiencesList from "./Experience/ExperiencesList";
import { stats } from "@/app/data/stats";

export default function Experience() {
  const years = stats[0]?.value;

  return (
    <section id="experience" className="mb-12 md:ml-8 p-8">
      <GradientH2 firstText={`${years} YEARS OF`} secondText="EXPERIENCE" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <ExperiencesList />
      </div>
    </section>
  )
}