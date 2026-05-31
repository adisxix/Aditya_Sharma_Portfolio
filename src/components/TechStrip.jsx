import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  "JAVASCRIPT", "TYPESCRIPT", "PYTHON", "JAVA", "C++", "GO", 
  "REACT.JS", "NEXT.JS", "NODE.JS", "EXPRESS.JS", "DJANGO", "SPRING BOOT",
  "SUPABASE", "CLERK AUTH", "MYSQL", "POSTGRESQL", "MONGODB", "FIREBASE", "REDIS",
  "DATA STRUCTURES & ALGORITHMS", "SYSTEM DESIGN", "GIT", "DOCKER", "FIGMA"
];

export const TechStrip = () => {
  // Duplicate enough times to ensure seamless infinite scrolling
  const stripContent = [...techs, ...techs, ...techs, ...techs];

  return (
    <div className="w-full overflow-hidden bg-[var(--accent-color)]/10 border-y border-[var(--accent-color)]/30 py-4 relative flex items-center z-20">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
      >
        {stripContent.map((tech, i) => (
          <div key={i} className="flex items-center">
            <span className="font-mono text-sm md:text-base font-bold text-[var(--accent-color)] uppercase px-6 tracking-widest drop-shadow-[0_0_8px_var(--accent-color)]">
              {tech}
            </span>
            <span className="text-[var(--accent-color)]/50">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
