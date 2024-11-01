import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Project id="project" />
      <Contact id="contact" />
    </>
  );
}

export default App;
