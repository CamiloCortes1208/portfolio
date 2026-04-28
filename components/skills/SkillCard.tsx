"use client";

import { motion, Variants } from "framer-motion";

type Skill = {
  name: string;
  icon: string;
};

type SkillCardProps = {
  tech: Skill;
  variants: Variants;
};

export function SkillCard({ tech, variants }: SkillCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -6, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col items-center justify-between 
        p-5 h-48 rounded-2xl bg-[#FFFFFF] border border-gray-200 
        shadow-sm hover:shadow-md transition-all duration-19"
    >
      {/* ICON */}
      <div className="flex-1 flex items-center justify-center w-full">
        <img
          src={tech.icon}
          alt={tech.name}
          className="max-h-20 w-auto object-contain"
          style={{ filter: "grayscale(0.3)" }}
        />
      </div>

      {/* NAME */}
      <span className="text-lg font-medium text-[#00171F] text-center mt-2">
        {tech.name}
      </span>
    </motion.div>
  );
}