import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import { HeroSection } from "@pomerico/ui";
import { ServiceCardGrid } from "@pomerico/ui";
import { SectionHeader } from "@pomerico/ui";
import { Breadcrumbs } from "@pomerico/ui";
import { ServiceComparisonTable } from "@pomerico/ui/client";
import { servicesListingHero, allServiceCards } from "@/content/services/listing";
import {
  plBreadcrumbAria,
  plBreadcrumbHome,
  plCardLinkLabel,
  plHeroTrustImageAlt,
  plServiceComparisonLabels,
  plSiteUrl,
} from "@/content/ui-labels";

const TITLE = "Usługi outsourcingowe – BPO, finanse, EOR | Pomerico";
const DESCRIPTION =
  "Usługi outsourcingowe w Polsce: BPO, outsourcing finansów, rekrutacja, płace, Employer of Record i outsourcing HR. Porównaj modele współpracy.";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
});

export default function ServicesPage() {
  return (
    <>
      <HeroSection data={servicesListingHero} trustImageAlt={plHeroTrustImageAlt} />

      <Breadcrumbs
        items={[
          { label: plBreadcrumbHome, href: "/" },
          { label: "Usługi" },
        ]}
        siteUrl={plSiteUrl}
        ariaLabel={plBreadcrumbAria}
      />

      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            heading="Wszystkie usługi"
            subtitle="Kompleksowe rozwiązania outsourcingowe na każdą potrzebę biznesową."
          />
          <ServiceCardGrid cards={allServiceCards} linkLabel={plCardLinkLabel} />
        </div>
      </section>

      <ServiceComparisonTable labels={plServiceComparisonLabels} />
    </>
  );
}
