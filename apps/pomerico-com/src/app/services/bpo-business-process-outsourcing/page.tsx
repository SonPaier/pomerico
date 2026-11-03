import type { Metadata } from "next";
import { ServicePageTemplate } from "@pomerico/ui";
import { data, faqItems } from "@/content/services/bpo-business-process-outsourcing";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { clutchBadge } from "@/content/shared";
import { submitContactForm } from "@/app/actions/contact";

const metaTitle = "BPO Poland – Business Process Outsourcing | Pomerico";

export const metadata: Metadata = {
  title: { absolute: metaTitle },
  description: data.metaDescription,
  alternates: { canonical: "/services/bpo-business-process-outsourcing" },
  openGraph: {
    title: metaTitle,
    description: data.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: data.metaDescription,
  },
};

export default function Page() {
  return <ServicePageTemplate data={data} allCaseStudyCards={allCaseStudyCards} clutchBadge={clutchBadge} submitAction={submitContactForm} faqItems={faqItems} />;
}
