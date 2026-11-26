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
  /** Client logo shown in the card corner instead of the company name */
  companyLogo?: string;
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
  /** Optional HTML version of the description (e.g. with inline links); used instead of description when set. Only for cards without href. */
  descriptionHtml?: string;
  href?: string;
  /** Optional text link shown at the end of the card (used when the card has no href) */
  link?: { label: string; href: string };
}

/** Icon names available in ServiceDetailCard */
export type ServiceDetailIcon =
  | "users"
  | "cog"
  | "lightbulb"
  | "clipboard-list"
  | "user-check"
  | "git-merge"
  | "file-warning"
  | "handshake";

export interface ServiceDetail {
  icon: ServiceDetailIcon;
  heading: string;
  paragraphs: string[];
}

export interface CaseStudyCard {
  slug: string;
  title: string;
  industry?: string;
  /** Industry page slugs (/industries/*) this case study is shown on */
  industries?: string[];
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

/** Free-text section (H2 + paragraphs + optional link), e.g. "AI in your back office" */
export interface ContentSectionData {
  heading: string;
  /** HTML strings, one per paragraph */
  paragraphs: string[];
  link?: { label: string; href: string };
}

// ── Page data types ──────────────────────────────────────

export interface ServicePageData {
  slug: string;
  title: string;
  metaDescription: string;
  hero: HeroSection;
  benefits: ServiceCard[];
  /** Subtitle next to the "Benefits for Your Business" heading (default: "Measurable results across every engagement.") */
  benefitsSubtitle?: string;
  /** Service cards shown directly below Benefits */
  services?: {
    heading: string;
    cards: ServiceCard[];
    /** Optional H2 shown above the service descriptions */
    itemsHeading?: string;
    /** Service descriptions listed below the cards */
    items?: ServiceDetail[];
  };
  /** "Who is this for?" */
  targetAudience?: {
    heading: string;
    description: string;
    items?: IconListItem[];
  };
  /** Numbered cooperation process steps */
  process?: {
    heading?: string;
    /** Optional paragraph shown above the steps */
    intro?: string;
    /** Optional link shown under the intro paragraph */
    link?: { label: string; href: string };
    steps: ProcessStep[];
  };
  /** "How it works" / "What do we do" detail cards */
  details?: {
    heading: string;
    subheading?: string;
    /** Short subtitle next to the heading (same style as the Benefits subtitle) */
    subtitle?: string;
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
    /** Optional button */
    cta?: { label: string; href: string };
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
  /** Extra free-text sections shown after Benefits */
  extraSections?: ContentSectionData[];
  /** Logos of trusted clients in this industry */
  trustedLogos?: { src: string; alt: string }[];
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
