import type { Testimonial } from "@pomerico/content";
import { TestimonialCard, type TestimonialCardLabels } from "./TestimonialCard";

interface TestimonialBlockProps {
  testimonial: Testimonial;
  heading?: string;
  cardLabels?: TestimonialCardLabels;
}

export function TestimonialBlock({
  testimonial,
  heading = "Executive Voices",
  cardLabels,
}: TestimonialBlockProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold text-primary-red">
          {heading}
        </h2>

        <TestimonialCard testimonial={testimonial} labels={cardLabels} />
      </div>
    </section>
  );
}
