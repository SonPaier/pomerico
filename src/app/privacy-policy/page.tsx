import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Pomerico Group privacy policy. Learn how we collect, process, and protect your personal data in compliance with GDPR and Polish data protection law.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-primary-blue py-16 text-center text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-heading text-3xl font-bold">Privacy Policy</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 prose text-dark/80">
          <p>Privacy policy content is being migrated. Please contact us at <a href="mailto:contact@pomerico.com" className="text-primary-blue underline">contact@pomerico.com</a> for details.</p>
        </div>
      </section>
    </>
  );
}
