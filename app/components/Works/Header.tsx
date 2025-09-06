import GradientH2 from "@/designs/typography/GradientH2";

export default function Header() {
    return (
        <section className="pt-8">
            <GradientH2 firstText="Latest" secondText="WORKS" />
            <p className="text-gray-400 text-xl max-w-3xl">
                Explore my latest projects and works. From e-commerce platforms to enterprise applications, each project showcases different aspects of modern web development.
            </p>
        </section>
    )
}