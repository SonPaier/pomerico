import Link from "next/link";

interface TaglineSectionProps {
  heading: string;
  preheading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function TaglineSection({
  heading,
  preheading,
  description,
  ctaLabel,
  ctaHref,
}: TaglineSectionProps) {
  return (
    <section className="bg-primary-blue py-20 text-center text-white">
      <div className="mx-auto max-w-4xl px-6">
        {preheading && (
          <p className="mb-2 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {preheading}
          </p>
        )}
        <h2 className="font-heading text-2xl font-bold lg:text-3xl">
          {heading}
        </h2>
        {description && (
          <p className="mt-4 text-lg text-white/70">{description}</p>
        )}
        {ctaLabel && ctaHref && (
          <Link
            href={ctaHref}
            className="mt-8 inline-block rounded bg-primary-red px-8 py-3 font-ui text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
