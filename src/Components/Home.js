import React, { useState, useEffect } from "react";

import { Title } from "./title";
import { HashLink as Link2 } from "react-router-hash-link";
import { NavData } from "./NavData";
import Fade from "react-reveal/Fade";
import Header from "./Header";

export default function Home(d) {
  return (
    <>
      <div className="wrapper h-screen mt-0 " id={d.id}>
        <div className=" home card items-start relative">
          <div className="h-12 ">
            <Header />
          </div>
          <div className=" w-11/12 md:w-96 p-2 h-full overflow-y-auto ">
            <Fade bottom cascade>
              <div className="">
                <div className=" mb-2">
                  <h1>
                    <p className=" font-mono fortaa fo nt-bold text-xl">
                      <Title text="Hi " />
                      <Title text="there," />
                    </p>
                    <p className=" text-black font-Shadows font-black text-6xl ">
                      I am Radi.
                    </p>
                  </h1>
                </div>
                <div className=" mb-12 md:m-0 font-sans md:te xt-right">
                  <p className=" text-[9vw] md:text-5xl font-medium">
                    I build things for
                  </p>
                  <div>
                    <p className=" font-bold text-[7vw] md:text-4xl ">
                      the digital realm.🤭
                    </p>
                    <p className="not-itali text-[3.8vw] md:text-lg fl ex inline ">
                      <span className="">
                        {`In this post, I will present a step by step procedure to
                        deploy a Django project to shared hosting. This is one
                        of the options that you can avail to deploy yourIn this
                        post, I will present a step by step procedure to deploy
                        a Django project to shared hosting. This is one of the
                        options that you can avail to deploy yourIn this post, I
                        will present a step by step procedure to deploy a Django
                        project to shared hosting. This is one of the options
                        that you can avail to deploy your`.slice(0, 150)}
                      </span>
                      <Link2
                        smooth={"true"}
                        to={NavData.find((x) => x.title === "About").link}
                      >
                        <span className=" text-blue-500 "> ......more</span>
                      </Link2>
                    </p>
                  </div>
                </div>

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
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
