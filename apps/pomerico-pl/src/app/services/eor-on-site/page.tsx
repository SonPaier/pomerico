import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import { ServicePageTemplate } from "@pomerico/ui";
import { data, faqItems } from "@/content/services/eor-on-site";
import { allCaseStudyCards } from "@/content/case-studies";
import { clutchBadge } from "@/content/shared";
import { plServicePageLabels, plSiteUrl } from "@/content/ui-labels";
import { submitContactForm } from "@/app/actions/contact";

const metaTitle = "EOR + On Site – zespoły na miejscu w Polsce | Pomerico";

export const metadata: Metadata = withOgImage({
  title: { absolute: metaTitle },
  description: data.metaDescription,
  alternates: { canonical: "/services/eor-on-site" },
  openGraph: {
    title: metaTitle,
    description: data.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: data.metaDescription,
  },
});

export default function Page() {
  return (
    <ServicePageTemplate
      data={data}
      allCaseStudyCards={allCaseStudyCards}
      clutchBadge={clutchBadge}
      submitAction={submitContactForm}
      faqItems={faqItems}
      labels={plServicePageLabels}
      siteUrl={plSiteUrl}
    />
  );
}
