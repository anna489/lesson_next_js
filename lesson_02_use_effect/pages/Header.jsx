import React from "react";
import { useState } from "react";

const Header = () => {
  // const [query, setQuery] = useState("");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between   container mx-auto py-20">
      <div>
        <a href="/" />
        <img href="/" src="/Logo (2).png" alt="logo" />
      </div>
      <div>
        <ul className="flex justify-around items-center gap-10 text-gray-500 font-medium">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Blog">Blog</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className=" md:justify-self-end justify-self-center">
        <input
          type="text"
          placeholder="Search"
          class="border text focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none  text-lg placeholder-slate-400 rounded-md pl-10 ring-1 ring-slate-200 shadow-sm"
          aria-label="Filter projects "
          // onChange={(event) => setQuery(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
