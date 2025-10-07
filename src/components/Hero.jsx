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
          Hi, I'm{" "}
          <TypeAnimation
            sequence={[
              "Meshal Nayim",
              2000,
              "a Data Scientist",
              2000,
              "an AI Enthusiast",
              2000,
              "a Problem Solver",
              2000
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            className="text-teal-400 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
          />
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Master's in Data Science at UC San Diego | Bridging AI Research with Real-World Impact
        </p>

        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
           I’m passionate about building intelligent systems that bridge data, automation, and real-world impact. My work spans machine learning, LLMs, and applied AI research, with experience developing end-to-end ML solutions in industry. I’m currently pursuing my MS in Data Science at UC San Diego, where I’m exploring how AI can advance fields like bioinformatics and data-driven decision systems.
          </p>
        </div>
      </motion.div>

      {/* Right — Current Work */}
      <motion.div
        className="w-full md:max-w-md bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:border-teal-400/30 transition-all duration-300"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-300 mb-6 flex items-center">
          <span className="mr-3">🚀</span>
          Current Research Projects
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white/5 p-4 rounded-lg border-l-4 border-teal-400 hover:bg-white/10 transition-all duration-300">
            <h3 className="font-semibold text-teal-200 text-lg mb-2">
              Bioinformatic Analysis of Bladder Cancer and Adrenocortical Carcinoma
            </h3>
            <p className="text-gray-200 text-sm">
              Genomic analysis of 500 cancer patients revealing distinct mutation patterns and survival correlations between Bladder Cancer and Adrenocortical Carcinoma.
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded-lg border-l-4 border-teal-400 hover:bg-white/10 transition-all duration-300">
            <h3 className="font-semibold text-teal-200 text-lg mb-2">
              Comparative Analysis: CNN vs Transformers for Thyroid Cancer Diagnosis
            </h3>
            <p className="text-gray-200 text-sm">
              Evaluating deep learning architectures for medical image analysis with focus on diagnostic accuracy and computational efficiency.
            </p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg border-l-4 border-cyan-400 hover:bg-white/10 transition-all duration-300">
            <h3 className="font-semibold text-teal-200 text-lg mb-2">
              Cross-Lingual Emotion Detection using Explainable AI
            </h3>
            <p className="text-gray-200 text-sm">
              Advanced multilingual emotion recognition using BiLSTM networks with custom attention mechanisms, delivering state-of-the-art performance across English and Urdu datasets.
            </p>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <h3 className="font-semibold text-teal-300 mb-3">Core Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {[
  'Python',
  'TensorFlow',
  'PyTorch',
  'SQL',
  'Apache Spark',
  'Data Pipelines',
  'MLOps',
  'NLP',
  'Computer Vision',
  'AWS',
  'Docker',
  'LLMs',
  'Data Visualization'
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