import ContentPage from "@/components/ContentPage";
import PageCta from "@/components/PageCta";
import SiteLink from "@/components/SiteLink";
import CentreBlock from "@/components/CentreBlock";
import EnquiryForm from "@/components/EnquiryForm";
import {
  DirectAnswer,
  ContentSection,
  NumberedProcess,
  ContentCardGrid,
  ContentNote,
  ContentTable,
  CheckList,
  RelatedLinks,
  OpenQuestionList,
} from "@/components/content";

import { FEES } from "@/lib/programme";
import {
  BUSINESS,
  WHATSAPP_MESSAGES,
  buildWhatsappHref,
} from "@/lib/business";
import { pageOpenGraph } from "@/lib/seo";
import { buildSiteGraph } from "@/lib/schema";
import { HERO_FORM } from "@/lib/content/forms";

const TITLE = "Contact Abacus Experts in Hyderabad";
const SUMMARY =
  "Contact us to book a free abacus readiness assessment, check current Junior or Senior batches, compare Live Online, Hyderabad Classroom and Hybrid learning, or get directions to our Hyder Nagar centre near JNTU Metro Station.";

const TEL = `tel:+${BUSINESS.phoneDigits}`;
const WA_CHILD = buildWhatsappHref(WHATSAPP_MESSAGES.child);

export const metadata = {
  title: "Contact Abacus Experts Hyderabad | Demo & Directions",
  description: `Contact Abacus Experts for a free demo, current batches and fees. Call or WhatsApp ${BUSINESS.phoneDisplay} or visit our Hyder Nagar centre near JNTU Metro.`,
  alternates: { canonical: "/contact-us/" },
  robots: { index: true, follow: true },
  openGraph: pageOpenGraph({
    url: "/contact-us/",
    title: TITLE,
    description: SUMMARY,
  }),
};

const SECTIONS = [
  { id: "contact-options", label: "Contact options" },
  { id: "demo", label: "Book a demo" },
  { id: "location", label: "Centre location" },
  { id: "enquiry", label: "What to share" },
  { id: "course-details", label: "Fees and modes" },
  { id: "areas", label: "Areas served" },
  { id: "questions", label: "Contact FAQs" },
];

const CONTACT_CARDS = [
  {
    badge: "☎",
    title: "Call us",
    text: "Speak with our admissions team about your child’s age, suitable pathway, current batch and centre visit.",
    extra: (
      <p>
        <a href={TEL}>
          <strong>{BUSINESS.phoneDisplay}</strong>
        </a>
      </p>
    ),
  },
  {
    badge: "WA",
    title: "WhatsApp us",
    text: "Send the child’s age, previous experience, locality and preferred learning mode for a focused response.",
    extra: (
      <p>
        <a href={WA_CHILD} target="_blank" rel="noopener noreferrer">
          <strong>Start a WhatsApp enquiry</strong>
        </a>
      </p>
    ),
  },
  {
    badge: "@",
    title: "Email us",
    text: "Use email for detailed questions, policy requests, accessibility support or information you want in writing.",
    extra: (
      <p>
        <a href={`mailto:${BUSINESS.email}`}>
          <strong>{BUSINESS.email}</strong>
        </a>
      </p>
    ),
  },
];

const DEMO_STEPS = [
  [
    "We understand the learner",
    "Tell us the child’s age, number skills and any previous abacus experience.",
  ],
  [
    "We arrange the assessment",
    "We confirm an available online or centre-based demo time.",
  ],
  [
    "Joshna checks readiness",
    "Our lead trainer checks a suitable starting point and learning pathway.",
  ],
  [
    "You review the options",
    "We explain the recommended curriculum stage, batch, mode, fee, EMI and kit before enrolment.",
  ],
];

const SHARE_ITEMS = [
  "Parent or guardian’s name",
  "Child’s age",
  "First-time, past or current abacus learner",
  "Your Hyderabad locality",
  "Preferred Online, Classroom or Hybrid mode",
  "Weekday or weekend preference",
  "Any relevant learning support requirement",
  "Your main question about the course",
];

const FEE_HEADERS = [
  "Learning mode",
  "Course fee",
  "How the child attends",
  "Main confirmed inclusions",
];

const FEE_ROWS = [
  [
    "Live Online",
    FEES.online.display,
    "Live trainer-led classes from home",
    "Physical abacus kit and EMI option",
  ],
  [
    "Hyderabad Classroom",
    FEES.classroom.display,
    "Face-to-face classes in Hyder Nagar",
    "Physical abacus kit and EMI option",
  ],
  [
    "Hybrid",
    FEES.hybrid.display,
    "Online and classroom learning",
    "Kit, EMI and switching with a matching available batch",
  ],
];

const AREA_CARDS = [
  {
    badge: "⌂",
    title: "Nearby classroom families",
    text: "Our Hyder Nagar centre serves families travelling from Nizampet, KPHB, Kukatpally, Miyapur, Bachupally and nearby areas.",
  },
  {
    badge: "◎",
    title: "Online across Hyderabad",
    text: "Live Online classes allow families across Hyderabad to join without regular travel, subject to a suitable open batch.",
  },
  {
    badge: "↔",
    title: "Hybrid flexibility",
    text: "Hybrid learners may combine both formats. Switching must be arranged with a matching available batch.",
  },
];

