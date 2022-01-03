import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link2 } from "react-router-hash-link";
import ShowOnScroll from "./ShowOnScroll";

function Setup() {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef();
  const setupClick = () => setOpenModal(!openModal);
  const closeClick = () => setOpenModal(false);

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
      <ShowOnScroll>
        <div
          className="button se c shadow-lg fixed hover:scale-110 cursor-pointer transform -rotate-90 rounded-lg px-3 py-1 z-20 bottom-1/4 left-1  bg-gray-50 text-xs text-gray-600"
          onClick={setupClick}
        >
          <p>Theme</p>
        </div>
      </ShowOnScroll>
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
        <ShowOnScroll checkTop={true}>
          <div className="fixed z-20 w-12 h-12 p-1 delay-1000 transition opacity-50 duration-1000 text-xl bottom-10 right-10 bg-gray-500 rounded-full">
            <p>Top</p>
          </div>
        </ShowOnScroll>
      </Link2>
    </>
  );
}

export default Setup;
