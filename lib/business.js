/* ------------------------------------------------------------------
   Single source of truth for verified business details.
   Fill these in once before launch — they drive the site URL used for
   canonicals/OG/schema.org, the phone and WhatsApp links, and the
   lead-form submission on every page.
------------------------------------------------------------------- */
export const BUSINESS = {
  name: "Abacus Experts",
  /* Production origin, no trailing slash. Drives metadataBase, every
     canonical/OG URL and the schema.org @id values. */
  url: "https://abacusexperts.com",
  phoneDisplay: "", // e.g. "+91 98765 43210"
  phoneDigits: "", // e.g. "919876543210" (country code + number, digits only)
  whatsappDigits: "", // e.g. "919876543210"
  email: "hello@abacusexperts.in",
};

/** Push an event into the dataLayer (GTM / GA). Safe on the server. */
export function track(eventName, data = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...data });
}

/** Build a wa.me link with a pre-filled message, or null if unconfigured. */
export function buildWhatsappHref(message) {
  if (!BUSINESS.whatsappDigits) return null;
  return `https://wa.me/${BUSINESS.whatsappDigits}?text=${encodeURIComponent(
    message
  )}`;
}

/** Build a tel: link, or null if unconfigured. */
export function buildPhoneHref() {
  if (!BUSINESS.phoneDigits) return null;
  return `tel:+${BUSINESS.phoneDigits}`;
}

/** Absolute URL for a site-relative path, e.g. absoluteUrl("/fees") */
export function absoluteUrl(path = "/") {
  return new URL(path, BUSINESS.url).toString();
}
