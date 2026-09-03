import Link from "next/link";

/**
 * Anchor that routes same-origin paths through next/link.
 *
 * Both render the same `<a href>`, so the markup still matches the
 * reference exactly; this just keeps in-app navigation client-side and
 * satisfies next/no-html-link-for-pages.
 *
 * External URLs and `tel:` / `mailto:` links fall through to a plain
 * anchor.
 */
export default function SiteLink({ href, children, ...props }) {
  if (href && href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
