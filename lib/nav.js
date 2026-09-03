/* ------------------------------------------------------------------
   Navigation and the page's anchor registry.

   SECTIONS is the single source of truth for the twelve jump targets:
   the table of contents and the section-nav strip both render from it
   and app/page.js sets the matching ids, so they cannot drift apart.

   Several links point at routes that do not exist in this project yet
   (/about-us/, /parent-faqs/, the policy pages, …). They mirror the
   reference page exactly; see the follow-up list in README.
------------------------------------------------------------------- */
import { BUSINESS } from "./business";

export const ROUTES = { home: "/" };

/** Every indexable route, in sitemap order. */
export const SITE_ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about-us/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/how-abacus-classes-work/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/student-progress-and-assessment/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/parent-faqs/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/areas-we-serve/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact-us/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/child-safeguarding-policy/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/photo-and-video-consent-policy/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/accessibility/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy-policy/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/refund-cancellation-policy/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/disclaimer/", changeFrequency: "yearly", priority: 0.3 },
];

/** The twelve numbered entries in the on-page table of contents. */
export const SECTIONS = [
  { id: "batches", label: "Course information" },
  { id: "syllabus", label: "Curriculum" },
  { id: "programme", label: "Course overview" },
  { id: "why-us", label: "Why us" },
  { id: "prerequisites", label: "Prerequisites" },
  { id: "skills-gained", label: "Skills gained" },
  { id: "programmes", label: "Programmes" },
  { id: "fees", label: "Fees & modes" },
  { id: "centre", label: "Centre map" },
  { id: "benefits", label: "Benefits" },
  { id: "trainer", label: "Trainer" },
  { id: "faq", label: "FAQs" },
];

/** Header navigation. */
export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about-us/", label: "About us" },
  { href: "/#fees", label: "Classes ▼" },
  { href: "/#programmes", label: "Programmes" },
  { href: "/how-abacus-classes-work/", label: "How it works" },
  { href: "/parent-faqs/", label: "FAQs" },
  { href: "/contact-us/", label: "Contact us" },
];

/** Footer "Classes" column. */
export const CLASS_LINKS = [
  { href: "/about-us/", label: "About Abacus Experts" },
  { href: "/#fees", label: "Abacus online classes" },
  { href: "/#top", label: "Abacus classes in Hyderabad" },
  { href: "/#programmes", label: "Junior & senior programmes" },
  { href: "/how-abacus-classes-work/", label: "How it works" },
  { href: "/student-progress-and-assessment/", label: "Progress & assessment" },
  { href: "/areas-we-serve/", label: "Areas we serve" },
  { href: "/parent-faqs/", label: "Parent FAQs" },
];

/** Footer "Contact" column. */
export const CONTACT_LINKS = [
  { href: "/contact-us/", label: "Contact us" },
  { href: `tel:+${BUSINESS.phoneDigits}`, label: `Call: ${BUSINESS.phoneDisplay}` },
  {
    href: `https://wa.me/${BUSINESS.whatsappDigits}`,
    label: "WhatsApp enquiry",
    external: true,
  },
  { href: BUSINESS.mapsShareUrl, label: "View us on Google", external: true },
  { href: `mailto:${BUSINESS.email}`, label: BUSINESS.email },
  { href: "/privacy-policy", label: "Privacy policy" },
];

/** The policy row along the bottom of the footer. */
export const POLICY_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/refund-cancellation-policy", label: "Refund & Cancellation" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/child-safeguarding-policy/", label: "Child Safeguarding" },
  { href: "/photo-and-video-consent-policy/", label: "Media Consent" },
  { href: "/accessibility/", label: "Accessibility" },
];
