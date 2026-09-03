import ContentPage from "@/components/ContentPage";
import PageCta from "@/components/PageCta";
import SiteLink from "@/components/SiteLink";
import CentreBlock from "@/components/CentreBlock";
import {
  DirectAnswer,
  ContentSection,
  NumberedProcess,
  ContentCardGrid,
  ContentNote,
  ContentTable,
  ContentSplit,
  CheckList,
  RelatedLinks,
  OfficialSources,
} from "@/components/content";

import { FEES, TRAINER } from "@/lib/programme";
import { WHATSAPP_MESSAGES, buildWhatsappHref } from "@/lib/business";
import { pageOpenGraph } from "@/lib/seo";
import { buildSiteGraph, OFFICIAL_SOURCES, NCERT_OUTCOMES } from "@/lib/schema";

const TITLE = "About Abacus Experts";
const SUMMARY =
  "Abacus Experts is a children’s abacus learning centre in Hyder Nagar, Hyderabad. We provide live, level-based training for children aged about 5–13 through classroom, online and hybrid classes led by Joshna, our trainer with more than nine years of teaching experience.";

export const metadata = {
  title: "About Abacus Experts | Abacus Institute in Hyderabad",
  description:
    "Learn about Abacus Experts, trainer Joshna, our Hyder Nagar centre, teaching method, Junior and Senior programmes, progress standards, fees and values.",
  alternates: { canonical: "/about-us/" },
  robots: { index: true, follow: true },
  openGraph: pageOpenGraph({
    url: "/about-us/",
    title: TITLE,
    description: SUMMARY,
  }),
};

const SECTIONS = [
  { id: "who-we-are", label: "Who we are" },
  { id: "trainer", label: "Trainer Joshna" },
  { id: "programmes", label: "Our programmes" },
  { id: "method", label: "Teaching method" },
  { id: "standards", label: "Our standards" },
  { id: "fees", label: "Modes and fees" },
  { id: "location", label: "Hyderabad centre" },
  { id: "trust", label: "Trust and safety" },
];

const WHO_CARDS = [
  {
    badge: "01",
    title: "Our purpose",
    text: "We teach a structured arithmetic method that helps children understand numbers, place value and calculation through bead movement before moving towards visualisation.",
  },
  {
    badge: "02",
    title: "Our learners",
    text: "Our programmes are designed mainly for children aged about 5–13. A child’s actual starting point follows readiness, current number skills and previous learning.",
  },
  {
    badge: "03",
    title: "Our location",
    text: "Our classroom centre is in Hyder Nagar near JNTU Metro Station. Live Online classes support families across Hyderabad and beyond, subject to batch availability.",
  },
];

const TRAINER_PANELS = [
  {
    title: "What Joshna observes during class",
    items: [
      "Sitting posture and working-hand position",
      "Correct finger movement and bead control",
      "Use of ones, tens and higher place-value columns",
      "Accuracy across the current operation",
      "How much prompting the child needs",
      "Readiness for visualisation and controlled speed",
    ],
  },
  {
    title: "How she supports different learners",
    items: [
      "Breaks a difficult method into smaller steps",
      "Demonstrates before asking for independent work",
      "Uses revision when a foundation is unstable",
      "Gives short, specific home-practice goals",
      "Explains strengths and next steps to parents",
      "Avoids rushing a child only to finish a level",
    ],
  },
];

const PROGRAMME_CARDS = [
  {
    badge: "5–8",
    title: "Junior Abacus Programme",
    text: "Our Junior pathway commonly suits younger beginners. It uses shorter activities, more demonstration and careful repetition.",
    extra: (
      <ul>
        <li>Numbers and place value</li>
        <li>Posture and finger technique</li>
        <li>Direct addition and subtraction</li>
        <li>Complement strategies</li>
        <li>Early visualisation</li>
        <li>Usually 45–50 minutes per lesson</li>
        <li>Up to six learners per batch</li>
      </ul>
    ),
  },
  {
    badge: "8–13",
    title: "Senior Abacus Programme",
    text: "Our Senior pathway supports older beginners and children continuing from earlier abacus learning at a suitable pace.",
    extra: (
      <ul>
        <li>Technique and place-value check</li>
        <li>Multi-digit addition and subtraction</li>
        <li>Multiplication and division</li>
        <li>Mixed arithmetic</li>
        <li>Advanced visualisation and mental calculation</li>
        <li>Usually 55–60 minutes per lesson</li>
        <li>Up to eight learners per batch</li>
      </ul>
    ),
  },
];

