import { useEffect, useState } from "react";
export const Title = ({ text }) => {
  const greekAlpha = [
    "Α",
    "α",
    "Β",
    "β",
    "Γ",
    "γ",
    "Δ",
    "δ",
    "Ε",
    "ε",
    "Ζ",
    "ζ",
    "Η",
    "η",
    "Θ",
    "θ",
    "Ι",
    "ι",
    "Κ",
    "κ",
    "Λ",
    "λ",
    "Μ",
    "μ",
    "Ν",
    "ν",
    "Ξ",
    "ξ",
    "Ο",
    "ο",
    "Π",
    "π",
    "Ρ",
    "ρ",
    "Σ",
    "σ",
    "ς",
    "Τ",
    "τ",
    "Υ",
    "υ",
    "Φ",
    "φ",
    "Χ",
    "χ",
    "Ψ",
    "ψ",
    "Ω",
    "ω",
  ];
  const [titleText, setTitleText] = useState(null);
  const title = text.split("");
  useEffect(() => {
    setTimeout(() => setTitleText(text), 800);

    return () => {
      clearTimeout();
    };
  });

  return (
    <div className="">
      {titleText
        ? title.map((letter, i) => (
            <span
              className=" transform hover:scale-150 transition-all de lay-500"
              key={i}
            >
              {letter}
            </span>
          ))
        : title.map((letter, i) =>
            letter === " " ? (
              <span> </span>
            ) : (
              <span>
                {greekAlpha[Math.floor(Math.random() * greekAlpha.length)]}
              </span>
            )
          )}
    </div>
  );
};

/*import { useState } from "react";

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
    <div className={` ${!isScrolling || !top ? "hidden" : ""} `}>
      <p>Top</p>
    </div>
  );
};

export default ScrollToTop;*/
