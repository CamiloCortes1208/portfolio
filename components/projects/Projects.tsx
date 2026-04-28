"use client";

import { motion, Variants } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { SectionTitle } from "../SectionTitle";

export function Projects() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="projects"
      className="px-6 py-16 scroll-mt-24 bg-[#ffffff]"
    >
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <SectionTitle>PROYECTOS</SectionTitle>
      </motion.div>

      <div className="max-w-5xl mx-auto">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-stretch"
        >

          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              className={`
                w-full max-w-xs h-full
                ${index >= 3 ? "hidden md:block" : ""}
              `}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

          {/* Button */}
          <motion.a
            variants={item}
            href="/projects"
            className="group w-full max-w-xs h-full flex items-center justify-center 
              rounded-2xl border border-gray-200 bg-[#00171F] text-[#FFFFFF]
              hover:-translate-y-1 
              transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Ver más proyectos →
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}