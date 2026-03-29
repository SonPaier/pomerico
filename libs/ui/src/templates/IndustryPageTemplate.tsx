import type { IndustryPageData } from "@pomerico/content";
import { HeroSection } from "../HeroSection";
import { ServiceCardGrid } from "../ServiceCardGrid";
import { CTASection } from "../CTASection";
import { TestimonialCarousel } from "../TestimonialCarousel";
import { CaseStudyGrid } from "../CaseStudyGrid";
import { SectionHeader } from "../SectionHeader";
import { ProcessSection } from "../ProcessSection";
import { TaglineSection } from "../TaglineSection";
import { Breadcrumbs } from "../Breadcrumbs";
import type { CaseStudyCard } from "@pomerico/content";

interface IndustryPageTemplateProps {
  data: IndustryPageData;
  allCaseStudyCards: CaseStudyCard[];
  submitAction: (formData: FormData) => Promise<{ success: boolean; error?: string }>;
}

export function IndustryPageTemplate({ data, allCaseStudyCards, submitAction }: IndustryPageTemplateProps) {
  const slugs = data.caseStudySlugs;

  return (
    <>
      {/* Hero */}
      <HeroSection data={data.hero} />

      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: data.title },
      ]} />

      {/* Services offered in this industry */}
      {data.services.length > 0 && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader heading="Our Services" />
            <ServiceCardGrid cards={data.services} columns={2} />
          </div>
        </section>
      )}

      {/* Benefits */}
      {data.benefits && data.benefits.length > 0 && (
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
      <CTASection submitAction={submitAction} />
    </>
  );
}
