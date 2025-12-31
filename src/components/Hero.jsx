import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

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

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Master's in Data Science at UC San Diego
        </p>
        <p className="text-blue-300 text-lg leading-relaxed mb-6">
         Actively seeking internships for summer 2026
        </p>

        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
          I hold a Bachelor’s degree in Computer Science, where I  gained over a year of combined internship and remote industry experience. During this period, I worked with organizations in Qatar, including Ooredoo, a leading telecommunications company, and Alanees, an e-commerce platform, contributing to production systems across AI automation, data warehousing, data engineering, and ML engineering.

I am currently pursuing a Master’s in Data Science at UC San Diego to deepen my expertise in large-scale data systems and AI. Alongside my studies, I work as a Research Assistant at UCSD under Dr. Kun Zhou, collaborating with faculty associated with Prof. Zhiting Hu and Prof. Beiwei Huang. My research focuses on improving AI agent performance through Model Context Protocol (MCP) tool usage, benchmarking agent behavior, and evaluating system-level reliability and efficiency.

My research work has been recognized with a Best Paper Award at the IEEE IACIS Conference 2024.
          </p>
        </div>
      </motion.div>

      {/* Right — Recent Highlights */}
<motion.div
  className="w-full md:max-w-md bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:border-teal-400/30 transition-all duration-300"
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
>
  <h2 className="text-2xl md:text-3xl font-semibold text-teal-300 mb-6 flex items-center">
    <span className="mr-3">✨</span>
    Recent Highlights
  </h2>

  <div className="bg-white/5 p-4 rounded-lg border-l-4 border-teal-400 hover:bg-white/10 transition-all duration-300">
      <h3 className="font-semibold text-teal-200 text-lg mb-2">
        Research Assistant — UC San Diego (Sept 2025)
      </h3>
      <p className="text-gray-200 text-sm">
        Advised by Dr. Kun Zhou, improving AI Agents MCP tool usage, analysing Agent behaviour and developing benchmarking tools
      </p>
    </div>

  

    <div className="bg-white/5 p-4 rounded-lg border-l-4 border-teal-400 hover:bg-white/10 transition-all duration-300">
      <h3 className="font-semibold text-teal-200 text-lg mb-2">
        MS in Data Science — UC San Diego (Sept 2025)
      </h3>
      <p className="text-gray-200 text-sm">
        Enrolled in the MSDS program at UCSD, focusing on advanced AI systems, LLMs, and agentic reinforcement learning.
      </p>
    </div>
  

  
  <div className="space-y-6">
    <div className="bg-white/5 p-4 rounded-lg border-l-4 border-teal-400 hover:bg-white/10 transition-all duration-300">
      <h3 className="font-semibold text-teal-200 text-lg mb-2">
        Data Analyst Intern — Ooredoo (June 2025)
      </h3>
      <p className="text-gray-200 text-sm">
        Joined Ooredoo as a Data Analyst Intern.
      </p>
    </div>



    <div className="bg-white/5 p-4 rounded-lg border-l-4 border-cyan-400 hover:bg-white/10 transition-all duration-300">
      <h3 className="font-semibold text-teal-200 text-lg mb-2">
        Best Paper Award — IEEE IACIS 2024
      </h3>
      <p className="text-gray-200 text-sm">
        Received the Best Paper Award for contributions to innovative AI-driven research.
      </p>
    </div>
  </div>

  {/* Skills Preview remains the same */}
  <div className="mt-8 pt-6 border-t border-white/10">
    <h3 className="font-semibold text-teal-300 mb-3">Core Expertise</h3>
    <div className="flex flex-wrap gap-2">
      {[
  "Python",
  "SQL",
  "PyTorch",
  "Machine Learning",
  "LLM Systems (RAG, Agents, MCP)",
  "Data Engineering (PySpark, Data Pipelines)",
  "MLOps (MLflow, Model Deployment)",
  "AWS",
  "Docker",
  "FastAPI",
  "Computer Vision"
].map((skill) => (
        <span 
          key={skill}
          className="px-3 py-1 bg-teal-400/10 text-teal-300 rounded-full text-sm border border-teal-400/20 hover:bg-teal-400/20 transition-colors duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</motion.div>
    </section>
  );
}
