import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "../ArrowRightIcon";
import { Breadcrumbs } from "../Breadcrumbs";
import { BlogFaq, type BlogFaqData } from "../BlogFaq";
import { SectionHeader } from "../SectionHeader";
import type { BlogPostCard } from "@pomerico/content";

export interface BlogPostAuthor {
  name: string;
  role?: string;
  photo: string;
  /** Optional: the "LinkedIn" link in the author card is shown only when set. */
  linkedin?: string;
  phone?: string;
  email: string;
}

export interface BlogPostData {
  title: string;
  preheading: string;
  /** Publication date, "DD/MM/YYYY" (shown on the page as is). */
  date: string;
  /** Optional last substantive update, "DD/MM/YYYY". Defaults to `date`. */
  dateModified?: string;
  author: BlogPostAuthor | BlogPostAuthor[];
  featuredImage: string;
  featuredImageAlt?: string;
  content: string;
  /** Optional FAQ accordion rendered after `content`, followed by `contentAfterFaq`. */
  faq?: BlogFaqData;
  contentAfterFaq?: string;
}

const articleClassName =
  "prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-dark prose-h2:mt-12 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-p:leading-relaxed prose-p:text-dark/80 prose-li:text-dark/80 prose-strong:text-dark prose-img:rounded-lg prose-img:my-8";

/** "DD/MM/YYYY" -> ISO 8601 "YYYY-MM-DD" for schema.org, which rejects the Polish format.
 *  Returns undefined on a malformed or impossible date, so JSON.stringify drops the field
 *  instead of publishing an invalid value. */
function toIsoDate(date: string | undefined): string | undefined {
  const match = date ? /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(date) : null;
  if (!match) return undefined;
  const [, dd, mm, yyyy] = match;
  const parsed = new Date(Date.UTC(Number(yyyy), Number(mm) - 1, Number(dd)));
  if (parsed.getUTCDate() !== Number(dd) || parsed.getUTCMonth() !== Number(mm) - 1) return undefined;
  return `${yyyy}-${mm}-${dd}`;
}

/** Formats a "DD/MM/YYYY" date for display in `locale`; returns the input unchanged if it is malformed. */
function formatDisplayDate(date: string, locale: string): string {
  const iso = toIsoDate(date);
  if (!iso) return date;
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
}

export interface BlogPostTemplateLabels {
  breadcrumbHome: string;
  breadcrumbBlog: string;
  breadcrumbAria: string;
  writtenBy: string;
  linkedin: string;
  /** Joins several author names in the header */
  authorsSeparator: string;
  moreArticles: string;
  readMore: string;
  /** Organisation name in the Article JSON-LD */
  publisherName: string;
}

export const BLOG_POST_TEMPLATE_LABELS_EN: BlogPostTemplateLabels = {
  breadcrumbHome: "Home",
  breadcrumbBlog: "Blog",
  breadcrumbAria: "Breadcrumb",
  writtenBy: "Written by",
  linkedin: "LinkedIn",
  authorsSeparator: " & ",
  moreArticles: "More Articles",
  readMore: "Read More",
  publisherName: "Pomerico Group",
};

interface BlogPostTemplateProps {
  post: BlogPostData;
  slug: string;
  category: string;
  relatedPosts: BlogPostCard[];
  /** Overrides for built-in texts (defaults: English, see BLOG_POST_TEMPLATE_LABELS_EN) */
  labels?: Partial<BlogPostTemplateLabels>;
  /** Locale of the displayed publication date (en-GB keeps "DD/MM/YYYY"; pl-PL gives "DD.MM.YYYY") */
  locale?: string;
  /** Absolute origin for JSON-LD (default https://pomerico.com) */
  siteUrl?: string;
}

export function BlogPostTemplate({
  post,
  slug,
  category,
  relatedPosts,
  labels,
  locale = "en-GB",
  siteUrl = "https://pomerico.com",
}: BlogPostTemplateProps) {
  const l = { ...BLOG_POST_TEMPLATE_LABELS_EN, ...labels };
  const authors = Array.isArray(post.author) ? post.author : [post.author];
  const authorsJsonLd = authors.map((a) => ({
    "@type": "Person",
    name: a.name,
    url: a.linkedin,
  }));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: `${siteUrl}${post.featuredImage}`,
    datePublished: toIsoDate(post.date),
    dateModified: toIsoDate(post.dateModified ?? post.date),
    author: authorsJsonLd.length === 1 ? authorsJsonLd[0] : authorsJsonLd,
    publisher: {
      "@type": "Organization",
      name: l.publisherName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/pomerico-group-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`,
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
          { label: l.breadcrumbHome, href: "/" },
          { label: l.breadcrumbBlog, href: "/blog" },
          { label: post.title },
        ]}
        siteUrl={siteUrl}
        ariaLabel={l.breadcrumbAria}
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
            {authors.length === 1 ? (
              <Image
                src={authors[0].photo}
                alt={authors[0].name}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
            ) : (
              <div className="flex -space-x-3">
                {authors.map((a) => (
                  <Image
                    key={a.name}
                    src={a.photo}
                    alt={a.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
                  />
                ))}
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-dark">
                {authors.map((a) => a.name).join(l.authorsSeparator)}
              </p>
              <p className="text-xs text-dark/70">{formatDisplayDate(post.date, locale)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt ?? post.title}
            width={900}
            height={500}
            // Largest Contentful Paint of every post: load it first, not lazily.
            loading="eager"
            fetchPriority="high"
            // 90 instead of the default 75: the source is already a compressed WebP, so a
            // second pass at 75 visibly softens detail. 90 is allowed in next.config `qualities`.
            quality={90}
            sizes="(min-width: 896px) 848px, calc(100vw - 48px)"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <article
            className={articleClassName}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {post.faq && <BlogFaq {...post.faq} />}
          {post.contentAfterFaq && (
            <article
              className={`mt-12 ${articleClassName}`}
              dangerouslySetInnerHTML={{ __html: post.contentAfterFaq }}
            />
          )}

          {/* Author card(s) */}
          {authors.map((a, i) => (
            <div
              key={a.name}
              className={`${i === 0 ? "mt-16" : "mt-4"} flex items-center gap-6 rounded-lg border border-dark/5 bg-gray-bg p-6`}
            >
              <Image
                src={a.photo}
                alt={a.name}
                width={80}
                height={80}
                className="h-20 w-20 shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-dark/70">
                  {l.writtenBy}
                </p>
                <p className="mt-1 font-heading text-lg font-bold text-dark">
                  {a.name}
                </p>
                {a.role && <p className="text-sm text-dark/70">{a.role}</p>}
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-dark/70">
                  {a.linkedin && (
                    <a
                      href={a.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-blue hover:underline"
                    >
                      {l.linkedin}
                    </a>
                  )}
                  <span>{a.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-gray-bg py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader heading={l.moreArticles} />
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
                    quality={90}
                    sizes="(min-width: 1280px) 600px, (min-width: 640px) calc(50vw - 40px), calc(100vw - 48px)"
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
                    {l.readMore} <ArrowRightIcon />
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
