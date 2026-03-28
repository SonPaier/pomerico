import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/sections/CaseStudyLayout";
import { data } from "@/content/case-studies/hr-transformation";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/case-studies/comprehensive-hr-transformation-driving-growth" },
};

export default function Page() {
  return <CaseStudyLayout data={data} />;
}
