import React from "react";
import { useParams } from "react-router";

export default function Post({ data, ...props }) {
  const params = useParams();
  const id = Number(params.id);
  return (
    <div className=" h-screen bottom-0 bg-prim2">
      <div className="absolute inset-y-1/2 text-center w-full">
        {data[id] ? data[id].name : "No data"}
      </div>
    </div>
  );
}
