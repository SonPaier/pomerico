<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Image standard (pomerico.com)

Every new image on the site follows these rules:

- **Format and weight:** WebP, under 200 KB, no wider than about 2× its largest on-screen width (photos: max ~1200–1400 px). Files go in `apps/pomerico-com/public/images/`.
- **Always `next/image`**, with `width`/`height` or `fill`, plus a `sizes` attribute matching the real width in the layout (e.g. `sizes="144px"` for a 144 px avatar, not the default `100vw`). Do not use `unoptimized` for photos (only for SVG).
- **Priority only for the image visible straight away** (the LCP image: page hero, blog featured image): `loading="eager"` + `fetchPriority="high"`. `priority` is deprecated in Next.js 16. Everything else stays lazy (the default).
- **Descriptive `alt` in English**: what the photo shows, with the topic phrase used naturally. Not the post title, not keyword stuffing. Purely decorative backgrounds use `alt=""`.
- **Descriptive file name** in kebab-case (e.g. `accounts-payable-onboarding-mistakes.webp`, not `IMG_1234.jpg`). Never rename a file that may already be indexed: add the new file next to the old one.
- **og:image for every page:** wrap page metadata in `withOgImage()` from `@/lib/og-image`. Default image: `/opengraph-image`. Blog posts: `withOgImage({...}, blogPostOgImage(post))`, which needs a 1200×630 JPG crop of the featured image at `/images/og/<featured image name>.jpg` and a `featuredImageAlt` on the post.
