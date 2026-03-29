"use client";

import { useState } from "react";
import type { FAQItem } from "@pomerico/content";

function AccordionItem({
  item,
  isOpen,
  onToggle,
  variant,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  variant: "light" | "dark";
  index: number;
}) {
  const borderColor = variant === "dark" ? "border-white/20" : "border-gray-200";
  const questionColor = variant === "dark" ? "text-white" : "text-dark";
  const answerColor = variant === "dark" ? "text-white/80" : "text-dark/70";

  return (
    <div className={`border-b ${borderColor}`}>
      <button
        id={`accordion-button-${index}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${index}`}
      >
        <span className={`font-heading pr-4 text-base font-bold ${questionColor}`}>
          {item.question}
        </span>
        <span className="shrink-0">
          {isOpen ? (
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              aria-hidden="true"
            >
              <rect width="30.4175" height="30.4175" rx="8" fill={variant === "dark" ? "#ffffff" : "#1E4D86"} />
              <path
                d="M9.209 14.902H21.209"
                stroke={variant === "dark" ? "#1E4D86" : "white"}
                strokeWidth="1.333"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              aria-hidden="true"
            >
              <rect width="30.4175" height="30.4175" rx="8" fill={variant === "dark" ? "rgba(255,255,255,0.15)" : "#F1F2F9"} />
              <path
                d="M15.209 8.902V20.902"
                stroke={variant === "dark" ? "white" : "#6F6C8F"}
                strokeWidth="1.333"
              />
              <path
                d="M9.209 14.902H21.209"
                stroke={variant === "dark" ? "white" : "#6F6C8F"}
                strokeWidth="1.333"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div
          id={`accordion-panel-${index}`}
          role="region"
          aria-labelledby={`accordion-button-${index}`}
          className={`pb-5 text-sm leading-relaxed ${answerColor}`}
        >
          <div dangerouslySetInnerHTML={{ __html: item.answer }} />
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: FAQItem[];
  defaultOpen?: number;
  variant?: "light" | "dark";
}

export function Accordion({ items, defaultOpen = 0, variant = "light" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="mx-auto max-w-3xl">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          variant={variant}
          index={i}
        />
      ))}
    </div>
  );
}
