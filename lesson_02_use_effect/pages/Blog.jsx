import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

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
    <div className="container mx-auto p-8 ">
      <Header />
      <div>
        <h1 class="p-5 text-2xl font-medium">All Blog Posts</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {blogs.map((blog, i) => (
          <Link href={"/blog/" + blog.id}>
            <div className=" border flex-col items-start p-2 rounded m-2   shadow-lg truncate hover:bg-neutral-200 hover:scale-110 hover:transition-all">
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
      <Footer />
    </div>
  );
};

export default Blog;
