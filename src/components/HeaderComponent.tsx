import type { JSX } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/images/profile.jpg";
import AnimatedButton from "../components/AnimatedButton";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function HeaderComponent({ title, subtitle }: HeaderProps): JSX.Element {
  const titleWords = title.split(" ");
  const subtitleWords = subtitle.split(" ");

  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: `hsl(${Math.random() * 50}, 100%, 50%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20 - Math.random() * 20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 text-center flex flex-wrap justify-center z-10">
        {titleWords.map((word, index) => (
          <motion.span
            key={index}
            className="mx-1 inline-block"
            animate={{ y: [0, -8, 0, 8, 0], rotate: [0, 1, 0, -1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p className="text-lg md:text-xl text-gray-200 max-w-xl text-center flex flex-wrap justify-center z-10">
        {subtitleWords.map((word, index) => (
          <motion.span
            key={index}
            className="mx-1 inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 * index }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
      <motion.div
        className="absolute top-24 right-10 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-500 overflow-hidden shadow-lg z-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.95, 1.05, 0.95], y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={profilePic} alt="Me" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div className="mt-8 flex space-x-4 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
        <AnimatedButton href="#projects">View Projects</AnimatedButton>
        <AnimatedButton href="#contact">Contact Me</AnimatedButton>
      </motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 z-10">
        <span className="text-gray-400 text-2xl animate-bounce">↓</span>
      </motion.div>
    </section>
  );
}
