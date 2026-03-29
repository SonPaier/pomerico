import type { Metadata } from "next";
import { ServicePageTemplate } from "@pomerico/ui";
import { data } from "@/content/services/hr-outsourcing-consulting";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { clutchBadge } from "@/content/shared";
import { submitContactForm } from "@/app/actions/contact";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/services/hr-outsourcing-consulting" },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
  },
};

export default function Page() {
  return <ServicePageTemplate data={data} allCaseStudyCards={allCaseStudyCards} clutchBadge={clutchBadge} submitAction={submitContactForm} />;
}
