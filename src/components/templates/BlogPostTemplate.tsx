import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
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
  relatedPosts: BlogPostCard[];
}

export function BlogPostTemplate({
  post,
  slug,
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

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      {/* Header */}
      <section className="bg-gray-bg py-12">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-primary-red">
            {post.preheading}
          </p>
          <h1 className="font-heading mt-2 text-3xl font-bold text-dark lg:text-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Featured image */}
      <section className="py-8">
        <div className="mx-auto max-w-5xl px-6">
          <Image
            src={post.featuredImage}
            alt={post.title}
            width={900}
            height={500}
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Article */}
            <article
              className="prose prose-lg max-w-none lg:col-span-3"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-lg bg-gray-bg p-6">
                <p className="mb-2 text-xs font-semibold uppercase text-dark/50">
                  Details
                </p>
                <hr className="mb-4 border-gray-200" />
                <p className="text-sm text-dark/70">Date: {post.date}</p>

                <p className="mb-2 mt-6 text-xs font-semibold uppercase text-dark/50">
                  Author
                </p>
                <Image
                  src={post.author.photo}
                  alt={post.author.name}
                  width={96}
                  height={96}
                  className="mx-auto mb-3 h-24 w-24 rounded-full object-cover"
                />
                <p className="text-center font-semibold text-dark">
                  {post.author.name}
                </p>
                <div className="mt-2 flex justify-center">
                  <a
                    href={post.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-blue hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="mt-4 space-y-1 text-center text-sm text-dark/70">
                  <p>{post.author.phone}</p>
                  <p>{post.author.email}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <Image
              src="/images/pomerico-group-logo.png"
              alt="Pomerico Group"
              width={200}
              height={40}
              className="mx-auto mb-4 h-10 max-w-[200px]"
            />
            <p className="font-heading text-lg font-bold text-dark">
              See also other entries written by our experts
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="block overflow-hidden rounded-lg border border-dark/5 bg-white transition-colors hover:border-primary-blue/20"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-sm font-bold text-dark">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-ui text-xs font-semibold text-primary-red">
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
