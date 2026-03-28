import type { Testimonial } from "@/content/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial: t }: TestimonialCardProps) {
  return (
    <blockquote className="relative rounded-lg bg-gray-bg px-10 pb-8 pt-12">
      <span className="absolute left-8 top-6 font-heading text-6xl leading-none text-dark/10">
        &ldquo;&rdquo;
      </span>

      <p className="relative text-lg italic leading-relaxed text-dark/80">
        &ldquo;{t.quote}&rdquo;
      </p>

      <footer className="mt-8 flex items-center justify-between border-t border-dark/10 pt-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dark/10">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 10a4 4 0 100-8 4 4 0 000 8zm-6 8a6 6 0 0112 0H4z"
                fill="currentColor"
                className="text-dark/30"
              />
            </svg>
          </div>
          <cite className="not-italic">
            <span className="block font-semibold text-dark">{t.author}</span>
            {t.role && (
              <span className="block text-sm text-dark/70">
                {t.role}
                {t.company && `, ${t.company}`}
              </span>
            )}
          </cite>
        </div>
        {t.company && (
          <span className="hidden rounded border border-dark/10 px-4 py-1.5 font-ui text-xs font-semibold uppercase tracking-wider text-dark/60 sm:block">
            {t.company}
          </span>
        )}
      </footer>
    </blockquote>
  );
}
