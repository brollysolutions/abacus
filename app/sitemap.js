import { absoluteUrl } from "@/lib/business";
import { SITE_ROUTES } from "@/lib/nav";

/**
 * /sitemap.xml
 *
 * Routes come from lib/nav.js so adding a page there puts it in the
 * sitemap too. URLs are absolute (the spec requires it) and built from
 * BUSINESS.url, matching each page's canonical — a sitemap URL that
 * disagrees with a canonical is a crawl-signal conflict.
 *
 * Fragments (#fees, #faq …) are not distinct URLs and are not listed.
 *
 * This is statically generated, so `lastModified` is the build time.
 */
export default function sitemap() {
  const lastModified = new Date();
  return SITE_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
