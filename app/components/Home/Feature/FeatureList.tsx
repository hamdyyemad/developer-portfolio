import FeatureCard from "./FeatureCard";
import { features } from "@/app/data/features";
export default function FeaturesList() {

  return (
    <div className="relative">
      {/* Features grid with enhanced animations */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:p-4 pr-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="transform transition-all duration-700 ease-out"
          >
            <FeatureCard feature={feature} />
          </div>
        ))}
      </div>
    </div>
  );
}
