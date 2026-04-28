import ProjectCard from "@/components/projects/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="px-6 py-16 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">

        <SectionTitle>PROYECTOS</SectionTitle>

        {/* Descripción */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-12 text-lg">
          Estos son los proyectos que he realizado.
        </p>

        {/* Aquí reutilizas tus componentes */}
        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="extended"
            />
          ))}
        </div>
      </div>
    </section>
  );
}