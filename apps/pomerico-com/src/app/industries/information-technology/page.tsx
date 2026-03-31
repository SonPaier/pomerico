import type { Metadata } from "next";
import { IndustryPageTemplate } from "@pomerico/ui";
import { data } from "@/content/industries/information-technology";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { submitContactForm } from "@/app/actions/contact";
import { faqItems } from "@/content/faq";

export const metadata: Metadata = {
  title: "IT Outsourcing & Tech Team Building in Poland",
  description: data.metaDescription,
  alternates: { canonical: "/industries/information-technology" },
  openGraph: {
    title: "IT Outsourcing & Tech Team Building in Poland",
    description: data.metaDescription,
  },
};

export default function InformationTechnologyPage() {
  return <IndustryPageTemplate data={data} allCaseStudyCards={allCaseStudyCards} submitAction={submitContactForm} faqItems={faqItems.slice(0, 5)} />;
}
