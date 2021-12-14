import React from "react";

export default function About(d) {
  return (
    <div className="h-screen m-0 sn " id={d.id}>
      <div className=" relative w-full shadow-2xl my-auto h-screen90 rounded text-center text-gray-800 bg-green-500 ">
        <div className="absolute inset-y-1/2 w-full">About</div>
      </div>
    </div>
  );
}