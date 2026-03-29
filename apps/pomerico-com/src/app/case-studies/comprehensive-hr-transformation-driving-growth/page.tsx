import type { Metadata } from "next";
import { CaseStudyLayout } from "@pomerico/ui";
import { data } from "@/content/case-studies/hr-transformation";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { submitContactForm } from "@/app/actions/contact";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/case-studies/comprehensive-hr-transformation-driving-growth" },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    type: "article",
  },
};

export default function Page() {
  return <CaseStudyLayout data={data} allCaseStudyCards={allCaseStudyCards} submitAction={submitContactForm} />;
}
