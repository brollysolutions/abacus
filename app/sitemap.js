import { absoluteUrl } from "@/lib/business";
import { ROUTES } from "@/lib/nav";

/**
 * /sitemap.xml
 *
 * Routes come from lib/nav.js, so adding a class page there puts it in the
 * sitemap too. URLs are absolute (the sitemap spec requires it) and are
 * built from BUSINESS.url, matching the canonicals exactly — a sitemap URL
 * that disagrees with a page's canonical is a crawl signal conflict.
 *
 * This is statically generated, so `lastModified` is the build time.
 */
export default function sitemap() {
  const lastModified = new Date();

  return [
    { path: ROUTES.home, changeFrequency: "weekly", priority: 1 },
    { path: ROUTES.online, changeFrequency: "monthly", priority: 0.9 },
    { path: ROUTES.hyderabad, changeFrequency: "monthly", priority: 0.9 },
  ].map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
