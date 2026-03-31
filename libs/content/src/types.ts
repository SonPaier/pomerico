// ── Shared section types ─────────────────────────────────

export interface IconListItem {
  bold?: string;
  text: string;
}

export interface CounterItem {
  value: number;
  suffix: string;
  title: string;
  duration?: number;
}

export interface TrustBadge {
  label: string;
}

export interface ContactPerson {
  name: string;
  role: string;
  availability: string;
  phones: { label: string; href: string }[];
  email: { label: string; href: string };
  linkedin: { href: string };
  photo: string;
}

export interface ClientLogo {
  src: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

// ── Section types ────────────────────────────────────────

export interface HeroSection {
  preheading?: string;
  heading: string;
  description: string;
  iconList: IconListItem[];
  trustImage?: string;
}

export interface ServiceCard {
  icon: string;
  heading: string;
  description: string;
  href?: string;
}

export interface CaseStudyCard {
  slug: string;
  title: string;
  industry?: string;
  summary: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  heading: string;
  description: string;
}

// ── Page data types ──────────────────────────────────────

export interface ServicePageData {
  slug: string;
  title: string;
  metaDescription: string;
  hero: HeroSection;
  benefits: ServiceCard[];
  /** "Who is this for?" */
  targetAudience?: {
    heading: string;
    description: string;
    items?: IconListItem[];
  };
  /** Numbered cooperation process steps */
  process?: {
    heading?: string;
    steps: ProcessStep[];
  };
  /** "How it works" / "What do we do" detail cards */
  details?: {
    heading: string;
    subheading?: string;
    cards: ServiceCard[];
  };
  /** Testimonials shown on this page */
  testimonials?: Testimonial[];
  /** Featured case study slugs */
  caseStudySlugs?: string[];
  /** Optional tagline between sections */
  tagline?: {
    preheading?: string;
    heading: string;
    description?: string;
  };
}

export interface IndustryPageData {
  slug: string;
  title: string;
  metaDescription: string;
  hero: HeroSection;
  services: ServiceCard[];
  /** Custom heading for the services section (defaults to "Our Services") */
  servicesHeading?: string;
  /** "Benefits for your business" cards */
  benefits?: ServiceCard[];
  /** "Who is this for?" */
  targetAudience?: {
    heading: string;
    description: string;
    items?: IconListItem[];
  };
  /** Numbered cooperation process steps */
  process?: {
    heading?: string;
    steps: ProcessStep[];
  };
  /** Testimonials shown on this page */
  testimonials?: Testimonial[];
  /** Optional tagline between sections */
  tagline?: {
    heading: string;
    description?: string;
  };
  /** Optional case studies shown on this industry page */
  caseStudySlugs?: string[];
}

export interface CaseStudyPageData {
  slug: string;
  title: string;
  metaDescription: string;
  industry: string;
  client?: string;
  /** Structured sections — HTML strings for free-form content */
  goal: string;
  challenges: string;
  approach: string;
  results: string;
  image?: string;
  /** Optional tagline between challenges and approach */
  tagline?: {
    heading: string;
    description?: string;
  };
  /** Optional testimonial shown on the page */
  testimonial?: Testimonial;
}
