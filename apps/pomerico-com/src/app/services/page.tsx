import type { Metadata } from "next";
import { HeroSection } from "@pomerico/ui";
import { ServiceCardGrid } from "@pomerico/ui";
import { SectionHeader } from "@pomerico/ui";
import { Breadcrumbs } from "@pomerico/ui";
import { ServiceComparisonTable } from "@pomerico/ui/client";
import { servicesListingHero, allServiceCards } from "@/content/services/listing";

export const metadata: Metadata = {
  title: { absolute: "Outsourcing Services in Poland – BPO, Finance, EOR | Pomerico" },
  description:
    "Outsourcing services in Poland: BPO, finance outsourcing, recruitment, payroll, Employer of Record and HR outsourcing. Compare cooperation models.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Outsourcing Services in Poland – BPO, Finance, EOR | Pomerico",
    description:
      "Outsourcing services in Poland: BPO, finance outsourcing, recruitment, payroll, Employer of Record and HR outsourcing. Compare cooperation models.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outsourcing Services in Poland – BPO, Finance, EOR | Pomerico",
    description:
      "Outsourcing services in Poland: BPO, finance outsourcing, recruitment, payroll, Employer of Record and HR outsourcing. Compare cooperation models.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection data={servicesListingHero} />

      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]} />

      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            heading="All Services"
            subtitle="Comprehensive outsourcing solutions for every business need."
          />
          <ServiceCardGrid cards={allServiceCards} />
        </div>
      </section>

      <ServiceComparisonTable />
    </>
  );
}
