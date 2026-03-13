"use client";
import type { Comment } from "@/types/type";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("Fail to fetch comments");
    throw error;
  }
  return await res.json();
};

function CommentSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center border border-primary-200 rounded-xl p-2">
        <div className="w-8 h-8 md:h-10 md:w-10  rounded-full bg-primary-200 "></div>
        <div className="px-2 py-1">
          <div className="h-3 w-28 rounded bg-primary-100" />

          <div className="h-2.5 mt-2 w-36 rounded bg-primary-100" />
        </div>
      </div>
    </div>
  );
}

export default function CommentSection() {
  const { data, error, isLoading } = useSWR("/api/comments", fetcher, {
    revalidateOnFocus: false,
  });

  return (
    <>
      <section className=" pt-10">
        {/* Section Header*/}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Comments</h2>
            {data && (
              <p className="mt-1 text-sm text-slate-500">
                {data.count} comments on this post
              </p>
            )}
          </div>
        </div>

        {/*  Loading State */}
        {isLoading && (
          <div className="space-y-4">
            <CommentSkeleton />
            <CommentSkeleton />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 text-center">
            <p className="font-semibold text-red-400">
              Failed to load comments
            </p>
            <p className="mt-1 text-sm text-slate-500">{error.message}</p>
          </div>
        )}

        {/* Comments List  */}
        {data && !isLoading && (
          <div className="space-y-4">
            {data.comments.map((comment: Comment) => (
              <div key={comment.id} className="">
                <div className="flex items-center border border-primary-200 rounded-xl p-2">
                  <div className="w-8 h-8 md:h-10 md:w-10  rounded-full bg-primary-200 text-center flex justify-center items-center text-primary-text ">
                    {" "}
                    {comment.name.charAt(0)}
                  </div>
                  <div className="px-2">
                    <h4 className="sm:text-lg">{comment.name}</h4>
                    <span className="text-xs sm:text-sm text-primary-text">
                      {comment.body}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State  */}
        {data && data.comments.length === 0 && (
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-10 text-center">
            <p className="font-semibold text-white">No comments yet</p>
            <p className="mt-1 text-sm text-slate-500">
              Be the first to comment!
            </p>
          </div>
        )}
      </section>
    </>
  );
}
