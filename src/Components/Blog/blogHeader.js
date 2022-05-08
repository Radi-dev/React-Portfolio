import React, { useState, useEffect, useRef } from "react";

import Navbar from "../Navbar";
import { NavData } from "./blogNavData";
import { Link } from "react-router-dom";
import { HashLink as Link2 } from "react-router-hash-link";
import { ScrollPosition } from "../scroll";
import { Logo } from "./blogLogo";
import { MenuIcon as Menu } from "../menuIcon";

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

export default function Header({ loggedIn }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const menuClick = () => setOpen(!open);
  OnClickOutside(ref, () => setOpen(false));
  let link = "#";
  let scrollPosition = ScrollPosition();
  if (loggedIn) {
    if (NavData.includes({ title: "Admin", link: "/blog/admin" })) {
    } else NavData.push({ title: "Admin", link: "/blog/admin" });
  }

  return (
    <section className=" ">
      <Link to={"/"}>
        <Logo
          stroke=""
          className="absolute left-0 top-0 z-10 transition-all pt-4 duration-1000 
        rounded-2xl bg-g ray-300 stroke-current text-black w-2/12 md:w-14 sm:w-1/12"
        />
      </Link>
      <div id="top" className="header sticky top-0 z-10 mx-3">
        <div className="absolute top-0 m-0 mt-3 right-0">
          <div className="p-1 w-max rounded-md ">
            <div
              className={` ${
                scrollPosition > 50
                  ? "bg-prim2Dark scale-75 shadow-lg"
                  : "bg-transparent"
              } lg:hidden transform transition-all ease-in-out box-border cursor-pointer opacity-70 absolute p-1 px-2 md:p-2 right-0 w-12 h-12  rounded-full `}
              onClick={menuClick}
            >
              <Menu />
            </div>
            <div
              className={`${
                scrollPosition > 50
                  ? "bg-prim2Dark p-2 shadow-lg"
                  : "bg-transparent"
              }  rounded-xl transition-all pt-4 ease-in-out lg:flex hidden`}
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
    </section>
  );
}
