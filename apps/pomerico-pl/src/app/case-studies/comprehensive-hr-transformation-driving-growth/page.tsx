import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import { CaseStudyLayout } from "@pomerico/ui";
import { data, seoTitle } from "@/content/case-study-pages/hr-transformation";
import { allCaseStudyCards } from "@/content/case-studies";
import { plCaseStudyLayoutLabels, plSiteUrl } from "@/content/ui-labels";
import { submitContactForm } from "@/app/actions/contact";

export const metadata: Metadata = withOgImage({
  title: { absolute: seoTitle },
  description: data.metaDescription,
  alternates: { canonical: "/case-studies/comprehensive-hr-transformation-driving-growth" },
  openGraph: {
    title: seoTitle,
    description: data.metaDescription,
    type: "article",
  },
});

export default function Page() {
  return (
    <CaseStudyLayout
      data={data}
      allCaseStudyCards={allCaseStudyCards}
      submitAction={submitContactForm}
      labels={plCaseStudyLayoutLabels}
      siteUrl={plSiteUrl}
    />
  );
}
