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
          <p>
            Dear visitors, in compliance with provisions of the Regulation of the European Parliament and of the Council of the European Union 2016/679 of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and the repeal of Directive 95/46/EC (hereinafter: &apos;GDPR&apos;), as well as due to concerns about appropriate use of personal data of our employees, business partners (including personal data of their employees / coworkers), and also other persons interested in cooperation with us in various fields of business activity, we kindly inform you of the following.
          </p>

          <ol>
            <li>
              The Administrator of your personal data (hereinafter: Personal Data) is <strong>Pomerico Group Sp. z o. o.</strong> with head office in Gdańsk (80-755) on 11/F8 Szafarnia Street registered in the National Court Register under the number 0000586439, VAT EU: 5842745186.
            </li>
            <li>
              In matters related to processing of Personal Data by our company, please contact us via email. Our email address: <a href="mailto:office@pomerico.com">office@pomerico.com</a>
            </li>
            <li>
              Depending on a specific situation Personal Data may be processed by us for various, legitimate purposes and over any time period. We provide information about the purposes, legal grounds, and periods of processing of Personal Data below:
              <div className="overflow-x-auto not-prose my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary-blue/5">
                      <th className="border border-dark/20 px-3 py-2 text-left">Items</th>
                      <th className="border border-dark/20 px-3 py-2 text-left">Purpose of processing</th>
                      <th className="border border-dark/20 px-3 py-2 text-left">Legal basis for processing</th>
                      <th className="border border-dark/20 px-3 py-2 text-left">Processing period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-dark/20 px-3 py-2">1.</td>
                      <td className="border border-dark/20 px-3 py-2">Execution of contract/services</td>
                      <td className="border border-dark/20 px-3 py-2">Art. 6 par. 1 p. b GDPR</td>
                      <td className="border border-dark/20 px-3 py-2">Until the execution of the contract/service</td>
                    </tr>
                    <tr>
                      <td className="border border-dark/20 px-3 py-2">2.</td>
                      <td className="border border-dark/20 px-3 py-2">Action taking before the conclusion of the contract, e.g., for the purpose of submitting a commercial offer</td>
                      <td className="border border-dark/20 px-3 py-2">Art. 6 par. 1 p. b GDPR</td>
                      <td className="border border-dark/20 px-3 py-2">Until the implementation of actions related to conclusion of the contract</td>
                    </tr>
                    <tr>
                      <td className="border border-dark/20 px-3 py-2">3.</td>
                      <td className="border border-dark/20 px-3 py-2">Performance of obligations under the generally binding law regulations.</td>
                      <td className="border border-dark/20 px-3 py-2">Art. 6 par. 1 p. c GDPR</td>
                      <td className="border border-dark/20 px-3 py-2">Over the period regulated by the provisions of the law</td>
                    </tr>
                    <tr>
                      <td className="border border-dark/20 px-3 py-2">4.</td>
                      <td className="border border-dark/20 px-3 py-2">Pursuit of legitimate interests of our company, e.g., archiving of accounting documents containing Personal Data</td>
                      <td className="border border-dark/20 px-3 py-2">Art. 6 par. 1 p. f GDPR</td>
                      <td className="border border-dark/20 px-3 py-2">Until a legitimate interest is implemented, i.e., storage of accounting documents for 5 years, starting from the end of the calendar year in which the tax payment period related to the service provided has expired</td>
                    </tr>
                    <tr>
                      <td className="border border-dark/20 px-3 py-2">5.</td>
                      <td className="border border-dark/20 px-3 py-2">Pursuit of legitimate interests of our company, such as: establishment, investigation, and defense of mutual claims</td>
                      <td className="border border-dark/20 px-3 py-2">Art. 6 par. 1 p. f GDPR</td>
                      <td className="border border-dark/20 px-3 py-2">Until a legitimate interest is executed, e.g., until the expiry of the limitation period for the establishment, investigation and defence of mutual claims</td>
                    </tr>
                    <tr>
                      <td className="border border-dark/20 px-3 py-2">6.</td>
                      <td className="border border-dark/20 px-3 py-2">Pursuit of legitimate interests of our company, such as: direct marketing of our own services</td>
                      <td className="border border-dark/20 px-3 py-2">Art. 6 par. 1 p. f GDPR</td>
                      <td className="border border-dark/20 px-3 py-2">Until an objection is filed</td>
                    </tr>
                    <tr>
                      <td className="border border-dark/20 px-3 py-2">7.</td>
                      <td className="border border-dark/20 px-3 py-2">Implementation of other agreed objectives</td>
                      <td className="border border-dark/20 px-3 py-2">Art. 6 par. 1 p. a GDPR</td>
                      <td className="border border-dark/20 px-3 py-2">Until the objective is achieved or consent is withdrawn.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>
              For the purpose of achieving the legitimate objectives listed in the table, personal data may be made available to the following entities that cooperate with us: employees, banks, insurers, law firms, providers of email services, companies that provide us with IT or archiving support, certified auditors, audit firms.
            </li>
            <li>
              In regard to processing of Personal data by our company you have the right to:
              <ul>
                <li>access your Personal Data, including the right to obtain its copies,</li>
                <li>require rectification of Personal Data – should it be incorrect or incomplete,</li>
                <li>object to the processing of Personal Data,</li>
                <li>
                  demand deleting of Personal Data in the event that:
                  <ol>
                    <li>Personal Data is not necessary for the purposes for which it was collected or otherwise processed,</li>
                    <li>the person who is the subject of data collection raised an objection to the processing of Personal Data,</li>
                    <li>the person who is the subject of data collection withdrew their consent to the processing of Personal Data, which is the basis of data processing and there is no other legal basis for data processing,</li>
                    <li>Personal Data is being processed illegally,</li>
                    <li>Personal data must be deleted for the purpose of fulfillment of obligations that stem from the provisions of the law.</li>
                  </ol>
                </li>
                <li>requirement to transfer Personal Data,</li>
                <li>withdrawal of consent to the processing of Personal Data at any moment, with no impact on compliance with the right of data processing, which was carried out on the basis of consent before its withdrawal, unless there is another legal basis for its processing.</li>
              </ul>
            </li>
            <li>In the event of obtaining information about unlawful processing of Personal Data, you have the right to file a complaint with the President of the Personal Data Protection Office.</li>
            <li>Providing of your Personal Information is voluntary, however, the lack thereof prevents conclusion / execution of the Contract, as well as prevents establishment and development of potential cooperation.</li>
            <li>Our company does not process Personal Data for the purpose of automated decision making, including so-called profiling.</li>
            <li>As we use Google LLC services, i.e., G Suite system based on technology of so-called computing cloud, there exists a possibility of transferring your data to the third countries.</li>
          </ol>

          <p>Our company makes every effort to ensure any means of physical, technical, and organizational protection of Personal Data against its accidental or purposeful destruction, accidental loss, alteration, unauthorized disclosure, use or access, in accordance with all the binding provisions of the law.</p>

          <hr className="my-12" />

          <h2>Information clause – RECRUITMENT</h2>

          <ol>
            <li>When applying to <strong>Pomerico Group Sp. z o. o.</strong> you provide your personal information, and as a result we become its administrator.</li>
            <li>Contact us at: Pomerico Group Sp. z o. o. with head office in Gdańsk (80-755) on 11/F8 Szafarnia Street registered in the National Court Register under the number 0000586439, email address: <a href="mailto:recruitment@pomerico.com">recruitment@pomerico.com</a></li>
            <li>As an employment agency we process your personal data in order to conduct recruitment for our Clients or for our internal recruitment purposes, your potential employers.</li>
            <li>The legal basis for the processing of your data by us and our Clients is art. 22<sup>1</sup> §1 of the Labor Law Code, and in the scope excluded from thereof your voluntarily given consent.</li>
            <li>Your personal data will be processed exclusively in order for us to carry out the recruitment process for the position for which you have applied.</li>
            <li>However, have you given consent for future recruitment purposes, this means that we, as a recruitment agency, are entitled to store your personal data in our database and present it during future recruitments to other potential employers.</li>
            <li>Please observe, that only selected candidates will be presented to our Clients, and personal data of remaining candidates will be deleted after completion of the recruitment process, unless they have given so-called &apos;future consent&apos;.</li>
            <li>Expression of consent is not compulsory, however, the lack of thereof will prevent us from processing your data, and as a result will prevent us from using your application documents in any other future recruitment.</li>
            <li>You are entitled to withdraw your consent entirely and at no cost to you at any moment, which will result in deleting of your data, unless the law allows us to process it further. You can file the declaration about withdrawal of your consent by sending an email to the same email address you sent your application documents to or by contacting us at <a href="mailto:recruitment@pomerico.com">recruitment@pomerico.com</a></li>
            <li>Have you given your consent only for the purposes of a specific recruitment process, then, just as mentioned earlier, your data will be deleted immediately after the completion of the process. However, have you given consent for future recruitment purposes, we will be entitled to process your data until the moment when you withdraw your consent or file an objection, unless the law allows us to process it further.</li>
            <li>
              We will have the right to share your data for recruitment purposes with:
              <ul>
                <li>potential employers;</li>
                <li>providers of email services;</li>
                <li>providers of IT support;</li>
                <li>Google LLC – provider of the IT system used to process your data.</li>
              </ul>
            </li>
            <li>As we use Google LLC services, i.e., G Suite system based on the so-called computing cloud, there exists a possibility of transferring your data to the third countries.</li>
            <li>You have the right to require access from us (as well as from a potential employer) to your data in order to correct it, transfer it, delete it, and limit data processing. You are also entitled to file an objection regarding our processing of your data.</li>
            <li>Should you consider our processing of your data as unlawful, you have the right to file a complaint with the President of the Personal Data Protection Office.</li>
          </ol>

          <p>We will not take any automated decisions based on your personal information, in particular in regard to decisions resulting from so-called profiling.</p>
        </div>
      </section>
    </>
  );
}
