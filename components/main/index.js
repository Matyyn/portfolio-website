import React from "react";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import About from "@/components/home/About";
import Expertise from "@/components/home/Expertise";

function Main() {
  return (
    <div className="mt-20 space-y-32" id="main-section">
      <About/>
      <Projects />
      <Skills />
      <Expertise />
    </div>
  );
}

export default Main;
