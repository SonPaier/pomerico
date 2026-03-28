import type { ServiceCard, IconListItem } from "@/content/types";

export const servicesListingHero = {
  heading: "Services Overview – What We Do",
  description:
    "At Pomerico, we help businesses across Europe build high-performing teams, streamline operations, and unlock their full growth potential. Our comprehensive suite of services is designed to tackle real business challenges – from scaling teams and improving operational efficiency to ensuring compliance and supporting digital transformation.",
  iconList: [
    { bold: "Enable faster", text: "and more efficient delivery of critical business processes" },
    { bold: "Reduce operational", text: "complexity and administrative burden" },
    { bold: "Provide access", text: "to top talent across multiple domains" },
    { bold: "Ensure regulatory", text: "and legal compliance" },
    { bold: "Support long-term", text: "scalability and resilience of business operations" },
  ] satisfies IconListItem[],
  trustImage: "/images/pomerico-trusted-partner-badges.svg",
};

export const allServiceCards: ServiceCard[] = [
  { icon: "/images/icon-target-bpo-outsourcing.png", heading: "BPO – Business Process Outsourcing", description: "We take over complete business processes so you can focus on core strategy. From back-office operations to customer support, our teams deliver measurable efficiency gains.", href: "/services/bpo-business-process-outsourcing" },
  { icon: "/images/icon-shield-trusted-by-candidates.png", heading: "PEO – Professional Employer Organization", description: "Share employment responsibilities while retaining full operational control. We handle payroll, benefits, and compliance so you can focus on managing your team.", href: "/services/peo-professional-employer-organization" },
  { icon: "/images/icon-effectiveness-employee-growth.png", heading: "Finance Outsourcing & Contracting", description: "Optimized financial operations with reliable compliance and reporting. We provide skilled finance professionals who integrate with your workflows and deliver faster outcomes.", href: "/services/finance-outsourcing-contracting" },
  { icon: "/images/icon-gears-recruitment-process.png", heading: "Body Leasing / Staff Augmentation", description: "Scale your team flexibly with pre-vetted specialists, without long-term commitments. Get fast access to talent that integrates seamlessly into your existing structure.", href: "/services/body-leasing-staff-augmentation" },
  { icon: "/images/icon-hr-team-search.png", heading: "HR Outsourcing & Consulting", description: "Strategic HR support from recruitment to retention and organizational development. We design and implement HR solutions tailored to your company's growth stage.", href: "/services/hr-outsourcing-consulting" },
  { icon: "/images/icon-magnifier-security-verification.png", heading: "EOR – Employer of Record", description: "Hire legally in Poland without establishing a local entity. We handle contracts, payroll, taxes, and full compliance so you can onboard talent immediately.", href: "/services/eor-employer-of-record" },
  { icon: "/images/icon-handshake-partnership.png", heading: "EOR + Onsite", description: "Employer of Record combined with dedicated onsite management and coordination. We ensure your remote teams operate as smoothly as in-house departments.", href: "/services/eor-on-site" },
  { icon: "/images/icon-puzzle-team-integration.png", heading: "Recruitment Services / RPO", description: "End-to-end recruitment handled by experienced HR specialists. From sourcing and screening to final placement, we deliver qualified candidates fast.", href: "/services/recruitment-services-rpo" },
  { icon: "/images/icon-folders-document-management.png", heading: "IT Contracting", description: "Access skilled IT professionals for project-based or ongoing engagements. We source developers, engineers, and tech leads across all major technology stacks.", href: "/services/it-contracting" },
  { icon: "/images/icon-globe-international-expansion.png", heading: "Market Entry in Poland", description: "Launch operations in Poland with expert legal, tax, and HR setup. We guide you through every step — from entity formation to hiring your first local team.", href: "/services/market-entry-in-poland" },
  { icon: "/images/icon-wrench-reduced-turnover.png", heading: "Business Consulting / Tax & Law", description: "Expert advisory on Polish tax regulations, legal compliance, and business strategy. We help international companies navigate the regulatory landscape with confidence.", href: "/services/business-consulting-tax-law" },
  { icon: "/images/icon-workflow-process-automation.png", heading: "Nearshoring in Poland", description: "Leverage Poland's skilled workforce and EU location for cost-effective nearshoring. We build and manage dedicated teams that operate in your time zone.", href: "/services/nearshoring-in-poland" },
];
