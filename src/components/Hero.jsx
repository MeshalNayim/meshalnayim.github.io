import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import resume from "../assets/Data_Scientist__Copy_.pdf";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center px-8 gap-12 py-12 max-w-7xl mx-auto"
    >
      {/* Left — About Me */}
      <motion.div
        className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profile}
          alt="Meshal Nayim"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-2xl border-4 border-teal-400 object-cover mb-6 hover:scale-105 transform transition duration-500 hover:shadow-teal-400/30"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Meshal.
        </h1>

        <p className="text-gray-300 text-lg mb-2">
          Master's in Data Science at UC San Diego
        </p>

        <p className="text-blue-300 text-lg mb-4">
          Actively seeking internships for summer 2026
        </p>

        {/* 🔗 Resume + Social Links */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center md:justify-start mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Resume */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-400/10 text-teal-300 border border-teal-400/30 hover:bg-teal-400/20 transition"
          >
            📄 Resume
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/meshal-nayim-b13750231/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 text-blue-300 border border-blue-400/30 hover:bg-blue-400/20 transition"
          >
            in LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MeshalNayim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-400/10 text-gray-200 border border-gray-400/30 hover:bg-gray-400/20 transition"
          >
            GitHub
          </a>

          {/* Email */}
          <a
            href="mailto:mnayim@ucsd.edu"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-400/20 transition"
          >
            ✉ Email
          </a>
        </motion.div>

        <div className="text-gray-300 text-lg leading-relaxed space-y-4">
          <p>
            I hold a Bachelor’s degree in Computer Science, with over a year of
            combined internship and remote industry experience. I worked with
            organizations in Qatar, including Ooredoo and Alanees, contributing
            to AI automation, data engineering, and ML systems.
          </p>

          <p>
            I am currently pursuing a Master’s in Data Science at UC San Diego
            and work as a Research Assistant under Dr. Kun Zhou, who is 
            associated with Prof. Zhiting Hu and Prof. Beiwei Huang.
            My research focuses on AI agents, MCP tool usage, benchmarking, and
            system-level reliability.
          </p>

          <p>
            My research has been recognized with a Best Paper Award at the IEEE
            IACIS Conference 2024.
          </p>
        </div>
      </motion.div>

      {/* Right — Recent Highlights */}
      <motion.div
        className="w-full md:max-w-md bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-300 mb-6">
          ✨ Recent Highlights
        </h2>

        <div className="space-y-4">
          <div className="bg-white/5 p-4 rounded-lg border-l-4 border-teal-400">
            <h3 className="font-semibold text-teal-200">
              Research Assistant — UC San Diego (Sept 2025)
            </h3>
            <p className="text-gray-200 text-sm">
              Improving AI agents MCP tool usage and benchmarking agent behavior.
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded-lg border-l-4 border-teal-400">
            <h3 className="font-semibold text-teal-200">
              MS in Data Science — UC San Diego
            </h3>
            <p className="text-gray-200 text-sm">
              Focus on advanced AI systems, LLMs, and agentic RL.
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded-lg border-l-4 border-cyan-400">
            <h3 className="font-semibold text-teal-200">
              Best Paper Award — IEEE IACIS 2024
            </h3>
            <p className="text-gray-200 text-sm">
              Awarded for innovative AI-driven research.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
