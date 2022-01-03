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
      <div className="wrapper sn h-screen mt-0 mb-20 pb-5 " id={d.id}>
        <div className="card home ">
          <div className=" absolute w- full m d:w-5/12 p-1.5 w-ch30 max-w-full ">
            <div className="mb-12  text-center">
              <p>
                <h1 className=" text-black font-Shadows font-bold text-5xl ">
                  I am Radi.
                </h1>
              </p>
              <p>
                <Title text="Software developer." />
              </p>
              <p>
                <small className=" inline-flex gap-2">
                  <i>
                    <Title text="2D/3D illustrator." />
                  </i>
                  😜
                </small>
              </p>
            </div>
            <TypingAnim />
            <Image />
            <div className="flex justify-between mx-auto w-full py-1 text-sec">
              <div className="button ">Portfolio</div>
              <div className="button ">Contact me</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
