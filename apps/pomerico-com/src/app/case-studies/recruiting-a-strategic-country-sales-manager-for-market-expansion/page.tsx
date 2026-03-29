import type { Metadata } from "next";
import { CaseStudyLayout } from "@pomerico/ui";
import { data } from "@/content/case-studies/sales-manager";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { submitContactForm } from "@/app/actions/contact";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/case-studies/recruiting-a-strategic-country-sales-manager-for-market-expansion" },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    type: "article",
  },
};

export default function Page() {
  return <CaseStudyLayout data={data} allCaseStudyCards={allCaseStudyCards} submitAction={submitContactForm} />;
}
