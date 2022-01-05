import React from "react";
import "./Tailwind.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Setup from "./Components/Setup";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog/blogHome";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const pagejsx = (
    <div
      className="mother cursor-default bg-gradient-to-t from-prim2Dark to-prim2 bg-fixed bg-co h-full font-Comfortaa px-5 py-12"
      id="top"
    >
      <div className="page-conatainer h-full mx-auto w-full relative ">
        <Header />
        <Setup />
        <Home id="home" />
        <Projects id="projects" />
        <About id="about" />
        <Contact id="contact" />
        <Footer />
      </div>
    </div>
  );
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={pagejsx} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}
