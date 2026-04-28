"use client";

import { ProjectDTO } from "@/types/project";
import { TechBadge } from "@/components/TechBadge";
import Image from "next/image";
import { motion } from "framer-motion";
import { DescriptiveText } from "../DescriptiveText";

interface Props {
  project: ProjectDTO;
  variant?: "default" | "extended";
}

export default function ProjectCard({ project, variant = "default" }: Props) {

  // EXTENDED VARIANT
  if (variant === "extended") {
    return (
      <div className="flex flex-col gap-4">

        <h3 className="text-2xl font-semibold text-gray-900">
          {project.title}
        </h3>

        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="grid md:grid-cols-2 gap-6 items-center 
          p-6 rounded-2xl border border-gray-200 bg-white 
          shadow-sm hover:shadow-md transition-all duration-50"
        >

          {/* Image */}
          <div className="relative w-full h-64 overflow-hidden rounded-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col h-full space-y-4">

            <DescriptiveText>
              {project.description}
            </DescriptiveText>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <TechBadge key={t} tech={t} />
              ))}
            </div>

            <div className="flex gap-3 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-lg border border-gray-200 
            text-gray-700 hover:bg-gray-100 transition"
                >
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-lg bg-black text-white 
                hover:bg-gray-800 transition"
                >
                  Demo
                </a>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    );
  }

  // DEFAULT VARIANT
  return (
    <div className="group p-5 rounded-2xl border border-gray-200 bg-white 
          shadow-sm hover:shadow-md hover:-translate-y-1 
          transition-all duration-300 h-full flex flex-col">

      {/* Image */}
      <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 space-y-3">

        <h3 className="text-lg font-semibold text-gray-900">
          {project.title}
        </h3>

        <DescriptiveText>
          {project.description}
        </DescriptiveText>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechBadge key={t} tech={t} />
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1.5 rounded-lg border border-gray-200 
            text-gray-700 hover:bg-gray-100 transition"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1.5 rounded-lg bg-black text-white 
            hover:bg-gray-800 transition"
            >
              Demo
            </a>
          )}
        </div>

      </div>
    </div>
  );
}