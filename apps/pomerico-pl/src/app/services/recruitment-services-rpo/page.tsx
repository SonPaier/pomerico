import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import { ServicePageTemplate } from "@pomerico/ui";
import { data, faqItems } from "@/content/services/recruitment-services-rpo";
import { allCaseStudyCards } from "@/content/case-studies";
import { clutchBadge } from "@/content/shared";
import { submitContactForm } from "@/app/actions/contact";
import { plServicePageLabels, plSiteUrl } from "@/content/ui-labels";

const metaTitle = "Agencja rekrutacyjna – RPO i executive search | Pomerico";

export const metadata: Metadata = withOgImage({
  title: { absolute: metaTitle },
  description: data.metaDescription,
  alternates: { canonical: "/services/recruitment-services-rpo" },
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

export default function RecruitmentServicesRPOPage() {
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
