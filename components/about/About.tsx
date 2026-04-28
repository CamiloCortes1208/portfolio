"use client";

import { motion, Variants } from "framer-motion";
import { SectionTitle } from "../SectionTitle";
import { DescriptionCard } from "./DescriptionCard";

export function About() {
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
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="px-6 py-16 scroll-mt-24 bg-[#ffffff]"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle>SOBRE MÍ</SectionTitle>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 items-center"
        >

          {/* LEFT */}
          <motion.div
            variants={item}
            className="flex flex-col items-center text-center"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-300">
              <img
                src="/avatar.jpeg"
                alt="Juan"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="mt-4 text-3xl font-bold text-black">
              Juan Camilo
            </h2>

            <p className="text-black text-base">
              Fullstack Developer
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={item}>
            <DescriptionCard>

              <motion.p variants={item} className="mb-4 text-[#00171F] font-semibold">
                Ingeniero de sistemas y computación. Me considero un apasionado por la tecnología y el desarrollo de software.
              </motion.p>

              <motion.p variants={item} className="mb-4 text-[#00171F] font-semibold">
                Cuento con cinco años de experiencia académica. Busco aportar mis conocimientos para contribuir en el cumplimiento
                de metas y objetivos bien sea a corto o largo plazo.
              </motion.p>

              <motion.p variants={item} className="mb-4 text-[#00171F] font-semibold">
                Me gusta aprender cada día algo nuevo, bien sean datos curiosos o habilidades técnicas.
                También disfruto de la lectura, el cine y la música.
              </motion.p>

            </DescriptionCard>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}