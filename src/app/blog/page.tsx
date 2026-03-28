import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/sections/ArrowRightIcon";
import { blogPosts } from "@/content/blog/listing";

export const metadata: Metadata = {
  title: "Blog – HR & Outsourcing Insights",
  description:
    "Expert insights on HR outsourcing, recruitment, compliance, and business operations in Poland from Pomerico Group.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog – HR & Outsourcing Insights",
    description:
      "Expert insights on HR outsourcing, recruitment, compliance, and business operations in Poland from Pomerico Group.",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-blue py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Insights & Resources
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold lg:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Expert articles on HR outsourcing, recruitment, compliance, and
            scaling operations in Poland.
          </p>
        </div>
      </section>

      {/* Post grid */}
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
                      {post.date} · {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1 font-ui text-sm font-semibold text-primary-red">
                      Read More
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
