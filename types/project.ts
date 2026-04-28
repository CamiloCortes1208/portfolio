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
  | "PostgreSQL";

export type ProjectDTO = BaseProject & {
  description: string;
  tech: Tech[];
  image: string;
  github: string;
  demo?: string;
  featured?: boolean;
};