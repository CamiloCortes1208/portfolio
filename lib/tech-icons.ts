import { IconType } from "react-icons";

// Font Awesome
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

// Simple Icons
import {
  SiMysql,
  SiAngular,
  SiNextdotjs,
  SiSpringboot,
  SiMongodb,
  SiNotion,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";

export const techIcons: Record<string, IconType> = {
  // Languages
  Java: FaJava,
  Python: FaPython,
  SQL: SiMysql,
  TypeScript: SiTypescript,

  // Frameworks / Libs
  React: FaReact,
  "Next.js": SiNextdotjs,
  Angular: SiAngular,
  "Spring Boot": SiSpringboot,

  // Backend
  "Node.js": FaNodeJs,

  // Databases
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,

  // Tools
  Notion: SiNotion,
};