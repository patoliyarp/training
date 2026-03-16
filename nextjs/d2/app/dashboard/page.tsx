"use client";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Post } from "@/types/type";

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        if (data.success) {
          setPosts(data.Blog);
        } else {
          setPosts([]);
        }
      } catch {
        setPosts([]);
      }
    }
    loadPosts();
  }, [user]);

  const handleDelete = async (postId: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    setDeleting(postId);
    try {
      const res = await fetch(`/api/blog/${postId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        // Remove the post from state so UI updates immediately
        setPosts((prev) => prev.filter((p) => p.id !== postId));
      } else {
        alert("Failed to delete post. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Error deleting post.");
    } finally {
      setDeleting(null);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400">Please log in to access the dashboard.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-200 font-sans">
      <main className="max-w-4xl mx-auto px-6 pt-10 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-slate-500 mt-1">
              Manage your blog posts, {user?.email}
            </p>
          </div>
          <Link
            href="/dashboard/create"
            className="px-6 py-2.5 bg-btn text-black font-semibold rounded-xl text-sm hover:opacity-90 transition"
          >
            + Create Post
          </Link>
        </div>

        {/* Posts List */}
        {posts.length === 0 ? (
          <div className="rounded-xl border border-slate-800 bg-secondary p-16 text-center">
            <p className="text-xl font-semibold text-white mb-2">
              No posts yet
            </p>
            <p className="text-slate-500 mb-6">
              Create your first blog post to get started!
            </p>
            <Link
              href="/dashboard/create"
              className="px-6 py-2.5 bg-btn text-black font-semibold rounded-xl text-sm hover:opacity-90 transition"
            >
              Create Your First Post
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-primary border border-primary-200 rounded-xl p-6 flex items-start justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <Link href={`/blogs/${post.id}`}>
                    <h3 className="text-lg font-semibold text-white hover:text-slate-300 transition truncate">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                    {post.body}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/dashboard/edit/${post.id}`}
                    className="px-4 py-1.5 text-sm border border-primary-100 text-slate-300 rounded-lg hover:bg-primary-100 transition"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    disabled={deleting === post.id}
                    className="px-4 py-1.5 text-sm border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/10 transition disabled:opacity-50"
                  >
                    {deleting === post.id ? "..." : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
