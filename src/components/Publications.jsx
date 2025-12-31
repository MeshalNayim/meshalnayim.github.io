import React from "react";
import { motion } from "framer-motion";

export default function Publications() {
  const publishedPapers = [
    {
      title: "Detection of Leading CNN Models for AI Image Accuracy and Efficiency",
      authors: "Meshal Nayim, Vishnu Mohan, Trilok Nath Pandey, Bibhuti Bhusan Dash, Bibek Bikram Dash, Sudhansu Shekhar Patra",
      year: 2024,
      conference: "2024 International Conference on Intelligent Algorithms for Computational Intelligence Systems (IACIS)",
      link: "https://ieeexplore.ieee.org/document/10721936",
      publisher: "IEEE",
    },
  ];

  
  return (
    <section id="pub" className="py-20 px-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Publications
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Research contributions
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Published Papers */}
          {publishedPapers.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-3xl font-semibold text-teal-300 mb-8 flex items-center justify-center">
                <span className="w-3 h-3 bg-teal-400 rounded-full mr-4"></span>
                Published Papers
                <span className="w-3 h-3 bg-teal-400 rounded-full ml-4"></span>
              </h3>
              <div className="space-y-6">
                {publishedPapers.map((paper, index) => (
                  <motion.a
                    key={index}
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-teal-400/30 hover:bg-white/15 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-left">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-200 transition-colors duration-300">
                          {paper.title}
                        </h4>
                        <span className="bg-teal-400/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                          {paper.year}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-3 leading-relaxed">
                        {paper.authors}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-400">
                        <span className="mb-2 sm:mb-0">{paper.conference}</span>
                        <span className="text-cyan-300 font-medium">{paper.publisher}</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
