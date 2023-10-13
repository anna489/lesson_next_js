import React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/Blog",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
];

const Header = () => {
  const isActive = usePathname();
  console.log("blog", isActive);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  container mx-auto py-20">
      <div className="justify-center">
        <a href="/" />
        <img src="/Logo (2).png" alt="logo" />
      </div>
      <div className="hidden  md:flex gap-12 items-center justify-center lg:justify-center ">
        {navigations.map((navigation, i) => (
          <Link
            className={`flex text-gray-500 font-medium ${
              isActive === navigation.path
                ? "text-red-500"
                : "hover:text-red-500 "
            }`}
            key={i}
            href={navigation.path}
          >
            {navigation.name}
          </Link>
        ))}
      </div>
      <div className="hidden md:block md:justify-self-end justify-self-center">
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
