import React from "react";

// Import school logos
import ucsdLogo from "../assets/ucsd.png";
import vitLogo from "../assets/VIT.png";

// Education data
const educationData = [
  {
    school: "University of California, San Diego",
    degree: "Master's in Data Science",
    logo: ucsdLogo,
    year: "2025 - 2027",
    details: [
      {
        title: "Coursework",
        items: [
          "Data Science Programing",
          "Linear Algebra",
          "Probability & Statistics"
        ]
      }] // empty for now
  },
  {
    school: "Vellore Institute of Technology, Chennai",
    degree: "Bachelor's in Computer Science",
    logo: vitLogo,
    year: "2021 - 2025",
    details: [
      {
        title: "Coursework",
        items: [
          "Artificial Intelligence",
          "Machine Learning",
          "Database & Management Systems",
          "Data Structures & Algorithms",
          "Probability & Statistics"
        ]
      },
      {
        title: "Research Assistant",
        items: ["Worked under associate professor in the field of Data Science and AI"]
      },
      {
        title: "Hack Club VITC (Jan 2023)",
        items: [
          "Led the marketing team during 3 major club events",
          "Organized hackathon with 200+ participants"
        ]
      },
      {
        title: "Stalls Committee – TechnoVIT 2023 (Dec 2023)",
        items: [
          "Designed and laid out event stalls",
          "Coordinated with vendors for timely product display"
        ]
      }
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-8 bg-black/30 backdrop-blur-md text-white">
      <h2 className="text-6xl font-bold text-center mb-16">Education</h2>

      <div className="flex flex-col items-center space-y-16">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full max-w-3xl transform hover:scale-105 transition-transform duration-300"
          >
            {/* School logo */}
            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-xl mb-4 p-4">
              <img
                src={edu.logo}
                alt={edu.school}
                className="w-full h-full object-contain"
              />
            </div>

            {/* School info */}
            <h3 className="text-2xl font-bold">{edu.school}</h3>
            <p className="text-lg text-white-300">{edu.degree}</p>
            <p className="text-lg text-white-300">{edu.year}</p>

            {/* Extra details (if present) */}
            {edu.details.length > 0 && (
              <div className="bg-white/10 p-6 rounded-xl shadow-lg w-full text-left space-y-6">
                {edu.details.map((detail, i) => (
                  <div key={i}>
                    <h4 className="text-xl font-semibold text-teal-300 mb-2">
                      {detail.title}
                    </h4>
                    <ul className="list-disc list-inside text-white-300 space-y-1">
                      {detail.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Separator */}
            {index !== educationData.length - 1 && (
              <div className="w-3/4 border-t border-gray-700 mt-12"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
