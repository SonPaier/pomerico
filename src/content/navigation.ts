export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

function isGroup(item: NavItem): item is NavGroup {
  return "children" in item;
}

export { isGroup };

// ── Main navigation (header) ─────────────────────────────

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "BPO – Business Process Outsourcing", href: "/services/bpo-business-process-outsourcing" },
      { label: "Finance Outsourcing & Contracting", href: "/services/finance-outsourcing-contracting" },
      { label: "Nearshoring in Poland", href: "/services/nearshoring-in-poland" },
      { label: "Market Entry in Poland", href: "/services/market-entry-in-poland" },
      { label: "Business Consulting / Tax & Law", href: "/services/business-consulting-tax-law" },
      { label: "Recruitment Services / RPO", href: "/services/recruitment-services-rpo" },
      { label: "HR Outsourcing & Consulting", href: "/services/hr-outsourcing-consulting" },
      { label: "EOR + On Site", href: "/services/eor-on-site" },
      { label: "EOR – Employer of Record", href: "/services/eor-employer-of-record" },
      { label: "Body Leasing / Staff Augmentation", href: "/services/body-leasing-staff-augmentation" },
      { label: "PEO – Professional Employer Organization", href: "/services/peo-professional-employer-organization" },
      { label: "IT Contracting", href: "/services/it-contracting" },
    ],
  },
  {
    label: "Industry",
    href: "/industries",
    children: [
      { label: "Intralogistics", href: "/industries/intralogistics" },
      { label: "Banking & Insurance", href: "/industries/banking-insurance" },
      { label: "Information Technology", href: "/industries/information-technology" },
      { label: "Manufacturing & Industry", href: "/industries/manufacturing-industry" },
      { label: "Shared Services / BPO", href: "/industries/shared-services-bpo" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

// ── Footer navigation ────────────────────────────────────

export const footerCompanyLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "GDPR Information Clause", href: "/gdpr-information-clause" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Nearshoring in Poland", href: "/services/nearshoring-in-poland" },
  { label: "Business Consulting / Tax & Law", href: "/services/business-consulting-tax-law" },
  { label: "Market Entry in Poland", href: "/services/market-entry-in-poland" },
  { label: "IT Contracting", href: "/services/it-contracting" },
  { label: "Recruitment Services / RPO", href: "/services/recruitment-services-rpo" },
  { label: "EOR + On-Site", href: "/services/eor-on-site" },
  { label: "EOR – Employer of Record", href: "/services/eor-employer-of-record" },
  { label: "HR Outsourcing & Consulting", href: "/services/hr-outsourcing-consulting" },
  { label: "Body Leasing / Staff Augmentation", href: "/services/body-leasing-staff-augmentation" },
  { label: "PEO – Professional Employer Organization", href: "/services/peo-professional-employer-organization" },
  { label: "Finance Outsourcing & Contracting", href: "/services/finance-outsourcing-contracting" },
  { label: "BPO – Business Process Outsourcing", href: "/services/bpo-business-process-outsourcing" },
];

export const footerIndustryLinks: NavLink[] = [
  { label: "Intralogistics", href: "/industries/intralogistics" },
  { label: "Banking & Insurance", href: "/industries/banking-insurance" },
  { label: "Information Technology", href: "/industries/information-technology" },
  { label: "Manufacturing & Industry", href: "/industries/manufacturing-industry" },
  { label: "Shared Services / BPO", href: "/industries/shared-services-bpo" },
];
