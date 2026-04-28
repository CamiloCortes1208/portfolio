type ContactCardProps = {
  icon: React.ReactNode;
  label: string;
  value?: string;
  href: string;
};

export function ContactCard({
  icon,
  label,
  value,
  href,
}: ContactCardProps) {
  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      {...(!isMail && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className="group flex items-center gap-4 p-5 rounded-2xl 
      border border-gray-200 bg-white 
      shadow-sm hover:shadow-md hover:-translate-y-1 
      transition-all duration-300"
    >
      {/* ICON CON FONDO */}
      <div className="flex items-center justify-center w-10 h-10 rounded-xl 
      bg-gray-100 text-gray-700 
      group-hover:bg-gray-200 transition">
        {icon}
      </div>

      {/* TEXT */}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-900">
          {label}
        </span>

        {value && (
          <span className="text-sm text-gray-500">
            {value}
          </span>
        )}
      </div>

      {/* ARROW */}
      <div className="ml-auto opacity-0 translate-x-2 
      group-hover:opacity-100 group-hover:translate-x-0 
      transition-all duration-300 text-gray-400">
        →
      </div>
    </a>
  );
}