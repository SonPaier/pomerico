import type { Metadata } from "next";
import Image from "next/image";
import { data } from "@/content/services/business-consulting-tax-law";
import { HeroSection } from "@pomerico/ui";
import { ServiceCardGrid } from "@pomerico/ui";
import { IconList } from "@pomerico/ui";
import { CTASection } from "@pomerico/ui";
import { TestimonialCarousel, Accordion } from "@pomerico/ui/client";
import { CaseStudyGrid } from "@pomerico/ui";
import { SectionHeader } from "@pomerico/ui";
import { ProcessSection } from "@pomerico/ui";
import { TaglineSection } from "@pomerico/ui";
import { Breadcrumbs } from "@pomerico/ui";
import { clutchBadge } from "@/content/shared";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { submitContactForm } from "@/app/actions/contact";
import { faqItems } from "@/content/faq";

const consultingCards = [
  {
    icon: "/images/icon-gears-process-optimization.png",
    heading: "Legal Advisory (Poland / EU)",
    quote: "Not sure if your hiring model is legally compliant? We review your contracts, B2B structures and employment documentation - and flag risks before they become problems.",
    items: [
      "Employment contracts & documentation",
      "Labour law compliance",
      "GDPR & data security",
      "Internal regulations & policies",
      "Dispute prevention & risk mitigation",
      "Legal frameworks: B2B / UoP / EOR / PEO",
    ],
  },
  {
    icon: "/images/icon-chart-growth-scalability.png",
    heading: "Business & Operational Consulting",
    quote: "Planning to open a Polish entity but not sure which legal form makes sense for your structure? We map the options, run the numbers and guide you through registration.",
    items: [
      "Market entry strategy & entity setup",
      "Process optimisation (HR, payroll, finance)",
      "Compliance audits",
      "Operational risk assessment",
      "Onboarding & documentation workflows",
      "Restructuring and scaling support",
    ],
  },
  {
    icon: "/images/icon-folders-document-management.png",
    heading: "Tax & Payroll Advisory",
    quote: "Hiring specialists in Poland and wondering how to structure it cost-effectively? We run full cost simulations: UoP vs B2B vs EOR - with real numbers, not estimates.",
    items: [
      "Payroll compliance & calculation models",
      "Taxes, ZUS, benefits & allowances",
      "Tax optimisation for employees & contractors",
      "Cross-border payroll support",
      "Cost simulations for hiring or entity setup",
    ],
  },
];

const situationCards = [
  {
    icon: "\uD83C\uDF0D",
    label: "Entering Poland",
    quote: "\"We're expanding into Poland and need to know what we're getting into \u2014 legally and financially.\"",
    description: "Entity vs EOR, tax structure, first employment contracts, regulatory obligations \u2014 we map everything before you commit.",
    tags: ["Technology", "Logistics", "Finance", "Retail"],
  },
  {
    icon: "\u26A1",
    label: "Scaling Fast",
    quote: "\"We're hiring 10\u201350 people in Poland and our HR and legal setup can't keep up with the pace.\"",
    description: "We audit your current setup, fix compliance gaps and build the legal and HR framework that scales with you \u2014 not against you.",
    tags: ["Scale-ups", "PE-backed", "BPO / SSC", "Manufacturing"],
  },
  {
    icon: "\uD83D\uDCDD",
    label: "Restructuring",
    quote: "\"We have a Polish entity but our contracts, payroll and compliance haven't been reviewed in years.\"",
    description: "Full compliance audit, contract review, payroll recalculation and regulatory risk assessment \u2014 before a problem becomes a penalty.",
    tags: ["Established entities", "Post-acquisition", "Audit prep"],
  },
];

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/services/business-consulting-tax-law" },
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

      {/* 1. Details — "Three areas. Every compliance question covered." (first section) */}
      {data.details && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              heading={data.details.heading}
              subtitle={data.details.subheading}
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {consultingCards.map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col overflow-hidden rounded-lg border border-dark/5 bg-white"
                >
                  {/* Icon + heading */}
                  <div className="p-6 pb-0">
                    <Image
                      src={card.icon}
                      alt={card.heading}
                      width={48}
                      height={48}
                      className="mb-4 h-12 w-12"
                    />
                    <h3 className="font-heading text-lg font-bold text-dark">
                      {card.heading}
                    </h3>
                  </div>
                  {/* Quote on different background */}
                  <div className="mx-6 mt-4 rounded-lg border-l-4 border-primary-blue bg-primary-blue/5 px-4 py-3">
                    <p className="text-sm italic leading-relaxed text-dark/80">
                      &ldquo;{card.quote}&rdquo;
                    </p>
                  </div>
                  {/* Service list */}
                  <div className="flex-1 p-6 pt-4">
                    <ul className="flex flex-col gap-2">
                      {card.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-dark/70">
                          <span className="mt-1 text-primary-red">&rarr;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. Recognise your situation? — full card layout */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold text-dark lg:text-4xl">
            Recognise your situation?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-dark/70">
            We work best with companies at a specific inflection point — where the cost of getting compliance wrong is higher than the cost of getting expert help.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {situationCards.map((card, i) => (
              <div
                key={i}
                className="flex flex-col rounded border border-dark/5 bg-white p-5 shadow-sm"
              >
                <p className="mb-2 font-ui text-xs font-bold uppercase tracking-widest text-dark/50">
                  {card.label}
                </p>
                <p className="mb-1.5 text-sm font-bold leading-snug text-dark">
                  {card.quote}
                </p>
                <p className="flex-1 text-xs leading-relaxed text-dark/70">
                  {card.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-dark/10 px-3 py-1 font-ui text-[10px] font-semibold text-dark/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* (old target audience removed — replaced by situationCards above) */}

      {/* Tagline */}
      {data.tagline && (
        <TaglineSection
          heading={data.tagline.heading}
          description={data.tagline.description}
        />
      )}

      {/* Benefits */}
      {data.benefits.length > 0 && (
        <section className="bg-gray-bg py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              heading="What we deliver"
              subtitle="Comprehensive consulting across three key areas."
            />
            <ServiceCardGrid cards={data.benefits} />
          </div>
        </section>
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

      {/* FAQ */}
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
          <Accordion items={faqItems.slice(0, 5)} defaultOpen={0} />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection submitAction={submitContactForm} />
    </>
  );
}
