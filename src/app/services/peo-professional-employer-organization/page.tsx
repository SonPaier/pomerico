import type { Metadata } from "next";
import Image from "next/image";
import {
  data,
  peoQuickComparison,
  peoComparisonTable,
} from "@/content/services/peo-professional-employer-organization";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { IconList } from "@/components/sections/IconList";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TaglineSection } from "@/components/sections/TaglineSection";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { QuickComparison } from "@/components/sections/QuickComparison";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { clutchBadge } from "@/content/shared";
import { allCaseStudyCards } from "@/content/case-studies/listing";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/services/peo-professional-employer-organization" },
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

      {/* Quick PEO vs EOR comparison */}
      <QuickComparison {...peoQuickComparison} />

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

      {/* Full PEO vs EOR comparison table */}
      <div id="full-comparison">
        <ComparisonTable {...peoComparisonTable} />
      </div>

      {/* Bottom CTA */}
      <CTASection />
    </>
  );
}
