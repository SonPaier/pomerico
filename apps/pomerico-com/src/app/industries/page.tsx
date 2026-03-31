import type { Metadata } from "next";
import { HeroSection } from "@pomerico/ui";
import { ServiceCardGrid } from "@pomerico/ui";
import { SectionHeader } from "@pomerico/ui";
import { Breadcrumbs } from "@pomerico/ui";
import { industriesListingHero, allIndustryCards } from "@/content/industries/listing";

export const metadata: Metadata = {
  title: "Industries – HR Outsourcing Solutions by Sector",
  description:
    "Pomerico partners with companies across industries to build high-performing teams, streamline operations, and optimize processes.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries – HR Outsourcing Solutions by Sector",
    description:
      "Pomerico partners with companies across industries to build high-performing teams, streamline operations, and optimize processes.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <HeroSection data={industriesListingHero} />

      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />

      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            heading="All Industries"
            subtitle="Tailored solutions for every sector."
          />
          <ServiceCardGrid cards={allIndustryCards} />
        </div>
      </section>
    </>
  );
}
