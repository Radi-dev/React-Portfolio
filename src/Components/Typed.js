import React, { useEffect, useState } from "react";
import Typing from "react-typing-animation";

let data = [
  "Python",
  "Javascript",
  "React js",
  "Django",
  "Node js",
  "MongoDB",
  "Arduino",
  "Git",
  "Photoshop",
  "Blender 3d",
  "...",
];
data = data.concat(data.concat(data));

const Type = () => (
  <div className="typing">
    <span className="p-2 text-gray-400"> Skills: ~$</span>
    <Typing hideCursor={true} loop={true} className="inline">
      {data.map((data, i) => {
        return (
          <span key={i}>
            <span className={" text-" + randColor() + "-200"}>{data}</span>
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
      <span className={"typing text-" + randColor() + "-300"}>{type}</span>
    </>
  );
};

function randColor() {
  const colors = ["green", "yellow", "red", "blue"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export const TypingAnim = () => {
  return (
    <div
      className=" h-16 mx-auto w-full p-3 shadow-xl rounded overflow-hidden
     relative"
    >
      <div className="absolute bg-white h-1/5 inset-x-0 top-0">
        {["red", "yellow", "green"].map((color, i) => (
          <div
            className={` bg-${color}-400 w-1.5 h-1.5 rounded-full float-left ml-1 mt-0.5`}
          ></div>
        ))}
      </div>
      <div
        className=" bg-gray-900 back text-left 
     text-gray-200 font-mono break-all text-xl absolute inset-x-0 h-full"
      >
        <Type />
      </div>
    </div>
  );
};
