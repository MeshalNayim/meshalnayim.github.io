import React from "react";
import { motion } from "framer-motion";
import Picture1 from "../assets/Picture1.png";
import Picture2 from "../assets/Picture2.png";
import Picture3 from "../assets/Picture3.png";
import output from "../assets/output.png"
import output2 from "../assets/output2.png"
import ai1 from "../assets/ai1.png"
import al2 from "../assets/al2.png"
import pd1 from "../assets/pd1.png"
import pd2 from "../assets/pd2.png"
import pd3 from "../assets/pd3.png"
import pic1 from "../assets/pic1.png"

const projects = [
  {
    title: "Classifying AI-Generated and Real Images using Fine-Tuned CNN Models",
    desc: "This research explores the challenge of distinguishing between authentic and AI-generated images using advanced convolutional neural network (CNN) architectures. Leveraging the CIFAKE dataset, we evaluated the performance of three pre-trained models: ResNet50, EfficientNetB0, and DenseNet121. DenseNet121 emerged as the most effective model, achieving an accuracy of 98.49% on the test dataset.",
    images: [Picture1, Picture2],
    link: "https://meshalnayim.github.io/AI-Image-Detector/",
    tags: ["Computer Vision", "Deep Learning", "Research"]
  },
  {
    title: "GPT-2 From Scratch (124M Parameters)",
    desc: "Implemented complete GPT-2 architecture in PyTorch, including tokenizer, transformer blocks, multi-head attention, and feed-forward layers. Applied transfer learning by importing pre-trained GPT-2 weights",
    images: [Picture3],
    link: "https://github.com/meshalnayim/GPT2_from_scratch",
    tags: ["NLP", "PyTorch", "Transformers"]
  },
  {
    title: "Fine-Tuning LLM for Spam Classification",
    desc: "This project explores the fine-tuning of a large language model (LLM) for spam classification. Starting with a GPT-2 model built from scratch, pretrained OpenAI weights were imported to leverage the model's language understanding.",
    images: [output2, output],
    link: "https://github.com/meshalnayim/Fine-Tuning-LLM-for-Spam-Classification",
    tags: ["NLP", "Fine-tuning", "Classification"]
  },
  {
    title: "Gesture Recognition Mouse (Computer Vision + AI)",
    desc: "This project leverages hand gesture recognition to control various system functions using Python. By tracking hand movements and finger positions through a webcam, users can perform actions such as adjusting volume, scrolling, and switching between windows.",
    images: [ai1, al2],
    link: "https://github.com/MeshalNayim/Gesture-recognition-mouse-using-Computer-Vision--AI-",
    tags: ["Computer Vision", "OpenCV", "Automation"]
  },
  {
    title: "Phishing Detection (Ensemble + Feature Selection)",
    desc: "This project implements a phishing detection system leveraging machine learning techniques. The ensemble model combines the strengths of Random Forest (RF) and LightGBM classifiers, improving detection accuracy and robustness against phishing attacks.",
    images: [pd1, pd2, pd3],
    link: "https://github.com/meshalnayim/Phishing-Detection-Using-Ensemble-Techniques-and-Feature-Selection",
    tags: ["Machine Learning", "Security", "Ensemble"]
  },
  {
    title: "Smart Ambient Responsive Lighting System with PWM",
    desc: "This project implements a Smart Lighting System that dynamically adjusts the brightness of a light based on the surrounding light intensity using Arduino and LIDAR sensor with simulation in Proteus.",
    images: [pic1],
    link: "https://github.com/meshalnayim/Smart-Ambient-Responsive-Lighting-System-with-PWM-Control",
    tags: ["IoT", "Arduino", "Embedded Systems"]
  },
  {
    title: "Credit Card Fraud Detection",
    desc: "Machine learning project for detecting fraudulent credit card transactions using advanced anomaly detection techniques.",
    images: [],
    link: "https://github.com/meshalnayim/Credit-card-fraud-detection",
    tags: ["Machine Learning", "Anomaly Detection", "Finance"]
  },
  {
    title: "Student Score Prediction",
    desc: "Predictive modeling project for forecasting student academic performance based on various educational factors.",
    images: [],
    link: "https://github.com/meshalnayim/Student-score-prediction",
    tags: ["Machine Learning", "Education", "Regression"]
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my data science and AI projects, from research to real-world applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-teal-400/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {/* Project Image */}
                {project.images.length > 0 && (
                  <div className="relative w-full h-48 bg-gray-800">
                    <Slideshow images={project.images} />
                  </div>
                )}

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  {project.desc && (
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {project.desc}
                    </p>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-teal-400/10 text-teal-300 rounded-full text-xs border border-teal-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Slideshow Component
function Slideshow({ images }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.img
      key={index}
      src={images[index]}
      alt="Project snapshot"
      className="w-full h-full object-cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    />
  );
}