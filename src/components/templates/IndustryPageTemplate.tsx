import type { IndustryPageData } from "@/content/types";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TaglineSection } from "@/components/sections/TaglineSection";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { allCaseStudyCards } from "@/content/case-studies/listing";

interface IndustryPageTemplateProps {
  data: IndustryPageData;
}

export function IndustryPageTemplate({ data }: IndustryPageTemplateProps) {
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
      <CTASection />
    </>
  );
}
