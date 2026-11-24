import Image from "next/image";
import type { Testimonial } from "@pomerico/content";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial: t }: TestimonialCardProps) {
  return (
    <blockquote className="relative rounded-lg bg-gray-bg px-10 pb-8 pt-8">
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
        {t.companyLogo ? (
          <span className="hidden shrink-0 rounded bg-white px-4 py-2 sm:flex">
            <Image
              src={t.companyLogo}
              alt={`${t.company ?? "Client"} logo`}
              width={160}
              height={48}
              sizes="140px"
              className="h-10 w-auto max-w-[140px] object-contain"
            />
          </span>
        ) : t.company && (
          <span className="hidden rounded border border-dark/10 px-4 py-1.5 font-ui text-xs font-semibold uppercase tracking-wider text-dark/60 sm:block">
            {t.company}
          </span>
        )}
      </footer>
    </blockquote>
  );
}
