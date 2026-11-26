import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import Image from "next/image";
import {
  data,
  faqItems,
  consultingCards,
  situationSection,
  situationCards,
  benefitsSection,
} from "@/content/services/business-consulting-tax-law";
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
import { clutchBadge } from "@/content/shared";
import { allCaseStudyCards } from "@/content/case-studies";
import { submitContactForm } from "@/app/actions/contact";
import {
  plBreadcrumbAria,
  plCaseStudyGridLabels,
  plCtaSectionLabels,
  plHeroTrustImageAlt,
  plServicePageLabels,
  plSiteUrl,
  plTestimonialCarouselProps,
} from "@/content/ui-labels";

const metaTitle = "Doradztwo biznesowe, podatki i prawo w Polsce | Pomerico";

export const metadata: Metadata = withOgImage({
  title: { absolute: metaTitle },
  description: data.metaDescription,
  alternates: { canonical: "/services/business-consulting-tax-law" },
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

      {/* 1. Trzy obszary doradztwa */}
      {data.details && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              heading={data.details.heading}
              subtitle={data.details.subheading}
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {consultingCards.map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col overflow-hidden rounded-lg border border-dark/5 bg-white"
                >
                  {/* Icon + heading */}
                  <div className="p-6 pb-0">
                    <Image
                      src={card.icon}
                      alt={card.heading}
                      width={48}
                      height={48}
                      className="mb-4 h-12 w-12"
                    />
                    <h3 className="font-heading text-lg font-bold text-dark">
                      {card.heading}
                    </h3>
                  </div>
                  {/* Quote on different background */}
                  <div className="mx-6 mt-4 rounded-lg border-l-4 border-primary-blue bg-primary-blue/5 px-4 py-3">
                    <p className="text-sm italic leading-relaxed text-dark/80">
                      &ldquo;{card.quote}&rdquo;
                    </p>
                  </div>
                  {/* Service list */}
                  <div className="flex-1 p-6 pt-4">
                    <ul className="flex flex-col gap-2">
                      {card.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-dark/70">
                          <span className="mt-1 text-primary-red">&rarr;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. Rozpoznajesz swoją sytuację? */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold text-dark lg:text-4xl">
            {situationSection.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-dark/70">
            {situationSection.description}
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {situationCards.map((card, i) => (
              <div
                key={i}
                className="flex flex-col rounded border border-dark/5 bg-white p-5 shadow-sm"
              >
                <p className="mb-2 font-ui text-xs font-bold uppercase tracking-widest text-dark/50">
                  {card.label}
                </p>
                <p className="mb-1.5 text-sm font-bold leading-snug text-dark">
                  {card.quote}
                </p>
                <p className="flex-1 text-xs leading-relaxed text-dark/70">
                  {card.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-dark/10 px-3 py-1 font-ui text-[10px] font-semibold text-dark/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      {data.tagline && (
        <TaglineSection
          heading={data.tagline.heading}
          description={data.tagline.description}
        />
      )}

      {/* Benefits */}
      {data.benefits.length > 0 && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              heading={benefitsSection.heading}
              subtitle={benefitsSection.subtitle}
            />
            <ServiceCardGrid cards={data.benefits} linkLabel={l.cardLinkLabel} />
          </div>
        </section>
      )}

      {/* Cooperation Process */}
      {data.process && (
        <ProcessSection
          heading={data.process.heading ?? l.processHeading}
          steps={data.process.steps}
        />
      )}

      {/* Testimonials */}
      {data.testimonials && data.testimonials.length > 0 && (
        <TestimonialCarousel
          testimonials={data.testimonials}
          {...plTestimonialCarouselProps}
        />
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
