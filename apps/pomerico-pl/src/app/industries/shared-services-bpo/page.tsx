import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import { data } from "@/content/industries/shared-services-bpo";
import { HeroSection } from "@pomerico/ui";
import { ServiceCardGrid } from "@pomerico/ui";
import { CTASection } from "@pomerico/ui";
import { Accordion } from "@pomerico/ui/client";
import { CaseStudyGrid } from "@pomerico/ui";
import { SectionHeader } from "@pomerico/ui";
import { ProcessSection } from "@pomerico/ui";
import { Breadcrumbs } from "@pomerico/ui";
import { allCaseStudyCards } from "@/content/case-studies";
import { submitContactForm } from "@/app/actions/contact";
import { faqItems } from "@/content/faq";
import { plIndustryPageLabels as l, plSiteUrl } from "@/content/ui-labels";

const TITLE = "Outsourcing dla centrów usług wspólnych i BPO | Pomerico";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: data.metaDescription,
  alternates: { canonical: "/industries/shared-services-bpo" },
  openGraph: {
    title: TITLE,
    description: data.metaDescription,
  },
});

export default function SharedServicesBpoPage() {
  const caseStudyCards = allCaseStudyCards.filter((c) =>
    c.industries?.includes(data.slug),
  );
  const testimonial = data.testimonials?.[0];

  return (
    <>
      {/* Hero */}
      <HeroSection data={data.hero} trustImageAlt={l.heroTrustImageAlt} />

      <Breadcrumbs
        items={[
          { label: l.breadcrumbHome, href: "/" },
          { label: l.breadcrumbIndustries, href: "/industries" },
          { label: data.title },
        ]}
        siteUrl={plSiteUrl}
        ariaLabel={l.breadcrumbAria}
      />

      {/* Usługi */}
      {data.services.length > 0 && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader heading={l.servicesHeading} />
            <ServiceCardGrid cards={data.services} columns={2} linkLabel={l.cardLinkLabel} />
          </div>
        </section>
      )}

      {/* Korzyści */}
      {data.benefits && data.benefits.length > 0 && (
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

      {/* Hasło + opinia */}
      {data.tagline && testimonial && (
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
          heading={data.process.heading ?? l.processHeading}
          steps={data.process.steps}
        />
      )}

      {/* Case studies */}
      {caseStudyCards.length > 0 && (
        <CaseStudyGrid cards={caseStudyCards} {...l.caseStudies} />
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
          <Accordion items={faqItems.slice(0, 5)} defaultOpen={0} />
        </div>
      </section>

      {/* CTA */}
      <CTASection submitAction={submitContactForm} labels={l.cta} />
    </>
  );
}
