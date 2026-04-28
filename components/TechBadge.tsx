import { Tech } from "@/types/project";
import { techIcons } from "@/lib/tech-icons";

type Props = {
  tech: Tech;
};

export function TechBadge({ tech }: Props) {
  const Icon = techIcons[tech];

  return (
    <span className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-200 rounded-full text-black">
      {Icon && <Icon size={16} />}
      {tech}
    </span>
  );
}