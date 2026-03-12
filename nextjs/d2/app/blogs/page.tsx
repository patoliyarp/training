import Link from "next/link";
import type { Post } from "@/types/type";
import BlogCard from "./BlogCard";

export default async function Blog() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await data.json();

  return (
    <>
      <div className="min-h-screen  text-slate-200 font-sans">
        {/* Hero Section */}
        <main className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-32">
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
