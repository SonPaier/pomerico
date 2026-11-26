import Image from "next/image";
import type { ServicePageData } from "@pomerico/content";
import { HeroSection } from "../HeroSection";
import { ServiceCardGrid } from "../ServiceCardGrid";
import { ServiceDetailCard } from "../ServiceDetailCard";
import { IconList } from "../IconList";
import { CTASection } from "../CTASection";
import { TestimonialCarousel } from "../TestimonialCarousel";
import { CaseStudyGrid } from "../CaseStudyGrid";
import { SectionHeader } from "../SectionHeader";
import { ProcessSection } from "../ProcessSection";
import { TaglineSection } from "../TaglineSection";
import { Breadcrumbs } from "../Breadcrumbs";
import { Accordion } from "../Accordion";
import { FaqJsonLd } from "../FaqJsonLd";
import type { CaseStudyCard } from "@pomerico/content";
import { PAGE_TEMPLATE_COMMON_LABELS_EN, type PageTemplateCommonLabels } from "./labels";

export interface ServicePageTemplateLabels extends PageTemplateCommonLabels {
  breadcrumbServices: string;
  /** Small red label above the target-audience heading */
  targetAudiencePreheading: string;
  clutchBadgeAlt: string;
  clutchDoodleAlt: string;
}

export const SERVICE_PAGE_TEMPLATE_LABELS_EN: ServicePageTemplateLabels = {
  ...PAGE_TEMPLATE_COMMON_LABELS_EN,
  breadcrumbServices: "Services",
  targetAudiencePreheading: "POMERICO GROUP",
  clutchBadgeAlt: "Clutch verified partner – Top HR Outsourcing Company, Poland 2023",
  clutchDoodleAlt: "We work with companies that",
};

