import Link from "next/link";
import type { Post } from "@/types/type";
import BlogCard from "../components/BlogCard";
import { getBlog } from "@/lib/api/blog";
export default async function Blog() {
  const posts = await getBlog();
  // const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts: Post[] = await data.json();

  if (!posts || posts.length == 0) {
    return <p>No Blogs found</p>;
  }

  return (
    <>
      <div className="min-h-screen  text-slate-200 font-sans">
        {/* Hero Section */}
        <main className="max-w-6xl mx-auto px-6 pt-15  pb-24 md:pt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              body={post.body}
              title={post.title}
              userId={post.userId}
            />
          ))}
        </main>
      </div>
    </>
  );
}
