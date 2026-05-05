import type { Metadata } from "next";
import { Open_Sans, Roboto, Roboto_Slab } from "next/font/google";
import { Analytics, GtmNoScript } from "@pomerico/ui";
import { CookieConsent } from "@pomerico/ui/client";
import "./globals.css";

const GTM_ID = "GTM-5TQ3M3L";
const GA4_ID = "G-7329920774";

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

export const metadata: Metadata = {
  title: "Pomerico Group – Outsourcing HR i BPO w Polsce",
  description: "Budujemy efektywne zespoły. Outsourcing HR, BPO, EOR, rekrutacja i doradztwo biznesowe dla firm międzynarodowych działających w Polsce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${openSans.variable} ${roboto.variable} ${robotoSlab.variable}`}>
      <body className="font-body text-dark">
        <Analytics gtmId={GTM_ID} ga4Id={GA4_ID} />
        <GtmNoScript gtmId={GTM_ID} />
        <main>{children}</main>
        <CookieConsent locale="pl" />
      </body>
    </html>
  );
}
