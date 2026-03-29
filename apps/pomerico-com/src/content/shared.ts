import type {
  CounterItem,
  ContactPerson,
  ClientLogo,
} from "@pomerico/content";

// ── Counters (homepage, about-us) ────────────────────────

export const counters: CounterItem[] = [
  { value: 2500, suffix: "+", title: "Completed processes", duration: 2000 },
  { value: 10, suffix: "+", title: "Years of experience", duration: 2000 },
  { value: 92.4, suffix: "%", title: "Effectiveness in projects", duration: 2000 },
];

// ── Trust badges image paths ─────────────────────────────

/** Full-width trust strip (used in hero sections on dark bg) */
export const trustImageWide = "/images/pomerico-trusted-partner-badges.svg";

/** Compact trust strip (used in mid-page sections) */
export const trustImageCompact = "/images/pomerico-trusted-partner-badges-compact.svg";

/** Clutch badge */
export const clutchBadge = "/images/clutch-verified-partner-badge.png";

// ── Primary contact person ───────────────────────────────

export const contactWiktoria: ContactPerson = {
  name: "Wiktoria Wierzbicka",
  role: "HR Project & Operations Manager",
  availability: "Mon–Fri, 9:00–17:00 CET",
  phones: [
    { label: "+45 66 33 90 70", href: "tel:+4566339070" },
    { label: "+48 794 165 506", href: "tel:+48794165506" },
  ],
  email: {
    label: "wiktoria.wierzbicka@pomerico.com",
    href: "mailto:wiktoria.wierzbicka@pomerico.com",
  },
  linkedin: { href: "https://www.linkedin.com/in/wiktoriawierzbicka/" },
  photo: "/images/wiktoria-wierzbicka-contact-portrait.jpg",
};

// ── Company social links ─────────────────────────────────

export const companyLinkedin = "https://pl.linkedin.com/company/pomerico";

// ── Client logos carousel (homepage) ─────────────────────

export const clientLogos: ClientLogo[] = [
  { src: "/images/kardex-logo.png", alt: "Kardex" },
  { src: "/images/sonac-logo.png", alt: "Sonac" },
  { src: "/images/winora-logo.png", alt: "Winora" },
  { src: "/images/thermo-king-logo.png", alt: "Thermo King" },
  { src: "/images/dachser-logistics-logo.png", alt: "Dachser Logistics" },
  { src: "/images/wp-holding-logo.png", alt: "WP Holding" },
  { src: "/images/datumo-logo.png", alt: "Datumo" },
  { src: "/images/fairplay-towage-logo.png", alt: "Fairplay Towage" },
  { src: "/images/babord-logo.png", alt: "Babord" },
  { src: "/images/thai-union-logo.png", alt: "Thai Union" },
  { src: "/images/vanderlande-logo.png", alt: "Vanderlande" },
  { src: "/images/ssi-schaefer-logo.png", alt: "SSI Schaefer" },
  { src: "/images/hedepy-logo.png", alt: "Hedepy" },
  { src: "/images/mmr-group-logo.png", alt: "MMR Group" },
];

// ── Logo ─────────────────────────────────────────────────

export const pomericoLogo = "/images/pomerico-group-logo.png";
