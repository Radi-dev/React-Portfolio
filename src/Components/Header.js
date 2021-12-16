import React, { useState, useEffect, useRef } from "react";

import Navbar from "./Navbar";
import { NavData } from "./NavData";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link2 } from "react-router-hash-link";
import { ScrollPosition } from "./scroll";
import ImgOrAlt from "./ImgOrAlt";

// custom Hook
function OnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const menuClick = () => setOpen(!open);
  OnClickOutside(ref, () => setOpen(false));
  let link = "#";
  let scrollPosition = ScrollPosition();

  return (
    <>
      <div
        className="absolute left-0 p-1 w-20 top-0 z-10 m-3 transition-all duration-1000 transform 
        rounded-2xl"
      >
        <ImgOrAlt src="hfd.jpg" alt="radd" style={{borderRadius:20}} />
      </div>
      <div className="header sticky top-0 z-10 mx-3">
        <div className="absolute top-0 m-0 mt-3 right-0">
          <div className="p-1 w-max rounded-md ">
            <div
              className={` ${
                scrollPosition > 50
                  ? "bg-gray-200 scale-75 shadow-lg"
                  : "bg-transparent"
              } lg:hidden transform hover:scale-110 transition-all ease-in-out p-4 box-border cursor-pointer opacity-70 absolute mr-1 right-0 w-14 h-14  rounded-full `}
              onClick={menuClick}
            >
              <ImgOrAlt src="./menu-icon.png" alt="Menu" />
            </div>
            <div
              className={`${
                scrollPosition > 50
                  ? "bg-orange-100 p-2 shadow-lg"
                  : "bg-transparent"
              }  rounded-xl transition-all ease-in-out lg:flex hidden`}
            >
              <ul className=" lg:flex gap-4">
                {NavData.map((val, i) => (
                  <li
                    className=" transform transition-all ease-in-out hover:scale-110"
                    key={i}
                  >
                    {val.link[0] === "#"
                      ? (link = (
                          <Link2 smooth={"true"} to={val.link}>
                            {val.title}
                          </Link2>
                        ))
                      : (link = <Link to={val.link}>{val.title}</Link>)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {open ? (
          <div ref={ref} className="navbar p-0 top-4 scale-y-100 opacity-100">
            <Navbar action={menuClick} />
          </div>
        ) : (
          <div ref={ref} className="navbar top-4 scale-y-0 opacity-0">
            <Navbar />
          </div>
        )}
      </div>

  
      
    </>
  );
}
