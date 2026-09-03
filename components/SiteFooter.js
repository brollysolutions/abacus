import Brand from "./Brand";
import { CLASS_LINKS, CONTACT_LINKS, POLICY_LINKS } from "@/lib/nav";
import { BUSINESS, WHATSAPP_MESSAGES, buildWhatsappHref } from "@/lib/business";

const SOCIAL = [
  {
    href: `https://wa.me/${BUSINESS.whatsappDigits}`,
    label: "WA",
    aria: `WhatsApp ${BUSINESS.name}`,
    external: true,
  },
  {
    href: `tel:+${BUSINESS.phoneDigits}`,
    label: "Call",
    aria: `Call ${BUSINESS.name}`,
  },
  {
    href: `mailto:${BUSINESS.email}`,
    label: "Email",
    aria: `Email ${BUSINESS.name}`,
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Brand inverse />
        <p>
          Live abacus learning for children aged about 5-13, built on correct
          technique, accuracy and clear progress.
        </p>
        <div className="footer-social" aria-label="Contact links">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.aria}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <nav className="footer-column" aria-label="Class links">
        <h2>Classes</h2>
        {CLASS_LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>

      <nav className="footer-column footer-contact" aria-label="Contact links">
        <h2>Contact</h2>
        {CONTACT_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target={l.external ? "_blank" : undefined}
            rel={l.external ? "noopener noreferrer" : undefined}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </span>
        <nav aria-label="Legal links">
          {POLICY_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <span>Outcomes vary by learner. No result is guaranteed.</span>
      </div>
    </footer>
  );
}

/**
 * Floating WhatsApp bubble and the small-screen action bar.
 *
 * The home page points its bar at the enrolment steps; the secondary
 * pages send readers to the booking form. The policy pages render
 * neither, so they simply do not call this.
 */
export function FloatingActions({
  ctaHref = "/#assessment",
  ctaLabel = "Book free assessment",
}) {
  return (
    <>
      <a
        className="whatsapp-float"
        href={buildWhatsappHref(WHATSAPP_MESSAGES.mobileBar)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${BUSINESS.name} on WhatsApp`}
      >
        <span>WA</span>
        <b>WhatsApp</b>
      </a>
      <a className="mobile-cta" href={ctaHref}>
        {ctaLabel}
      </a>
    </>
  );
}
