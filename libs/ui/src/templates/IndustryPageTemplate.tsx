import Image from "next/image";
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
import { Accordion } from "../Accordion";
import type { CaseStudyCard } from "@pomerico/content";

interface IndustryPageTemplateProps {
  data: IndustryPageData;
  allCaseStudyCards: CaseStudyCard[];
  submitAction: (formData: FormData) => Promise<{ success: boolean; error?: string }>;
  faqItems?: { question: string; answer: string }[];
}

export function IndustryPageTemplate({ data, allCaseStudyCards, submitAction, faqItems }: IndustryPageTemplateProps) {
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

      {/* Trusted client logos */}
      {data.trustedLogos && data.trustedLogos.length > 0 && (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-6 text-center font-ui text-xs font-semibold uppercase tracking-[0.2em] text-dark/50">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {data.trustedLogos.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={60}
                  className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services offered in this industry */}
      {data.services.length > 0 && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader heading={data.servicesHeading ?? "Our Services"} />
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

      {/* Tagline + Testimonial — split view when both exist */}
      {data.tagline && data.testimonials && data.testimonials.length > 0 ? (
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
