export interface BlogPostCard {
  slug: string;
  title: string;
  image: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPostCard[] = [
  {
    slug: "dora-vs-outsourcing",
    title:
      "DORA vs Outsourcing. Is Financial Outsourcing Safe in the World of DORA?",
    image:
      "/images/blog-thumbnail-dora-outsourcing.png",
    date: "24/02/2026",
    author: "Sebastian Kunc",
  },
  {
    slug: "how-to-hire-more-effectively",
    title: "How to Hire More Effectively",
    image:
      "/images/blog-thumbnail-hiring-effectively.png",
    date: "24/02/2026",
    author: "Sebastian Kunc",
  },
];
