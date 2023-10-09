import React from "react";
import Link from "next/link";

const RecentBlog = ({ blogs }) => {
  return (
    <div className={`container mx-auto p-8 `}>
      <div>
        <h1 class="p-5 text-2xl font-normal">Recent Blog posts</h1>
        <div class="flex gap-5 ">
          <div class="row-span-3 border felx-col p-2 rounded m-2   shadow-lg truncate">
            <div className="">
              <img src={blogs[0]?.cover_image} className="h-50" />
              <div className="mt-5 ">
                <p>{blogs[0]?.readable_publish_date}</p>
                <h1>{blogs[0]?.title}</h1>
                <p>{blogs[0]?.description}</p>
              </div>
            </div>
          </div>
          <div className="border felx-col p-2 rounded m-2   shadow-lg truncate ">
            <div className=" rounded p-1 ">
              <div className="flex gap-5 border rounded">
                <img
                  src={
                    blogs[1]?.cover_image
                      ? blogs.cover_image
                      : "https://images.unsplash.com/photo-1634129675882-aa81bcb4c74f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
                  }
                  className="h-50 flex-1 w-[50%]"
                />
                <div className="flex-1 w-[50%]">
                  <p>{blogs[1]?.readable_publish_date}</p>
                  <h1>{blogs[1]?.title}</h1>
                  <p>{blogs[1]?.description}</p>
                </div>
              </div>

              <div className="flex mt-5 gap-5 border rounded">
                <img
                  src={blogs[2]?.cover_image}
                  className="h-50 flex-1 w-[50%]"
                />
                <div className="flex-1 w-[50%]">
                  <p>{blogs[2]?.readable_publish_date}</p>
                  <h1>{blogs[2]?.title}</h1>
                  <p>{blogs[2]?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" border felx-col p-2 rounded m-2   shadow-lg truncate  ">
          <div className="1 flex gap-5 ">
            <img
              src={
                blogs[3]?.cover_image
                  ? blogs.cover_image
                  : "https://images.unsplash.com/photo-1634129675882-aa81bcb4c74f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
              }
              className="h-50 flex-1 w-[50%]"
            />
            <div className="flex-1 w-[50%] ">
              <p>{blogs[3]?.readable_publish_date}</p>
              <h1>{blogs[3]?.title}</h1>
              <p>{blogs[3]?.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 class="p-5 text-2xl font-medium">All Blog Posts</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {blogs.map((blog, i) => (
          <Link href={"/blog/" + blog.id}>
            <div className=" border felx-col items-start p-2 rounded m-2   shadow-lg truncate hover:bg-neutral-200 hover:scale-110 hover:transition-all">
              <img
                src={
                  blog.cover_image
                    ? blog.cover_image
                    : "https://images.unsplash.com/photo-1634129675882-aa81bcb4c74f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
                }
                className="rounded"
              />
              <div className="flex flex-col">
                <div className="text-blue-700 bg-gray-100 rounded p-1 m-3">
                  <span>{blog?.type_of}</span>
                </div>
                <h2 className="mt-3 truncate">{blog.title}</h2>
              </div>
              <div className="flex mt-3 items-center gap-2 text-gray-500 text justify-around">
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
      <div className="flex justify-center mt-10 font-medium ">
        <button className="border  rounded ">Load more</button>
      </div>
    </div>
  );
};

export default RecentBlog;
