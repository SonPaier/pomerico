import type { Metadata } from "next";
import { ServicePageTemplate } from "@pomerico/ui";
import { data, faqItems } from "@/content/services/finance-outsourcing-contracting";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { clutchBadge } from "@/content/shared";
import { submitContactForm } from "@/app/actions/contact";

const metaTitle = "Finance Outsourcing Poland – AP/AR & Controlling | Pomerico";

export const metadata: Metadata = {
  title: { absolute: metaTitle },
  description: data.metaDescription,
  alternates: { canonical: "/services/finance-outsourcing-contracting" },
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
