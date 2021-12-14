import React from "react";
import { TypingAnim } from "./Typed";

export default function Home(d) {
  return (
    <>
      <div className="sn h-screen mt-0 mb-20 pb-5 " id={d.id}>
        <div className=" absolute w-full h-screen90 shadow-2xl box-border mx-auto text-center text-gray-400 bg-yellow-400 rounded-t-3xl rounded-b ">
          <TypingAnim /> Hiii
        </div>
      </div>
    </>
  );
}
