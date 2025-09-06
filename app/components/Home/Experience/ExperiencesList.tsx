import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/app/data/experience";

export default function ExperiencesList() {
  return (
    <>
      {experiences.map((exp) => (
        <ExperienceCard key={exp.id} exp={exp} />
      ))}
    </>
  );
}
