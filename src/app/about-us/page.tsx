import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us – Effective Teams, Complete Outsourcing",
  description:
    "Since 2015, Pomerico Group provides end-to-end HR outsourcing, BPO, and business consulting for international companies in Poland. Meet our management team.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us – Effective Teams, Complete Outsourcing",
    description:
      "Since 2015, Pomerico Group provides end-to-end HR outsourcing, BPO, and business consulting for international companies in Poland. Meet our management team.",
  },
};
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { trustImageWide } from "@/content/shared";
import { SectionHeader } from "@/components/sections/SectionHeader";
import {
  aboutUsHero,
  aboutUsWhatWeDo,
  managementTeam,
  aboutCtaBanner,
  aboutTestimonials,
} from "@/content/about-us";
import { allCaseStudyCards } from "@/content/case-studies/listing";

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-blue text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
<h1 className="font-heading text-3xl font-bold lg:text-5xl">
                {aboutUsHero.heading}
              </h1>
              <div
                className="text-lg leading-relaxed opacity-90"
                dangerouslySetInnerHTML={{ __html: aboutUsHero.description }}
              />
              <Image
                src={trustImageWide}
                alt="Trusted partner since 2015"
                width={384}
                height={60}
                className="mt-2 max-w-sm"
                unoptimized
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={aboutUsHero.teamImage}
                alt="Pomerico team"
                width={600}
                height={400}
                className="max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            heading={"What we do?\nIntegrated Business Solutions"}
            subtitle="End-to-end outsourcing in HR, finance, IT and operations."
          />

          {/* Alternating cards */}
          <div className="flex flex-col gap-8">
            {aboutUsWhatWeDo.blocks.map((block, i) => (
              <div
                key={i}
                className="grid items-center gap-8 overflow-hidden rounded-lg border border-dark/5 bg-white lg:grid-cols-2"
              >
                <div
                  className={`${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={block.image}
                    alt={`Pomerico integrated business solutions - section ${i + 1}`}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div
                  className={`p-8 lg:p-12 ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div
                    className="text-base leading-relaxed text-dark/80 [&_b]:text-dark [&_strong]:text-dark"
                    dangerouslySetInnerHTML={{ __html: block.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet our Management Team */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader heading="Meet our Management Team" align="center" />

          <div className="grid gap-8 md:grid-cols-3">
            {managementTeam.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-lg border border-dark/5 bg-white"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-dark">
                        {member.name}
                      </h3>
                      <p className="mt-1 font-ui text-sm font-semibold text-primary-red">
                        {member.role}
                      </p>
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 shrink-0 text-dark/50 transition-colors hover:text-[#0A66C2]"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-dark/70">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary-blue py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-2xl font-bold leading-snug lg:text-3xl">
            {aboutCtaBanner.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            {aboutCtaBanner.description}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded bg-primary-red px-8 py-3 font-ui text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
          >
            GET EXPERT ADVICE
          </Link>
        </div>
      </section>

      {/* What our clients say */}
      <TestimonialCarousel
        testimonials={aboutTestimonials}
        heading="What Our Clients Say"
      />

      {/* Case Studies */}
      <CaseStudyGrid cards={allCaseStudyCards.slice(0, 4)} />

      {/* CTA */}
      <CTASection />
    </>
  );
}
