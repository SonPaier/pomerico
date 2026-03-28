import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/sections/CaseStudyLayout";
import { data } from "@/content/case-studies/succession-leader";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/case-studies/how-pomerico-ensured-a-successful-succession-and-hired-the-ideal-service-network-leader" },
};

export default function Page() {
  return <CaseStudyLayout data={data} />;
}
