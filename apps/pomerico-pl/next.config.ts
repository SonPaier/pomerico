import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    serverActions: {
      // Contact form accepts attachments (10 MB/file, 25 MB total in actions/contact.ts);
      // Next's default Server Action body limit is 1 MB and would reject them before validation.
      // Note: Vercel Functions still cap request bodies at 4.5 MB.
      bodySizeLimit: "26mb",
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // 90 is used by blog images (BlogPostTemplate), see the image standard in AGENTS.md.
    qualities: [75, 90],
  },
  async redirects() {
    return [
      // Canonical host: www → apex
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.pomerico.pl" }],
        destination: "https://pomerico.pl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
