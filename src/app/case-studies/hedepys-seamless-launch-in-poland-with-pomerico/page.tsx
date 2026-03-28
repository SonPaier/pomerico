import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/sections/CaseStudyLayout";
import { data } from "@/content/case-studies/hedepy";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/case-studies/hedepys-seamless-launch-in-poland-with-pomerico" },
};

export default function Page() {
  return <CaseStudyLayout data={data} />;
}
