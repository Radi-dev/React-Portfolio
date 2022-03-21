import React, { useState } from "react";
import BlogHome from "./blogHome";
import Post from "./blogPost";
import Header from "./blogHeader";
import Foot from "./blogFooter";
import About from "./blogAbout";
import Login from "./blogLogin";
import Admin from "./blogAdmin";
import NotFound from "./blog404";
import Home from "../Home";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

export default function Blog() {
  const [loggedIn, setLoggedIn] = useState(true);
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
          <Route path="/about" element={<About id="about" />} />
          <Route path="/login" element={<Login id="login" />} />
          <Route
            path="/admin"
            element={
              loggedIn ? (
                <Admin id="admin" />
              ) : (
                <Navigate to="/blog/login" replace />
              )
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Foot />
      </div>
    </div>
  );
}
