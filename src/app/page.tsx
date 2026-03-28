import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CounterSection } from "@/components/sections/CounterSection";
import { ArrowRightIcon } from "@/components/sections/ArrowRightIcon";
import { ImageCarousel } from "@/components/sections/ImageCarousel";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { Accordion } from "@/components/sections/Accordion";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { faqItems } from "@/content/faq";
import {
  counters,
  clientLogos,
} from "@/content/shared";
import {
  homepageServiceCards,
  whyPomericoCards,
  homepageTestimonials,
  mapImage,
} from "@/content/homepage";
import { allCaseStudyCards } from "@/content/case-studies/listing";

export const metadata: Metadata = {
  title: "Pomerico Group – BPO & HR Outsourcing Partner in Poland",
  description: "Build effective teams with Pomerico Group. End-to-end HR outsourcing, BPO, EOR, recruitment, and business consulting for international companies in Poland.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pomerico Group �� BPO & HR Outsourcing Partner in Poland",
    description: "Build effective teams with Pomerico Group. End-to-end HR outsourcing, BPO, EOR, recruitment, and business consulting for international companies in Poland.",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[85vh] items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/pomerico-hero-background.webp')",
        }}
      >
        <div className="absolute inset-0 bg-primary-blue/90" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-2 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              <span className="inline-block h-5 w-1 rounded bg-primary-red" />
              Strategic HR &amp; BPO Excellence
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white lg:text-6xl">
              Your Strategic Growth{" "}
              <span className="text-white">Partner in Poland.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Delivering precision-engineered human resources and business
              process outsourcing solutions. We bridge global scale with
              localized Polish expertise for the world&apos;s leading enterprises.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded bg-primary-red px-8 py-4 font-ui text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-red/90"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded border border-white px-8 py-4 font-ui text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                Our Expertise
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-white">
            Explore More
          </p>
          <svg
            className="mx-auto mt-2 text-white"
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
          >
            <path
              d="M2 2L10 10L18 2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-center font-ui text-xs font-semibold uppercase tracking-[0.2em] text-dark/60">
            Trusted by Global Industry Leaders
          </h2>
          <ImageCarousel images={clientLogos} />
        </div>
      </section>

      {/* What we specialize in */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            heading="What we specialize in?"
            subtitle="Comprehensive outsourcing solutions for every business need."
          />
          <ServiceCardGrid cards={homepageServiceCards} />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel testimonials={homepageTestimonials} />

      {/* Trusted worldwide counters */}
      <section className="bg-primary-blue py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold">
                Trusted worldwide
              </h2>
              <CounterSection items={counters} variant="dark" />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/pomerico-client-logos-banner.png"
                alt="Client logos"
                width={1024}
                height={296}
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Image
            src={mapImage}
            alt="Pomerico global presence"
            width={1200}
            height={600}
            className="mx-auto max-w-full"
          />
        </div>
      </section>

      {/* Why 200+ companies choose Pomerico */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-red">
              Unrivaled Expertise
            </p>
            <h2 className="font-heading mt-4 text-3xl font-bold text-primary-blue lg:text-5xl">
              Why do most clients stay with us long-term?
            </h2>
            <p className="mt-4 text-base text-dark/70">
              We provide the operational foundation for global enterprises to scale without friction, blending technical excellence with strategic foresight.
            </p>
          </div>

          {/* Cards grid 4x2 */}
          <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {whyPomericoCards.map((card, i) => (
              <div key={i}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary-blue/5">
                  <Image
                    src={card.icon}
                    alt={card.heading}
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <h3 className="font-heading text-base font-bold text-dark">
                  {card.heading}
                  <span className="ml-1 inline-block h-2 w-2 rounded-full bg-primary-red" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark/70">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudyGrid cards={allCaseStudyCards.slice(0, 4)} />

      {/* FAQ */}
      <section className="relative overflow-hidden py-20 bg-gray-bg">
        {/* Decorative diagonal stripe pattern */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(54, 85, 158, 0.015) 40px,
              rgba(54, 85, 158, 0.015) 41px
            )`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-red">
              Got Questions?
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold text-dark lg:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion items={faqItems.slice(0, 7)} defaultOpen={0} />
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 font-ui text-sm font-semibold text-primary-blue hover:underline"
            >
              View All FAQ
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>



    </>
  );
}
