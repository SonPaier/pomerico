import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import { IndustryPageTemplate } from "@pomerico/ui";
import { data } from "@/content/industries/manufacturing-industry";
import { allCaseStudyCards } from "@/content/case-studies";
import { submitContactForm } from "@/app/actions/contact";
import { faqItems } from "@/content/faq";
import { plIndustryPageLabels, plSiteUrl } from "@/content/ui-labels";

const TITLE = "Rozwiązania HR dla produkcji i przemysłu | Pomerico";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: data.metaDescription,
  alternates: { canonical: "/industries/manufacturing-industry" },
  openGraph: {
    title: TITLE,
    description: data.metaDescription,
  },
});

export default function ManufacturingIndustryPage() {
  return (
    <IndustryPageTemplate
      data={data}
      allCaseStudyCards={allCaseStudyCards}
      submitAction={submitContactForm}
      faqItems={faqItems.slice(0, 5)}
      labels={plIndustryPageLabels}
      siteUrl={plSiteUrl}
    />
  );
}
