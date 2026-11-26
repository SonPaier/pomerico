import Image from "next/image";
import type { CaseStudyPageData } from "@pomerico/content";
import { CTASection } from "./CTASection";
import { CaseStudyGrid } from "./CaseStudyGrid";
import { TestimonialBlock } from "./TestimonialBlock";
import { TaglineSection } from "./TaglineSection";
import { Breadcrumbs } from "./Breadcrumbs";
import type { CaseStudyCard } from "@pomerico/content";
import type { CaseStudyGridProps } from "./CaseStudyGrid";
import type { CTASectionLabels } from "./CTASection";
import type { TestimonialCardLabels } from "./TestimonialCard";

export interface CaseStudyLayoutLabels {
  heroImageAlt: string;
  clientSpotlight: string;
  client: string;
  industry: string;
  projectGoal: string;
  challenge: string;
  viewAllServices: string;
  approach: string;
  results: string;
  breadcrumbHome: string;
  breadcrumbCaseStudies: string;
  breadcrumbAria: string;
  testimonialHeading?: string;
  testimonialCardLabels?: TestimonialCardLabels;
  caseStudies?: Omit<CaseStudyGridProps, "cards">;
  cta?: Partial<CTASectionLabels>;
}

export const CASE_STUDY_LAYOUT_LABELS_EN: CaseStudyLayoutLabels = {
  heroImageAlt: "Glass facade of a modern office building against a blue sky",
  clientSpotlight: "Client Spotlight",
  client: "Client",
  industry: "Industry",
  projectGoal: "Project Goal",
  challenge: "The Challenge",
  viewAllServices: "VIEW ALL SERVICES",
  approach: "Our Approach",
  results: "Results & Outcomes",
  breadcrumbHome: "Home",
  breadcrumbCaseStudies: "Case Studies",
  breadcrumbAria: "Breadcrumb",
};

interface CaseStudyLayoutProps {
  data: CaseStudyPageData;
  allCaseStudyCards: CaseStudyCard[];
  submitAction: (formData: FormData) => Promise<{ success: boolean; error?: string }>;
  /** Overrides for built-in texts (defaults: English, see CASE_STUDY_LAYOUT_LABELS_EN) */
  labels?: Partial<CaseStudyLayoutLabels>;
  /** Absolute origin for JSON-LD (default https://pomerico.com) */
  siteUrl?: string;
}

function ContentSection({
  heading,
  html,
  variant = "default",
}: {
  heading: string;
  html: string;
  variant?: "default" | "split";
}) {
  if (variant === "split") {
    return (
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
            <div className="space-y-4 md:col-span-5">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary-blue lg:text-5xl">
                {heading}
              </h2>
              <div className="h-1.5 w-16 rounded-full bg-primary-red" />
            </div>
            <div className="md:col-span-7">
              <div
                className="prose prose-lg max-w-none leading-relaxed text-dark/70 [&_b]:text-dark [&_strong]:text-dark"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-heading mb-6 text-3xl font-extrabold tracking-tight text-primary-blue lg:text-4xl">
          {heading}
        </h2>
        <div
          className="prose prose-lg max-w-none leading-relaxed text-dark/70 [&_b]:text-dark [&_strong]:text-dark"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  );
}

export function CaseStudyLayout({ data, allCaseStudyCards, submitAction, labels, siteUrl }: CaseStudyLayoutProps) {
  const l = { ...CASE_STUDY_LAYOUT_LABELS_EN, ...labels };
  const otherCaseStudies = allCaseStudyCards
    .filter((c) => c.slug !== data.slug)
    .slice(0, 4);

  return (
    <article>
      {/* Hero — full-bleed with gradient + architectural bg */}
      <header className="relative flex min-h-[480px] items-center overflow-hidden lg:min-h-[560px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/case-study-hero-building.jpg"
            alt={l.heroImageAlt}
            fill
            sizes="100vw"
            className="object-cover"
            // `priority` is deprecated in Next.js 16; same effect for the hero.
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/90 via-primary-blue/85 to-primary-blue/75" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-4xl space-y-6">
            {/* Client pill */}
            {data.client && (
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
                <span className="font-ui text-xs font-bold uppercase tracking-widest text-white">
                  {l.clientSpotlight}
                </span>
                <div className="h-4 w-px bg-white/30" />
                <span className="text-sm font-semibold text-white">
                  {data.client}
                </span>
              </div>
            )}

            <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              {data.title}
            </h1>

            {data.metaDescription && (
              <p className="max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl">
                {data.metaDescription}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Quick Facts bar — overlapping hero */}
      <section className="relative z-20 -mt-12 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-8 rounded-2xl border border-dark/5 bg-white/80 p-8 shadow-lg backdrop-blur-md md:flex-row md:items-center md:justify-between md:p-12">
            {data.image && (
              <>
                <div className="flex items-center">
                  <Image
                    src={data.image}
                    alt={data.client ?? ""}
                    width={200}
                    height={80}
                    className="h-24 w-auto object-contain mix-blend-multiply"
                  />
                </div>
                <div className="hidden h-12 w-px bg-dark/10 md:block" />
              </>
            )}
            {data.client && (
              <>
                <div className="space-y-1">
                  <span className="font-ui text-xs font-bold uppercase tracking-widest text-primary-red">
                    {l.client}
                  </span>
                  <p className="font-heading text-xl font-bold text-primary-blue">
                    {data.client}
                  </p>
                </div>
                <div className="hidden h-12 w-px bg-dark/10 md:block" />
              </>
            )}
            <div className="space-y-1">
              <span className="font-ui text-xs font-bold uppercase tracking-widest text-primary-red">
                {l.industry}
              </span>
              <p className="font-heading text-xl font-bold text-primary-blue">
                {data.industry}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Goal */}
      <ContentSection heading={l.projectGoal} html={data.goal} variant="split" />

      {/* Challenges */}
      <div className="bg-gray-bg">
        <ContentSection heading={l.challenge} html={data.challenges} variant="split" />
      </div>

      {/* Tagline */}
      {data.tagline && (
        <TaglineSection
          heading={data.tagline.heading}
          description={data.tagline.description}
          ctaLabel={l.viewAllServices}
          ctaHref="/services"
        />
      )}

      {/* Testimonial */}
      {data.testimonial && (
        <TestimonialBlock
          testimonial={data.testimonial}
          heading={l.testimonialHeading}
          cardLabels={l.testimonialCardLabels}
        />
      )}

      {/* Our Approach */}
      <ContentSection heading={l.approach} html={data.approach} variant="split" />

      {/* Results */}
      <div className="bg-gray-bg">
        <ContentSection
          heading={l.results}
          html={data.results}
          variant="split"
        />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: l.breadcrumbHome, href: "/" },
          { label: l.breadcrumbCaseStudies, href: "/case-studies" },
          { label: data.title },
        ]}
        siteUrl={siteUrl}
        ariaLabel={l.breadcrumbAria}
      />

      {/* More Case Studies */}
      <CaseStudyGrid cards={otherCaseStudies} {...l.caseStudies} />

      {/* Bottom CTA */}
      <CTASection submitAction={submitAction} labels={l.cta} />
    </article>
  );
}
