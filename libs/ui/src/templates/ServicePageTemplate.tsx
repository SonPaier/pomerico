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
import { Accordion } from "../Accordion";
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
            <div className="mt-8 flex items-center justify-between max-w-sm">
              <Image
                src={clutchBadge}
                alt="Clutch verified partner – Top HR Outsourcing Company, Poland 2023"
                width={80}
                height={87}
                className="max-w-[80px] shrink-0"
              />
              <Image
                src="/images/clutch-doodle.svg"
                alt="We work with companies that"
                width={180}
                height={87}
                className="max-w-[180px]"
                unoptimized
              />
            </div>
          </div>
          <div>
            {items && items.length > 0 && (
              <IconList items={items} variant="light" />
            )}
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
  faqItems?: { question: string; answer: string }[];
}

export function ServicePageTemplate({ data, allCaseStudyCards, clutchBadge, submitAction, faqItems }: ServicePageTemplateProps) {
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

      {/* Tagline + Testimonial — split view when both exist */}
      {data.tagline && data.testimonials && data.testimonials.length > 0 ? (
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
                <div className="mb-4 text-4xl font-bold text-primary-red">&ldquo;&rdquo;</div>
                <p className="text-sm italic leading-relaxed text-dark/70">
                  {data.testimonials[0].quote}
                </p>
                <div className="mt-6 border-t border-dark/10 pt-4">
                  <p className="font-heading text-sm font-bold text-primary-red">
                    {data.testimonials[0].author}
                  </p>
                  <p className="text-xs text-dark/60">
                    {data.testimonials[0].role}{data.testimonials[0].company ? `, ${data.testimonials[0].company}` : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {data.tagline && (
            <TaglineSection
              heading={data.tagline.heading}
              description={data.tagline.description}
            />
          )}
          {data.testimonials && data.testimonials.length > 0 && (
            <TestimonialCarousel testimonials={data.testimonials} />
          )}
        </>
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

      {/* Case Studies */}
      {slugs && slugs.length > 0 && (
        <CaseStudyGrid
          cards={allCaseStudyCards.filter((c) => slugs.includes(c.slug))}
        />
      )}

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-red">
                Got Questions?
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold text-dark lg:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion items={faqItems} defaultOpen={0} />
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <CTASection submitAction={submitAction} />
    </>
  );
}
