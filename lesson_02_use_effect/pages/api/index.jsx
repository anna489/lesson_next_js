import React, { Children, useState } from "react";

const Header = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
    console.log("add", count);
  };

  const sub = () => {
    setCount(count - 1);
    console.log("sub", count);
  };
  return (
    <div className="m-5">
      <h1 className="text-black">
        too: <span className="text-orange-600">{count}</span>
      </h1>
      <button className="text-black text-4xl" onClick={add}>
        nemeh
      </button>
      <button className="text-black text-4xl" onClick={sub}>
        hasah
      </button>
    </div>
  );
};

export default Header;
