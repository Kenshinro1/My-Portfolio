import { motion } from "framer-motion";
import profilePic from "../assets/images/GraduationPic.jpg";

export default function AboutSection() {
  const lines = [
    "I am a Frontend and Backend Developer with a passion for building interactive, reusable components.",
    "I create dynamic animations and polished web layouts using React, Tailwind CSS, and TypeScript.",
    "I actively explore new programming languages and technologies to stay current with industry trends.",
    "I enjoy developing systems and side projects that combine creativity with functionality.",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white p-10 overflow-hidden gap-10"
    >
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 6 + i * 0.1, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
      <motion.div className="flex-shrink-0 z-10" initial={{ scale: 0.8 }} animate={{ scale: [0.95, 1.05, 0.95], y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-500 shadow-lg">
          <img src={profilePic} alt="Clarence Kenneth Acedillo" className="w-full h-full object-cover" />
        </div>
      </motion.div>
      <div className="max-w-3xl space-y-4 z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">About Me</h2>
        {lines.map((line, index) => (
          <motion.p
            key={index}
            className="text-lg md:text-xl text-gray-200 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {line.split(" ").map((word, wIndex) => (
              <motion.span key={wIndex} className="inline-block mr-1" animate={{ y: [0, -2, 0] }} transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", delay: wIndex * 0.05 }}>
                {word}
              </motion.span>
            ))}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
