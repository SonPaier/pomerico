import type { Metadata } from "next";
import { IndustryPageTemplate } from "@pomerico/ui";
import { data } from "@/content/industries/shared-services-bpo";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { submitContactForm } from "@/app/actions/contact";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/industries/shared-services-bpo" },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
  },
};

export default function SharedServicesBpoPage() {
  return <IndustryPageTemplate data={data} allCaseStudyCards={allCaseStudyCards} submitAction={submitContactForm} />;
}
