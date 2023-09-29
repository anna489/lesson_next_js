import React from "react";

const RecentBlog = ({ blogs }) => {
  return (
    <div className={`container mx-auto p-8 `}>
      <div>
        <h1 class="p-5 text-2xl font-normal">Recent Blog posts</h1>
        <div class="grid grid-rows-3 grid-flow-col gap-4 ">
          <div class="row-span-3 bg-slate-300 border ">
            <div className="">
              <img src={blogs[0]?.cover_image} />
              <p>{blogs[0]?.readable_publish_date}</p>
            </div>
          </div>
          <div class="col-span-2 bg-slate-500">
            <div>
              <img src={blogs[0]?.cover_image} />
              <p>{blogs[0]?.readable_publish_date}</p>
            </div>
          </div>
          <div class="row-span-2 col-span-2 bg-slate-600">
            <div>
              <img src={blogs[0]?.cover_image} />
              <p>{blogs[0]?.readable_publish_date}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 class="p-5 text-2xl font-medium">All Blog Posts</h1>
      </div>
      <div className="grid grid-cols-3">
        {blogs.map((blog, i) => (
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
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
