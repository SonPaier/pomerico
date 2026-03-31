import type { Metadata } from "next";
import { IndustryPageTemplate } from "@pomerico/ui";
import { data } from "@/content/industries/manufacturing-industry";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { submitContactForm } from "@/app/actions/contact";
import { faqItems } from "@/content/faq";

export const metadata: Metadata = {
  title: "Manufacturing & Industry HR Solutions in Poland",
  description: data.metaDescription,
  alternates: { canonical: "/industries/manufacturing-industry" },
  openGraph: {
    title: "Manufacturing & Industry HR Solutions in Poland",
    description: data.metaDescription,
  },
};

export default function ManufacturingIndustryPage() {
  return <IndustryPageTemplate data={data} allCaseStudyCards={allCaseStudyCards} submitAction={submitContactForm} faqItems={faqItems.slice(0, 5)} />;
}
