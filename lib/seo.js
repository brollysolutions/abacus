import { BUSINESS } from "./business";

/**
 * Build a page's `openGraph` metadata block.
 *
 * Next.js merges metadata from layout and page *shallowly*, so a page that
 * defines `openGraph` replaces the root layout's entirely — `type`, `locale`
 * and `siteName` silently disappear from that page. Every page therefore has
 * to repeat those fields, and this keeps them in one place.
 *
 * `url` is site-relative; `metadataBase` in app/layout.js makes it absolute.
 */
export function pageOpenGraph({ url, title, description }) {
  return {
    type: "website",
    locale: "en_IN",
    siteName: BUSINESS.name,
    url,
    title,
    description,
  };
}
