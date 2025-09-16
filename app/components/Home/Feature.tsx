import FeaturesList from "./Feature/FeatureList";

export default function Feature() {
  return (
    <section className="mb-12 md:ml-8 md:pl-8">
      <FeaturesList />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
    </section>
  );
}
