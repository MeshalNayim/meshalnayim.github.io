import React from "react";
import { motion } from "framer-motion";

// Import company logos
import ooredooLogo from "../assets/ooredoo.png";
import alaneesLogo from "../assets/alanees.png";
import ucsdlogo from "../assets/ucsd.png";

const experienceData = [
{
  company: "University of California - San Diego",
  role: "Graduate Student Researcher",
  location: "California, USA",
  period: "Jan 2026 – Present",
  logo: ucsdlogo,
  highlights: [
    "Internet-Scale Traceroute Analysis: Collected and processed Ark traceroute data using Dask for distributed computation, computed RTT and path statistics, and produced large-scale network visualizations"
  ],
},
  {
  company: "University of California - San Diego",
  role: "Research Assistant",
  location: "California, USA",
  period: "Oct 2025 – Jan 2026",
  logo: ucsdlogo,
  highlights: [
    "Agent Benchmarking: Assisted in building MCP-based benchmarking pipelines to stress-test long-horizon, multi-tool agents across 5.5K+ APIs, revealing key planning–execution gaps.",
    "Robustness Evaluation: Developed failure-injection and trajectory analysis framework enabling data-efficient fine-tuning (1.2K samples outperforming 119K baselines) and improving agent reliability."
  ],
},
{
  company: "Ooredoo (Telecom)",
  role: "Data Warehouse Intern",
  location: "Doha, Qatar",
  period: "June 2025 – Aug 2025",
  logo: ooredooLogo,
  highlights: [
    "Data Modeling & Visualization – Optimized LookML models to define metrics, joins, and dimensions for telecoms KPIs, integrating churn, customer, and geolocation datasets from Biq Query according to client requirements",
    "Data Warehouse Analytics – Developed advanced SQL queries on Teradata and designed KPI dashboards in Qlik Sense according to client requirements."
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
  role: "Data Engineering Intern",
  location: "Doha, Qatar",
  period: "Jan 2024 – Jan 2025",
  logo: alaneesLogo,
  highlights: [
   "ETL Pipeline Development – Built PySpark transformation jobs to clean and migrate 3M+ records from SAP to PostgreSQL, scheduled via Apache Airflow for daily automation.",
   "Requirements & Data Modeling – Worked with cross-functional teams to define KPI logic and reporting needs, designing PostgreSQL schemas and developed transformation pipelines to support analytics use cases."
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
            My professional journey through data roles
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
