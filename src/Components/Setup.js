import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link2 } from "react-router-hash-link";
import { ScrollPosition } from "./scroll";

let currentPos = 0;
let initPos = 0;
function Setup() {
  const [openModal, setOpenModal] = useState(false);
  const [toTop, setToTop] = useState(true);
  const [showTop, setShowTop] = useState(true);
  const ref = useRef();
  const setupClick = () => setOpenModal(!openModal);
  const closeClick = () => setOpenModal(false);
  const scrollPosition = ScrollPosition();
  const position = () => window.pageYOffset;

  const scrolling = (params) => {
    currentPos = position();
    if (currentPos > 0 || (currentPos < -0 && toTop === false)) {
      setToTop(true);
      console.log("changing to true");
    }

    console.log(toTop);
    console.log("current1: " + currentPos);
    console.log("scroll: " + position());
    if (toTop === true && scrollPosition > 200) {
      setToTop(false);
      setShowTop(false);
      console.log(toTop);
      setTimeout(() => setShowTop(true), 4000);
      console.log(showTop);
    } else {
      console.log("nothing change");
    }
    initPos = position();
    console.log("current2: " + currentPos);
  };

  /* useEffect(() => {
    console.log(toTop);
    if (scrollPosition > 200 && toTop) setToTop(false);
    console.log(toTop);
    setTimeout(() => setToTop(true), 2000);
    console.log(toTop);
    return () => {
      clearTimeout();
    };
  }, [toTop, scrollPosition]);*/
  const themeModalJsx = (
    <>
      {" "}
      <div
        className=" absolute cursor-pointer text-gray-500 font-extrabold top-4 right-6 bg-gray-200 text-center leading-10 h-10 w-10 transform hover:scale-110 rounded-full"
        onClick={closeClick}
      >
        X
      </div>
      <p>This is setup fg fhf</p>
    </>
  );
  return (
    <>
      <div
        className=" shadow-lg fixed hover:scale-110 cursor-pointer transform -rotate-90 rounded-3xl px-3 py-1 z-20 bottom-1/4 left-1  bg-gray-100 text-xs text-gray-400"
        onClick={setupClick}
      >
        <p>Theme</p>
      </div>
      {openModal ? (
        <div
          className="theme-modal bg-white bottom-0 md:bottom-1/4 
        lg:bottom-0 "
        >
          {themeModalJsx}
        </div>
      ) : (
        <div
          className=" theme-modal -bottom-full 
        lg:-bottom-full "
        >
          {themeModalJsx}
        </div>
      )}

      <Link2
        smooth
        to="#home"
        className={` ${
          showTop ? "hidden" : ""
        } fixed z-20 w-12 h-12 p-1 text-xl bottom-10 right-10 bg-gray-500 rounded-full`}
      >
        <div onScroll={scrolling()}>Top</div>
      </Link2>
    </>
  );
}

export default Setup;
