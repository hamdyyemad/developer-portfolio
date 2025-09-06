import GradientH2 from "@/designs/typography/GradientH2";
import StatsList from "./Hero/StatsList";

export default function Hero() {
  return (
    <section id="hero" className="mb-0 mt-8 md:ml-8 pl-4 md:pl-8">
      <GradientH2 firstText="Software" secondText="Engineer" />
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8 line-clamp-3">
        Full Stack Developer passionate about building intuitive user
        experiences and robust systems.{" "}
        <span className="hidden md:inline">
          Specializes in transforming ideas into scalable, full-cycle app.
        </span>
      </p>
      <div className="mb-10">
        <StatsList />
      </div>
    </section>
  );
}
