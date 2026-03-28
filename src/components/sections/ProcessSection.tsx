import { SectionHeader } from "./SectionHeader";

interface ProcessStep {
  number: string;
  heading: string;
  description: string;
}

interface ProcessSectionProps {
  heading?: string;
  steps: ProcessStep[];
}

export function ProcessSection({
  heading,
  steps,
}: ProcessSectionProps) {
  return (
    <section className="bg-gray-bg py-20">
      <div className="mx-auto max-w-7xl px-6">
        {heading && <SectionHeader heading={heading} />}
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
