import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/content/blog/listing";

export const metadata: Metadata = {
  title: "Blog – HR & Outsourcing Insights",
  description:
    "Expert insights on HR outsourcing, recruitment, compliance, and business operations in Poland from Pomerico Group.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage:
            "url('/images/faq-section-background.webp')",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Image
            src="/images/pomerico-group-logo.png"
            alt="Pomerico Group"
            width={200}
            height={40}
            className="mx-auto mb-4 h-10 max-w-[200px]"
          />
          <h1 className="font-heading text-3xl font-bold text-white">Blog</h1>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block overflow-hidden rounded-lg border border-dark/5 bg-white transition-colors hover:border-primary-blue/20"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-lg font-bold text-dark">
                    {post.title}
                  </h2>
                  <p className="mt-4 font-ui text-sm font-semibold text-primary-red">
                    Read More &raquo;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
