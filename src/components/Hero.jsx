import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center px-8 gap-12"
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
          alt="Profile"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-lg border-4 border-teal-400 object-cover mb-6 hover:scale-105 transform transition duration-500"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m{" "}
          <TypeAnimation
            sequence={["Meshal Nayim", 2000, "a Data Science Enthusiast", 2000]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            className="text-teal-400"
          />
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          I’m Meshal Nayim. I completed my undergraduate degree in Computer Science and am now pursuing a Master’s in Data Science at UC San Diego.

Over the past two years, I have built experience through internships and remote work. I have worked as a data analyst, data engineer, and on machine learning and AI solutions.

My work has been mainly in the telecommunications and e-commerce industries, where I built data pipelines, created dashboards, and developed automation and predictive models.

Recently, I’ve become interested in natural language processing and computer vision, and I’m exploring how these fields can be applied to healthcare data science.

I enjoy working with data at every level — from organizing and understanding it to using advanced models for new insights — and I’m drawn to projects where research and real-world impact meet.
        </p>
      </motion.div>

      {/* Right — Current Work */}
      <motion.div
        className="w-full md:w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-300 mb-4">
          Currently Working On 🚀
        </h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2 text-lg">
          <li>A Comparative Study of CNN and Transformer Architectures for Thyroid Cancer Diagnosis</li>
          <li>Cross-Lingual Emotion Detection: An Explainable AI Approach</li>
        </ul>
      </motion.div>
    </section>
  );
}
