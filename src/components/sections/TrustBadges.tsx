import Image from "next/image";
import { trustImageCompact, trustImageWide } from "@/content/shared";

interface TrustBadgesProps {
  /** "wide" = larger SVG for hero sections, "compact" = smaller for mid-page */
  variant?: "wide" | "compact";
  className?: string;
}

export function TrustBadges({ variant = "compact", className }: TrustBadgesProps) {
  const src = variant === "wide" ? trustImageWide : trustImageCompact;

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
