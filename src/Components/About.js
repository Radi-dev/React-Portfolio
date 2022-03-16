import React from "react";
import { TypingAnim } from "./Typed";
import ImgOrAlt from "./ImgOrAlt";
import { Title } from "./title";

import Fade from "react-reveal/Fade";

const Image = () => {
  return (
    <div className="border mx-auto mb-3 rounded-md shadow-xl overflow-hidden w-full lg:w-80 ">
      <ImgOrAlt src="head.jpg" alt="Head" className="w-full" />
    </div>
  );
};
export default function About(d) {
  return (
    <div className=" wrapper h-screen m-0" id={d.id}>
      <div className=" card item s-start ">
        <h1 className="font-bold flex gap-7 my-2 underline underline-offset-2 w-full justify-center ">
          <div className=" w-11/12 lg:w-96 text-center">
            <Title text="Who I Be" />
          </div>
          <div className=" w-11/12 lg:w-96 hidden md:flex text-center"></div>
        </h1>
        <div className=" grid md:grid-cols-2 shadow-inner gap-7 items-start px-6 h-full overflow-y-auto md:overflow-hidden">
          <Fade bottom cascade>
            <div className="flex flex-col items-center w-11/12 lg:w-96 py-4 md:h-full md:overflow-y-auto">
              <p className="my-5">
                In this post, I will present a step by step procedure to deploy
                a Django project to shared hosting. This is one of the options
                that you can avail to deploy yourIn this post, I will present a
                step by step procedure to deploy a Django project to shared
                hosting. This is one of the options that you can avail to deploy
                yourIn this post, I will present a step by step procedure to
                deploy a Django project to shared hosting. This is one of the
                options that you can avail to deploy your
              </p>
              <p className="w-full">
                <TypingAnim />
              </p>
              <p className="my-5">
                In this post, I will present a step by step procedure to deploy
                a Django project to shared hosting. This is one of the options
                that you can avail to deploy yourIn this post, I will present a
                step by step procedure to deploy a Django project to shared
                hosting. This is one of the options that you can avail to deploy
                yourIn this post, I will present a step by step procedure to
                deploy a Django project to shared hosting. This is one of the
                options that you can avail to deploy your
              </p>
            </div>
            <Fade right>
              <Image />
            </Fade>
          </Fade>
        </div>
      </div>
    </div>
  );
}
