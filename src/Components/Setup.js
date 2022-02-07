import React, { useState } from "react";
import { HashLink as Link2 } from "react-router-hash-link";
import ShowOnScroll from "./ShowOnScroll";
import Fade from "react-reveal/Fade";
import { SocialLinks } from "./NavData";

function Setup() {
  const [openModal, setOpenModal] = useState(false);
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
        <Fade left cascade>
          <div className="bor der grid gap-5 shad ow-lg fixed cursor-pointer transform rounded-lg px-3 py-1 z-20 bottom-1/4 left-2  ">
            {SocialLinks.map((social, i) => (
              <a key={i} href={social.url} target="_blank" rel="noreferrer">
                <div className="butt on sh adow-lg  hover:scale-110 cursor-pointer  rounded-lg px-3 py-1 z-20 bottom-1/4 left-1  bg -gray-50 text-xs text-gray-600">
                  <div className=" h-6 ">{social.icon}</div>
                </div>
              </a>
            ))}

            <div
              className="butt on sha dow-lg  hover:scale-110 cursor-pointer  rounded-lg px-3 py-1 z-20 bottom-1/4 left-1  bg -gray-50 text-xs text-gray-600"
              onClick={setupClick}
            >
              <img alt="" src="setting.svg" className=" h-6 " />
            </div>
          </div>
        </Fade>
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
          <Fade bottom>
            <div className="fixed z-20 w-12 h-12 p-1 delay-1000 transition opacity-50 duration-1000 text-xl bottom-10 right-10 items-center  bg-sec rounded-full">
              <p>Top</p>
            </div>
          </Fade>
        </ShowOnScroll>
      </Link2>
    </>
  );
}

export default Setup;
