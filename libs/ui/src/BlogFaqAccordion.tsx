"use client";

import { useId, useState } from "react";
import type { FAQItem } from "@pomerico/content";
import { AccordionIcon } from "./Accordion";

// Same look as Accordion, but every answer stays in the server-rendered HTML
// (closed panels are only `hidden`), and each question is an H3.
export function BlogFaqAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const idPrefix = useId();

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const buttonId = `${idPrefix}-button-${i}`;
        const panelId = `${idPrefix}-panel-${i}`;

        return (
          <div key={i} className="border-b border-gray-200">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="font-heading pr-4 text-base font-bold text-dark">
                  {item.question}
                </span>
                <AccordionIcon isOpen={isOpen} variant="light" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 text-sm leading-relaxed text-dark/70"
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
