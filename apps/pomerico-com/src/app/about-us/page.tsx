import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@pomerico/ui";

export const metadata: Metadata = {
  title: { absolute: "About Pomerico – BPO & Recruitment Company in Gdańsk" },
  description:
    "Founded in 2015 in Gdańsk as a recruitment agency, Pomerico Group is today a BPO and finance outsourcing partner for international companies in Poland.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Pomerico – BPO & Recruitment Company in Gdańsk",
    description:
      "Founded in 2015 in Gdańsk as a recruitment agency, Pomerico Group is today a BPO and finance outsourcing partner for international companies in Poland.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pomerico – BPO & Recruitment Company in Gdańsk",
    description:
      "Founded in 2015 in Gdańsk as a recruitment agency, Pomerico Group is today a BPO and finance outsourcing partner for international companies in Poland.",
  },
};
import { TestimonialCarousel } from "@pomerico/ui/client";
import { CaseStudyGrid } from "@pomerico/ui";
import { trustImageWide } from "@/content/shared";
import { SectionHeader } from "@pomerico/ui";
import {
  aboutUsHero,
  aboutUsWhatWeDo,
  managementTeam,
  aboutCtaBanner,
  aboutTestimonials,
} from "@/content/about-us";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { submitContactForm } from "@/app/actions/contact";
import { TeamCarousel } from "./TeamCarousel";

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-blue text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex min-w-0 flex-col gap-6">
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
                className="mt-2 h-auto w-full max-w-sm"
                unoptimized
              />
            </div>
            <div>
              <div className="about-hero-team">
                <Image
                  src={aboutUsHero.teamImage}
                  alt="Pomerico Group team"
                  fill
                  preload
                  quality={90}
                  sizes="100vw"
                  className="object-cover object-left-bottom"
                />
              </div>
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
                {block.image && (
                <div
                  className={`${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={block.image}
                    alt={`Pomerico integrated business solutions - section ${i + 1}`}
                    width={800}
                    height={1200}
                    className="h-auto w-full object-contain"
                    unoptimized
                  />
                </div>
                )}
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

      {/* Mission / Vision / Values */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 text-center md:grid-cols-3">
            {/* Mission */}
            <div>
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue">
                OUR
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-dark">
                Mission
              </h2>
              <p className="mx-auto mt-4 max-w-[340px] text-justify text-sm leading-relaxed text-dark/80 hyphens-auto [text-align-last:center]">
                With full commitment, we deliver <strong>flexible</strong> and{" "}
                <strong>effective</strong>{" "}solutions tailored to our
                clients&apos; realities. We build long-term relationships based
                on trust, transparent communication, and{" "}
                <strong>responsibility</strong> — enabling our clients to
                achieve their business goals <strong>faster</strong> and more
                effectively.
              </p>
            </div>

            {/* Vision */}
            <div>
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue">
                OUR
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-dark">
                Vision
              </h2>
              <p className="mx-auto mt-4 max-w-[340px] text-justify text-sm leading-relaxed text-dark/80 hyphens-auto [text-align-last:center]">
                To be the partner of first choice for our clients in both
                operational and strategic support — thanks to{" "}
                <strong>our effectiveness and predictability</strong>. We create
                an environment where complex processes become simple for our
                clients, and business challenges are solved through true
                partnership.
              </p>
            </div>

            {/* Values */}
            <div>
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue">
                OUR
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-dark">
                Values
              </h2>
              <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-dark/80">
                <li>Effectiveness through understanding</li>
                <li>Trust</li>
                <li>Mutual responsibility</li>
                <li>Commitment</li>
                <li>Partnership</li>
                <li>Quality over quantity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet our Management Team */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader heading="Meet our Management Team" align="center" />

          <TeamCarousel
            members={managementTeam}
            label="Meet our Management Team"
            navLabel="management team members"
          />
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
      <CTASection submitAction={submitContactForm} />
    </>
  );
}