const METHOD_STEPS = [
  [
    "Free readiness assessment",
    "We understand the child’s current number skills, learning comfort and any previous experience before recommending a starting point.",
  ],
  [
    "Trainer demonstration",
    "Joshna demonstrates the bead movement slowly and connects the physical action to the number and place value.",
  ],
  [
    "Guided physical practice",
    "The child copies the method on a physical abacus while the trainer watches the hands, beads, columns and calculation sequence.",
  ],
  [
    "Immediate correction",
    "We correct unsuitable movement or place-value use before the error becomes a repeated habit.",
  ],
  [
    "Independent attempt",
    "The trainer reduces prompts so the child can show whether the method is understood and usable.",
  ],
  [
    "Visualisation and mental arithmetic",
    "We introduce mental bead work gradually after the physical-abacus technique and current arithmetic skills become stable.",
  ],
];

const STANDARDS_HEADERS = ["Progress area", "What we check", "Why it matters"];

const STANDARDS_ROWS = [
  [
    "Technique",
    "Posture, finger choice, bead movement and control",
    "An unstable physical method can create repeated errors",
  ],
  [
    "Place value",
    "Correct use of ones, tens, hundreds and higher columns",
    "Place value supports every later arithmetic operation",
  ],
  [
    "Accuracy",
    "Correct answers produced using the taught method",
    "Accuracy should become dependable before speed grows",
  ],
  [
    "Independence",
    "How much prompting or demonstration is still needed",
    "Independent work shows that the child can use the method",
  ],
  [
    "Visualisation",
    "Ability to picture and control suitable bead movement mentally",
    "Mental arithmetic should develop from a stable physical foundation",
  ],
  [
    "Consistency",
    "Performance across lessons and suitable home practice",
    "One correct worksheet does not prove that a skill is stable",
  ],
];

const KIT_POINTS = (extra) => (
  <ul>
    <li>Physical abacus kit included</li>
    <li>EMI available</li>
    <li>{extra}</li>
  </ul>
);

const FEE_CARDS = [
  {
    badge: "◎",
    title: `Live Online — ${FEES.online.display}`,
    text: "Join a scheduled live class from home. The child uses a physical abacus while the camera shows the working hands and beads.",
    extra: KIT_POINTS("No regular centre travel"),
  },
  {
    badge: "⌂",
    title: `Hyderabad Classroom — ${FEES.classroom.display}`,
    text: "Attend face-to-face abacus classes at our Hyder Nagar centre near JNTU Metro Station.",
    extra: KIT_POINTS("Direct in-person observation"),
  },
  {
    badge: "↔",
    title: `Hybrid — ${FEES.hybrid.display}`,
    text: "Use online and classroom formats. Switching is available when we can place the child in a matching open batch.",
    extra: KIT_POINTS("Flexible mode switching"),
  },
];

const COMMITMENTS = [
  "Free assessment before level placement",
  "Published batch-size limits",
  "Trainer name and experience shared clearly",
  "Detailed curriculum available before enrolment",
  "Course fees and inclusions published",
  "Realistic learning expectations",
  "Open parent questions and progress discussions",
  "Child safeguarding and privacy policies",
  "No invented reviews or student results",
  "No guaranteed marks, IQ or memory claims",
];

const TRUST_PANELS = [
  {
    title: "What parents should confirm",
    items: [
      "Current demo date and time",
      "Available level-matched batch",
      "Who will teach that batch",
      "Complete payment and EMI terms",
      "Practice expectations and progress reporting",
    ],
  },
  {
    title: "Policies you can read",
    items: [
      <SiteLink key="safeguarding" href="/child-safeguarding-policy/">
        Child Safeguarding Policy
      </SiteLink>,
      <SiteLink key="media" href="/photo-and-video-consent-policy/">
        Photo and Video Consent Policy
      </SiteLink>,
      <SiteLink key="a11y" href="/accessibility/">
        Accessibility Statement
      </SiteLink>,
      <SiteLink key="privacy" href="/privacy-policy/">
        Privacy Policy
      </SiteLink>,
      <SiteLink key="refund" href="/refund-cancellation-policy/">
        Refund and Cancellation Policy
      </SiteLink>,
    ],
  },
];

