interface SectionHeaderProps {
  heading: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  heading,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  if (align === "center") {
    return (
      <div className="mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold text-dark lg:text-4xl">
          {heading}
        </h2>
      </div>
    );
  }

  return (
    <div className="mb-14 flex items-start justify-between">
      <h2 className="whitespace-pre-line font-heading text-3xl font-bold text-dark lg:text-4xl">
        {heading}
      </h2>
      {subtitle ? (
        <div className="hidden max-w-[200px] text-right lg:block">
          <div className="mb-3 ml-auto h-1 w-8 bg-primary-red" />
          <p className="text-sm text-dark/50">{subtitle}</p>
        </div>
      ) : (
        <div className="hidden lg:block">
          <div className="h-1 w-8 bg-primary-red" />
        </div>
      )}
    </div>
  );
}
