/* ------------------------------------------------------------------
   Single source of truth for verified business details.

   These drive the site URL used for canonicals/OG/schema.org, the
   phone and WhatsApp links, and the lead-form submission.

   Keep this file small: Header, Footer, MobileCta and LeadForm are all
   client components that import it, so everything added here ships to
   the browser. Course facts (fees, batch limits, trainer) live in
   lib/programme.js, which only the server page and lib/schema.js read.
------------------------------------------------------------------- */
export const BUSINESS = {
  name: "Abacus Experts",
  tagline: "Mental maths built on method",
  /* Production origin, no trailing slash. Drives metadataBase, every
     canonical/OG URL and the schema.org @id values. The apex domain
     must 301 to this www host — see README. */
  url: "https://www.abacusexperts.com",
  phoneDisplay: "+91 81868 44555",
  phoneDigits: "918186844555",
  whatsappDigits: "918186844555",
  email: "hello@abacusexperts.com",
  /* Google Business Profile — used for the "View us on Google" links
     and as the schema.org hasMap / sameAs value. */
  mapsShareUrl: "https://share.google/HW7UzNFHJ5rtPyJqk",
};

/** The Hyder Nagar centre. `lines` render as the visible address block. */
export const ADDRESS = {
  name: "Abacus Experts — Hyder Nagar",
  lines: [
    "3rd Floor, Dr Atmaram Estates,",
    "Metro Pillar No. A689, beside Sri Bhramaramba Theatre,",
    "Hyder Nagar, Vasantha Nagar, Hyderabad, Telangana 500072",
  ],
  landmark: "Near JNTU Metro · Metro Pillar A689",
  streetAddress:
    "3rd Floor, Dr Atmaram Estates, Metro Pillar No. A689, beside Sri Bhramaramba Theatre, Hyder Nagar",
  locality: "Hyderabad",
  region: "Telangana",
  postalCode: "500072",
  country: "IN",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Dr+Atmaram+Estates%2C+Metro+Pillar+A689%2C+Hyder+Nagar%2C+Hyderabad%2C+Telangana+500072",
};

export const AREAS_SERVED = [
  "Hyderabad",
  "Hyder Nagar",
  "Nizampet",
  "KPHB",
  "Kukatpally",
  "Miyapur",
  "Bachupally",
];

/* Prefilled WhatsApp copy. The wording differs per entry point, so the
   admissions team can tell which button an enquiry came from. */
export const WHATSAPP_MESSAGES = {
  general:
    "Hi Abacus Experts, I would like details about abacus classes in Hyderabad for my child.",
  demo: "Hi Abacus Experts, I want to request a free abacus demo class.",
  child:
    "Hi Abacus Experts, I would like details about abacus classes for my child.",
  mobileBar: "Hi Abacus Experts, I need details about abacus classes.",
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
