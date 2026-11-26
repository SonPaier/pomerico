import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import { Header, CookieConsent } from "@pomerico/ui/client";
import { Analytics, Footer, GtmNoScript } from "@pomerico/ui";
import {
  pomericoLogo,
  companyLinkedin,
  clutchBadge,
  contactWiktoria,
  phones,
} from "@/content/shared";
import {
  mainNav,
  footerCompanyLinks,
  footerServiceLinks,
  footerIndustryLinks,
} from "@/content/navigation";
import { plHeaderAriaLabels } from "@/content/ui-labels";
import { ConsultationScroll } from "./ConsultationScroll";
import "./globals.css";

const GTM_ID = "GTM-5TQ3M3L";

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

const DEFAULT_TITLE = "Outsourcing BPO i finansów w Polsce | Pomerico";
const DEFAULT_DESCRIPTION =
  "Outsourcing BPO i finansów w Polsce: zespoły finansowe, rekrutacja, Employer of Record i outsourcing HR dla firm międzynarodowych. Siedziba w Gdańsku.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pomerico.pl"),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Pomerico Group",
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://pomerico.pl",
    siteName: "Pomerico Group",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  alternates: {
    canonical: "/",
    languages: {
      pl: "https://pomerico.pl",
      en: "https://pomerico.com",
      "x-default": "https://pomerico.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={openSans.variable}>
      <body className="font-body text-dark">
        <Analytics gtmId={GTM_ID} />
        <GtmNoScript gtmId={GTM_ID} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-primary-blue focus:px-4 focus:py-2 focus:text-white"
        >
          Przejdź do treści
        </a>
        <Header
          logo={pomericoLogo}
          navigation={mainNav}
          ctaLabel="BEZPŁATNA KONSULTACJA"
          ctaLabelMobile="KONSULTACJA"
          ctaHref="/contact#book-consultation"
          topBarPhones={[
            { label: "PL", number: phones.pl.display },
          ]}
          topBarEmail="office@pomerico.com"
          ariaLabels={plHeaderAriaLabels}
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
          columnTitles={{ company: "Firma", services: "Usługi", industry: "Branże" }}
          labels={{
            clutchAlt: "Odznaka Clutch – wyróżniona firma",
            contactUs: "Kontakt",
            bookConsultation: "Umów bezpłatną konsultację",
            consentPreferences: "Ustawienia cookies",
            linkedinAria: "Pomerico na LinkedIn",
          }}
        />
        <ConsultationScroll />
        <CookieConsent locale="pl" />
      </body>
    </html>
  );
}
