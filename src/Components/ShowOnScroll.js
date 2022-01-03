import { useState } from "react";

import { ScrollPosition } from "./scroll";

const ShowOnScroll = ({
  checkTop = null,
  delay = 3000,
  topPosition = 700,
  ...props
}) => {
  let timeout = null;
  const [isScrolling, setIsScrolling] = useState(false);
  const onScroll = () => {
    clearTimeout(timeout);
    //const scrolling = isScrolling;
    !isScrolling ? setIsScrolling(true) : console.log();
    timeout = setTimeout(() => {
      setIsScrolling(false);
    }, delay);
  };

  ScrollPosition(onScroll);
  let top = ScrollPosition() > topPosition;

  return checkTop ? (
    <div className={` ${!isScrolling || !top ? "hidden" : ""} `}>
      {props.children}
    </div>
  ) : (
    <div className={` ${!isScrolling ? "hidden" : ""} `}>{props.children}</div>
  );
};

export default ShowOnScroll;
