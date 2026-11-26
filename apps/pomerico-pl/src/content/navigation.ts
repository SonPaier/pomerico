import type { NavLink, NavItem } from "@pomerico/content";

// Adresy podstron odpowiadają strukturze pomerico.com – polskie wersje
// podstron powstaną pod tymi samymi ścieżkami.

// ── Menu główne (nagłówek) ───────────────────────────────

export const mainNav: NavItem[] = [
  { label: "Strona główna", href: "/" },
  { label: "O nas", href: "/about-us" },
  {
    label: "Usługi",
    href: "/services",
    children: [
      { label: "BPO – outsourcing procesów biznesowych", href: "/services/bpo-business-process-outsourcing" },
      { label: "Outsourcing finansów i kontraktowanie", href: "/services/finance-outsourcing-contracting" },
      { label: "Nearshoring w Polsce", href: "/services/nearshoring-in-poland" },
      { label: "Wejście na rynek polski", href: "/services/market-entry-in-poland" },
      { label: "Doradztwo biznesowe / podatki i prawo", href: "/services/business-consulting-tax-law" },
      { label: "Usługi rekrutacyjne / RPO", href: "/services/recruitment-services-rpo" },
      { label: "Outsourcing i doradztwo HR", href: "/services/hr-outsourcing-consulting" },
      { label: "EOR + On Site", href: "/services/eor-on-site" },
      { label: "EOR – Employer of Record", href: "/services/eor-employer-of-record" },
      { label: "Body leasing / staff augmentation", href: "/services/body-leasing-staff-augmentation" },
      { label: "PEO – Professional Employer Organization", href: "/services/peo-professional-employer-organization" },
      { label: "Kontraktowanie IT", href: "/services/it-contracting" },
    ],
  },
  {
    label: "Branże",
    href: "/industries",
    children: [
      { label: "Intralogistyka", href: "/industries/intralogistics" },
      { label: "Bankowość i ubezpieczenia", href: "/industries/banking-insurance" },
      { label: "Technologie informatyczne", href: "/industries/information-technology" },
      { label: "Produkcja i przemysł", href: "/industries/manufacturing-industry" },
      { label: "Centra usług wspólnych / BPO", href: "/industries/shared-services-bpo" },
    ],
  },
  { label: "Case studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/contact" },
];

// ── Stopka ───────────────────────────────────────────────

export const footerCompanyLinks: NavLink[] = [
  { label: "Strona główna", href: "/" },
  { label: "O nas", href: "/about-us" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/contact" },
  { label: "Polityka prywatności", href: "/privacy-policy" },
  { label: "Klauzula informacyjna RODO", href: "/gdpr-information-clause" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Nearshoring w Polsce", href: "/services/nearshoring-in-poland" },
  { label: "Doradztwo biznesowe / podatki i prawo", href: "/services/business-consulting-tax-law" },
  { label: "Wejście na rynek polski", href: "/services/market-entry-in-poland" },
  { label: "Kontraktowanie IT", href: "/services/it-contracting" },
  { label: "Usługi rekrutacyjne / RPO", href: "/services/recruitment-services-rpo" },
  { label: "EOR + On-Site", href: "/services/eor-on-site" },
  { label: "EOR – Employer of Record", href: "/services/eor-employer-of-record" },
  { label: "Outsourcing i doradztwo HR", href: "/services/hr-outsourcing-consulting" },
  { label: "Body leasing / staff augmentation", href: "/services/body-leasing-staff-augmentation" },
  { label: "PEO – Professional Employer Organization", href: "/services/peo-professional-employer-organization" },
  { label: "Outsourcing finansów i kontraktowanie", href: "/services/finance-outsourcing-contracting" },
  { label: "BPO – outsourcing procesów biznesowych", href: "/services/bpo-business-process-outsourcing" },
];

export const footerIndustryLinks: NavLink[] = [
  { label: "Intralogistyka", href: "/industries/intralogistics" },
  { label: "Bankowość i ubezpieczenia", href: "/industries/banking-insurance" },
  { label: "Technologie informatyczne", href: "/industries/information-technology" },
  { label: "Produkcja i przemysł", href: "/industries/manufacturing-industry" },
  { label: "Centra usług wspólnych / BPO", href: "/industries/shared-services-bpo" },
];
