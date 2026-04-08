import Link from "next/link";
import Image from "next/image";
import type { CaseStudyCard } from "@pomerico/content";
import { SectionHeader } from "./SectionHeader";
import { ArrowRightIcon } from "./ArrowRightIcon";

interface CaseStudyGridProps {
  cards: CaseStudyCard[];
  heading?: string;
}

export function CaseStudyGrid({
  cards,
  heading = "Case Studies —\nReal Results for Our Clients",
}: CaseStudyGridProps) {
  return (
    <section className="bg-gray-bg py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header row */}
        <SectionHeader
          heading={heading}
          subtitle="Strategic excellence across international markets."
        />

        {/* Cards grid — masonry-like with varying sizes */}
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((cs, i) => {
            const tag =
              cs.industry?.split("/")[0].trim().toUpperCase() ?? "CASE STUDY";
            const isLarge = i === 0 || i === 3;
            return (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className={`group flex flex-col justify-between rounded-lg border border-dark/5 bg-white p-8 transition-all hover:border-primary-blue/20 ${
                  isLarge ? "sm:row-span-1" : ""
                }`}
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-block rounded-full border border-dark/10 px-3 py-1 font-ui text-[10px] font-semibold uppercase tracking-wider text-dark/70">
                      {tag}
                    </span>
                    {cs.image && (
                      <Image
                        src={cs.image}
                        alt={cs.title}
                        width={260}
                        height={52}
                        className="h-14 w-auto object-contain mix-blend-multiply"
                      />
                    )}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary-blue group-hover:underline">
                    {cs.title}
                  </h3>
                  {cs.summary && (
                    <p className="mt-4 text-sm leading-relaxed text-dark/70">
                      {cs.summary}
                    </p>
                  )}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-ui text-sm font-semibold uppercase tracking-wider text-primary-red">
                  View Case Study
                  <ArrowRightIcon />
                </span>
              </Link>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex items-center justify-between border-t border-dark/10 pt-8">
          <p className="text-sm italic text-dark/50">
            High-precision solutions for the modern corporate landscape.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-blue px-8 py-3.5 font-ui text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-blue/90"
          >
            Explore All Insights
            <ArrowRightIcon stroke="white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
