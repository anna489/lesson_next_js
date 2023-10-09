import { useState, useEffect } from "react";
import Header from "./Header";
import RecentBlog from "./RecentBlog";
import Footer from "./Footer";

export default function Home({ blogs }) {
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const res = await fetch("https://dev.to/api/articles");
  //   const data = await res.json();
  //   console.log(data);
  //   setBlogs(data);
  // };
  return (
    <main className={`flex flex-col  justify-between`}>
      <Header />

      <RecentBlog blogs={blogs} />
      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://dev.to/api/articles`);
  const blogs = await res.json();
  console.log("res", blogs);
  return {
    props: {
      blogs,
    },
  };
}
