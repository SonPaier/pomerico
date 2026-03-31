import type { Metadata } from "next";
import Image from "next/image";
import { Accordion } from "@pomerico/ui/client";

export const metadata: Metadata = {
  title: "FAQ – HR Outsourcing & BPO Questions Answered",
  description:
    "Find answers to common questions about Pomerico's HR outsourcing, BPO, EOR, recruitment, and business consulting services in Poland.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ – HR Outsourcing & BPO Questions Answered",
    description:
      "Find answers to common questions about Pomerico's HR outsourcing, BPO, EOR, recruitment, and business consulting services in Poland.",
  },
};
import { ImageCarousel } from "@pomerico/ui/client";
import { clientLogos } from "@/content/shared";
import { faqHero, faqItems } from "@/content/faq";

function FAQJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/<[^>]*>/g, ""),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FAQJsonLd />
      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
<h1 className="font-heading text-3xl font-bold text-dark lg:text-5xl">
                {faqHero.heading}
              </h1>
              <p className="text-base leading-relaxed text-dark/80">
                {faqHero.description}
              </p>
            </div>
            <div
              className="hidden bg-contain bg-right-top bg-no-repeat lg:block"
              style={{
                backgroundImage:
                  "url('/images/contact-page-background.webp')",
              }}
            />
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <ImageCarousel images={clientLogos} />
        </div>
      </section>

      {/* FAQ heading */}
      <section
        className="bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage:
            "url('/images/faq-section-background.webp')",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Image
            src="/images/pomerico-group-logo.png"
            alt="Pomerico Group"
            width={200}
            height={40}
            className="mx-auto mb-4 h-10 max-w-[200px]"
          />
          <h2 className="font-heading text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Accordion items={faqItems} />
        </div>
      </section>

    </>
  );
}
