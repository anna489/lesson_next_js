import React from "react";
import Header from "./Header";

import { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles");
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };
  return (
    <div className="flex flex-col  justify-between p-20">
      <Header />
      <div className={`container mx-auto p-8 `}>
        <h1 class="p-5 text-2xl font-medium">All Blog Posts</h1>
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
              <div className="flex items-center gap-2 text-gray-500 text">
                <img
                  src={blog.user.profile_image}
                  className="rounded-full"
                  height={50}
                  width={50}
                />
                <p>{blog.user.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
