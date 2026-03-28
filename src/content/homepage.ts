import type { ServiceCard, Testimonial } from "./types";

// ── Hero ────────────────────────────────────────────────

export const homepageHero = {
  heading: "We build effective teams",
  subheading: "Your BPO Partner",
  clutchBadge: "/images/clutch-verified-partner-badge.png",
};

// ── Service cards (homepage "What we specialize in?") ───

export const homepageServiceCards: ServiceCard[] = [
  {
    icon: "/images/icon-person-growth-performance.png",
    heading: "Finance Outsourcing & Contracting",
    description: "Optimized financial operations, faster financial outcomes, reliable compliance and reporting.",
    href: "/services/finance-outsourcing-contracting",
  },
  {
    icon: "/images/icon-handshake-partnership.png",
    heading: "Body Leasing / Staff Augmentation",
    description: "Flexible team scaling, fast access to talent, no long-term commitments.",
    href: "/services/body-leasing-staff-augmentation",
  },
  {
    icon: "/images/icon-id-card-employer-of-record.png",
    heading: "Employer of Record (EOR)",
    description: "Local compliance handled, risk-free international hiring, payroll and contracts managed.",
    href: "/services/eor-employer-of-record",
  },
  {
    icon: "/images/icon-globe-international-expansion.png",
    heading: "Business Process Outsourcing (BPO)",
    description: "Optimized business processes, lower operational expenses, focus on core business.",
    href: "/services/bpo-business-process-outsourcing",
  },
  {
    icon: "/images/icon-recruitment-talent-search.png",
    heading: "Recruitment Services / RPO",
    description: "Faster hiring process, access to qualified candidates, recruitment handled end-to-end.",
    href: "/services/recruitment-services-rpo",
  },
  {
    icon: "/images/icon-shield-employer-compliance.png",
    heading: "Market Entry in Poland",
    description: "Local market expertise, legal and HR setup, fast market expansion.",
    href: "/services/market-entry-in-poland",
  },
  {
    icon: "/images/icon-hr-team-search.png",
    heading: "HR Outsourcing & Consulting",
    description: "Strategic HR support from recruitment to retention and organizational development.",
    href: "/services/hr-outsourcing-consulting",
  },
  {
    icon: "/images/icon-brain-it-expertise.png",
    heading: "IT Contracting",
    description: "Access skilled IT professionals for project-based or ongoing engagements.",
    href: "/services/it-contracting",
  },
  {
    icon: "/images/icon-workflow-process-automation.png",
    heading: "Nearshoring in Poland",
    description: "Leverage Poland's skilled workforce and EU location for cost-effective nearshoring.",
    href: "/services/nearshoring-in-poland",
  },
];

// ── "Why 200+ companies choose Pomerico?" cards ─────────

export const whyPomericoCards: ServiceCard[] = [
  {
    icon: "/images/icon-effectiveness-employee-growth.png",
    heading: "Effectiveness",
    description: "92.4% of projects delivered on time. In many teams, turnover stays at 0%.",
  },
  {
    icon: "/images/icon-umbrella-cost-efficiency.png",
    heading: "Cost efficiency",
    description: "We cut unnecessary expenses and minimize the cost of wrong hiring decisions.",
  },
  {
    icon: "/images/icon-cost-reduction-optimization.png",
    heading: "Speed",
    description: "First candidates within 48h. Full team deployed in 2-4 weeks.",
  },
  {
    icon: "/images/icon-magnifier-quality-assurance.png",
    heading: "Guaranteed results",
    description: "We only take on projects we can deliver with excellence.",
  },
  {
    icon: "/images/icon-comprehensive-support-umbrella.png",
    heading: "Comprehensive support",
    description: "From recruitment to HR, finance, and consulting - one partner for all your needs.",
  },
  {
    icon: "/images/icon-shield-trusted-by-candidates.png",
    heading: "Trusted by candidates",
    description: "93% of candidates rate our recruitment process as professional and transparent.",
  },
  {
    icon: "/images/icon-wrench-reduced-turnover.png",
    heading: "Reduced turnover",
    description: "We care about retention and engagement – stable teams mean better results.",
  },
  {
    icon: "/images/icon-handshake-partnership-reliability.png",
    heading: "Partnership & reliability",
    description: "Clients stay with us long-term for our honesty, flexibility, and full commitment.",
  },
];

// ── Testimonial (from the review image on homepage) ─────

export const homepageTestimonials: Testimonial[] = [
  {
    quote:
      "Pomerico Group excels in HR knowledge and organizational culture. Their adeptness in identifying issues and crafting effective solutions ensures that collaborating with them is a guarantee of development.",
    author: "Julia Kasparek-Guzik",
    role: "COO",
    company: "Datumo",
  },
  {
    quote:
      "The recruitment went quickly, and its effects were more than satisfactory. I am very pleased with the cooperation and I highly recommend Pomerico Group.",
    author: "Michał Nowak",
    role: "Regional Service Manager",
    company: "Vanderlande",
  },
  {
    quote:
      "Pomerico stands out for their reliability and efficiency. Their effectiveness in HR, marketing and other strategic areas deserves recognition. They're the best company I've ever had the pleasure to work with in the sector.",
    author: "Mikołaj Piec",
    role: "Owner",
    company: "Mera Automatic",
  },
  {
    quote:
      "They demonstrated loyalty on more than one occasion and carried out tasks exceeding our expectations. This is the most reliable, effective, and trustworthy company.",
    author: "Michał Karpowicz",
    role: "COO",
    company: "Babord",
  },
];

// ── Testimonial review image (SVG from WP) ─────────────

export const testimonialImage = "/images/datumo-client-testimonial-review.svg";
export const testimonialImageMobile = "/images/datumo-client-review-mobile.svg";

// ── Map image ───────────────────────────────────────────

export const mapImage = "/images/pomerico-services-map-europe.png";
