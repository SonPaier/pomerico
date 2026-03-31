import type { Metadata } from "next";
import { ServicePageTemplate } from "@pomerico/ui";
import { data } from "@/content/services/body-leasing-staff-augmentation";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { clutchBadge } from "@/content/shared";
import { submitContactForm } from "@/app/actions/contact";
import { faqItems } from "@/content/faq";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/services/body-leasing-staff-augmentation" },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
  },
};

export default function Page() {
  return <ServicePageTemplate data={data} allCaseStudyCards={allCaseStudyCards} clutchBadge={clutchBadge} submitAction={submitContactForm} faqItems={faqItems.slice(0, 5)} />;
}
