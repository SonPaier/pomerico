import Image from "next/image";
import type { ServicePageData } from "@/content/types";
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
import { clutchBadge } from "@/content/shared";
import { allCaseStudyCards } from "@/content/case-studies/listing";

function TargetAudienceSection({
  heading,
  description,
  items,
}: {
  heading: string;
  description: string;
  items?: { bold?: string; text: string }[];
}) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-red">
              POMERICO GROUP
            </p>
            <h2 className="font-heading mt-2 text-3xl font-bold text-dark lg:text-4xl">
              {heading}
            </h2>
            <div
              className="mt-6 text-base leading-relaxed text-dark/80"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div>
            {items && items.length > 0 && (
              <IconList items={items} variant="light" />
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
  );
}

interface ServicePageTemplateProps {
  data: ServicePageData;
}

export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const slugs = data.caseStudySlugs;

  return (
    <>
      {/* Hero */}
      <HeroSection data={data.hero} />

      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: data.title },
      ]} />

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
        <TargetAudienceSection
          heading={data.targetAudience.heading}
          description={data.targetAudience.description}
          items={data.targetAudience.items}
        />
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

      {/* Details (How it works / What do we do) */}
      {data.details && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader heading={data.details.heading} />
            <ServiceCardGrid cards={data.details.cards} />
          </div>
        </section>
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
