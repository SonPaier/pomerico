import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { data } from "@/content/services/recruitment-services-rpo";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: "/services/recruitment-services-rpo" },
};

export default function RecruitmentServicesRPOPage() {
  return <ServicePageTemplate data={data} />;
}
