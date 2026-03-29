import Image from "next/image";

interface TrustBadgesProps {
  /** "wide" = larger SVG for hero sections, "compact" = smaller for mid-page */
  variant?: "wide" | "compact";
  className?: string;
  wideImage?: string;
  compactImage?: string;
}

export function TrustBadges({
  variant = "compact",
  className,
  wideImage = "/images/pomerico-trusted-partner-badges.svg",
  compactImage = "/images/pomerico-trusted-partner-badges-compact.svg",
}: TrustBadgesProps) {
  const src = variant === "wide" ? wideImage : compactImage;

  return (
    <Image
      src={src}
      alt="Trusted partner since 2015 – Stability, Business Partner"
      width={variant === "wide" ? 384 : 280}
      height={60}
      className={className}
      unoptimized
    />
  );
}
