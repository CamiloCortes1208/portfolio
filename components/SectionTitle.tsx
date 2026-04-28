type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`text-4xl font-bold text-center mb-12 text-black ${className}`}
    >
      {children}
    </h2>
  );
}