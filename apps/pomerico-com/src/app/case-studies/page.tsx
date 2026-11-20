import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import { heroFadeStyle } from "@pomerico/ui";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@pomerico/ui";
import { Breadcrumbs } from "@pomerico/ui";
import {
  caseStudiesListingHero,
  allCaseStudyCards,
} from "@/content/case-studies/listing";

export const metadata: Metadata = withOgImage({
  title: { absolute: "Case Studies – Outsourcing & Recruitment in Poland | Pomerico" },
  description:
    "How Pomerico delivered recruitment, EOR, market entry and HR projects for international companies in Poland – real results from our clients.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies – Outsourcing & Recruitment in Poland | Pomerico",
    description:
      "How Pomerico delivered recruitment, EOR, market entry and HR projects for international companies in Poland – real results from our clients.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies – Outsourcing & Recruitment in Poland | Pomerico",
    description:
      "How Pomerico delivered recruitment, EOR, market entry and HR projects for international companies in Poland – real results from our clients.",
  },
});

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero: same look as the shared HeroSection, but the text runs wider and
          the trust badges sit on the right instead of under the description */}
      <section
        className="pb-44 text-white"
        style={heroFadeStyle("var(--color-gray-bg)")}
      >
        <div className="mx-auto max-w-7xl px-6 pt-8 lg:pt-10">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
            <div className="flex flex-col gap-6">
              <h1 className="font-heading text-3xl font-bold lg:text-5xl">
                {caseStudiesListingHero.heading}
              </h1>
              <p className="text-lg leading-relaxed opacity-90">
                {caseStudiesListingHero.description}
              </p>
            </div>
            <Image
              src={caseStudiesListingHero.trustImage}
              alt="Trusted partner since 2015"
              width={384}
              height={60}
              className="h-auto w-full max-w-sm"
              unoptimized
            />
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Case Studies" },
      ]} />

      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            heading="All Case Studies"
            subtitle="Real results across international markets."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allCaseStudyCards.map((card) => (
              <Link
                key={card.slug}
                href={`/case-studies/${card.slug}`}
                className="group block overflow-hidden rounded-lg border border-dark/5 bg-white transition-colors hover:border-primary-blue/20"
              >
                {card.image && (
                  <div className="flex h-24 items-center justify-center border-b border-dark/5 px-6">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={80}
                      className="max-h-14 w-full object-contain"
                    />
                  </div>
                )}
                <div className="p-6">
                  {card.industry && (
                    <p className="font-ui mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-red">
                      {card.industry}
                    </p>
                  )}
                  <h3 className="font-heading text-lg font-bold text-dark group-hover:text-primary-blue">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark/70">
                    {card.summary}
                  </p>
                  <span className="mt-4 inline-block font-ui text-sm font-semibold text-primary-red">
                    VIEW CASE STUDY &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
