import Link from "next/link";
import { getAllBlogs } from "../data/blogs";


import { generateMetadata } from "@/app/lib/metadata";
import GradientH2 from "@/designs/typography/GradientH2";
export const metadata = generateMetadata('blog');


export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="w-full min-h-screen bg-[#181818] pt-24">
      <div className="flex flex-col lg:flex-row justify-center items-start w-full">
        {/* Main content */}
        <main className="flex-1 flex flex-col gap-12 w-full max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header Section */}
          <section className="pt-8">
            <GradientH2 firstText="Latest" secondText="BLOGS" />
            <p className="text-gray-400 text-xl max-w-3xl">
              Explore insights on web design, development, and digital innovation. Expert articles to help you stay ahead in the ever-evolving digital landscape.
            </p>
          </section>

          {/* Blog Grid */}
          <section className="grid grid-cols-1 gap-8 mt-10">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="group block"
              >
                <article className="relative bg-[#181818] rounded-xl p-8 shadow flex flex-col min-h-[220px] border border-[#232323] hover:border-orange-500/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                  {/* Arrow Icon Top Right */}
                  <span className="absolute top-6 right-6 text-orange-500 group-hover:text-orange-400 transition-colors">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 15L15 5M9 5h6v6" />
                    </svg>
                  </span>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#232323] text-orange-500 text-sm rounded-full border border-[#333]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="font-extrabold text-3xl md:text-4xl text-white leading-tight mb-4 max-w-2xl group-hover:text-orange-400 transition-colors">
                    {blog.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                    {blog.description}
                  </p>

                  {/* Bottom Row: Date left, Read time right */}
                  <div className="flex items-center justify-between w-full mt-auto">
                    <span className="text-gray-400 text-base">{blog.date}</span>
                    <span className="text-gray-400 text-base">{blog.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </section>

          {/* Newsletter Section */}
          <section className="mt-16 p-8 bg-[#232323] rounded-xl border border-[#333]">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Get the latest insights on web design and development delivered to your inbox. No spam, just valuable content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-[#181818] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
                <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
} 