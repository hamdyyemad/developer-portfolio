import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogs } from "../../data/blogs";
import MarkdownRenderer from "../../components/MarkdownRenderer";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  
  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    keywords: [...blog.tags, "web design", "development", "blog"],
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.date,
      tags: blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-[#181818] pt-24">
      <div className="flex flex-col lg:flex-row justify-center items-start w-full">
        {/* Main content */}
        <main className="flex-1 flex flex-col gap-12 w-full max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back to Blogs */}
          <section className="pt-8">
            <Link 
              href="/blogs" 
              className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors mb-8"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
              Back to Blogs
            </Link>
          </section>

          {/* Article Header */}
          <section className="mb-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
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
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white uppercase leading-tight tracking-tight mb-6">
              {blog.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex items-center justify-between text-gray-400 mb-8">
              <span className="text-lg">{blog.date}</span>
              <span className="text-lg">{blog.readTime}</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
              {blog.description}
            </p>
          </section>

          {/* Article Content */}
          <section className="bg-[#181818] rounded-xl p-8 border border-[#232323]">
            <MarkdownRenderer content={blog.content} />
          </section>

          {/* Share Section */}
          <section className="mt-12 p-6 bg-[#232323] rounded-xl border border-[#333]">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Share this article
              </h3>
              <div className="flex justify-center gap-4">
                <button className="p-3 bg-[#181818] rounded-lg hover:bg-[#333] transition-colors">
                  <svg width="20" height="20" fill="currentColor" className="text-blue-400">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="p-3 bg-[#181818] rounded-lg hover:bg-[#333] transition-colors">
                  <svg width="20" height="20" fill="currentColor" className="text-blue-600">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button className="p-3 bg-[#181818] rounded-lg hover:bg-[#333] transition-colors">
                  <svg width="20" height="20" fill="currentColor" className="text-green-500">
                    <path d="M2.76 20.2a2.76 2.76 0 002.74 2.74h8.7a2.76 2.76 0 002.74-2.74V6.47H2.76v13.73zM9.25 1.65a.69.69 0 01.69-.69h3.12a.69.69 0 01.69.69v1.38H9.25V1.65zM18.1 3.45H15.38V1.65a2.76 2.76 0 00-2.74-2.74H9.25a2.76 2.76 0 00-2.74 2.74v1.8H3.79a.69.69 0 00-.69.69v1.38a.69.69 0 00.69.69h14.31a.69.69 0 00.69-.69V4.14a.69.69 0 00-.69-.69z"/>
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-12">
            <h3 className="text-3xl font-bold text-white mb-8">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* You can add related articles logic here */}
              <div className="p-6 bg-[#232323] rounded-xl border border-[#333]">
                <h4 className="text-xl font-bold text-white mb-2">
                  Coming Soon...
                </h4>
                <p className="text-gray-400">
                  More articles are being prepared. Stay tuned!
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
} 