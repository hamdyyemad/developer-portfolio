import Link from "next/link";
import GradientH2 from "@/designs/typography/GradientH2";
import BlogsList from "./Blog/BlogsList";

export default function Blog() {

  return (
    <section id="blog" className="md:ml-8 pl-8">
      <GradientH2 firstText="Latest" secondText="BLOGS" />
      <div className="grid grid-cols-1 gap-8 mt-10">
        <BlogsList />
      </div>

      {/* View All Blogs Button */}
      <div className="mt-12 text-center">
        <Link
          href="/blogs"
          className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
        >
          View All Blogs
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
            <path d="M5 15L15 5M9 5h6v6" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
