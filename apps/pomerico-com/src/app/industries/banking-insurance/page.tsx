import type { Metadata } from "next";
import { IndustryPageTemplate } from "@pomerico/ui";
import { data } from "@/content/industries/banking-insurance";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { submitContactForm } from "@/app/actions/contact";
import { faqItems } from "@/content/faq";

export const metadata: Metadata = {
  title: "Banking & Insurance HR Outsourcing in Poland",
  description: data.metaDescription,
  alternates: { canonical: "/industries/banking-insurance" },
  openGraph: {
    title: "Banking & Insurance HR Outsourcing in Poland",
    description: data.metaDescription,
  },
};

export default function BankingInsurancePage() {
  return <IndustryPageTemplate data={data} allCaseStudyCards={allCaseStudyCards} submitAction={submitContactForm} faqItems={faqItems.slice(0, 5)} />;
}