function TargetAudienceSection({
  heading,
  description,
  items,
  clutchBadge,
  labels,
}: {
  heading: string;
  description: string;
  items?: { bold?: string; text: string }[];
  clutchBadge: string;
  labels: Pick<ServicePageTemplateLabels, "targetAudiencePreheading" | "clutchBadgeAlt" | "clutchDoodleAlt">;
}) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-red">
              {labels.targetAudiencePreheading}
            </p>
            <h2 className="font-heading mt-2 text-3xl font-bold text-dark lg:text-4xl">
              {heading}
            </h2>
            <div
              className="mt-6 text-base leading-relaxed text-dark/80"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="mt-8 flex items-center justify-between max-w-sm">
              <Image
                src={clutchBadge}
                alt={labels.clutchBadgeAlt}
                width={80}
                height={87}
                className="max-w-[80px] shrink-0"
              />
              <Image
                src="/images/clutch-doodle.svg"
                alt={labels.clutchDoodleAlt}
                width={180}
                height={87}
                className="max-w-[180px]"
                unoptimized
              />
            </div>
          </div>
          <div>
            {items && items.length > 0 && (
              <IconList items={items} variant="light" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServicePageTemplateProps {
  data: ServicePageData;
  allCaseStudyCards: CaseStudyCard[];
  clutchBadge: string;
  submitAction: (formData: FormData) => Promise<{ success: boolean; error?: string }>;
  faqItems?: { question: string; answer: string }[];
  /** Overrides for built-in texts (defaults: English, see SERVICE_PAGE_TEMPLATE_LABELS_EN) */
  labels?: Partial<ServicePageTemplateLabels>;
  /** Absolute origin for JSON-LD (default https://pomerico.com) */
  siteUrl?: string;
}

export function ServicePageTemplate({ data, allCaseStudyCards, clutchBadge, submitAction, faqItems, labels, siteUrl }: ServicePageTemplateProps) {
  const l = { ...SERVICE_PAGE_TEMPLATE_LABELS_EN, ...labels };
  const slugs = data.caseStudySlugs;

  return (
    <>
      {/* Hero */}
      <HeroSection data={data.hero} trustImageAlt={l.heroTrustImageAlt} />

      <Breadcrumbs
        items={[
          { label: l.breadcrumbHome, href: "/" },
          { label: l.breadcrumbServices, href: "/services" },
          { label: data.title },
        ]}
        siteUrl={siteUrl}
        ariaLabel={l.breadcrumbAria}
      />

      {/* Benefits */}
      {data.benefits.length > 0 && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              heading={l.benefitsHeading}
              subtitle={l.benefitsSubtitle}
            />
            <ServiceCardGrid cards={data.benefits} linkLabel={l.cardLinkLabel} />
          </div>
        </section>
      )}

      {/* Services */}
      {data.services && data.services.cards.length > 0 && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader heading={data.services.heading} />
            <ServiceCardGrid cards={data.services.cards} linkLabel={l.cardLinkLabel} />
            {data.services.items && data.services.items.length > 0 && (
              <>
                {data.services.itemsHeading && (
                  <div className="mt-20">
                    <SectionHeader heading={data.services.itemsHeading} />
                  </div>
                )}
                <div className={`grid gap-8 ${data.services.itemsHeading ? "" : "mt-8"}`}>
                  {data.services.items.map((item) => (
                    <ServiceDetailCard key={item.heading} data={item} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Target Audience */}
      {data.targetAudience && (
        <TargetAudienceSection
          heading={data.targetAudience.heading}
          description={data.targetAudience.description}
          items={data.targetAudience.items}
          clutchBadge={clutchBadge}
          labels={l}
        />
      )}

      {/* Tagline + Testimonial — split view when both exist */}
      {data.tagline && data.testimonials && data.testimonials.length > 0 ? (
        <section className="bg-primary-blue py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                {data.tagline.preheading && (
                  <p className="mb-2 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    {data.tagline.preheading}
                  </p>
                )}
                <h2 className="font-heading text-2xl font-bold italic lg:text-3xl">
                  {data.tagline.heading}
                </h2>
                {data.tagline.description && (
                  <p className="mt-4 text-base leading-relaxed text-white/80">
                    {data.tagline.description}
                  </p>
                )}
              </div>
              <div className="rounded-lg bg-white p-8">
                <div className="mb-4 text-4xl font-bold text-primary-red">&ldquo;&rdquo;</div>
                <p className="text-sm italic leading-relaxed text-dark/70">
                  {data.testimonials[0].quote}
                </p>
                <div className="mt-6 border-t border-dark/10 pt-4">
                  <p className="font-heading text-sm font-bold text-primary-red">
                    {data.testimonials[0].author}
                  </p>
                  <p className="text-xs text-dark/60">
                    {data.testimonials[0].role}{data.testimonials[0].company ? `, ${data.testimonials[0].company}` : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {data.tagline && (
            <TaglineSection
              heading={data.tagline.heading}
              description={data.tagline.description}
            />
          )}
          {data.testimonials && data.testimonials.length > 0 && (
            <TestimonialCarousel testimonials={data.testimonials} {...l.testimonials} />
          )}
        </>
      )}

      {/* Cooperation Process */}
      {data.process && (
        <ProcessSection
          heading={data.process.heading ?? l.processHeading}
          steps={data.process.steps}
        />
      )}

      {/* Details (How it works / What do we do) */}
      {data.details && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader heading={data.details.heading} />
            <ServiceCardGrid cards={data.details.cards} linkLabel={l.cardLinkLabel} />
          </div>
        </section>
      )}

      {/* Case Studies */}
      {slugs && slugs.length > 0 && (
        <CaseStudyGrid
          cards={allCaseStudyCards.filter((c) => slugs.includes(c.slug))}
          {...l.caseStudies}
        />
      )}

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-red">
                {l.faqPreheading}
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold text-dark lg:text-4xl">
                {l.faqHeading}
              </h2>
            </div>
            <FaqJsonLd items={faqItems} />
            <Accordion items={faqItems} defaultOpen={0} />
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <CTASection submitAction={submitAction} labels={l.cta} />
    </>
  );
}
