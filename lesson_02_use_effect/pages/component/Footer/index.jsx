import React from "react";

const Footer = () => {
  return (
    <div className=" p-8 bg-slate-100 ">
      <div className="container mx-auto">
        <div class="grid grid-cols-3 justify-between gap-20  ">
          <div className=" gap-5 grid">
            <h1 style={{}}>About</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div>
              <ul>
                <li>Email : info@jstemplate.net</li>
                <li>Phone : 880123456789</li>
              </ul>
            </div>
          </div>
          <div class="...">
            <ul>
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
          <div class="...">
            <ul className="flex gap-10">
              <li>
                <img src="./Negative.png" />
              </li>

              <li>
                <img src="./twitter.png" />
              </li>
              <li>
                <img src="./ig.png" />
              </li>
              <li>
                <img src="./link.png" />
              </li>
            </ul>
          </div>
        </div>
        <div className="border bg-slate-300 mt-5"></div>
        <div class="justify-between flex mt-10">
          <div>
            <img src="./Logo (2).png" />
          </div>
          <div>
            <ul class="flex gap-10">
              <li>Terms of Use </li>
              <div className="border bg-slate-300"></div>
              <li>Privacy Policy</li>
              <div className="border bg-slate-300"></div>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
