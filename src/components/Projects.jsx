import React from "react";
import { motion } from "framer-motion";
import Picture1 from "../assets/Picture1.png";
import Picture2 from "../assets/Picture2.png";
import Picture3 from "../assets/Picture3.png";
import output from "../assets/output.png"
import output2 from "../assets/output2.png"
import cl1 from "../assets/cl1.png"
import cl2 from "../assets/cl2.png"
import cl3 from "../assets/cl3.png"
import ai1 from "../assets/ai1.png"
import al2 from "../assets/al2.png"
import pd1 from "../assets/pd1.png"
import pd2 from "../assets/pd2.png"
import pd3 from "../assets/pd3.png"
import pic1 from "../assets/pic1.png"




const projects = [
  {
    title: "Classifying AI-Generated and Real Images using Fine-Tuned CNN Models",
    desc: "This research explores the challenge of distinguishing between authentic and AI-generated images using advanced convolutional neural network (CNN) architectures. Leveraging the CIFAKE dataset, which includes a diverse array of AI-generated and real images, we evaluated the performance of three pre-trained models: ResNet50, EfficientNetB0, and DenseNet121. DenseNet121 emerged as the most effective model, achieving an accuracy of 98.49% on the test dataset, significantly outperforming the other models.",
    images: [Picture1, Picture2],
    link: "https://www.researchgate.net/publication/385239649_Detection_of_Leading_CNN_Models_for_AI_Image_Accuracy_and_Efficiency",
  },
  {
    title: "GPT-2 From Scratch (124M Parameters)",
    desc: "Implemented complete GPT-2 architecture in PyTorch, including tokenizer, transformer blocks, multi-head attention, and feed-forward layers. Applied transfer learning by importing pre-trained GPT-2 weights",
    images: [Picture3],
    link: "https://github.com/meshalnayim/GPT2_from_scratch",
  },
  {
    title: "Fine-Tuning LLM for Spam Classification",
    desc: "This project explores the fine-tuning of a large language model (LLM) for the task of spam classification. Starting with a GPT-2 model built from scratch, pretrained OpenAI weights were imported to leverage the model’s language understanding. To adapt the model to the spam detection task, only the output head and the final transformer block were unfrozen, allowing targeted fine-tuning while preserving the general language knowledge from pretraining.",
    images: [output2,output],
    link: "https://github.com/meshalnayim/Fine-Tuning-LLM-for-Spam-Classification",
  },
  {
    title: "Gesture Recognition Mouse (Computer Vision + AI)",
    desc: "This project leverages hand gesture recognition to control various system functions using Python. By tracking hand movements and finger positions through a webcam, users can perform actions such as adjusting volume, scrolling, and switching between windows. The system utilizes the OpenCV library for computer vision tasks, PyAutoGUI for automation, and the Pycaw library to control audio settings.",
    images: [ai1,al2],
    link: "https://github.com/MeshalNayim/Gesture-recognition-mouse-using-Computer-Vision--AI-",
  },
  {
    title: "Phishing Detection (Ensemble + Feature Selection)",
    desc: "This project implements a phishing detection system leveraging machine learning techniques. The ensemble model combines the strengths of Random Forest (RF) and LightGBM classifiers, improving detection accuracy and robustness against phishing attacks. Feature selection and visualization techniques are also employed to enhance model interpretability and performance.",
    images: [pd1,pd2,pd3],
    link: "https://github.com/meshalnayim/Phishing-Detection-Using-Ensemble-Techniques-and-Feature-Selection",
  },
  {
    title: "Smart Ambient Responsive Lighting System with PWM",
    desc: "This project implements a Smart Lighting System that dynamically adjusts the brightness of a light based on the surrounding light intensity. Instead of simply switching the light on or off, the system gradually increases or decreases the light intensity in response to changes in ambient light. The system is built using an Arduino and a LIDAR sensor to measure light intensity, with a simulation demonstrated in Proteus.",
    images: [pic1],
    link: "https://github.com/meshalnayim/Smart-Ambient-Responsive-Lighting-System-with-PWM-Control",
  },
  {
    title: "Credit Card Fraud Detection",
    desc: "",
    images: [],
    link: "https://github.com/meshalnayim/Credit-card-fraud-detection",
  },
,
  {
    title: "Student Score Prediction",
    desc: "",
    images: [],
    link: "https://github.com/meshalnayim/Student-score-prediction",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-black/30 backdrop-blur-md text-white">
      <h2 className="text-6xl font-bold text-center mb-16">Projects</h2>

      {/* Uniform grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm hover:scale-[1.02] transform transition duration-500"
            whileHover={{ y: -5 }}
          >
            {/* Slideshow if images exist */}
            {p.images.length > 0 && (
              <div className="relative w-full h-56 flex items-center justify-center">
                <Slideshow images={p.images} />
              </div>
            )}

            {/* Project info */}
            <div className="p-4">
              <h3 className="text-xl font-bold">{p.title}</h3>
              {p.desc && (
                <p className="text-gray-300 mt-2 whitespace-normal break-words">
                  {p.desc}
                </p>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

// 🔹 Slideshow component
function Slideshow({ images }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // switch every 4s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.img
      key={index}
      src={images[index]}
      alt="Project snapshot"
      className="max-h-full max-w-full object-contain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }} // smooth fade
    />
  );
}
