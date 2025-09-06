import Link from "next/link";
import { type BlogPost } from "@/app/data/blogs";

export default function BlogCard({ blog }: { blog: BlogPost }) {
    return (
        <Link
            key={blog.id}
            href={`/blogs/${blog.slug}`}
            className="group block"
        >
            <div className="relative bg-[#181818] rounded-xl p-8 shadow flex flex-col min-h-[220px] border border-[#232323] hover:border-orange-500/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
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
                <h3 className="font-extrabold text-3xl md:text-4xl text-white leading-tight mb-4 max-w-2xl group-hover:text-orange-400 transition-colors">
                    {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                    {blog.description}
                </p>

                {/* Bottom Row: Date left, Read time right */}
                <div className="flex items-center justify-between w-full mt-auto">
                    <span className="text-gray-400 text-base">{blog.date}</span>
                    <span className="text-gray-400 text-base">{blog.readTime}</span>
                </div>
            </div>
        </Link>
    )
}