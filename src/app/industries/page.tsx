import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { industriesListingHero, allIndustryCards } from "@/content/industries/listing";

export const metadata: Metadata = {
  title: "Industries – Building Teams, Optimizing Operations, Driving Growth",
  description:
    "Pomerico partners with companies across industries to build high-performing teams, streamline operations, and optimize processes.",
  alternates: { canonical: "/industries" },
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
