import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <img className="" src="./logo.png" />
      </div>
      <div>
        <ul className="flex justify-around items-center gap-10">
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
      <div>
        <input type="text" placeholder="Search" class="border rounded " />
      </div>
    </div>
  );
};

export default Header;
