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
            <div className="flex flex-col font-mono items-center w-11/12 lg:w-96 py-4 md:h-full md:overflow-y-auto">
              <p className="my-5">
                Hi there, my name is Evaristus "Radi" Anarado. I'm a full stack
                software developer with a background in digital illustration.
                After a couple of years of doing illustration for comic books,
                movies and games, I switched career paths to pursue my dream of
                building cool stuff with code. I currently have over{" "}
                {new Date().getFullYear() - 2018} years of experience coding
                professionally.
              </p>
              <p className="w-full">
                <TypingAnim />
              </p>
              <br />

              <h1 className="font-medium flex gap-7 my-2 underline underline-offset-2 w-full justify-center ">
                My Skills.
              </h1>
              <ul className="my-5">
                <li>Full-stack Development</li>
                <li>Front-end Development</li>
                <li>Back-end Development</li>
                <li>Mobile Development</li>
                <li>UI/UX Design</li>
                <li>Api design</li>
                <li>Web Scraping</li>
                <li>Arduino Robotics</li>
                <li>Digital Illustration</li>
              </ul>
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
