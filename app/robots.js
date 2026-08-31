import { absoluteUrl } from "@/lib/business";

/**
 * /robots.txt
 *
 * Everything is public marketing content, so the whole site is crawlable.
 * The sitemap URL is absolute and built from BUSINESS.url, so it follows
 * the domain automatically.
 */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
