import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link2 } from "react-router-hash-link";
import ScrollToTop from "./ScrollToTop";

function Setup() {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef();
  const setupClick = () => setOpenModal(!openModal);
  const closeClick = () => setOpenModal(false);

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
        className="sec shadow-lg fixed hover:scale-110 cursor-pointer transform -rotate-90 rounded-3xl px-3 py-1 z-20 bottom-1/4 left-1  bg-gray-1 00 text-xs text-gray-300"
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

      <Link2 smooth to="#home">
        <ScrollToTop />
      </Link2>
    </>
  );
}

export default Setup;
