import React from "react";
import { motion } from "framer-motion";

// Import company logos
import ooredooLogo from "../assets/ooredoo.png";
import alaneesLogo from "../assets/alanees.png";

const experienceData = [
{
  company: "Ooredoo (Telecom)",
  role: "Data Science Intern",
  location: "Doha, Qatar",
  period: "June 2025 – Aug 2025",
  logo: ooredooLogo,
  highlights: [
    "Data Modeling & Visualization – Optimized LookML models to define metrics, joins, and dimensions for telecoms KPIs, integrating churn, customer, and geolocation datasets from Biq Query according to client requirements"
  ],
},
{
  company: "Al Anees (E-Commerce)",
  role: "AI Automation Engineer",
  location: "Doha, Qatar",
  period: "Jan 2025 – June 2025",
  logo: alaneesLogo,
  highlights: [
    "Built an automated pipeline that monitored incoming emails for resumes and processed PDFs with Gemini API for OCR.",
    "Integrated GPT-4 for structured candidate screening and scoring with JSON-based output.",
    "Auto-populated structured results into Google Sheets using the Google Sheets API.",
    "Processed 900+ applications, reducing manual resume screening time by 80%.",
    "Developed an end-to-end AWS pipeline using S3, Lambda, and Textract to process bank statement PDFs.",
    "Generated SAP-ready reports in Google Sheets, reducing manual entry time from 1 day to under 15 minutes."
  ],
},
{
  company: "Al Anees (E-Commerce)",
  role: "Data Scientist",
  location: "Doha, Qatar",
  period: "Jan 2024 – Jan 2025",
  logo: alaneesLogo,
  highlights: [
    "Built a production customer segmentation system for data-driven marketing initiatives.",
    "Processed 2+ years of transactional data using PySpark to compute RFM (Recency, Frequency, Monetary) features for 50,000+ customers.",
    "Applied K-Means clustering to identify 5 distinct customer personas based on purchase behavior.",
    "Deployed the segmentation model as a batch scoring pipeline on AWS EC2 for regular updates.",
    "Served customer segments through Power BI dashboards to enable targeted marketing campaigns.",
    "Increased customer engagement by 15% through personalized email marketing strategies.",
    "Developed a production-grade LSTM model to forecast daily inventory demand across SKUs.",
    "Engineered features from 2 years of sales data using Apache Spark to capture yearly seasonality patterns.",
    "Tracked experiments and performance metrics with MLflow for model reproducibility.",
    "Containerized the LSTM model with Docker and deployed it on AWS EC2 for monthly inference.",
    "Integrated demand forecasts into supply chain dashboards for procurement and stock planning.",
    "Achieved a MAPE of 14–16% and reduced stockouts by 12%, improving inventory capital allocation."
  ]},
  {
    company: "Ooredoo (Telecom)",
    role: "Data Science Intern",
    location: "Doha, Qatar",
    period: "Aug 2023 – Oct 2023",
    logo: ooredooLogo,
    highlights: [
      "Performed Advanced SQL operations on Teradata and delivered various customized plots and visualizations using Qlik Sense",
      "Designed enterprise-level ER diagrams with 200 tables using erwin Data Modeler; performed data mapping and ensured schema consistency across 5+ systems, enabling accurate analytics"
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey through data roles, delivering impactful AI and analytics solutions
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-teal-400/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Company Logo */}
                <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center p-3 shadow-lg">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Experience Details */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-teal-300 font-semibold text-lg">{exp.company}</p>
                      <p className="text-gray-400">{exp.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-teal-400/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-200">
                        <span className="text-teal-400 mr-3 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
