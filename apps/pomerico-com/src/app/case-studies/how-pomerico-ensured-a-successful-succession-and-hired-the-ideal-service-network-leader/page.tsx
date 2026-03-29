import type { Metadata } from "next";
import { CaseStudyLayout } from "@pomerico/ui";
import { data } from "@/content/case-studies/succession-leader";
import { allCaseStudyCards } from "@/content/case-studies/listing";
import { submitContactForm } from "@/app/actions/contact";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/case-studies/how-pomerico-ensured-a-successful-succession-and-hired-the-ideal-service-network-leader" },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    type: "article",
  },
};

export default function Page() {
  return <CaseStudyLayout data={data} allCaseStudyCards={allCaseStudyCards} submitAction={submitContactForm} />;
}
