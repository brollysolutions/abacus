import SiteLink from "./SiteLink";

/**
 * The four-column link block that closes every secondary page.
 * Identical on all of them, so it lives here rather than in each page.
 */
const COLUMNS = [
  {
    heading: "Start here",
    links: [
      { href: "/", label: "Abacus classes in Hyderabad" },
      { href: "/about-us/", label: "About Abacus Experts" },
      { href: "/contact-us/", label: "Contact and demo" },
    ],
  },
  {
    heading: "Course guide",
    links: [
      { href: "/#programmes", label: "Junior and Senior programmes" },
      { href: "/#syllabus", label: "Course curriculum" },
      { href: "/#fees", label: "Modes and fees" },
      { href: "/how-abacus-classes-work/", label: "How classes work" },
    ],
  },
  {
    heading: "Parent support",
    links: [
      {
        href: "/student-progress-and-assessment/",
        label: "Progress and assessment",
      },
      { href: "/parent-faqs/", label: "Parent FAQs" },
      { href: "/areas-we-serve/", label: "Areas we serve" },
    ],
  },
  {
    heading: "Policies",
    links: [
      { href: "/child-safeguarding-policy/", label: "Child safeguarding" },
      {
        href: "/photo-and-video-consent-policy/",
        label: "Photo and video consent",
      },
      { href: "/accessibility/", label: "Accessibility" },
      { href: "/privacy-policy/", label: "Privacy policy" },
    ],
  },
];

export default function ContentSiteMap() {
  return (
    <nav className="content-site-map" aria-label="Explore Abacus Experts">
      {COLUMNS.map((col) => (
        <div key={col.heading}>
          <p>{col.heading}</p>
          {col.links.map((l) => (
            <SiteLink key={l.href} href={l.href}>
              {l.label}
            </SiteLink>
          ))}
        </div>
      ))}
    </nav>
  );
}
