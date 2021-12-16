import { useState, useEffect, useRef } from "react";
import { debounce } from "lodash";
import { ScrollPosition } from "./scroll";
const ScrollToTop = (params) => {
  const [toTop, setToTop] = useState(true);
  const [showTop, setShowTop] = useState(true);
  const position = ScrollPosition();

  let currentPos = 0;
  let initPos = 0;

  const scrolled = () => {
    if (toTop === true && position > 200) {
      setToTop(false);
      setShowTop(false);
      console.log(toTop);
      setTimeout(() => setShowTop(true), 2000);
      console.log(showTop);
    } else {
      console.log("nothing change");
    }
    //initPos = position;
    console.log("current2: " + currentPos);
  };

  return (
    <div
      className={` ${
        showTop ? "hidden" : ""
      } fixed z-20 w-12 h-12 p-1 text-xl bottom-10 right-10 bg-gray-500 rounded-full`}
      onScroll={scrolled()}
    >
      <p>Top</p>
    </div>
  );
};
export default ScrollToTop;
/**
 *     const scrollPosition = ScrollPosition();
    const position = () => window.pageYOffset;
  
    const scrolling = (params) => {
      //currentPos = position();
      if (currentPos > 0 || (currentPos < -0 && toTop === false)) {
        setToTop(true);
        console.log("changing to true");
      }
  
      console.log(toTop);
      console.log("current1: " + currentPos);
      console.log("scroll: " + position());
      

 */
