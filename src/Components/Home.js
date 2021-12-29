import React, { useState, useEffect } from "react";
import { TypingAnim } from "./Typed";
import ImgOrAlt from "./ImgOrAlt";

const Image = () => {
  const [shape, setShape] = useState("rounded");
  useEffect(() => {
    let rounded = [
      "rounded-lg",
      "rounded-t-lg",
      "rounded-b-lg",
      "rounded-l-lg",
      "rounded-r-lg",
      "rounded-xl",
      "rounded-t-xl",
      "rounded-b-xl",
      "rounded-l-xl",
      "rounded-r-xl",
      "rounded-2xl",
      "rounded-t-2xl",
      "rounded-b-2xl",
      "rounded-l-2xl",
      "rounded-r-2xl",
      "rounded-3xl",
      "rounded-t-3xl",
      "rounded-b-3xl",
      "rounded-l-3xl",
      "rounded-r-3xl",
    ];
    let count = 0;
    let currentShape;
    let add = +1;
    const shapes = () => {
      /* currentShape = rounded[count];
      count += add;
      count === rounded.length - 1 ? (add = -1) : (add = add);
      count === 0 ? (add = +1) : (add = add);
      return currentShape;
      */ return rounded[Math.floor(Math.random() * rounded.length)];
    };
    setInterval(() => {
      setShape(shapes());
    }, 1000);
    return () => {
      clearInterval();
    };
  }, []);

  return (
    <div
      className={`transform  absolute bottom-16 inset-x-0 mx-auto transition-all rounded-md shadow-xl duration-700 ease-linear overflow-hidden w-1/3 md:w-1/4 lg:w-40 h -40 ${shape}`}
    >
      <ImgOrAlt src="head.jpg" alt="Head" />
    </div>
  );
};

export default function Home(d) {
  return (
    <>
      <div className="sn h-screen mt-0 mb-20 pb-5 " id={d.id}>
        <div className=" absolute w-full h-screen90 home shadow-2xl box-border mx-auto text-center text-gray-400 bg-yellow-300 rounded-t-3xl rounded-b ">
          <div className="  absolute inset-x-auto w-full md:w-5/12 top-24 ">
            <TypingAnim />
          </div>
          <Image />
        </div>
      </div>
    </>
  );
}
