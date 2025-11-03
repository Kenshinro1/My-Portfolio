import { motion } from "framer-motion";
import type { JSX } from "react";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  download?: boolean;
}

export default function AnimatedButton({
  href,
  children,
  target,
  download,
}: AnimatedButtonProps): JSX.Element {
  return (
    <motion.a
      href={href}
      target={target}
      download={download}
      className="relative px-6 py-3 font-semibold rounded-lg text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(270deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)",
        backgroundSize: "400% 400%",
        transition: "all 0.5s ease",
      }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={(e) => {
        const targetEl = e.currentTarget;
        targetEl.style.backgroundPosition = "100% 0";
        targetEl.style.boxShadow = "0 0 20px rgba(255,255,255,0.6)";
      }}
      onMouseLeave={(e) => {
        const targetEl = e.currentTarget;
        targetEl.style.backgroundPosition = "0 0";
        targetEl.style.boxShadow = "none";
      }}
    >
      {children}
    </motion.a>
  );
}
