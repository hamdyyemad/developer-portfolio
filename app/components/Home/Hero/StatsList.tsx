"use client";

import { stats } from "@/app/data/stats";
import Stats from "./Stats";
import EffectWrapper from "../../EffectWrapper";

export default function StatsList() {
  return (
    <EffectWrapper>
      {/* Stats grid with enhanced spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 md:pl-4 pr-4">
        {stats.map((stat, index) => (
          <div
            key={`${index} - ${stat.value}`}
            className="transform transition-all duration-700 ease-out"
            style={{
              animationDelay: `${index * 0.1}s`,
              animation: "fadeInUp 0.8s ease-out forwards",
            }}
          >
            <Stats stat={stat} index={index} />
          </div>
        ))}
      </div>
    </EffectWrapper>
  );
}
