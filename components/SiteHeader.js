import Brand from "./Brand";
import SiteLink from "./SiteLink";
import { NAV } from "@/lib/nav";

/**
 * Sticky site header.
 *
 * The mobile menu is a plain <details>/<summary> disclosure, exactly as
 * the reference does it — no client component, no hydration, and it
 * still opens with JavaScript disabled.
 */
export default function SiteHeader() {
  return (
    <header className="site-header">
      <Brand />

      <nav className="desktop-nav" aria-label="Primary navigation">
        {NAV.map((item) => (
          <SiteLink key={item.href} href={item.href}>
            {item.label}
          </SiteLink>
        ))}
      </nav>

      <SiteLink href="/#assessment" className="button header-cta">
        Book free assessment
      </SiteLink>

      <details className="mobile-menu">
        <summary aria-label="Open navigation menu">
          <span />
          <span />
          <span />
        </summary>
        <nav aria-label="Mobile navigation">
          {NAV.map((item) => (
            <SiteLink key={item.href} href={item.href}>
              {item.label}
            </SiteLink>
          ))}
          <SiteLink href="/#assessment" className="button">
            Book free assessment
          </SiteLink>
        </nav>
      </details>
    </header>
  );
}
