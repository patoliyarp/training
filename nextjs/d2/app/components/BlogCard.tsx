import Link from "next/link";
import type { Post } from "../../types/type.js";

function BlogCard({ id, title, body }: Post) {
  return (
    <article className="">
      <div className="bg-primary rounded-xl">
        <div className="px-6 lg:px-8 ">
          <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  py-4 lg:mx-0 lg:max-w-none ">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="h-17.5">
                <h3 className="mt-3 text-lg/6 font-semibold text-white hover:text-gray-300">
                  <a>{title}</a>
                </h3>
              </div>
              <div className="pb-2">
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">
                  {body}
                </p>
              </div>
              <Link href={`/blogs/${id}`}>
                <div className="text-primary-text px-4 py-1.5 rounded-lg text-sm bg-primary-200 flex justify-center items-center">
                  view
                </div>
              </Link>
            </article>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
