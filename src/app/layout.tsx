import type { Metadata, Viewport } from "next";
import { Open_Sans, Roboto, Roboto_Slab } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
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
    default: "Pomerico Group – BPO & HR Outsourcing Partner in Poland",
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
    title: "Pomerico Group – BPO & HR Outsourcing Partner in Poland",
    description:
      "End-to-end HR outsourcing, BPO, EOR, recruitment and business consulting for international companies operating in Poland.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pomerico Group – BPO & HR Outsourcing Partner in Poland",
    description:
      "End-to-end HR outsourcing, BPO, EOR, recruitment and business consulting for international companies operating in Poland.",
  },
  alternates: {
    canonical: "/",
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
    <html lang="en" className={`${openSans.variable} ${roboto.variable} ${robotoSlab.variable}`}>
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
                  url: "https://pomerico.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://pomerico.com/images/pomerico-group-logo.png",
                  },
                  description:
                    "End-to-end HR outsourcing, BPO, EOR, recruitment and business consulting for international companies operating in Poland.",
                  foundingDate: "2015",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Szafarnia 11/F8",
                    addressLocality: "Gdańsk",
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
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
