import { type Experience } from "@/app/data/experience";
import WavePattern from "@/designs/patterns/WavePattern";
import CirclePattern from "@/designs/patterns/CirclePattern";

export default function ExperienceCard({ exp }: { exp: Experience }) {
  // Different background colors for each experience card
  const getBackgroundClass = (id: number) => {
    switch (id) {
      case 1:
        return "bg-gradient-to-br from-blue-500 to-blue-400";
      case 2:
        return "bg-gradient-to-br from-purple-500 to-purple-400";
      case 3:
        return "bg-gradient-to-br from-green-500 to-green-400";
      default:
        return "bg-gradient-to-br from-gray-500 to-gray-400";
    }
  };

  const getTextColor = () => {
    return "text-gray-300";
  };

  const getPattern = (id: number) => {
    switch (id) {
      case 1:
        return <CirclePattern />;
      case 2:
        return <WavePattern />;
    }
  };

  return (
    <div
      className={`group relative ${getBackgroundClass(
        exp.id
      )} backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 flex flex-col items-start cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-white/20 hover:z-20 hover:-translate-y-2 overflow-hidden`}
    >
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/5 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      {/* Enhanced pattern with animation */}
      <div className="absolute inset-0 feature-pattern">
        <div className="transition-all duration-500 group-hover:opacity-80">
          {getPattern(exp.id)}
        </div>
      </div>

      <div className="relative z-10 w-full">
        <h3
          className={`text-2xl font-extrabold ${getTextColor()} mb-1 transition-all duration-500 group-hover:text-white`}
        >
          {exp.company}
        </h3>

        <p className="text-white/80 text-base mb-2 transition-all duration-500 group-hover:text-white/90">
          {exp.period}
        </p>

        <p className="text-white/90 text-base mb-2 transition-all duration-500 group-hover:text-white">
          {exp.description}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Progress bar animation */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-white/60 via-white/80 to-white/60 transition-all duration-1000 ease-out group-hover:w-full w-0" />
      </div>
    </div>
  );
}
