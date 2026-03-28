import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/sections/ArrowRightIcon";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { SectionHeader } from "@/components/sections/SectionHeader";
import type { BlogPostCard } from "@/content/blog/listing";

export interface BlogPostData {
  title: string;
  preheading: string;
  date: string;
  author: {
    name: string;
    photo: string;
    linkedin: string;
    phone: string;
    email: string;
  };
  featuredImage: string;
  content: string;
}

interface BlogPostTemplateProps {
  post: BlogPostData;
  slug: string;
  category: string;
  relatedPosts: BlogPostCard[];
}

export function BlogPostTemplate({
  post,
  slug,
  category,
  relatedPosts,
}: BlogPostTemplateProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: `https://pomerico.com${post.featuredImage}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: post.author.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: "Pomerico Group",
      logo: {
        "@type": "ImageObject",
        url: "https://pomerico.com/images/pomerico-group-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pomerico.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      {/* Header */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <span className="inline-block rounded-full bg-primary-blue/10 px-3 py-1 font-ui text-[11px] font-semibold uppercase tracking-wider text-primary-blue">
            {category}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-bold text-dark lg:text-4xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-4">
            <Image
              src={post.author.photo}
              alt={post.author.name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-dark">
                {post.author.name}
              </p>
              <p className="text-xs text-dark/70">{post.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6">
          <Image
            src={post.featuredImage}
            alt={post.title}
            width={900}
            height={500}
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <article
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-dark prose-h2:mt-12 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-p:leading-relaxed prose-p:text-dark/80 prose-li:text-dark/80 prose-strong:text-dark prose-img:rounded-lg prose-img:my-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author card */}
          <div className="mt-16 flex items-center gap-6 rounded-lg border border-dark/5 bg-gray-bg p-6">
            <Image
              src={post.author.photo}
              alt={post.author.name}
              width={80}
              height={80}
              className="h-20 w-20 shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-dark/70">
                Written by
              </p>
              <p className="mt-1 font-heading text-lg font-bold text-dark">
                {post.author.name}
              </p>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-dark/70">
                <a
                  href={post.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-blue hover:underline"
                >
                  LinkedIn
                </a>
                <span>{post.author.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader heading="More Articles" />
          <div className="grid gap-8 sm:grid-cols-2">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block overflow-hidden rounded-lg border border-dark/5 bg-white transition-colors hover:border-primary-blue/20"
              >
                <div className="relative aspect-[2/1] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded-full bg-primary-blue/10 px-3 py-1 font-ui text-[11px] font-semibold uppercase tracking-wider text-primary-blue">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-heading text-sm font-bold text-dark group-hover:text-primary-blue">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-dark/70">{p.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 font-ui text-xs font-semibold text-primary-red">
                    Read More <ArrowRightIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
