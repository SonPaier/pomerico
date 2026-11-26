import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import Image from "next/image";
import {
  data,
  marketEntryComparisonTable,
  marketEntryDecisionCards,
  faqItems,
} from "@/content/services/market-entry-in-poland";
import { HeroSection } from "@pomerico/ui";
import { ServiceCardGrid } from "@pomerico/ui";
import { IconList } from "@pomerico/ui";
import { CTASection } from "@pomerico/ui";
import { TestimonialCarousel, Accordion } from "@pomerico/ui/client";
import { CaseStudyGrid } from "@pomerico/ui";
import { SectionHeader } from "@pomerico/ui";
import { ProcessSection } from "@pomerico/ui";
import { TaglineSection } from "@pomerico/ui";
import { Breadcrumbs } from "@pomerico/ui";
import { FaqJsonLd } from "@pomerico/ui";
import { ComparisonTable } from "@pomerico/ui";
import { DecisionCards } from "@pomerico/ui";
import { clutchBadge } from "@/content/shared";
import { allCaseStudyCards } from "@/content/case-studies";
import { submitContactForm } from "@/app/actions/contact";
import {
  plBreadcrumbAria,
  plCaseStudyGridLabels,
  plComparisonNotSureLabel,
  plCtaSectionLabels,
  plHeroTrustImageAlt,
  plServicePageLabels,
  plSiteUrl,
} from "@/content/ui-labels";

const metaTitle = "Wejście na rynek polski – EOR czy spółka | Pomerico";

export const metadata: Metadata = withOgImage({
  title: { absolute: metaTitle },
  description: data.metaDescription,
  alternates: { canonical: "/services/market-entry-in-poland" },
  openGraph: {
    title: metaTitle,
    description: data.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: data.metaDescription,
  },
});

export default function Page() {
  const slugs = data.caseStudySlugs;
  const l = plServicePageLabels;

  return (
    <>
      {/* Hero */}
      <HeroSection data={data.hero} trustImageAlt={plHeroTrustImageAlt} />

      <Breadcrumbs
        items={[
          { label: l.breadcrumbHome, href: "/" },
          { label: l.breadcrumbServices, href: "/services" },
          { label: data.title },
        ]}
        siteUrl={plSiteUrl}
        ariaLabel={plBreadcrumbAria}
      />

      {/* 1. Dla kogo */}
      {data.targetAudience && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-red">
                  {l.targetAudiencePreheading}
                </p>
                <h2 className="font-heading mt-2 text-3xl font-bold text-dark lg:text-4xl">
                  {data.targetAudience.heading}
                </h2>
                <div
                  className="mt-6 text-base leading-relaxed text-dark/80"
                  dangerouslySetInnerHTML={{
                    __html: data.targetAudience.description,
                  }}
                />
                <div className="mt-8 flex items-center justify-between max-w-sm">
                  <Image
                    src={clutchBadge}
                    alt={l.clutchBadgeAlt}
                    width={80}
                    height={87}
                    className="max-w-[80px] shrink-0"
                  />
                  <Image
                    src="/images/clutch-doodle.svg"
                    alt={l.clutchDoodleAlt}
                    width={180}
                    height={87}
                    className="max-w-[180px]"
                    unoptimized
                  />
                </div>
              </div>
              <div>
                {data.targetAudience.items &&
                  data.targetAudience.items.length > 0 && (
                    <IconList items={data.targetAudience.items} variant="light" />
                  )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. Decision cards + comparison table */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <DecisionCards cards={marketEntryDecisionCards} />
        </div>
      </section>
      <ComparisonTable
        {...marketEntryComparisonTable}
        notSureLabel={plComparisonNotSureLabel}
      />

      {/* 3. Cooperation Process */}
      {data.process && (
        <ProcessSection
          heading={data.process.heading ?? l.processHeading}
          steps={data.process.steps}
        />
      )}

      {/* 4. How it works (Details) — before Benefits */}
      {data.details && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader heading={data.details.heading} />
            <ServiceCardGrid cards={data.details.cards} linkLabel={l.cardLinkLabel} />
          </div>
        </section>
      )}

      {/* 5. Benefits for Your Business */}
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

      {/* Tagline + Testimonial — split view */}
      {data.tagline && data.testimonials && data.testimonials.length > 0 && (
        <section className="bg-primary-blue py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
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
                    {data.testimonials[0].role}, {data.testimonials[0].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {slugs && slugs.length > 0 && (
        <CaseStudyGrid
          cards={allCaseStudyCards.filter((c) => slugs.includes(c.slug))}
          {...plCaseStudyGridLabels}
        />
      )}

      {/* FAQ */}
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

      {/* Bottom CTA */}
      <CTASection submitAction={submitContactForm} labels={plCtaSectionLabels} />
    </>
  );
}
