import React, { useState, useEffect } from "react";
import { TypingAnim } from "./Typed";
import ImgOrAlt from "./ImgOrAlt";
import { Title } from "./title";

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
    //let count = 0;
    //let currentShape;
    //let add = +1;
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
      className={`transform mx-auto transition-all rounded-md shadow-xl duration-700 ease-linear overflow-hidden w-1/3 md:w-1/4 lg:w-40 h -40 ${shape}`}
    >
      <ImgOrAlt src="head.jpg" alt="Head" className="hidden" />
    </div>
  );
};

export default function Home(d) {
  return (
    <>
      <div className="wrapper h-screen mt-0 " id={d.id}>
        <div className=" home card">
          <div className="grid place-items-center absolute p-1.5 w-ch30 md:w-3/5 max-w-full md:h-1/2 ">
            <div className="md:absolute md:left-0 md:w-2/5 p-1 md:pr-4 ">
              <div className=" mb-2 text-center md:text-right">
                <h1>
                  <p className=" text-black font-Shadows font-bold text-5xl ">
                    I am Radi.
                  </p>
                </h1>
              </div>
              <div className=" mb-12 md:m-0  text-center md:text-right">
                <Title text="Software developer." />
                <div>
                  <small className=" inline-flex gap-2">
                    <i>
                      <Title text="2D/3D illustrator." />
                    </i>
                    😜
                  </small>
                </div>
              </div>
            </div>
            <div className=" md:absolute right-0 w-full md:w-3/5 max-w-full">
              <div className=" md:abso lute left-0 md:w-full md:max-w-max ">
                <TypingAnim />
                <Image />
                <div className=" bottom-0 flex justify-between mx-auto w-full py-1 text-sec">
                  <div className="button border-sec ">Portfolio</div>
                  <div className="button ">Contact me</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
