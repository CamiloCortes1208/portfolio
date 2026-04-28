type DescriptionCardProps = {
  children: React.ReactNode;
};

export function DescriptionCard({ children }: DescriptionCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        padding: '20px',
        color: '#FFFFFF',
        border: '2px solid #E5E7EB',
      }}
    >
      {children}
    </div>
  );
}