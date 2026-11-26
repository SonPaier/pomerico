import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { ArrowRightIcon } from "./ArrowRightIcon";

interface ProcessStep {
  number: string;
  heading: string;
  description: string;
}

interface ProcessSectionProps {
  heading?: string;
  /** Optional paragraph shown above the steps */
  intro?: string;
  /** Optional link shown under the intro paragraph */
  link?: { label: string; href: string };
  steps: ProcessStep[];
}

export function ProcessSection({
  heading,
  intro,
  link,
  steps,
}: ProcessSectionProps) {
  return (
    <section className="bg-gray-bg py-20">
      <div className="mx-auto max-w-7xl px-6">
        {heading && <SectionHeader heading={heading} />}
        {(intro || link) && (
          <div className="-mt-6 mb-12 max-w-4xl">
            {intro && (
              <p className="text-base leading-relaxed text-dark/80">{intro}</p>
            )}
            {link && (
              <Link
                href={link.href}
                className="mt-4 inline-flex items-center gap-2 font-ui text-sm font-semibold text-primary-blue hover:underline"
              >
                {link.label}
                <ArrowRightIcon />
              </Link>
            )}
          </div>
        )}
        <div className="grid gap-6 sm:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-lg border border-dark/5 bg-white p-8"
            >
              <span className="font-heading text-4xl font-bold text-primary-red">
                {step.number}
              </span>
              <h3 className="mt-2 font-heading text-lg font-bold text-dark">
                {step.heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dark/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
