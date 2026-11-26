import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import { heroFadeStyle } from "@pomerico/ui";
import { Accordion } from "@pomerico/ui/client";
import { ImageCarousel } from "@pomerico/ui/client";
import { FaqJsonLd } from "@pomerico/ui";
import { clientLogos } from "@/content/shared";
import { faqHero, allFaqItems } from "@/content/faq";
import { plImageCarouselAriaLabels } from "@/content/ui-labels";

const TITLE = "FAQ – outsourcing, BPO i EOR w Polsce | Pomerico";
const DESCRIPTION =
  "Odpowiedzi na pytania o BPO, outsourcing finansów i HR, rekrutację oraz EOR w Polsce: koszty, modele rozliczeń, compliance i czas startu współpracy.";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
});

export default function FAQPage() {
  return (
    <>
      <FaqJsonLd items={allFaqItems} />
      {/* Hero w kolorze marki, płynnie przechodzący w biel nad karuzelą logotypów */}
      <section
        className="pt-16 pb-44 text-white"
        style={heroFadeStyle()}
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

      {/* Logotypy klientów */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <ImageCarousel images={clientLogos} ariaLabels={plImageCarouselAriaLabels} />
        </div>
      </section>

      {/* Nagłówek FAQ */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-dark lg:text-4xl">
            Najczęściej zadawane pytania
          </h2>
        </div>
      </section>

      {/* Akordeon */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Accordion items={allFaqItems} />
        </div>
      </section>
    </>
  );
}
