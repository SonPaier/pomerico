import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/sections/CaseStudyLayout";
import { data } from "@/content/case-studies/quality-control";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/case-studies/how-we-secured-a-quality-control-expert-in-just-weeks" },
};

export default function Page() {
  return <CaseStudyLayout data={data} />;
}
