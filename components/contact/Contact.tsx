"use client";

import { motion, Variants } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SectionTitle } from "../SectionTitle";
import { ContactCard } from "./ContactCard";

export function Contact() {
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
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="contact"
      className="px-6 py-16 scroll-mt-24 bg-[#ffffff]"
    >
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle>CONTACTO</SectionTitle>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mt-10 space-y-4"
      >

        <motion.div variants={item}>
          <ContactCard
            icon={<MdEmail className="text-blue-600" />}
            label="Correo"
            value="juancamilocortesdavila2@gmail.com"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=juancamilocortesdavila2@gmail.com"
          />
        </motion.div>

        <motion.div variants={item}>
          <ContactCard
            icon={<FaLinkedin className="w-6 h-6 text-blue-700" />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/juan-camilo-cortés-dávila-1a6930236"
          />
        </motion.div>

        <motion.div variants={item}>
          <ContactCard
            icon={<FaGithub className="w-6 h-6 text-black" />}
            label="GitHub"
            value="CamiloCortes1208"
            href="https://github.com/CamiloCortes1208"
          />
        </motion.div>

        <motion.div variants={item}>
          <ContactCard
            icon={<FaWhatsapp className="text-green-600" />}
            label="WhatsApp"
            value="+57 311 293 7978"
            href="https://wa.me/573112937978"
          />
        </motion.div>

      </motion.div>
    </section>
  );
}