import React from "react";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Setup from "./Components/Setup";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Suggested from "./Components/suggested";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog/blog";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function App() {
  const pagejsx = (
    <div className="mother cursor-default bg-gradient-to-t from-prim2Dark to-prim2 bg-f ixed bg-co h-full font-Comfortaa px-5 py-12">
      <div className="page-conatainer h-full mx-auto w-full relative ">
        <Header />

        <Setup />

        <Home id="home" />

        <Fade bottom>
          <Projects id="projects" />
        </Fade>
        <Fade bottom>
          <About id="about" />
        </Fade>
        <Fade bottom>
          <Contact id="contact" />
        </Fade>
        <Fade bottom>
          <Suggested id="suggested" />
        </Fade>
        <Fade bottom>
          <Footer />
        </Fade>
      </div>
    </div>
  );
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={pagejsx} />
          <Route path="/blog/*" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}
