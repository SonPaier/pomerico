import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/sections/CaseStudyLayout";
import { data } from "@/content/case-studies/maintenance-team";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/case-studies/building-a-multidisciplinary-maintenance-team-for-automated-warehousing" },
};

export default function Page() {
  return <CaseStudyLayout data={data} />;
}
