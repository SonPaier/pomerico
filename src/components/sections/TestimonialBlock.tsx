import type { Testimonial } from "@/content/types";
import { TestimonialCard } from "./TestimonialCard";

interface TestimonialBlockProps {
  testimonial: Testimonial;
  heading?: string;
}

export function TestimonialBlock({
  testimonial,
  heading = "Executive Voices",
}: TestimonialBlockProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold text-primary-blue">
          {heading}
        </h2>

        <TestimonialCard testimonial={testimonial} />
      </div>
    </section>
  );
}
