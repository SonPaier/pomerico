import type { Metadata } from "next";
import { withOgImage } from "@/lib/og-image";
import { heroFadeStyle } from "@pomerico/ui";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@pomerico/ui";
import { blogPosts } from "@/content/blog/listing";
import { plLocale } from "@/content/ui-labels";

const TITLE = "Blog o outsourcingu finansów, BPO i rekrutacji | Pomerico";
const DESCRIPTION =
  "Eksperckie artykuły o outsourcingu finansów, BPO, rekrutacji, EOR i compliance w Polsce od zespołu Pomerico Group z Gdańska.";

export const metadata: Metadata = withOgImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: { title: TITLE, description: DESCRIPTION },
});

/** "DD/MM/YYYY" -> "DD.MM.YYYY" (pl-PL); zwraca wejście bez zmian, jeśli format jest inny. */
function formatDate(date: string): string {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(date);
  if (!match) return date;
  const [, dd, mm, yyyy] = match;
  return new Date(Date.UTC(Number(yyyy), Number(mm) - 1, Number(dd))).toLocaleDateString(
    plLocale,
    { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" }
  );
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      {/* Niebieski hero z tym samym miękkim przejściem w biel co na stronie FAQ */}
      <section
        className="pt-16 pb-44 text-white"
        style={heroFadeStyle("var(--color-gray-bg)")}
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Wiedza i inspiracje
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold lg:text-5xl">
            Outsourcing finansów, BPO i rekrutacja – wiedza ekspertów
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Eksperckie artykuły Pomerico Group o outsourcingu finansów, BPO,
            rekrutacji, EOR i compliance w Polsce.
          </p>
        </div>
      </section>

      {/* Siatka wpisów */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-lg border border-dark/5 bg-white transition-colors hover:border-primary-blue/20"
              >
                <div className="relative aspect-[2/1] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    quality={90}
                    sizes="(min-width: 1280px) 600px, (min-width: 640px) calc(50vw - 40px), calc(100vw - 48px)"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-primary-blue/10 px-3 py-1 font-ui text-[11px] font-semibold uppercase tracking-wider text-primary-blue">
                    {post.category}
                  </span>
                  <h2 className="mt-3 font-heading text-lg font-bold text-dark group-hover:text-primary-blue">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-dark/70">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-dark/50">
                      <time dateTime={post.date.split("/").reverse().join("-")}>
                        {formatDate(post.date)}
                      </time>{" "}
                      · {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1 font-ui text-sm font-semibold text-primary-red">
                      Czytaj dalej
                      <ArrowRightIcon />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
