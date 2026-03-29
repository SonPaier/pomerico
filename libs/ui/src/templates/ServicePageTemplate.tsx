import Image from "next/image";
import type { ServicePageData } from "@pomerico/content";
import { HeroSection } from "../HeroSection";
import { ServiceCardGrid } from "../ServiceCardGrid";
import { IconList } from "../IconList";
import { CTASection } from "../CTASection";
import { TestimonialCarousel } from "../TestimonialCarousel";
import { CaseStudyGrid } from "../CaseStudyGrid";
import { SectionHeader } from "../SectionHeader";
import { ProcessSection } from "../ProcessSection";
import { TaglineSection } from "../TaglineSection";
import { Breadcrumbs } from "../Breadcrumbs";
import type { CaseStudyCard } from "@pomerico/content";

function TargetAudienceSection({
  heading,
  description,
  items,
  clutchBadge,
}: {
  heading: string;
  description: string;
  items?: { bold?: string; text: string }[];
  clutchBadge: string;
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
  allCaseStudyCards: CaseStudyCard[];
  clutchBadge: string;
  submitAction: (formData: FormData) => Promise<{ success: boolean; error?: string }>;
}

export function ServicePageTemplate({ data, allCaseStudyCards, clutchBadge, submitAction }: ServicePageTemplateProps) {
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
          clutchBadge={clutchBadge}
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
      <CTASection submitAction={submitAction} />
    </>
  );
}
