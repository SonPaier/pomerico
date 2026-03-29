import type { Metadata } from "next";
import { CaseStudyLayout } from "@pomerico/ui";
import { data } from "@/content/case-studies/quality-control";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { submitContactForm } from "@/app/actions/contact";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/case-studies/how-we-secured-a-quality-control-expert-in-just-weeks" },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    type: "article",
  },
};

export default function Page() {
  return <CaseStudyLayout data={data} allCaseStudyCards={allCaseStudyCards} submitAction={submitContactForm} />;
}
