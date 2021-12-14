import React from "react";
import { NavData } from "./NavData";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link2 } from "react-router-hash-link";

function Navbar({ action }) {
  let link = "#";

  return (
    <div className="w-1/3 min-w-max shadow-lg z-10 py-10 h-max absolute bg-gray-50 rounded-2xl right-0 snap-start">
      <ul className="text-center flex flex-col gap-y-10">
        {" "}
        {NavData.map((val, i) => (
          <li className="px-8 bg-gray-100" key={i}>
            {val.link[0] === "#"
              ? (link = (
                  <Link2 smooth={"true"} to={val.link} onClick={action}>
                    {val.title}
                  </Link2>
                ))
              : (link = (
                  <Link to={val.link} onClick={action}>
                    {val.title}
                  </Link>
                ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
