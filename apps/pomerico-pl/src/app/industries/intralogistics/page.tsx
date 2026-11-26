import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import { IndustryPageTemplate } from "@pomerico/ui";
import { data } from "@/content/industries/intralogistics";
import { allCaseStudyCards } from "@/content/case-studies";
import { submitContactForm } from "@/app/actions/contact";
import { faqItems } from "@/content/faq";
import { plIndustryPageLabels, plSiteUrl } from "@/content/ui-labels";

const TITLE = "Outsourcing i rozwiązania HR dla intralogistyki | Pomerico";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: data.metaDescription,
  alternates: { canonical: "/industries/intralogistics" },
  openGraph: {
    title: TITLE,
    description: data.metaDescription,
  },
});

export default function IntralogisticsPage() {
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
