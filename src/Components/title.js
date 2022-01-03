import { useState } from "react";
import { ScrollPosition } from "./scroll";

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
  const [titleText, setTitleText] = useState(text);
  const title = text.split("");

  let timeout = null;
  const [isScrolling, setIsScrolling] = useState(false);
  const clickHandler = () => {
    setTitleText("");

    timeout = setTimeout(() => {
      setTitleText(text);
    }, 1000);
  };
  const onScroll = () => {
    clearTimeout(timeout);
    if (!isScrolling) {
      setTitleText("");
    }
    timeout = setTimeout(() => {
      setIsScrolling(true);
      setTitleText(text);
    }, 50);
  };
  ScrollPosition(onScroll);
  return (
    <div className="" onClick={clickHandler}>
      {titleText === text
        ? title.map((letter, i) => (
            <span className=" transform hover:scale-150 transition-all" key={i}>
              {letter}
            </span>
          ))
        : title.map((letter, i) =>
            letter === " " ? (
              <span key={i}> </span>
            ) : (
              <span key={i}>
                {greekAlpha[Math.floor(Math.random() * greekAlpha.length)]}
              </span>
            )
          )}
    </div>
  );
};
