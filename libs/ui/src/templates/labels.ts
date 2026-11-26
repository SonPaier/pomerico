import type { CaseStudyGridProps } from "../CaseStudyGrid";
import type { CTASectionLabels } from "../CTASection";
import type { TestimonialCardLabels } from "../TestimonialCard";

/** Texts shared by ServicePageTemplate and IndustryPageTemplate (defaults: English). */
export interface PageTemplateCommonLabels {
  breadcrumbHome: string;
  breadcrumbAria: string;
  heroTrustImageAlt: string;
  benefitsHeading: string;
  benefitsSubtitle: string;
  /** "Learn More" link on service cards */
  cardLinkLabel: string;
  /** Used when the page data has no `process.heading` */
  processHeading: string;
  faqPreheading: string;
  faqHeading: string;
  testimonials?: {
    heading?: string;
    ariaLabels?: { previous?: string; next?: string; goTo?: string };
    cardLabels?: TestimonialCardLabels;
  };
  caseStudies?: Omit<CaseStudyGridProps, "cards">;
  cta?: Partial<CTASectionLabels>;
}

export const PAGE_TEMPLATE_COMMON_LABELS_EN: PageTemplateCommonLabels = {
  breadcrumbHome: "Home",
  breadcrumbAria: "Breadcrumb",
  heroTrustImageAlt: "Trusted partner since 2015",
  benefitsHeading: "Benefits for Your Business",
  benefitsSubtitle: "Measurable results across every engagement.",
  cardLinkLabel: "Learn More",
  processHeading: "Cooperation Process",
  faqPreheading: "Got Questions?",
  faqHeading: "Frequently Asked Questions",
};
