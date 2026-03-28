import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR Information Clause",
  description: "GDPR information clause for Pomerico Group. Understand your data subject rights, how we process personal data, and our legal basis under EU GDPR regulations.",
  alternates: { canonical: "/gdpr-information-clause" },
  openGraph: {
    title: "GDPR Information Clause",
    description: "GDPR information clause for Pomerico Group. Understand your data subject rights, how we process personal data, and our legal basis under EU GDPR regulations.",
  },
};

export default function GDPRPage() {
  return (
    <>
      <section className="bg-primary-blue py-16 text-center text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-heading text-3xl font-bold">GDPR Information Clause</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 prose text-dark/80">
          <p>GDPR information clause content is being migrated. Please contact us at <a href="mailto:contact@pomerico.com" className="text-primary-blue underline">contact@pomerico.com</a> for details.</p>
        </div>
      </section>
    </>
  );
}
