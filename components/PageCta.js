import SiteLink from "./SiteLink";
import { WHATSAPP_MESSAGES, buildWhatsappHref } from "@/lib/business";

/** Closing call-to-action panel used by the longer content pages. */
export default function PageCta({
  eyebrow = "Abacus Experts",
  title,
  text,
  buttons,
}) {
  return (
    <aside className="page-cta">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="button-row">
        {buttons ? (
          buttons.map((b) =>
            b.href.startsWith("/") ? (
              <SiteLink key={b.href} href={b.href} className="button">
                {b.label}
              </SiteLink>
            ) : (
              <a
                key={b.href}
                className={`button${b.secondary ? " secondary" : ""}${
                  b.whatsapp ? " whatsapp" : ""
                }`}
                href={b.href}
                {...(b.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {b.label}
              </a>
            )
          )
        ) : (
          <>
            <SiteLink href="/#assessment" className="button">
              Book a free assessment
            </SiteLink>
            <a
              className="button whatsapp"
              href={buildWhatsappHref(WHATSAPP_MESSAGES.child)}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
          </>
        )}
      </div>
    </aside>
  );
}
