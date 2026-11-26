import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import { ServicePageTemplate } from "@pomerico/ui";
import { data, faqItems, metaTitle, metaDescription, path } from "@/content/services/ai-transformation";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { clutchBadge } from "@/content/shared";
import { submitContactForm } from "@/app/actions/contact";

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
    { "@type": "Place", name: "EU" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate
        data={data}
        allCaseStudyCards={allCaseStudyCards}
        clutchBadge={clutchBadge}
        submitAction={submitContactForm}
        faqItems={faqItems}
      />
    </>
  );
}