export default function AboutUsPage() {
  return (
    <ContentPage
      hero={{
        eyebrow: "Meet the people and method",
        title: TITLE,
        summary: SUMMARY,
        actions: (
          <>
            <SiteLink href="/#assessment" className="button">
              Book a free readiness assessment
            </SiteLink>
            <a
              className="button whatsapp"
              href={buildWhatsappHref(WHATSAPP_MESSAGES.child)}
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
            id="trust"
            tinted
            eyebrow="Trust comes from verifiable details"
            title="Our Commitments to Parents and Learners"
          >
            <CheckList items={COMMITMENTS} />
            <ContentSplit panels={TRUST_PANELS} />
          </ContentSection>

          <OfficialSources
            id="official-background-on-foundational-numeracy"
            eyebrow="Official, non-commercial references"
            title="Official Background on Foundational Numeracy"
            lede="These Government of India and NCERT resources help parents understand the wider role of foundational numeracy and age-appropriate learning. They are educational references and do not certify or endorse Abacus Experts."
            sources={[
              {
                ...OFFICIAL_SOURCES[0],
                text: "Official information about India’s national mission for foundational literacy and numeracy.",
              },
              {
                ...OFFICIAL_SOURCES[1],
                title:
                  "National Curriculum Framework for Foundational Stage 2022",
                text: "The official curriculum framework for foundational-stage education and age-appropriate learning.",
              },
              NCERT_OUTCOMES,
            ]}
          />

          <PageCta
            title="Meet us before you decide"
            text="Book a free readiness assessment with Abacus Experts. Meet Joshna, understand the method and review the suitable pathway, batch, fee and learning mode before enrolling."
          />
        </>
      }
    >
      <DirectAnswer>
        We help children build a clear arithmetic foundation using a physical
        abacus, correct finger technique, place value and guided practice. We
        place children after a free readiness assessment, keep Junior and Senior
        batches small, explain progress to parents and introduce mental
        arithmetic only after the physical method becomes stable.
      </DirectAnswer>

      <ContentSection
        id="who-we-are"
        eyebrow="A focused children’s learning centre"
        title="Who Are Abacus Experts?"
        lede="Parents searching for an abacus institute in Hyderabad need more than promotional claims. They need to know what is taught, who teaches, how children are placed and what the complete course includes."
      >
        <ContentCardGrid cards={WHO_CARDS} />
        <ContentNote title="What we are—and what we are not">
          We are an abacus and mental arithmetic learning provider. Our course
          can support arithmetic practice, but it does not replace the complete
          school mathematics curriculum. We do not promise higher IQ, guaranteed
          marks or identical results for every child.
        </ContentNote>
      </ContentSection>

      <ContentSection
        id="trainer"
        tinted
        eyebrow="Parents should know who teaches"
        title="Meet Joshna, Our Lead Abacus Trainer"
        lede="Joshna has more than nine years of abacus teaching experience. Her work focuses on clear demonstration, careful observation and correcting the learning method—not only checking the final answer."
      >
        <ContentSplit panels={TRAINER_PANELS} />
        <div className="content-note">
          <h3>Verified trainer information</h3>
          <p>
            <strong>Name:</strong> {TRAINER.name} · <strong>Role:</strong> Lead
            Abacus Trainer · <strong>Experience:</strong> {TRAINER.experience}.
            Parents may ask which programmes, formats and current batches she
            handles before enrolment.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        id="programmes"
        eyebrow="Two pathways with one learning standard"
        title="Our Junior and Senior Abacus Programmes"
      >
        <ContentCardGrid cards={PROGRAMME_CARDS} columns="two" />
        <ContentNote title="Age is a guide, not an automatic level">
          We check number recognition, counting, attention, comfort with
          instructions and previous abacus learning before recommending a
          pathway or curriculum starting point.
        </ContentNote>
      </ContentSection>

      <ContentSection
        id="method"
        tinted
        eyebrow="Show, practise, check and explain"
        title="Our Abacus Teaching Method"
      >
        <NumberedProcess steps={METHOD_STEPS} />
        <RelatedLinks
          links={[
            {
              href: "/how-abacus-classes-work/",
              label: "See how our classes work",
            },
            { href: "/#syllabus", label: "View our full curriculum" },
            { href: "/parent-faqs/", label: "Read parent FAQs" },
          ]}
        />
      </ContentSection>

      <ContentSection
        id="standards"
        eyebrow="Progress must be visible and explainable"
        title="How We Measure Student Learning Progress"
      >
        <ContentTable headers={STANDARDS_HEADERS} rows={STANDARDS_ROWS} />
        <ContentNote title="Our progression rule">
          We do not recommend a new stage because a child merely attended
          classes or completed pages. Joshna reviews the required skills and may
          recommend progression, consolidation or focused revision.
        </ContentNote>
        <RelatedLinks
          links={[
            {
              href: "/student-progress-and-assessment/",
              label: "Read our assessment process",
            },
            { href: "/#benefits", label: "Understand realistic benefits" },
            { href: "/#assessment", label: "Book a readiness check" },
          ]}
        />
      </ContentSection>

      <ContentSection
        id="fees"
        tinted
        eyebrow="Flexible attendance with published pricing"
        title="Our Learning Modes and Course Fees"
      >
        <ContentCardGrid cards={FEE_CARDS} />
        <p className="content-note">
          We confirm the current batch, written fee terms, payment schedule and
          course inclusions before payment. A fee does not guarantee a specific
          result or automatic level completion.
        </p>
      </ContentSection>

      <ContentSection
        id="location"
        eyebrow="Our physical learning centre"
        title="Abacus Experts in Hyder Nagar, Hyderabad"
      >
        <CentreBlock />
        <RelatedLinks
          links={[
            { href: "/areas-we-serve/", label: "View all service areas" },
            { href: "/parent-faqs/", label: "Plan your first visit" },
            { href: "/#fees", label: "Compare learning modes" },
          ]}
        />
      </ContentSection>
    </ContentPage>
  );
}
