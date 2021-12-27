import React, { useEffect, useState } from "react";
import Typing from "react-typing-animation";

let data = ["a software developer.", "an illustrator.", "Radi"];
data = data.concat(data.concat(data));

const Type = () => (
  <div className="typing">
    <span>$_ I am </span>
    <Typing hideCursor={true} loop={true} className="inline">
      {data.map((data, i) => {
        return (
          <span key={i}>
            <span className={" text-" + color() + "-300"}>{data}</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={data.length} />
          </span>
        );
      })}
      <Typing.Reset />
    </Typing>
  </div>
);

//custom hook
const useTyped = (data) => {
  const [typed, setTyped] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    const nextTyped = data[0].slice(0, typed.length + 1);
    if (nextTyped === typed) return;
    const timeout = setTimeout(() => {
      setTyped(data[0].slice(0, typed.length + 1));
      setCount(count + 1);
    }, 100);
    return () => clearTimeout(timeout);
  }, [typed, data, count]);
  return typed;
};

//type component
const Type2 = (text) => {
  const type = useTyped(data);
  return (
    <>
      <span className="">$_ I am </span>
      <span className={"typing text-" + color() + "-300"}>{type}</span>
    </>
  );
};

function color() {
  const colors = ["green", "yellow", "red", "blue"];
  return colors[Math.floor(Math.random() * colors.length)];
}
export const TypingAnim = () => {
  return (
    <div
      className="sec bg -gray-900 m-2 p-3 shadow-xl text-left rounded border-t-8 
     text-gray-200 overflow-hidden font-mono h-20 break-all text-xl md:max-w-sm absolute top-1/4 inset-x-px"
    >
      <Type />
    </div>
  );
};
