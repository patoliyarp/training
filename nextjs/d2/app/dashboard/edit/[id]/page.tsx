"use client";
import { useAuth } from "@/context/AuthProvider";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PostForm from "@/app/components/PostForm";
import Link from "next/link";
import type { Post } from "@/types/type";

export default function EditPostPage() {
  const { user } = useAuth();
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        const res = await fetch(`/api/blog/${postId}`);
        if (res.ok) {
          const data = await res.json();
          setPost(data.Blog);
        } else {
          setPost(null);
        }
      } catch {
        setPost(null);
      } finally {
        setLoading(false);
      }
    }
    loadPost();
  }, [postId]);

  const handleSubmit = async (values: { title: string; body: string }) => {
    if (!user?.email || !post) return;

    try {
      const updatedPost = {
        ...post,
        title: values.title,
        body: values.body,
      };

      const res = await fetch(`/api/blog/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      });

      if (!res.ok) {
        throw new Error("Failed to update post");
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Failed to update post. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-slate-400">Loading post...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <p className="text-slate-400">Post not found.</p>
        <Link
          href="/dashboard"
          className="text-btn hover:underline text-sm"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-200 font-sans">
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <Link
          href="/dashboard"
          className="text-primary-text text-sm hover:text-white mb-6 inline-block"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">Edit Post</h1>

        <div className="bg-secondary border border-primary-200 rounded-xl p-8">
          <PostForm
            initialValues={{ title: post.title, body: post.body }}
            onSubmit={handleSubmit}
            submitLabel="Save Changes"
          />
        </div>
      </main>
    </div>
  );
}
