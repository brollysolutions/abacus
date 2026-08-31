"use client";

import Link from "next/link";
import Brand from "./Brand";
import {
  BUSINESS,
  track,
  buildPhoneHref,
  buildWhatsappHref,
} from "@/lib/business";

const linkClass = "text-[.82rem] text-white/70 no-underline hover:text-white";

function FooterLink({ item, whatsappMessage }) {
  if (item.type === "text") {
    return <span className="text-[.82rem] text-white/70">{item.label}</span>;
  }
  if (item.type === "phone") {
    const href = buildPhoneHref();
    const label = href
      ? `Call: ${BUSINESS.phoneDisplay || BUSINESS.phoneDigits}`
      : "Call: add verified number";
    return (
      <a
        href={href || "#assessment"}
        onClick={() => href && track("phone_click")}
        className={linkClass}
      >
        {label}
      </a>
    );
  }
  if (item.type === "whatsapp") {
    const href = buildWhatsappHref(whatsappMessage);
    return (
      <a
        href={href || "#assessment"}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        onClick={() => href && track("whatsapp_click")}
        className={linkClass}
      >
        WhatsApp enquiry
      </a>
    );
  }
  if (item.type === "email") {
    return (
      <a href={`mailto:${BUSINESS.email}`} className={linkClass}>
        {BUSINESS.email}
      </a>
    );
  }
  const isInternal = item.href?.startsWith("/");
  return isInternal ? (
    <Link href={item.href} className={linkClass}>
      {item.label}
    </Link>
  ) : (
    <a href={item.href} className={linkClass}>
      {item.label}
    </a>
  );
}

/**
 * Site footer. `columns` = [{ heading, items }]. Items are either
 * { href, label } links or special { type: 'phone'|'whatsapp'|'email'|'text' }.
 */
export default function Footer({
  columns = [],
  tagline,
  whatsappMessage = "Hello Abacus Experts, I would like to book a readiness assessment.",
  copyright,
}) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-deep px-0 pb-[88px] pt-[54px] text-white/65">
      <div className="mx-auto w-[min(var(--max-width-site),calc(100%-36px))] max-sm2:w-[min(calc(100%-28px),var(--max-width-site))]">
        <div className="grid grid-cols-[1.3fr_.7fr_.7fr] gap-10 max-lg2:grid-cols-2 max-lg2:[&>*:first-child]:col-span-2 max-sm2:grid-cols-1 max-sm2:[&>*:first-child]:col-auto">
          <div>
            <Link
              href="/"
              className="mb-3.5 inline-flex no-underline"
              aria-label="Abacus Experts home"
            >
              <Brand tone="light" iconClassName="h-9 w-auto" />
            </Link>
            <p className="text-[.82rem]">{tagline}</p>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[.92rem] text-white">{col.heading}</h3>
              <nav className="grid gap-2">
                {col.items.map((item, i) => (
                  <FooterLink
                    key={item.href || item.type || i}
                    item={item}
                    whatsappMessage={whatsappMessage}
                  />
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="mt-[37px] border-t border-white/10 pt-[18px] text-[.76rem]">
          © {year} {copyright}
        </div>
      </div>
    </footer>
  );
}
