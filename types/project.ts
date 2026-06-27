export type BaseProject = {
  id: string;
  title: string;
};

export type Tech =
  | "Next.js"
  | "React"
  | "TypeScript"
  | "Node.js"
  | "Python"
  | "MongoDB"
  | "Java"
  | "PostgreSQL"
  | "Spring Boot";


export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectDTO = BaseProject & {
  description: string;
  tech: Tech[];
  image: string;
  featured?: boolean;
  links?: ProjectLink[];
};