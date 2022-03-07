import React, { useState, useEffect } from "react";
import { TypingAnim } from "./Typed";
import ImgOrAlt from "./ImgOrAlt";
import { Title } from "./title";
import { HashLink as Link2 } from "react-router-hash-link";
import { NavData } from "./NavData";
import Fade from "react-reveal/Fade";
import Header from "./Header";

const Image = () => {
  return (
    <div
      className={` mx-auto transition-all rounded-md shadow-xl duration-700 ease-linear overflow-hidden w-1/3 md:w-1/4 lg:w-40 h -40 `}
    >
      <ImgOrAlt src="head.jpg" alt="Head" className="hidden" />
    </div>
  );
};

export default function Home(d) {
  return (
    <>
      <div className="wrapper h-screen mt-0 " id={d.id}>
        <div className=" home card relative">
          <Header />
          <Fade bottom cascade>
            <div className="grid place-items-center absolute p-1.5 w-ch30 md:w-3/5 max-w-full">
              <div className="md:absolute md:left-0 md:w-2/5 p-1 md:pr-4 ">
                <div className=" mb-2 text-center md:te xt-right">
                  <h1>
                    <p className=" font-mono fortaa font-bold text-xl text-center ">
                      Hi there.
                    </p>
                    <p className=" text-black font-Shadows font-bold text-5xl ">
                      I am Radi.
                    </p>
                  </h1>
                </div>
                <div className=" mb-12 md:m-0  text-center md:te xt-right it alic ">
                  <Title text="I build things for " />
                  <div>
                    <small className="  gap-2">
                      <p className="not-itali c text-black ">
                        <Title text="the digital realm," />
                      </p>
                      <Link2
                        smooth={"true"}
                        to={NavData.find((x) => x.title === "About").link}
                      >
                        <p className="not-itali c text-black inline-flex">
                          <Title text="I also" />
                          <span className=" text-blue-500 ">......</span>
                        </p>
                        🤭
                      </Link2>
                    </small>
                  </div>
                </div>
              </div>
              <div className=" md:absolute right-0 w-full md:w-3/5 max-w-full">
                <div className=" md:abso lute left-0 md:w-full md:max-w-max ">
                  <TypingAnim />
                  <Image />
                  <div className=" bottom-0 flex justify-between mx-auto w-full py-1 text-sec">
                    <Link2
                      smooth={"true"}
                      to={NavData.find((x) => x.title === "Projects").link}
                    >
                      <div className="button border-sec ">Portfolio</div>
                    </Link2>
                    <Link2
                      smooth={"true"}
                      to={NavData.find((x) => x.title === "Contact").link}
                    >
                      <div className="button ">Contact me</div>
                    </Link2>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
