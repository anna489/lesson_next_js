import { useState, useEffect } from "react";
import Header from "./component/Header";
import RecentBlog from "./component/RecentBlog";
import Footer from "./component/Footer";

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
      <RecentBlog blogs={blogs} />
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://dev.to/api/articles`);
  const blogs = await res.json();
  console.log("res", blogs);
  return {
    props: {
      blogs,
    },
  };
}
