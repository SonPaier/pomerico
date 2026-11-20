import type { Metadata } from "next";
import Image from "next/image";
import { withOgImage } from "@/lib/og-image";
import {
  Breadcrumbs,
  ContentSection,
  CTASection,
  FaqJsonLd,
  heroFadeStyle,
  IconList,
  ProcessSection,
  SectionHeader,
  ServiceCardGrid,
  TaglineSection,
} from "@pomerico/ui";
import { Accordion } from "@pomerico/ui/client";
import { submitContactForm } from "@/app/actions/contact";
import {
  path,
  metaTitle,
  metaDescription,
  hero,
  whoItIsFor,
  whyProjectsStall,
  whatWeDo,
  tools,
  howItWorks,
  whereAiDeliversFirst,
  whyPomerico,
  faqItems,
} from "@/content/services/ai-transformation";

export const metadata: Metadata = withOgImage({
  title: { absolute: metaTitle },
  description: metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
  },
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://pomerico.com${path}#service`,
  name: "AI Transformation",
  serviceType: "AI transformation consulting",
  description: metaDescription,
  url: `https://pomerico.com${path}`,
  provider: { "@id": "https://pomerico.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "Poland" },
    { "@type": "Country", name: "Denmark" },
    { "@type": "Place", name: "Nordics" },
    { "@type": "Place", name: "European Union" },
  ],
};

export default function AiTransformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      {/* Fades into the light grey breadcrumb bar below */}
      <section className="pb-44 text-white" style={heroFadeStyle("var(--color-gray-bg)")}>
        <div className="mx-auto max-w-7xl px-6 pt-12 lg:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-heading text-3xl font-bold lg:text-5xl">
              {hero.heading}
            </h1>
            <p className="mt-6 text-lg leading-relaxed opacity-90">
              {hero.description}
            </p>
            {/* Same trust badges as the hero of other service pages */}
            <Image
              src={hero.trustImage}
              alt="Trusted partner since 2015"
              width={384}
              height={60}
              className="mt-8 h-auto w-full max-w-sm"
              unoptimized
            />
          </div>
          {/* Why Pomerico (without heading) */}
          <div>
            <IconList items={whyPomerico} variant="dark" />
          </div>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AI Transformation" },
        ]}
      />

      {/* Who it is for */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader heading="Who it is for" />
          <ServiceCardGrid cards={whoItIsFor} />
        </div>
      </section>

      {/* Why most AI projects stall */}
      <TaglineSection
        heading={whyProjectsStall.heading}
        description={whyProjectsStall.description}
      />

      {/* What we do */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader heading="What we do" />
          <ServiceCardGrid cards={whatWeDo} columns={4} />
        </div>
      </section>

      {/* Tools we work with */}
      <ContentSection data={tools} />

      {/* How it works */}
      <ProcessSection heading="How it works" steps={howItWorks} />

      {/* Where AI delivers first */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader heading="Where AI delivers first" />
          <div className="max-w-4xl">
            <IconList items={whereAiDeliversFirst} variant="light" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-red">
              Got Questions?
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold text-dark lg:text-4xl">
              FAQ
            </h2>
          </div>
          <FaqJsonLd items={faqItems} />
          <Accordion items={faqItems} defaultOpen={0} />
        </div>
      </section>

      {/* Contact form */}
      <CTASection submitAction={submitContactForm} />
    </>
  );
}
