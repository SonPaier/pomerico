import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import { Header, CookieConsent } from "@pomerico/ui/client";
import { Analytics, Footer, GtmNoScript } from "@pomerico/ui";

const GTM_ID = "GTM-K692K7D";
import { mainNav } from "@/content/navigation";
import {
  pomericoLogo,
  companyLinkedin,
  clutchBadge,
  contactWiktoria,
  phones,
} from "@/content/shared";
import {
  footerCompanyLinks,
  footerServiceLinks,
  footerIndustryLinks,
} from "@/content/navigation";
import { ConsultationScroll } from "./ConsultationScroll";
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
    default: "BPO & Finance Outsourcing in Poland | Pomerico",
    template: "%s | Pomerico Group",
  },
  description:
    "BPO and finance outsourcing in Poland: finance teams, recruitment, Employer of Record and HR outsourcing for international companies. Based in Gdańsk.",
  keywords: [
    "BPO Poland",
    "finance outsourcing Poland",
    "recruitment Poland",
    "EOR Poland",
    "employer of record",
    "HR outsourcing Poland",
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
    title: "BPO & Finance Outsourcing in Poland | Pomerico",
    description:
      "BPO and finance outsourcing in Poland: finance teams, recruitment, Employer of Record and HR outsourcing for international companies. Based in Gdańsk.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BPO & Finance Outsourcing in Poland | Pomerico",
    description:
      "BPO and finance outsourcing in Poland: finance teams, recruitment, Employer of Record and HR outsourcing for international companies. Based in Gdańsk.",
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
  // Google Search Console HTML-tag verification (fallback — preferred method is a DNS TXT
  // record on the domain property). Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel env.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-body text-dark">
        <Analytics gtmId={GTM_ID} />
        <GtmNoScript gtmId={GTM_ID} />
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
                    "Pomerico Group is a BPO and finance outsourcing partner based in Gdańsk, Poland. Since 2015 we provide finance teams, recruitment, EOR and HR outsourcing for international companies operating in Poland.",
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
                    "Business Process Outsourcing",
                    "finance outsourcing",
                    "finance recruitment",
                    "accounts payable and receivable (AP/AR)",
                    "controlling",
                    "recruitment process outsourcing",
                    "payroll services",
                    "Employer of Record",
                    "staff augmentation",
                    "HR outsourcing",
                    "nearshoring",
                    "market entry in Poland",
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
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: phones.pl.schema,
                      email: "wiktoria.wierzbicka@pomerico.com",
                      contactType: "sales",
                      availableLanguage: ["English", "Polish", "Danish"],
                    },
                    {
                      "@type": "ContactPoint",
                      telephone: phones.dk.schema,
                      contactType: "sales",
                      areaServed: "DK",
                      availableLanguage: "English",
                    },
                  ],
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
          ctaHref="/contact#book-consultation"
          topBarPhones={[
            { label: "DK", number: phones.dk.display },
            { label: "PL", number: phones.pl.display },
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
        <ConsultationScroll />
        <CookieConsent />
      </body>
    </html>
  );
}
