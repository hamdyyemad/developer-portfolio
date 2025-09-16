import GradientH2 from "@/designs/typography/GradientH2";
import PremiumToolsList from "./PremiumTools/PremiumToolsList";

export default function PremiumTools() {
  return (
    <section id="premium-tools" className="mb-12 md:ml-8 p-8">
      <GradientH2 firstText="Premium" secondText="Tools" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pr-4 md:pr-0">
        <PremiumToolsList />
      </div>
    </section>
  );
}