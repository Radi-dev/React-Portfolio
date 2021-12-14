import React from "react";

export default function Blog(d = "blog") {
  return (
    <div className="h-full m-0 bg-gr ay-600 bg-fawn " id={d.id}>
      <div className=" relative w-full shadow-2xl my-auto h-screen90 rounded text-center text-gray-800 bg-green-500 ">
        <div className="absolute inset-y-1/2 w-full">Blog</div>
        {console.log("On blog now")}
      </div>
    </div>
  );
}
