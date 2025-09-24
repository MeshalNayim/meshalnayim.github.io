import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

import React from "react";


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Sections with translucent overlay */}
      <Navbar/ >
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Publications />
      <Contact />
    </div>
  );
}
