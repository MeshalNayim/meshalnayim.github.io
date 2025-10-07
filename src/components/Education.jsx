import React from "react";
import { motion } from "framer-motion";

// Import school logos
import ucsdLogo from "../assets/ucsd.png";
import vitLogo from "../assets/VIT.png";

// Education data
const educationData = [
  {
    school: "University of California, San Diego",
    degree: "Master of Science in Data Science",
    logo: ucsdLogo,
    year: "2025 - 2027",
    gpa: "3.8/4.0",
    details: [
      {
        title: "Relevant Coursework",
        items: [
          "Data Science Programming",
          "Linear Algebra",
          "Probablity and Staistics",
        ]
      },
      {
        title: "Research Focus",
        items: [
          "Bioinformatics",
          "Natural Language Processing",
          "Computer Vision"
        ]
      }
    ]
  },
  {
    school: "Vellore Institute of Technology, Chennai",
    degree: "Bachelor of Technology in Computer Science",
    logo: vitLogo,
    year: "2021 - 2025",
    gpa: "3.6/4.0",
    details: [
      {
        title: "Core Coursework",
        items: [
          "Artificial Intelligence",
          "Database Management Systems",
          "Data Structures & Algorithms",
          "Probability & Statistics",
          "Machine Learning",
          "Calculus",
          "Linear Algebra",
          "Python Programming"
        ]
      },
      {
        title: "Research Assistant",
        items: [
          "Collaborated with associate professor on AI research projects",
          "Published paper on 'Optimized CNN Architectures for Medical Imaging'",
          "Awarded Best Paper Award for the paper"
        ]
      },
      {
        title: "Leadership & Activities",
        items: [
          "Hack Club VITC: Led marketing team for 3 major events (200+ participants)",
          "TechnoVIT 2023: Stalls Committee - Vendor coordination & event design",
        ]
      }
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My academic journey through premier institutions, shaping my expertise in data science and AI
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-teal-400 to-cyan-400 h-full hidden md:block"></div>
          
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-400 rounded-full border-4 border-gray-900 z-10 hidden md:block"></div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-8 md:mb-0`}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-teal-400/20 transition-all duration-300">
                  
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center p-3 shadow-lg">
                      <img
                        src={edu.logo}
                        alt={edu.school}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.school}</h3>
                      <p className="text-teal-300 font-semibold mb-1">{edu.degree}</p>
                      <div className="flex justify-between items-center text-sm text-gray-300">
                        <span>{edu.year}</span>
                        <span className="bg-teal-400/20 text-teal-300 px-3 py-1 rounded-full">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    {edu.details.map((detail, i) => (
                      <div key={i}>
                        <h4 className="text-lg font-semibold text-teal-300 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                          {detail.title}
                        </h4>
                        <ul className="space-y-2">
                          {detail.items.map((item, j) => (
                            <li key={j} className="flex items-start text-gray-200">
                              <span className="text-teal-400 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Year Display - Mobile */}
              <div className="md:hidden w-full text-center mb-4">
                <div className="bg-gradient-to-r from-teal-400 to-cyan-400 text-gray-900 px-6 py-2 rounded-full font-bold text-lg inline-block">
                  {edu.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}