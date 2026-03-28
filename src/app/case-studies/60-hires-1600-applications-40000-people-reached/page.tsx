import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/sections/CaseStudyLayout";
import { data } from "@/content/case-studies/60-hires";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/case-studies/60-hires-1600-applications-40000-people-reached" },
};

export default function Page() {
  return <CaseStudyLayout data={data} />;
}
