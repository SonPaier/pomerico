import type {
  CounterItem,
  ContactPerson,
  ClientLogo,
} from "@pomerico/content";

// ── Liczniki (strona główna) ─────────────────────────────

export const counters: CounterItem[] = [
  { value: 2500, suffix: "+", title: "Zrealizowanych procesów", duration: 2000 },
  { value: 10, suffix: "+", title: "Lat doświadczenia", duration: 2000 },
  { value: 92.4, suffix: "%", title: "Skuteczności w projektach", duration: 2000 },
];

/** Odznaka Clutch */
export const clutchBadge = "/images/clutch-verified-partner-badge.png";

// ── Numery telefonów firmy ───────────────────────────────

export const phones = {
  pl: { display: "+48 794 165 506", href: "tel:+48794165506", schema: "+48-794-165-506" },
};

// ── Główna osoba kontaktowa ──────────────────────────────

export const contactWiktoria: ContactPerson = {
  name: "Wiktoria Wierzbicka",
  role: "HR Project & Operations Manager",
  availability: "pon.–pt., 9:00–17:00",
  phones: [
    { label: phones.pl.display, href: phones.pl.href },
  ],
  email: {
    label: "consult@pomerico.com",
    href: "mailto:consult@pomerico.com",
  },
  linkedin: { href: "https://www.linkedin.com/in/wiktoriawierzbicka/" },
  photo: "/images/wiktoria-wierzbicka-contact-portrait.webp",
};

// ── Social media ─────────────────────────────────────────

export const companyLinkedin = "https://pl.linkedin.com/company/pomerico";

// ── Karuzela logotypów klientów ──────────────────────────

export const clientLogos: ClientLogo[] = [
  { src: "/images/kardex-logo.png", alt: "Kardex" },
  { src: "/images/sonac-logo.png", alt: "Sonac" },
  { src: "/images/winora-logo.png", alt: "Winora" },
  { src: "/images/thermo-king-logo.png", alt: "Thermo King" },
  { src: "/images/dachser-logistics-logo.png", alt: "Dachser Logistics" },
  { src: "/images/wp-holding-logo.png", alt: "WP Holding" },
  { src: "/images/datumo-logo.png", alt: "Datumo" },
  { src: "/images/babord-logo.png", alt: "Babord" },
  { src: "/images/thai-union-logo.png", alt: "Thai Union" },
  { src: "/images/vanderlande-logo.png", alt: "Vanderlande" },
  { src: "/images/ssi-schaefer-logo.png", alt: "SSI Schaefer" },
  { src: "/images/hedepy-logo.png", alt: "Hedepy" },
  { src: "/images/mmr-group-logo.png", alt: "MMR Group" },
];

// ── Logo ─────────────────────────────────────────────────

export const pomericoLogo = "/images/pomerico-group-logo-brand-colors.png";
