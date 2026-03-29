import type { Metadata } from "next";
import { CaseStudyLayout } from "@pomerico/ui";
import { data } from "@/content/case-studies/60-hires";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { submitContactForm } from "@/app/actions/contact";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/case-studies/60-hires-1600-applications-40000-people-reached" },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    type: "article",
  },
};

export default function Page() {
  return <CaseStudyLayout data={data} allCaseStudyCards={allCaseStudyCards} submitAction={submitContactForm} />;
}
