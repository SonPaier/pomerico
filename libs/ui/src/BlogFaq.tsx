import type { FAQItem } from "@pomerico/content";
import { BlogFaqAccordion } from "./BlogFaqAccordion";

export interface BlogFaqData {
  title: string;
  /** Answers are plain text, so the FAQPage schema matches the visible copy exactly. */
  items: FAQItem[];
}

export function BlogFaq({ title, items }: BlogFaqData) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h2 className="mb-4 font-heading text-2xl font-bold text-dark">
        {title}
      </h2>
      <BlogFaqAccordion items={items} />
    </section>
  );
}
