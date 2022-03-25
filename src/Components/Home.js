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
          <div className=" w-11/12 md:w-96 p-2 h-full overflow-hidden ">
            <Fade bottom cascade>
              <div className="">
                <span className="flex items-center relative">
                  <div className="absolute h-screen w-0.5 opacity-20 bg-prim2Dark"></div>
                </span>
                <div className=" mb-2">
                  <h1>
                    <p className=" font-mono text-xl">
                      <Title text="Hi " />
                      <Title text="there, " />
                    </p>
                    <span className="flex items-center relative">
                      <div className="absolute w-sc reen w-[calc(100%/1.3)] h-0.5 opacity-10 bg-prim2Dark"></div>
                    </span>
                    <br />
                    <p className="gap-2 flex items-center font-black text-6xl text-slate-800 ">
                      <span className=" font-mono text-xl text-slate-600">
                        I am
                      </span>
                      Radi.
                      <span className="flex items-center">
                        <div className="absolute h-screen w-0.5 opacity-20 bg-prim2Dark"></div>
                      </span>
                    </p>
                  </h1>
                </div>
                <br />
                <div className=" mb-12 md:mb-0 font-sans ml-5">
                  <p className=" text-[9vw] md:text-4xl font-medium text-slate-600">
                    I build things for
                  </p>
                  <div>
                    <p className=" font-bold text-[7vw] md:text-4xl text-slate-500 ">
                      the digital realm.
                    </p>
                    <p className=" italic text-[3.8vw] md:text-lg inline text-slate-400 ">
                      <span className="">
                        {`A fullstack developer with a background in digital illustration`.slice(
                          0,
                          80
                        )}
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

                <div className=" ml-5 flex justify-start mx-auto text-sec">
                  <Link2
                    smooth={"true"}
                    to={NavData.find((x) => x.title === "Projects").link}
                  >
                    <div className="button ">Portfolio</div>
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
