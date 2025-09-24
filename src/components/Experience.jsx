import React from "react";

// Import company logos
import ooredooLogo from "../assets/ooredoo.png";
import alaneesLogo from "../assets/alanees.png";

const experienceData = [
  {
    company: "Ooredoo",
    role: "Data Science Intern",
    location: "Doha, Qatar",
    period: "June 2025 – Aug 2025",
    logo: ooredooLogo,
    highlights: [
      "Built Looker dashboards with efficient LookML modeling, creating data models for customer behavior, service usage, events analysis, and churn analysis.",
      "Used Python with Google Maps API to track user call locations, applying anomaly detection to identify irregular patterns.",
    ],
  },
  {
    company: "Alanees",
    role: "AI Automation Engineer",
    location: "Doha, Qatar",
    period: "Jan 2025 – June 2025",
    logo: alaneesLogo,
    highlights: [
      " Developed an automated resume screening pipeline in Python using LangChain (AI orchestration), Gemini API (PDF OCR), GPT-4 with structured JSON parsing, and Google Sheets API; processed 900+ resumes, generating structured candidate profiles and scoring reports, cutting manual assessment time by 80%",
      "Built an end-to-end AWS pipeline using S3, Lambda, and Textract to process bank statement PDFs and generate SAP-ready reports, reducing manual entry time from 1 day to under 5 minutes.",
    ],
  },
  {
    company: "Alanees Qatar",
    role: "Data Analyst",
    location: "Doha, Qatar",
    period: "Jan 2024 – Jan 2025",
    logo: alaneesLogo,
    highlights: [
      "Designed a complete automated data pipeline from SAP to PostgreSQL using PySpark, orchestrated via Apache Airflow to handle 3M+ rows of historical sales and inventory data.",
       "Built and deployed sales dashboards (Streamlit (prototyping) → Power BI) for real-time monitoring and insights",
       "Implemented time-series forecasting (gradient boosting) and customer segmentation models with PySpark MLlib & scikit-learn, achieving 92% demand prediction accuracy and identifying high-value customer cohorts; insights supported inventory planning and targeted promotions, driving a 15% lift in monthly sales.",
      "Analyzed daily and monthly sales data across all product categories to identify trends, patterns, and areas for improvement. identified issues with low-stock items that impacted sales",
      "Reduced out-of-stock rates by 20% through data-driven restocking recommendations. Achieved a 15% increase in monthly sales compared to the same month last year by optimizing procurement strategies",
    ],
  },
  {
    company: "Ooredoo",
    role: "Data Analyst Intern",
    location: "Doha, Qatar",
    period: "Aug 2023 – Oct 2023",
    logo: ooredooLogo,
    highlights: [
      "Performed Advancesd SQL operations on Teradata and delivered various customized plots and visualizations using Qlik Sense",
      "Designed enterprise-level ER diagrams with 200 tables using erwin Data Modeler; performed data mapping and ensured schema consistency across 5+ systems, enabling accurate analytics"
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-8 text-white">
      <h2 className="text-5xl font-bold text-center mb-16">Experience</h2>

      <div className="flex flex-col items-center space-y-16">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
          >
            {/* Company logo */}
            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-xl mb-4 p-4">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Experience info */}
            <h3 className="text-2xl font-bold">{exp.role}</h3>
            <p className="text-white">{exp.company} – {exp.location}</p>
            <p className="text-white text-md mb-4">{exp.period}</p>
            <ul className="list-disc list-inside text-white space-y-2 max-w-xl">
              {exp.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Subtle arrow except last item */}
            {index !== experienceData.length - 1 && (
              <div className="mt-8 text-white-500 text-4xl animate-bounce">
                ↑
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
