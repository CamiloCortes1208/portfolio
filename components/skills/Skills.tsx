"use client";

import { motion } from "framer-motion";
import { languages, frameworks, tools } from "../../data/techs";
import { SectionTitle } from "../SectionTitle";
import { Variants } from "framer-motion";
import { SkillCard } from "./SkillCard"; // 👈 IMPORTANTE

export function Skills() {
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
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="skills"
      className="px-6 py-20 scroll-mt-24 bg-[#FFFFFF]"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle>HABILIDADES</SectionTitle>
        </motion.div>

        {[
          { title: "Lenguajes", data: languages },
          { title: "Frameworks/Librerías", data: frameworks },
          { title: "Herramientas", data: tools },
        ].map((section) => (
          <div key={section.title} className="mb-16">

            {/* CATEGORY TITLE */}
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl font-extrabold mb-8 text-[#00171F] uppercase tracking-wider text-center"
            >
              {section.title}
            </motion.h3>

            {/* GRID */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            >
              {section.data.map((tech) => (
                <SkillCard
                  key={tech.name}
                  tech={tech}
                  variants={item}
                />
              ))}
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
}