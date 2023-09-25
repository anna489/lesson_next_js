import { useState } from "react";
export default function Home() {
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
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-black`}
    >
      <div className="m-5">
        <h1 className="text-white text-5xl">
          Too: <span className="text-red-600 text-5xl">{count}</span>
        </h1>
      </div>
      <div>
        <button
          className="text-white text-3xl border-[3px] mx-2 border-green-600"
          onClick={add}
        >
          nemeh
        </button>
        <button
          className="text-white text-3xl border-[3px] mx-2 border-red-600"
          onClick={sub}
        >
          hasah
        </button>
      </div>
    </main>
  );
}
