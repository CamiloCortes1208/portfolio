import { ProjectDTO } from "@/types/project";

export const projects: ProjectDTO[] = [
  {
    id: "1",
    title: "Learn Together",
    description: "Plataforma educativa para gestión de cursos, estudiantes y actividades.",
    tech: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL"],
    image: "/learnTogether.jpeg",
    featured: true,

    links: [
      {
        label: "GitHub - Backend",
        url: "https://github.com/CamiloCortes1208/StudentManagementSystem",
      },
      {
        label: "GitHub - Frontend",
        url: "https://github.com/CamiloCortes1208/LearnTogether-frontend",
      },
      {
        label: "Demo",
        url: "https://learn-together-frontend-202ouxcgy-juanccortesd-9871s-projects.vercel.app",
      },
    ],
  },
];