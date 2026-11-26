// Server components
export { Analytics, GtmNoScript, COOKIE_CONSENT_STORAGE_KEY } from "./Analytics";
export { ArrowRightIcon } from "./ArrowRightIcon";
export { BlogFaq } from "./BlogFaq";
export { Breadcrumbs } from "./Breadcrumbs";
export { CaseStudyGrid } from "./CaseStudyGrid";
export { CaseStudyLayout } from "./CaseStudyLayout";
export { CheckmarkIcon } from "./CheckmarkIcon";
export { ComparisonTable } from "./ComparisonTable";
export { ContactInfo } from "./ContactInfo";
export { CTASection } from "./CTASection";
export { DecisionCards } from "./DecisionCards";
export { FaqJsonLd } from "./FaqJsonLd";
export { HeroSection } from "./HeroSection";
export { heroFadeStyle, heroFadeMaskStyle, HERO_FADE_REM } from "./heroFade";
export { IconList } from "./IconList";
export { ProcessSection } from "./ProcessSection";
export { QuickComparison } from "./QuickComparison";
export { SectionHeader } from "./SectionHeader";
export { ServiceCard } from "./ServiceCard";
export { ServiceCardGrid } from "./ServiceCardGrid";
export { ServiceDetailCard } from "./ServiceDetailCard";
export { TaglineSection } from "./TaglineSection";
export { TestimonialBlock } from "./TestimonialBlock";
export { TestimonialCard } from "./TestimonialCard";
export { TrustBadges } from "./TrustBadges";

// Layout (server)
export { Footer } from "./Footer";

// Templates (server)
export { BlogPostTemplate } from "./templates/BlogPostTemplate";
export { IndustryPageTemplate } from "./templates/IndustryPageTemplate";
export { ServicePageTemplate } from "./templates/ServicePageTemplate";

// Localisation: label types and English defaults (pass Partial<…Labels> via `labels` props)
export type { BreadcrumbsProps } from "./Breadcrumbs";
export type { CaseStudyGridProps } from "./CaseStudyGrid";
export { CASE_STUDY_LAYOUT_LABELS_EN, type CaseStudyLayoutLabels } from "./CaseStudyLayout";
export { CTA_SECTION_LABELS_EN, type CTASectionLabels } from "./CTASection";
// CTAForm and ServiceComparisonTable are client modules: only their types are re-exported here
export type { CTAFormLabels } from "./CTAForm";
export type { ServiceComparisonLabels, ServiceComparisonColumn, ServiceComparisonRow, ServiceComparisonCell } from "./ServiceComparisonTable";
export type { TestimonialCardLabels } from "./TestimonialCard";
export { PAGE_TEMPLATE_COMMON_LABELS_EN, type PageTemplateCommonLabels } from "./templates/labels";
export { SERVICE_PAGE_TEMPLATE_LABELS_EN, type ServicePageTemplateLabels } from "./templates/ServicePageTemplate";
export { INDUSTRY_PAGE_TEMPLATE_LABELS_EN, type IndustryPageTemplateLabels } from "./templates/IndustryPageTemplate";
export { BLOG_POST_TEMPLATE_LABELS_EN, type BlogPostTemplateLabels } from "./templates/BlogPostTemplate";
