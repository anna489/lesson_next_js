import Header from "../Header";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatDate } from "@/utils/functions";
import Footer from "../Footer";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [blogDetailData, setDetailData] = useState();

  console.log("Router", id);

  const getBlogDetail = async () => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    console.log("Data", data);
    setDetailData(data);
  };

  useEffect(() => {
    getBlogDetail();
  }, []);

  return (
    <div className="container  mx-auto mt-24 max-w-4xl p-8">
      <Header />
      <div className="mt-20">
        {blogDetailData ? (
          <>
            <div>
              <h1 className="text-4xl font-semibold text-slate-900 ">
                {blogDetailData.title}
              </h1>
              <div className="flex items-center mt-5 gap-5">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={blogDetailData.user.profile_image}
                    alt="avatar"
                  />
                  <h4 className="ml-2 text-lg text-gray-500">
                    {blogDetailData.user.name}
                  </h4>
                </div>
                <p className="text-lg text-gray-500">
                  {formatDate(blogDetailData.created_at)}
                </p>
              </div>
            </div>
            <div className="mt-8">Content</div>
            <div className="mt-8">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blogDetailData.body_html }}
              ></div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default BlogDetail;
