import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-black/30 backdrop-blur-md text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-6xl font-bold mb-12 text-white-300">Contact Me</h2>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaLinkedin className="text-white-300 text-2xl" />
            <a href="https://www.linkedin.com/in/meshal-nayim-b13750231/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white-300">
              linkedin.com/in/MeshalNayim
            </a>
          </div>
          <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaEnvelope className="text-white-300 text-2xl" />
            <a href="mailto:mnayim@ucsd.edu" className="text-white hover:text-white-300">
              mnayim@ucsd.edu
            </a>
          </div>
          <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaPhone className="text-white-300 text-2xl" />
            <a href="tel:+18582206968" className="text-white hover:text-white-300">
              +1 (858) 220-6968
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
