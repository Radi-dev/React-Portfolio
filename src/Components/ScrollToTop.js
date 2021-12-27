import { useState } from "react";

import { ScrollPosition } from "./scroll";

const ScrollToTop = (params) => {
  let timeout = null;
  const [isScrolling, setIsScrolling] = useState(false);
  const onScroll = () => {
    clearTimeout(timeout);
    //const scrolling = isScrolling;
    !isScrolling ? setIsScrolling(true) : console.log();
    timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 3000);
  };

  ScrollPosition(onScroll);
  let top = ScrollPosition() > 700;

  return (
    <div
      className={` ${
        !isScrolling || !top ? "hidden" : ""
      } fixed z-20 w-12 h-12 p-1 delay-1000 transition opacity-50 duration-1000 text-xl bottom-10 right-10 bg-gray-500 rounded-full`}
    >
      <p>Top</p>
    </div>
  );
};

export default ScrollToTop;
