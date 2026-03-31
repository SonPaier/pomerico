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
        <div className="mx-auto max-w-4xl px-6 prose prose-lg max-w-none text-dark/80 [&_h2]:font-heading [&_h2]:text-primary-blue [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:text-dark [&_h3]:text-lg [&_h3]:mt-8 [&_h3]:mb-3">

          <h2>Data Controller</h2>
          <p>
            <strong>Pomerico Group Sp. z o.o.</strong><br />
            Szafarnia 11/F8, 80-755 Gdansk, Poland<br />
            National Court Register (KRS): 0000586439<br />
            VAT EU: PL5842745186<br />
            Contact: <a href="mailto:office@pomerico.com">office@pomerico.com</a>
          </p>

          <h2>Processing Purposes and Legal Bases</h2>
          <p>We process personal data for the following purposes:</p>
          <ol>
            <li><strong>Contract/service execution</strong> (Art. 6 par. 1 p. b GDPR) — for the duration until contract completion.</li>
            <li><strong>Pre-contractual actions</strong> such as quotations (Art. 6 par. 1 p. b GDPR) — until contract conclusion actions are complete.</li>
            <li><strong>Legal obligations compliance</strong> (Art. 6 par. 1 p. c GDPR) — per applicable law retention periods.</li>
            <li><strong>Company legitimate interests</strong> including document archiving (Art. 6 par. 1 p. f GDPR) — five-year accounting document retention.</li>
            <li><strong>Claim establishment and defense</strong> (Art. 6 par. 1 p. f GDPR) — until limitation periods expire.</li>
            <li><strong>Direct service marketing</strong> (Art. 6 par. 1 p. f GDPR) — until objection is filed.</li>
            <li><strong>Other agreed objectives</strong> (Art. 6 par. 1 p. a GDPR) — until achievement or consent withdrawal.</li>
          </ol>

          <h2>Data Sharing</h2>
          <p>Data may be shared with: employees, banks, insurers, law firms, email providers, IT support companies, archiving providers, auditors, and audit firms.</p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Object to processing</li>
            <li>Request deletion of your data</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2>Important Notes</h2>
          <ul>
            <li>No automated decision-making or profiling occurs.</li>
            <li>Data transfers to third countries are possible via Google LLC G Suite services.</li>
            <li>Physical, technical, and organizational protections are implemented.</li>
            <li>You have the right to file a complaint with the Personal Data Protection Office President.</li>
          </ul>

          <hr className="my-12" />

          <h2>Recruitment Information Clause</h2>

          <h3>Administrator</h3>
          <p>
            <strong>Pomerico Group Sp. z o.o.</strong><br />
            Szafarnia 11/F8, 80-755 Gdansk, Poland<br />
            National Court Register (KRS): 0000586439<br />
            Contact: <a href="mailto:recruitment@pomerico.com">recruitment@pomerico.com</a>
          </p>

          <h3>Processing Details</h3>
          <ul>
            <li>Data is processed for recruitment and potential employer matching.</li>
            <li>Legal basis: Art. 22&sup1; &sect;1 Labor Code and voluntary consent.</li>
            <li>Data is used exclusively for applied position recruitment.</li>
            <li>Optional &quot;future recruitment&quot; consent enables database retention for other opportunities.</li>
            <li>Non-selected candidates&apos; data is deleted post-recruitment unless future consent is provided.</li>
          </ul>

          <h3>Consent Details</h3>
          <ul>
            <li>Consent is not mandatory but required for data processing.</li>
            <li>Withdrawal is possible at any time, free of charge, via email.</li>
            <li>Specific recruitment consent results in immediate post-process deletion.</li>
            <li>Future recruitment consent allows retention until withdrawal.</li>
          </ul>

          <h3>Data Sharing</h3>
          <p>Data may be shared with: potential employers, email providers, IT support, and Google LLC G Suite services.</p>

          <h3>Rights</h3>
          <p>You have the right to access, correct, transfer, delete, limit processing, and object to processing of your personal data. You may also file a complaint with the Personal Data Protection Office President.</p>

          <p><strong>Policy:</strong> No automated decisions or profiling are conducted.</p>
        </div>
      </section>
    </>
  );
}
