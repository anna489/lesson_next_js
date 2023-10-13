import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";

const Contact = () => {
  return (
    <div className="container mx-auto p-8 ">
      <div className="mt-20 justify-center ">
        <h2 style={{ fontSize: "36px", fontWeight: "600" }}>Contact us</h2>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            color: "#696A75",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
      </div>
      <div className="mt-10 gap-10 flex justify-center">
        <div className="border rounded p-3 w-[50%]">
          <h1 style={{ fontWeight: "500", fontSize: "20px" }}>Address</h1>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              color: "#696A75",
            }}
          >
            1328 Oak Ridge Drive, Saint Louis, Missouri 313-332-8662
            info@email.com
          </p>
        </div>
        <div className="border rounded p-3 w-[50%]">
          <h1 style={{ fontWeight: "500", fontSize: "20px" }}>Contact</h1>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              color: "#696A75",
            }}
          >
            313-332-8662 info@email.com
          </p>
        </div>
      </div>
      <div className="mt-10 bg-neutral-100 p-5 rounded ">
        <h1 style={{ fontSize: "20px" }}>Leave message</h1>
        <div className="flex gap-10 mt-5">
          <input
            type="text"
            placeholder="Your Name"
            class="border text focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-lg placeholder-slate-400 rounded-md pl-10 ring-1 ring-slate-200 shadow-sm"
            aria-label="Filter projects "
          />
          <input
            type="text"
            placeholder="Your Email"
            class="border text focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-lg placeholder-slate-400 rounded-md pl-10 ring-1 ring-slate-200 shadow-sm"
            aria-label="Filter projects "
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          class=" h-8 mt-6 border text focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-lg placeholder-slate-400 rounded-md pl-10 ring-1 ring-slate-200 shadow-sm"
          aria-label="Filter projects "
        />
        <input
          type="text"
          placeholder="Write a message"
          class="h-32 mt-6 border text focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-lg placeholder-slate-400 rounded-md pl-10 ring-1 ring-slate-200 shadow-sm"
          aria-label="Filter projects "
        />
        <button className="bg-blue-600 rounded text-white p-3 mt-10">
          Send Message
        </button>
      </div>
      <div className="mt-10"></div>
    </div>
  );
};

export default Contact;
