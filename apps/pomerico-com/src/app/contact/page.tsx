import type { Metadata } from "next";
import Image from "next/image";
import { CTAForm } from "@pomerico/ui/client";
import { submitContactForm } from "@/app/actions/contact";

export const metadata: Metadata = {
  title: "Contact Pomerico – Free HR Outsourcing Consultation",
  description:
    "Contact Pomerico Group for a free consultation on HR outsourcing, BPO, recruitment, and business consulting services in Poland.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Pomerico – Free HR Outsourcing Consultation",
    description:
      "Contact Pomerico Group for a free consultation on HR outsourcing, BPO, recruitment, and business consulting services in Poland.",
  },
};
import { ImageCarousel } from "@pomerico/ui/client";
import { clientLogos } from "@/content/shared";
import { contactHero, contactDetails } from "@/content/contact";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h1 className="font-heading text-3xl font-bold text-dark lg:text-5xl">
                {contactHero.heading}
              </h1>
              <p className="text-base leading-relaxed text-dark/80">
                {contactHero.description}
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

      {/* Contact details + Form */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: details */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-dark lg:text-4xl">
                Get Expert Advice
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
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </div>

              {/* Map */}
              <div className="mt-6 overflow-hidden rounded-lg">
                <iframe
                  loading="lazy"
                  src={contactDetails.mapUrl}
                  title="Pomerico office location"
                  aria-label="Szafarnia 11/F8"
                  className="h-64 w-full border-0"
                />
              </div>
            </div>

            {/* Right: form */}
            <div>
              <div className="rounded-lg border border-dark/5 bg-white p-8">
                <div className="mb-6 flex flex-col items-center text-center">
                  <h2 className="font-heading mb-2 text-xl font-bold text-dark">
                    Fill in the form and book a free consultation
                  </h2>
                  <Image
                    src="/images/scroll-down-arrow-icon.svg"
                    alt="Scroll down to form"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                    unoptimized
                  />
                </div>
                <CTAForm submitAction={submitContactForm} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <ImageCarousel images={clientLogos} />
        </div>
      </section>
    </>
  );
}
