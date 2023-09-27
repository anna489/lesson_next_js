import { useState, useEffect } from "react";
import Header from "./Header";
import RecentBlog from "./RecentBlog";

export default function Home() {
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
    <main className={`flex flex-col  justify-between p-24 `}>
      <Header />
      <RecentBlog blogs={blogs} />
    </main>
  );
}
