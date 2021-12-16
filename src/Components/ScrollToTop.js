import { useState } from "react";

import { ScrollPosition } from "./scroll";
const ScrollToTop = (params) => {
  const position = ScrollPosition();
  const [top, setTop] = useState(true);

  const scrolled = () => {
    if (top === true && position > 700) {
      setTop(false);
      console.log("top2 is: " + top);
    } else if (top === false && position < 700) {
      setTop(true);
    }
  };

  return (
    <div
      className={` ${
        top ? "hidden" : ""
      } fixed z-20 w-12 h-12 p-1 delay-1000 transition opacity-50 duration-1000 text-xl bottom-10 right-10 bg-gray-500 rounded-full`}
      onScroll={scrolled()}
    >
      <p>Top</p>
    </div>
  );
};
export default ScrollToTop;
