import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import { Accordion } from "@pomerico/ui/client";
import { FaqJsonLd } from "@pomerico/ui";

export const metadata: Metadata = withOgImage({
  title: { absolute: "FAQ – Outsourcing, BPO & EOR in Poland | Pomerico" },
  description:
    "Answers about BPO, finance outsourcing, recruitment, EOR and HR outsourcing in Poland: costs, billing models, compliance and how fast cooperation starts.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ – Outsourcing, BPO & EOR in Poland | Pomerico",
    description:
      "Answers about BPO, finance outsourcing, recruitment, EOR and HR outsourcing in Poland: costs, billing models, compliance and how fast cooperation starts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ – Outsourcing, BPO & EOR in Poland | Pomerico",
    description:
      "Answers about BPO, finance outsourcing, recruitment, EOR and HR outsourcing in Poland: costs, billing models, compliance and how fast cooperation starts.",
  },
});
import { ImageCarousel } from "@pomerico/ui/client";
import { clientLogos } from "@/content/shared";
import { faqHero, faqItems } from "@/content/faq";

export default function FAQPage() {
  return (
    <>
      <FaqJsonLd items={faqItems} />
      {/* Hero */}
      {/* Brand-blue hero (as on other pages) that fades softly into white towards the logo carousel */}
      <section
        className="pt-16 pb-44 text-white"
        style={{
          // Solid blue behind the text; a long, eased fade (no visible edge) only in the bottom padding.
          backgroundImage: `linear-gradient(to bottom, ${[
            "rgb(54 85 158) 0%",
            "rgb(54 85 158) calc(100% - 11rem)",
            ...[0.97, 0.91, 0.82, 0.7, 0.57, 0.43, 0.3, 0.19, 0.1, 0.04].map(
              (a, i) => `rgb(54 85 158 / ${a}) calc(100% - ${11 - (i + 1)}rem)`,
            ),
            "rgb(54 85 158 / 0) 100%",
          ].join(", ")})`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
            <h1 className="font-heading text-3xl font-bold lg:text-5xl">
              {faqHero.heading}
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              {faqHero.description}
            </p>
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
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-dark lg:text-4xl">
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
