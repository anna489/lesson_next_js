import React from "react";

const RecentBlog = ({ blogs }) => {
  return (
    <div className={`container mx-auto`}>
      <h1 class="">Recent Blog posts</h1>
      <div className="grid grid-cols-3">
        {blogs.map((blog, i) => (
          <div className="border felx-col p-8">
            <img src={blog.cover_image} />
            <div className="flex flex-col">
              <span>{blog?.type_of}</span>
              <h2>{blog.title}</h2>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={blog.user.profile_image}
                className="rounded-full"
                height={50}
                width={50}
              />
              <p>{blog.user.name}</p>
              <p>{blog.published_at}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
