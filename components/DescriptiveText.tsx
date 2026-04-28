type DescriptiveTextProps = {
    children: React.ReactNode;
    lineclamp?: number;
    textsize?: string;
};

export function DescriptiveText({ children }: DescriptiveTextProps) {
    return (
        <div className="text-[#00171F]">
            {children}
        </div>
    );
}