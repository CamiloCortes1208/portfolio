"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type SectionProgress = {
  [key: string]: number;
};

export function NavCenter() {
  const pathname = usePathname();

  const [progress, setProgress] = useState<SectionProgress>({
    about: 0,
    skills: 0,
    projects: 0,
    contact: 0,
  });

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const totalProgress = scrollTop / (fullHeight - windowHeight);
      const clampedTotal = Math.max(0, Math.min(1, totalProgress));

      setProgress({
        about: Math.min(1, clampedTotal * 4),
        skills: Math.max(0, Math.min(1, (clampedTotal - 0.25) * 4)),
        projects: Math.max(0, Math.min(1, (clampedTotal - 0.5) * 4)),
        contact: Math.max(0, Math.min(1, (clampedTotal - 0.75) * 4)),
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const sections = ["about", "skills", "projects", "contact"];

  const getLabel = (id: string) => {
    switch (id) {
      case "about":
        return "SOBRE MÍ";
      case "skills":
        return "HABILIDADES";
      case "projects":
        return "PROYECTOS";
      case "contact":
        return "CONTACTO";
      default:
        return id.toUpperCase();
    }
  };

  const getHref = (id: string) =>
    pathname === "/" ? `#${id}` : `/#${id}`;

  return (
    <nav
      className="
        flex 
        flex-col sm:flex-row 
        items-center 
        gap-3 sm:gap-8
      "
    >
      {sections.map((id) => {
        const value = pathname === "/" ? progress[id] || 0 : 0;

        return (
          <Link
            key={id}
            href={getHref(id)}
            className="
              relative 
              text-sm sm:text-2xl lg:text-3xl
              text-white 
              hover:text-[#00A8E8] 
              transition
              whitespace-nowrap
            "
            style={{
              opacity: 0.4 + value * 0.6,
            }}
          >
            {getLabel(id)}

            {pathname === "/" && (
              <span
                className="absolute left-0 -bottom-1 sm:-bottom-2 h-0.5 bg-[#00A8E8] transition-all"
                style={{
                  width: `${value * 100}%`,
                }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}