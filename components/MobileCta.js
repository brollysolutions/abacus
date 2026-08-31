"use client";

import { track, buildWhatsappHref } from "@/lib/business";

/**
 * Sticky bottom quick-action bar shown only on small screens.
 * Identical on both pages.
 */
export default function MobileCta({
  whatsappMessage = "Hello Abacus Experts, I would like to book a readiness assessment.",
}) {
  const waHref = buildWhatsappHref(whatsappMessage);
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[80] hidden grid-cols-[.72fr_1.28fr] gap-2 border-t border-line bg-warm/95 px-3 py-[9px] backdrop-blur-[14px] max-sm2:grid [padding-bottom:max(9px,env(safe-area-inset-bottom))]"
      aria-label="Quick enquiry actions"
    >
      <a
        href={waHref || "#assessment"}
        target={waHref ? "_blank" : undefined}
        rel={waHref ? "noopener noreferrer" : undefined}
        onClick={() => waHref && track("whatsapp_click")}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[13px] border-2 border-navy/20 bg-white/80 px-2.5 text-[.82rem] font-extrabold text-navy"
      >
        WhatsApp
      </a>
      <a
        href="#assessment"
        onClick={() => track("cta_click", { cta: "readiness_assessment" })}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[13px] bg-amber px-2.5 text-[.82rem] font-extrabold text-deep"
      >
        Free assessment
      </a>
    </div>
  );
}
