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
      <div className=" card items-start">
        <h1 className="font-bold my-2">
          <Title text="Who I Be" />
        </h1>
        <div className="grid md:grid-cols-2 gap-7 place-items-center items-start px-6 h-full overflow-y-auto">
          <Fade bottom cascade>
            <Image />
            <div className="flex flex-col items-center w-11/12 md:w-96 py-4">
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
              <TypingAnim />
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
          </Fade>
        </div>
      </div>
    </div>
  );
}
