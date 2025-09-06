import GradientH2 from "@/designs/typography/GradientH2";
import ExperiencesList from "./Experience/ExperiencesList";
export default function Experience() {
  return (
    <section id="experience" className="md:ml-8 pl-8">
      <GradientH2 firstText="1 YEAR OF" secondText="EXPERIENCE" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <ExperiencesList />
      </div>
    </section>
  )
}