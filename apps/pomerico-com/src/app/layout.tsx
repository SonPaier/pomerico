import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import { Header } from "@pomerico/ui/client";
import { Footer } from "@pomerico/ui";
import { mainNav } from "@/content/navigation";
import {
  pomericoLogo,
  companyLinkedin,
  clutchBadge,
  contactWiktoria,
} from "@/content/shared";
import {
  footerCompanyLinks,
  footerServiceLinks,
  footerIndustryLinks,
} from "@/content/navigation";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#183B6E",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pomerico.com"),
  title: {
    default: "Pomerico - BPO | HR & Finance",
    template: "%s | Pomerico Group",
  },
  description:
    "We build effective teams. End-to-end HR outsourcing, BPO, EOR, recruitment and business consulting for international companies operating in Poland.",
  keywords: [
    "HR outsourcing Poland",
    "BPO Poland",
    "EOR Poland",
    "employer of record",
    "recruitment Poland",
    "staff augmentation",
    "nearshoring Poland",
    "body leasing",
    "business consulting Poland",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://pomerico.com",
    siteName: "Pomerico Group",
    title: "Pomerico - BPO | HR & Finance",
    description:
      "End-to-end HR outsourcing, BPO, EOR, recruitment and business consulting for international companies operating in Poland.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pomerico - BPO | HR & Finance",
    description:
      "End-to-end HR outsourcing, BPO, EOR, recruitment and business consulting for international companies operating in Poland.",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en": "https://pomerico.com",
      "pl": "https://pomerico.pl",
      "x-default": "https://pomerico.com",
    },
    types: {
      "text/plain": "/llms.txt",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-body text-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://pomerico.com/#organization",
                  name: "Pomerico Group",
                  legalName: "Pomerico Group Sp. z o.o.",
                  url: "https://pomerico.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://pomerico.com/images/pomerico-group-logo.png",
                  },
                  description:
                    "Pomerico Group is a Polish HR outsourcing and BPO company founded in 2015 in Gdańsk, providing end-to-end HR outsourcing, BPO, EOR, recruitment and business consulting for international companies operating in Poland.",
                  foundingDate: "2015",
                  foundingLocation: {
                    "@type": "Place",
                    name: "Gdańsk, Poland",
                  },
                  founder: {
                    "@type": "Person",
                    name: "Sebastian Kunc",
                    jobTitle: "General Manager",
                    url: "https://www.linkedin.com/in/sebastian-kunc/",
                  },
                  numberOfEmployees: {
                    "@type": "QuantitativeValue",
                    minValue: 11,
                    maxValue: 50,
                  },
                  slogan: "We build effective teams",
                  knowsAbout: [
                    "HR outsourcing",
                    "Business Process Outsourcing",
                    "Employer of Record",
                    "recruitment process outsourcing",
                    "staff augmentation",
                    "nearshoring",
                    "body leasing",
                    "business consulting",
                  ],
                  areaServed: [
                    { "@type": "Country", name: "Poland" },
                    { "@type": "Country", name: "Denmark" },
                    { "@type": "Country", name: "United States" },
                    { "@type": "Country", name: "Australia" },
                    { "@type": "Continent", name: "Europe" },
                  ],
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Szafarnia 11/F8",
                    addressLocality: "Gdańsk",
                    addressRegion: "Pomeranian Voivodeship",
                    postalCode: "80-755",
                    addressCountry: "PL",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+48-794-165-506",
                    email: "wiktoria.wierzbicka@pomerico.com",
                    contactType: "sales",
                    availableLanguage: ["English", "Polish", "Danish"],
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/pomerico/",
                    "https://www.facebook.com/pomericogroup/",
                    "https://clutch.co/profile/pomerico-group",
                    "https://www.outsourceaccelerator.com/company/pomerico-group-2/",
                    "https://www.refetrust.com/agency/pomerico-group",
                    "https://www.wikidata.org/wiki/Q138844186",
                    "https://pomerico.pl",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://pomerico.com/#website",
                  url: "https://pomerico.com",
                  name: "Pomerico Group",
                  publisher: {
                    "@id": "https://pomerico.com/#organization",
                  },
                  inLanguage: "en-GB",
                },
              ],
            }),
          }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-primary-blue focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Header
          logo={pomericoLogo}
          navigation={mainNav}
          ctaLabel="FREE CONSULTATION"
          ctaLabelMobile="CONSULTATION"
          ctaHref="/contact"
          topBarPhones={[
            { label: "DK", number: "+45 66 33 90 70" },
            { label: "PL", number: "+48 794 165 506" },
          ]}
          topBarEmail="office@pomerico.com"
        />
        <main id="main-content">{children}</main>
        <Footer
          logo={pomericoLogo}
          linkedinUrl={companyLinkedin}
          clutchBadge={clutchBadge}
          contactPerson={contactWiktoria}
          companyLinks={footerCompanyLinks}
          serviceLinks={footerServiceLinks}
          industryLinks={footerIndustryLinks}
        />
      </body>
    </html>
  );
}
