import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import Image from "next/image";
import { data, faqItems } from "@/content/services/hr-outsourcing-consulting";
import { HeroSection } from "@pomerico/ui";
import { ServiceCardGrid } from "@pomerico/ui";
import { IconList } from "@pomerico/ui";
import { CTASection } from "@pomerico/ui";
import { Accordion } from "@pomerico/ui/client";
import { CaseStudyGrid } from "@pomerico/ui";
import { SectionHeader } from "@pomerico/ui";
import { ProcessSection } from "@pomerico/ui";
import { Breadcrumbs } from "@pomerico/ui";
import { FaqJsonLd } from "@pomerico/ui";
import { clutchBadge } from "@/content/shared";
import { allCaseStudyCards } from "@/content/case-studies";
import {
  plBreadcrumbAria,
  plBreadcrumbHome,
  plCardLinkLabel,
  plCaseStudyGridLabels,
  plCtaSectionLabels,
  plHeroTrustImageAlt,
  plServicePageLabels,
  plSiteUrl,
} from "@/content/ui-labels";
import { submitContactForm } from "@/app/actions/contact";

const metaTitle = "Outsourcing HR w Polsce | Doradztwo HR | Pomerico";

export const metadata: Metadata = withOgImage({
  title: { absolute: metaTitle },
  description: data.metaDescription,
  alternates: { canonical: "/services/hr-outsourcing-consulting" },
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
  const testimonial = data.testimonials?.[0];

  return (
    <>
      {/* Hero */}
      <HeroSection data={data.hero} trustImageAlt={plHeroTrustImageAlt} />

      <Breadcrumbs
        items={[
          { label: plBreadcrumbHome, href: "/" },
          { label: plServicePageLabels.breadcrumbServices, href: "/services" },
          { label: data.title },
        ]}
        siteUrl={plSiteUrl}
        ariaLabel={plBreadcrumbAria}
      />

      {/* Korzyści */}
      {data.benefits.length > 0 && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              heading={plServicePageLabels.benefitsHeading}
              subtitle={plServicePageLabels.benefitsSubtitle}
            />
            <ServiceCardGrid cards={data.benefits} linkLabel={plCardLinkLabel} />
          </div>
        </section>
      )}

      {/* Dla kogo */}
      {data.targetAudience && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-red">
                  {plServicePageLabels.targetAudiencePreheading}
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
                    alt={plServicePageLabels.clutchBadgeAlt}
                    width={80}
                    height={87}
                    className="max-w-[80px] shrink-0"
                  />
                  <Image
                    src="/images/clutch-doodle.svg"
                    alt={plServicePageLabels.clutchDoodleAlt}
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

      {/* Hasło + opinia klienta */}
      {data.tagline && testimonial && (
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
                <div className="mb-4 text-4xl font-bold text-primary-red">&bdquo;&rdquo;</div>
                <p className="text-sm italic leading-relaxed text-dark/70">
                  {testimonial.quote}
                </p>
                <div className="mt-6 border-t border-dark/10 pt-4">
                  <p className="font-heading text-sm font-bold text-primary-red">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-dark/60">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Proces współpracy */}
      {data.process && (
        <ProcessSection
          heading={data.process.heading ?? plServicePageLabels.processHeading}
          steps={data.process.steps}
        />
      )}

      {/* Co oferujemy */}
      {data.details && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader heading={data.details.heading} />
            <ServiceCardGrid cards={data.details.cards} linkLabel={plCardLinkLabel} />
          </div>
        </section>
      )}

      {/* Case studies */}
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
              {plServicePageLabels.faqPreheading}
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold text-dark lg:text-4xl">
              {plServicePageLabels.faqHeading}
            </h2>
          </div>
          <FaqJsonLd items={faqItems} />
          <Accordion items={faqItems} defaultOpen={0} />
        </div>
      </section>

      {/* CTA */}
      <CTASection submitAction={submitContactForm} labels={plCtaSectionLabels} />
    </>
  );
}
