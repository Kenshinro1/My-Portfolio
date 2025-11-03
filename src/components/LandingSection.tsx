import type { JSX } from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function HeaderComponent({ title, subtitle }: HeaderProps): JSX.Element {
  const titleWords = title.split(" ");
  const subtitleWords = subtitle.split(" ");

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-10 relative overflow-hidden">
      <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 text-center flex flex-wrap justify-center">
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
      <motion.p className="text-lg md:text-xl text-gray-300 max-w-xl text-center flex flex-wrap justify-center">
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
        className="mt-8 flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-700 transition"
        >
          Contact Me
        </a>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <span className="text-gray-400 text-2xl animate-bounce">↓</span>
      </motion.div>
    </section>
  );
}
