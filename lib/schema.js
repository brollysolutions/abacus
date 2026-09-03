import { BUSINESS, ADDRESS, AREAS_SERVED, absoluteUrl } from "./business";
import { FEES } from "./programme";

/* Absolute @ids so every node in the graph is addressable and the
   WebPage/Course nodes can reference the Organization by id rather
   than repeating it. */
const SITE_ID = `${BUSINESS.url}/#website`;
const ORG_ID = `${BUSINESS.url}/#organization`;
const PAGE_URL = absoluteUrl("/");
const PAGE_ID = `${PAGE_URL}#webpage`;
const COURSE_ID = `${PAGE_URL}#course`;
const FEES_URL = `${PAGE_URL}#fees`;

/* schema.org wants the number in international format; BUSINESS holds
   it as digits, so derive it rather than keeping a second copy. */
const TELEPHONE = `+${BUSINESS.phoneDigits.replace(/^(\d{2})(\d{5})(\d{5})$/, "$1-$2-$3")}`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: ADDRESS.streetAddress,
  addressLocality: ADDRESS.locality,
  addressRegion: ADDRESS.region,
  postalCode: ADDRESS.postalCode,
  addressCountry: ADDRESS.country,
};

function offer(name, fee) {
  return {
    "@type": "Offer",
    name,
    price: String(fee.amount),
    priceCurrency: fee.currency,
    url: FEES_URL,
  };
}

function websiteNode() {
  return {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: `${BUSINESS.url}/`,
        name: BUSINESS.name,
        alternateName: "Abacus Experts Hyderabad",
        description:
          "Live, level-based abacus and mental arithmetic learning for children aged about 5 to 13 in Hyderabad and online.",
        inLanguage: "en-IN",
        publisher: { "@id": ORG_ID },
  };
}

function organizationNode() {
  return {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": ORG_ID,
        name: BUSINESS.name,
        url: `${BUSINESS.url}/`,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/abacus-experts-logo.png"),
        },
        description:
          "Live classroom, online and hybrid abacus training for children aged about 5 to 13.",
        telephone: TELEPHONE,
        email: BUSINESS.email,
        hasMap: BUSINESS.mapsShareUrl,
        sameAs: [BUSINESS.mapsShareUrl],
        address: postalAddress,
        areaServed: AREAS_SERVED,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: TELEPHONE,
          contactType: "admissions",
          areaServed: "IN",
          availableLanguage: ["English", "Telugu"],
        },
        knowsAbout: [
          "Abacus",
          "Mental arithmetic",
          "Place value",
          "Visualisation",
          "Addition",
          "Subtraction",
          "Multiplication",
          "Division",
        ],
  };
}

/**
 * The graph every page shares. The secondary pages emit only this, as
 * the reference does — no per-page WebPage or BreadcrumbList node.
 */
export function buildSiteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [websiteNode(), organizationNode()],
  };
}

/**
 * The home page's graph: the shared nodes plus the page, the course and
 * its FAQs.
 *
 * Deliberately absent: Review / AggregateRating. The parent comments on
 * that page are self-hosted and unverified, and marking them up would
 * make the page ineligible for review snippets at best and earn a
 * manual action at worst.
 *
 * `faqs` is the same [question, answer] array the page renders, so
 * every acceptedAnswer matches the visible answer exactly — a
 * mismatch is a structured-data policy violation.
 */
export function buildHomeGraph(faqs) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      websiteNode(),
      organizationNode(),
      {
        "@type": "WebPage",
        "@id": PAGE_ID,
        url: PAGE_URL,
        name: "Abacus Classes in Hyderabad for Kids",
        description:
          "Live classroom and online abacus classes for children aged 5 to 13 in Hyderabad.",
        inLanguage: "en-IN",
        isPartOf: { "@id": SITE_ID },
        about: { "@id": ORG_ID },
        mainEntity: { "@id": COURSE_ID },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      },
      {
        "@type": "Course",
        "@id": COURSE_ID,
        name: "Abacus Classes in Hyderabad",
        description:
          "A level-based abacus course for children aged 5 to 13, taught live in Hyder Nagar, online across Hyderabad or in a flexible hybrid format.",
        provider: { "@id": ORG_ID },
        inLanguage: ["en", "te"],
        courseMode: ["onsite", "online", "hybrid"],
        educationalLevel: ["Beginner", "Intermediate", "Advanced"],
        audience: {
          "@type": "EducationalAudience",
          audienceType: "Children aged 5 to 13",
        },
        offers: [
          offer("Live Online Abacus Course", FEES.online),
          offer("Hyderabad Classroom Abacus Course", FEES.classroom),
          offer("Hybrid Abacus Course", FEES.hybrid),
        ],
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            name: "Classroom Abacus Classes in Hyder Nagar",
            courseMode: "onsite",
            location: {
              "@type": "Place",
              name: ADDRESS.name,
              address: postalAddress,
            },
          },
          {
            "@type": "CourseInstance",
            name: "Live Online Abacus Classes",
            courseMode: "online",
            location: "Hyderabad, India",
          },
          {
            "@type": "CourseInstance",
            name: "Hybrid Abacus Classes in Hyderabad",
            courseMode: "hybrid",
            location: "Hyderabad, India",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };
}


/**
 * Government and NCERT references cited on several pages. They are
 * background reading, not endorsements of this course, and each page
 * says so alongside them.
 */
export const OFFICIAL_SOURCES = [
  {
    publisher: "Ministry of Education, Government of India",
    title: "NIPUN Bharat",
    text: "Official background on the national focus on foundational literacy and numeracy.",
    href: "https://dsel.education.gov.in/nipun-bharat",
  },
  {
    publisher: "NCERT",
    title: "National Curriculum Framework for Foundational Stage",
    text: "Guidance on developmentally appropriate learning for children in the foundational stage.",
    href: "https://ncert.nic.in/pdf/focus-group/NCF-FS_2022EN.pdf",
  },
];

/** Cited alongside OFFICIAL_SOURCES on the parent-FAQ page. */
export const NCPCR_SOURCE = {
  publisher: "National Commission for Protection of Child Rights",
  title: "Education Safety Guidelines",
  text: "Official child-safety and education guidance for parents and education providers.",
  href: "https://ncpcr.gov.in/public/index.php/education-guidelines",
};

/** Third reference on the about page. */
export const NCERT_OUTCOMES = {
  publisher: "NCERT",
  title: "NCERT Learning Outcomes",
  text: "Official learning-outcome resources across foundational, elementary and later school stages.",
  href: "https://ncert.nic.in/learning-outcome.php?ln=en",
};
