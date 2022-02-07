import React from "react";
import BlogHome from "./blogHome";
import Post from "./blogPost";
import Header from "./blogHeader";
import Foot from "./blogFooter";
import About from "./blogAbout";
import NotFound from "./blog404";
import Home from "../Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default function Blog() {
  return (
    <div className="mother cursor-default bg-gradient-to-t from-prim2Dark to-prim2 bg-f ixed bg-co h-full font-Comfortaa px-5 py-12">
      <div className="page-conatainer h-full mx-auto w-full relative ">
        <Header />

        <Routes>
          <Route path="/" element={<BlogHome />} />
          <Route
            path="/:id"
            element={
              <Post
                data={[
                  { name: "Onitakiun", ty: "erghji" },
                  { name: "ytuieysh" },
                ]}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Foot />
      </div>
    </div>
  );
}
