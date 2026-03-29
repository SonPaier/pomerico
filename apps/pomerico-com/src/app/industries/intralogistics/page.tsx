import type { Metadata } from "next";
import { IndustryPageTemplate } from "@pomerico/ui";
import { data } from "@/content/industries/intralogistics";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { submitContactForm } from "@/app/actions/contact";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/industries/intralogistics" },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
  },
};

export default function IntralogisticsPage() {
  return <IndustryPageTemplate data={data} allCaseStudyCards={allCaseStudyCards} submitAction={submitContactForm} />;
}
