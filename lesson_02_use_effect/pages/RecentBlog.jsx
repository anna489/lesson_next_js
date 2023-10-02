import React from "react";
import Link from "next/link";

const RecentBlog = ({ blogs }) => {
  return (
    <div className={`container mx-auto p-8 `}>
      <div>
        <h1 class="p-5 text-2xl font-normal">Recent Blog posts</h1>
        <div class="flex gap-5  ">
          <div class="row-span-3 bg-slate-300">
            <div className="1 ">
              <img src={blogs[0]?.cover_image} className="h-50" />
              <p>{blogs[0]?.readable_publish_date}</p>
              <h1>{blogs[0]?.title}</h1>
              <p>{blogs[0]?.description}</p>
            </div>
          </div>
          <div className="2">
            <div style={{ display: "flex" }}>
              <div>
                <img src={blogs[0]?.cover_image} />
              </div>
              <div>
                <p>{blogs[0]?.readable_publish_date}</p>
                <h1>{blogs[0]?.title}</h1>
                <p>{blogs[0]?.description}</p>
              </div>
              <div />

              <div>
                <div>
                  <img src={blogs[0]?.cover_image} />
                </div>
                <p>{blogs[0]?.readable_publish_date}</p>
                <h1>{blogs[0]?.title}</h1>
                <p>{blogs[0]?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 class="p-5 text-2xl font-medium">All Blog Posts</h1>
      </div>
      <div className="grid grid-cols-3">
        {blogs.map((blog, i) => (
          <Link href={"/blog/" + blog.id}>
            <div className="border felx-col p-2 rounded m-2   shadow-lg  ">
              <img src={blog.cover_image} className="rounded" />
              <div className="flex flex-col">
                <div className="text-blue-700 bg-gray-100 rounded p-1 m-3">
                  <span>{blog?.type_of}</span>
                </div>
                <h2>{blog.title}</h2>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text justify-around">
                <img
                  src={blog.user.profile_image}
                  className="rounded-full"
                  height={50}
                  width={50}
                />
                <p>{blog.user.name}</p>
                <p>{blog.readable_publish_date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
