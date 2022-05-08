import { useState, useEffect } from "react";

export const ScrollPosition = (scrollHandler = null) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = scrollHandler
    ? scrollHandler
    : () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
      };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return scrollPosition;
};
