import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import Image from "next/image";
import { CTAForm } from "@pomerico/ui/client";
import { ImageCarousel } from "@pomerico/ui/client";
import { submitContactForm } from "@/app/actions/contact";
import { clientLogos } from "@/content/shared";
import { contactHero, contactDetails } from "@/content/contact";
import { plCtaFormLabels, plImageCarouselAriaLabels } from "@/content/ui-labels";

const TITLE = "Kontakt – bezpłatna konsultacja, Gdańsk | Pomerico";
const DESCRIPTION =
  "Skontaktuj się z Pomerico w Gdańsku i umów bezpłatną konsultację: BPO, outsourcing finansów, rekrutacja lub EOR w Polsce. Odpowiadamy w ciągu 24 godzin.";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
            <h1 className="font-heading text-3xl font-bold text-dark lg:text-5xl">
              {contactHero.heading}
            </h1>
            <p className="text-base leading-relaxed text-dark/80">
              {contactHero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Dane kontaktowe + formularz */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Lewa kolumna: dane */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-dark lg:text-4xl">
                Skonsultuj się z ekspertem
              </h2>

              <div className="mt-6 space-y-3">
                {contactDetails.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="block font-ui text-base text-dark hover:text-primary-blue"
                  >
                    {p.label}
                  </a>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                {contactDetails.emails.map((e) => (
                  <p key={e.address} className="text-sm text-dark/80">
                    {e.label}{" "}
                    <b className="text-primary-red">{e.address}</b>
                  </p>
                ))}
              </div>

              <hr className="my-6 border-gray-200" />

              <div className="text-sm text-dark/80">
                <p className="font-bold">{contactDetails.company.name}</p>
                <p className="mt-1">{contactDetails.company.address}</p>
                <p>{contactDetails.company.country}</p>
                <p>{contactDetails.company.vat}</p>
              </div>

              <div className="mt-4">
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-blue hover:underline"
                  aria-label="Pomerico w serwisie LinkedIn"
                >
                  LinkedIn
                </a>
              </div>

              {/* Mapa */}
              <div className="mt-6 overflow-hidden rounded-lg">
                <iframe
                  loading="lazy"
                  src={contactDetails.mapUrl}
                  title="Lokalizacja biura Pomerico"
                  aria-label="Szafarnia 11/F8, Gdańsk"
                  className="h-64 w-full border-0"
                />
              </div>
            </div>

            {/* Prawa kolumna: formularz */}
            <div id="consultation-form" className="scroll-mt-32">
              <div className="rounded-lg border border-dark/5 bg-white p-8">
                <div className="mb-6 flex flex-col items-center text-center">
                  <h2 className="font-heading mb-2 text-xl font-bold text-dark">
                    Wypełnij formularz i umów bezpłatną konsultację
                  </h2>
                  <Image
                    src="/images/scroll-down-arrow-icon.svg"
                    alt="Przewiń w dół do formularza"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                    unoptimized
                  />
                </div>
                <CTAForm submitAction={submitContactForm} labels={plCtaFormLabels} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logotypy klientów */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <ImageCarousel images={clientLogos} ariaLabels={plImageCarouselAriaLabels} />
        </div>
      </section>
    </>
  );
}
