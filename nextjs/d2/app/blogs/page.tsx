"use client";
import { useEffect, useState } from "react";
import type { Post } from "@/types/type";
import BlogCard from "../components/BlogCard";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";

export default function BlogsPage() {
  const { isAuthenticated } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const jsonPlaceholderRes = await fetch("https://jsonplaceholder.typicode.com/posts");
        const apiPosts: Post[] = await jsonPlaceholderRes.json();

        const localRes = await fetch("/api/blog");
        const localData = await localRes.json();
        const userPosts: Post[] = localData.Blog || [];

        setPosts([...userPosts, ...apiPosts]);
      } catch {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen text-slate-200 font-sans">
        <main className="max-w-6xl mx-auto px-6 pt-15 pb-24 md:pt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="animate-pulse bg-primary rounded-xl p-6">
              <div className="h-5 bg-primary-100 rounded w-3/4 mb-4"></div>
              <div className="h-3 bg-primary-100 rounded w-full mb-2"></div>
              <div className="h-3 bg-primary-100 rounded w-5/6 mb-2"></div>
              <div className="h-3 bg-primary-100 rounded w-2/3"></div>
            </div>
          ))}
        </main>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return <p className="text-slate-400 text-center pt-20">No Blogs found</p>;
  }

  return (
    <div className="min-h-screen text-slate-200 font-sans">
      <main className="max-w-6xl mx-auto px-6 pt-10 pb-24">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">All Blog Posts</h1>
          {isAuthenticated && (
            <Link
              href="/dashboard/create"
              className="px-5 py-2 bg-btn text-black font-semibold rounded-xl text-sm hover:opacity-90 transition"
            >
              + Write Post
            </Link>
          )}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="relative">

              <BlogCard
                id={post.id}
                body={post.body}
                title={post.title}
                userId={post.userId}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
