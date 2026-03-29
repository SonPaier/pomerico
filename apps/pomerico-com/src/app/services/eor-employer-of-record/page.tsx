import type { Metadata } from "next";
import Image from "next/image";
import { data, eorComparisonTable } from "@/content/services/eor-employer-of-record";
import { HeroSection } from "@pomerico/ui";
import { ServiceCardGrid } from "@pomerico/ui";
import { IconList } from "@pomerico/ui";
import { CTASection } from "@pomerico/ui";
import { TestimonialCarousel } from "@pomerico/ui/client";
import { CaseStudyGrid } from "@pomerico/ui";
import { SectionHeader } from "@pomerico/ui";
import { ProcessSection } from "@pomerico/ui";
import { TaglineSection } from "@pomerico/ui";
import { Breadcrumbs } from "@pomerico/ui";
import { ComparisonTable } from "@pomerico/ui";
import { clutchBadge } from "@/content/shared";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { submitContactForm } from "@/app/actions/contact";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/services/eor-employer-of-record" },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
  },
};

export default function Page() {
  const slugs = data.caseStudySlugs;

  return (
    <>
      {/* Hero */}
      <HeroSection data={data.hero} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: data.title },
        ]}
      />

      {/* Benefits */}
      {data.benefits.length > 0 && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              heading="Benefits for Your Business"
              subtitle="Measurable results across every engagement."
            />
            <ServiceCardGrid cards={data.benefits} />
          </div>
        </section>
      )}

      {/* EOR vs Own Entity comparison table */}
      <ComparisonTable {...eorComparisonTable} />

      {/* Target Audience */}
      {data.targetAudience && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-red">
                  POMERICO GROUP
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
              </div>
              <div>
                {data.targetAudience.items &&
                  data.targetAudience.items.length > 0 && (
                    <IconList items={data.targetAudience.items} variant="light" />
                  )}
                <div className="mt-8 flex items-center gap-6">
                  <Image
                    src={clutchBadge}
                    alt="Clutch verified partner"
                    width={120}
                    height={130}
                    className="max-w-[120px]"
                  />
                  <Image
                    src="/images/decorative-doodle-element.svg"
                    alt=""
                    width={160}
                    height={80}
                    className="max-w-[160px]"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tagline */}
      {data.tagline && (
        <TaglineSection
          heading={data.tagline.heading}
          description={data.tagline.description}
        />
      )}

      {/* Cooperation Process */}
      {data.process && (
        <ProcessSection
          heading={data.process.heading ?? "Cooperation Process"}
          steps={data.process.steps}
        />
      )}

      {/* Testimonials */}
      {data.testimonials && data.testimonials.length > 0 && (
        <TestimonialCarousel testimonials={data.testimonials} />
      )}

      {/* Case Studies */}
      {slugs && slugs.length > 0 && (
        <CaseStudyGrid
          cards={allCaseStudyCards.filter((c) => slugs.includes(c.slug))}
        />
      )}

      {/* Bottom CTA */}
      <CTASection submitAction={submitContactForm} />
    </>
  );
}
