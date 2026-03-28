import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import {
  caseStudiesListingHero,
  allCaseStudyCards,
} from "@/content/case-studies/listing";

export const metadata: Metadata = {
  title: "Case Studies - Real Results for Our Clients",
  description:
    "Discover how Pomerico helps businesses across Europe build high-performing teams, enter new markets, and transform their HR operations.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies - Real Results for Our Clients",
    description:
      "Discover how Pomerico helps businesses across Europe build high-performing teams, enter new markets, and transform their HR operations.",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <HeroSection data={caseStudiesListingHero} />

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
