import Link from "next/link";
import type { ContentSectionData } from "@pomerico/content";
import { SectionHeader } from "./SectionHeader";
import { ArrowRightIcon } from "./ArrowRightIcon";

interface ContentSectionProps {
  data: ContentSectionData;
  /** Background: "white" (default) or "gray" */
  background?: "white" | "gray";
}

/** H2 + paragraphs + optional link, for short text sections inside templated pages. */
export function ContentSection({ data, background = "white" }: ContentSectionProps) {
  return (
    <section className={`py-20 ${background === "gray" ? "bg-gray-bg" : ""}`}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader heading={data.heading} />
        <div className="max-w-4xl space-y-4 text-base leading-relaxed text-dark/80 [&_b]:text-dark [&_strong]:text-dark">
          {data.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
        {data.link && (
          <Link
            href={data.link.href}
            className="mt-8 inline-flex items-center gap-2 rounded border border-primary-blue px-8 py-3 font-ui text-sm font-semibold uppercase tracking-wider text-primary-blue transition-colors hover:bg-primary-blue hover:text-white"
          >
            {data.link.label}
            <ArrowRightIcon />
          </Link>
        )}
      </div>
    </section>
  );
}
