import Image from "next/image";
import type { CaseStudyPageData } from "@/content/types";
import { CTASection } from "@/components/sections/CTASection";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { TestimonialBlock } from "@/components/sections/TestimonialBlock";
import { TaglineSection } from "@/components/sections/TaglineSection";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { allCaseStudyCards } from "@/content/case-studies/listing";

interface CaseStudyLayoutProps {
  data: CaseStudyPageData;
}

function ContentSection({
  heading,
  html,
  variant = "default",
}: {
  heading: string;
  html: string;
  variant?: "default" | "split";
}) {
  if (variant === "split") {
    return (
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
            <div className="space-y-4 md:col-span-5">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary-blue lg:text-5xl">
                {heading}
              </h2>
              <div className="h-1.5 w-16 rounded-full bg-primary-red" />
            </div>
            <div className="md:col-span-7">
              <div
                className="prose prose-lg max-w-none leading-relaxed text-dark/70 [&_b]:text-dark [&_strong]:text-dark"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-heading mb-6 text-3xl font-extrabold tracking-tight text-primary-blue lg:text-4xl">
          {heading}
        </h2>
        <div
          className="prose prose-lg max-w-none leading-relaxed text-dark/70 [&_b]:text-dark [&_strong]:text-dark"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  );
}

export function CaseStudyLayout({ data }: CaseStudyLayoutProps) {
  const otherCaseStudies = allCaseStudyCards
    .filter((c) => c.slug !== data.slug)
    .slice(0, 4);

  return (
    <article>
      {/* Hero — full-bleed with gradient + architectural bg */}
      <header className="relative flex min-h-[480px] items-center overflow-hidden lg:min-h-[560px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/case-study-hero-building.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/90 via-primary-blue/85 to-primary-blue/75" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-4xl space-y-6">
            {/* Client pill */}
            {data.client && (
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
                <span className="font-ui text-xs font-bold uppercase tracking-widest text-white">
                  Client Spotlight
                </span>
                <div className="h-4 w-px bg-white/30" />
                <span className="text-sm font-semibold text-white">
                  {data.client}
                </span>
              </div>
            )}

            <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              {data.title}
            </h1>

            {data.metaDescription && (
              <p className="max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl">
                {data.metaDescription}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Quick Facts bar — overlapping hero */}
      <section className="relative z-20 -mt-12 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-8 rounded-2xl border border-dark/5 bg-white/80 p-8 shadow-lg backdrop-blur-md md:flex-row md:items-center md:justify-between md:p-12">
            {data.image && (
              <>
                <div className="flex items-center">
                  <Image
                    src={data.image}
                    alt={data.client ?? ""}
                    width={200}
                    height={80}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div className="hidden h-12 w-px bg-dark/10 md:block" />
              </>
            )}
            {data.client && (
              <>
                <div className="space-y-1">
                  <span className="font-ui text-xs font-bold uppercase tracking-widest text-primary-red">
                    Client
                  </span>
                  <p className="font-heading text-xl font-bold text-primary-blue">
                    {data.client}
                  </p>
                </div>
                <div className="hidden h-12 w-px bg-dark/10 md:block" />
              </>
            )}
            <div className="space-y-1">
              <span className="font-ui text-xs font-bold uppercase tracking-widest text-primary-red">
                Industry
              </span>
              <p className="font-heading text-xl font-bold text-primary-blue">
                {data.industry}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Goal */}
      <ContentSection heading="Project Goal" html={data.goal} variant="split" />

      {/* Challenges */}
      <div className="bg-gray-bg">
        <ContentSection heading="The Challenge" html={data.challenges} variant="split" />
      </div>

      {/* Tagline */}
      {data.tagline && (
        <TaglineSection
          heading={data.tagline.heading}
          description={data.tagline.description}
          ctaLabel="VIEW ALL SERVICES"
          ctaHref="/services"
        />
      )}

      {/* Testimonial */}
      {data.testimonial && (
        <TestimonialBlock testimonial={data.testimonial} />
      )}

      {/* Our Approach */}
      <ContentSection heading="Our Approach" html={data.approach} variant="split" />

      {/* Results */}
      <div className="bg-gray-bg">
        <ContentSection
          heading="Results & Outcomes"
          html={data.results}
          variant="split"
        />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Case Studies", href: "/case-studies" },
        { label: data.title },
      ]} />

      {/* More Case Studies */}
      <CaseStudyGrid cards={otherCaseStudies} />

      {/* Bottom CTA */}
      <CTASection />
    </article>
  );
}
