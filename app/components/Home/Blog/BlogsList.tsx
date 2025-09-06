import BlogCard from "./BlogCard";

import { getFeaturedBlogs } from "@/app/data/blogs";
const featuredBlogs = getFeaturedBlogs();

export default function BlogsList() {
    return (
        <>
            {featuredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </>
    )
}