const CONTACT_FAQS = [
  [
    "01",
    "How can I contact Abacus Experts?",
    `Call or WhatsApp ${BUSINESS.phoneDisplay}, or email ${BUSINESS.email}. Share your child’s age, previous abacus experience, preferred mode and locality so we can answer clearly.`,
  ],
  [
    "02",
    "Where is the Abacus Experts Hyderabad centre?",
    "Our classroom centre is on the 3rd Floor of Dr Atmaram Estates, near Metro Pillar A689, beside Sri Bhramaramba Theatre, Hyder Nagar, Vasantha Nagar, Hyderabad, Telangana 500072.",
  ],
  [
    "03",
    "Do I need an appointment before visiting?",
    "Please contact us before visiting so we can confirm the current demo or class time, available trainer and suitable batch information.",
  ],
  [
    "04",
    "Can I book a free abacus demo class?",
    "Yes. We provide a free readiness assessment and demo before enrolment. We check the child’s starting point and explain the suitable pathway, batch, learning mode and fee.",
  ],
  [
    "05",
    "Can I ask about fees before the demo?",
    `Yes. Our published course fees are ${FEES.online.display} for Live Online, ${FEES.classroom.display} for Hyderabad Classroom and ${FEES.hybrid.display} for Hybrid. A physical abacus kit is included and EMI is available.`,
  ],
  [
    "06",
    "Can parents contact trainer Joshna directly?",
    "Please begin through the official Abacus Experts phone, WhatsApp or email. We will confirm whether Joshna is available and which programmes or current batches she handles.",
  ],
];

export default function ContactUsPage() {
  return (
    <ContentPage
      hero={{
        eyebrow: "Admissions, demo and centre support",
        title: TITLE,
        summary: SUMMARY,
        actions: (
          <>
            <SiteLink href="/#assessment" className="button">
              Book a free readiness assessment
            </SiteLink>
            <a
              className="button whatsapp"
              href={WA_CHILD}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask us on WhatsApp
              <span aria-hidden="true">↗</span>
            </a>
          </>
        ),
      }}
      sections={SECTIONS}
      schema={buildSiteGraph()}
      afterBody={
        <>
          <ContentSection
            id="enquiry"
            tinted
            eyebrow="Help us answer correctly"
            title="What Information Should You Share in Your Enquiry?"
          >
            <CheckList items={SHARE_ITEMS} />
            <ContentNote title="Avoid sending unnecessary sensitive data">
              We do not need a child’s government ID, full school information,
              financial password or detailed medical record to answer a general
              admissions question.
            </ContentNote>
          </ContentSection>

          <ContentSection
            id="course-details"
            eyebrow="Know the price before you pay"
            title="Course Modes, Fees and Main Inclusions"
          >
            <ContentTable headers={FEE_HEADERS} rows={FEE_ROWS} />
            <p className="content-note">
              Confirm the written fee terms, payment schedule, selected batch
              and current seat before paying. The free assessment helps us
              recommend a starting point but does not guarantee a particular
              batch or learning outcome.
            </p>
          </ContentSection>

          <ContentSection
            id="areas"
            tinted
            eyebrow="Classroom near Hyder Nagar and live online across the city"
            title="Which Hyderabad Areas Do We Serve?"
          >
            <ContentCardGrid cards={AREA_CARDS} />
            <RelatedLinks
              links={[
                {
                  href: "/areas-we-serve/",
                  label: "View detailed service areas",
                },
                { href: "/about-us/", label: "About Abacus Experts" },
                {
                  href: "/how-abacus-classes-work/",
                  label: "How our classes work",
                },
              ]}
            />
          </ContentSection>

          <ContentSection
            id="questions"
            eyebrow="Before you contact or visit"
            title="Frequently Asked Contact Questions"
          >
            <OpenQuestionList questions={CONTACT_FAQS} />
          </ContentSection>

          <PageCta
            title="Contact us for the right starting point"
            text="Speak with Abacus Experts before enrolling. We will explain the free assessment, Joshna’s available batches, the suitable pathway, fee, EMI, kit and learning mode."
          />
        </>
      }
    >
      <DirectAnswer>
        Call or WhatsApp Abacus Experts at <a href={TEL}>{BUSINESS.phoneDisplay}</a>,
        or email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>. Our
        classroom centre is at Metro Pillar A689 in Hyder Nagar. Please confirm
        the current demo or class time before visiting.
      </DirectAnswer>

      <ContentSection
        id="contact-options"
        eyebrow="Choose the easiest contact method"
        title="How to Contact Abacus Experts"
        lede="Use our official contact details for admissions, course information, current batch availability, fee questions, centre directions or parent support."
      >
        <ContentCardGrid cards={CONTACT_CARDS} />
        <ContentNote title="Current schedules can change">
          We do not publish a permanent opening-hours promise because demo
          times, class timings and trainer availability can change. Contact us
          to confirm the correct time before travelling.
        </ContentNote>
      </ContentSection>

      <ContentSection
        id="demo"
        tinted
        eyebrow="No payment and no pressure"
        title="Book a Free Abacus Demo and Readiness Assessment"
      >
        <div className="content-split contact-form-split">
          <div>
            <h3>What happens after your enquiry?</h3>
            <NumberedProcess steps={DEMO_STEPS} />
          </div>
          <EnquiryForm
            {...HERO_FORM}
            formId="contact"
            heading={
              <>
                <p className="eyebrow">Free readiness assessment</p>
                <h2>Enroll for a Free Demo</h2>
                <p>
                  Share a few details. Our admissions team will confirm the
                  suitable pathway and current batch options.
                </p>
              </>
            }
          />
        </div>
        <ContentNote title="Protect your child’s privacy">
          Share only the information needed for course guidance. Do not submit
          medical records, identity documents, school details or other
          sensitive child information through a general enquiry.
        </ContentNote>
      </ContentSection>

      <ContentSection
        id="location"
        eyebrow="Classroom abacus near JNTU Metro"
        title="Visit Our Abacus Centre in Hyder Nagar"
      >
        <CentreBlock
          heading="Abacus Experts — Hyder Nagar"
          labelledContacts
          directionsLabel="Open directions"
        />
      </ContentSection>
    </ContentPage>
  );
}
