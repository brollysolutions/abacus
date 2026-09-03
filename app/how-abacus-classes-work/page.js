import ContentPage from "@/components/ContentPage";
import PageCta from "@/components/PageCta";
import SiteLink from "@/components/SiteLink";
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

import { FEES } from "@/lib/programme";
import { WHATSAPP_MESSAGES, buildWhatsappHref } from "@/lib/business";
import { pageOpenGraph } from "@/lib/seo";
import { buildSiteGraph, OFFICIAL_SOURCES } from "@/lib/schema";

const TITLE = "How Do Our Abacus Classes Work?";
const SUMMARY =
  "Our abacus classes begin with a free readiness assessment. We place each child at a suitable starting point, teach with a physical abacus, correct technique during live practice and recommend the next stage only after the required skills become stable.";

export const metadata = {
  title: "How Abacus Classes Work for Kids | Abacus Experts",
  description:
    "Understand how our abacus classes work—from readiness assessment and level placement to live lessons, home practice, progress checks and mental maths.",
  alternates: { canonical: "/how-abacus-classes-work/" },
  robots: { index: true, follow: true },
  openGraph: pageOpenGraph({
    url: "/how-abacus-classes-work/",
    title: TITLE,
    description: SUMMARY,
  }),
};

const SECTIONS = [
  { id: "process", label: "5-step process" },
  { id: "assessment", label: "Readiness check" },
  { id: "lesson", label: "Inside a lesson" },
  { id: "modes", label: "Learning modes" },
  { id: "practice", label: "Home practice" },
  { id: "progress", label: "Progression" },
  { id: "parents", label: "Parent role" },
];

const PROCESS = [
  [
    "Free readiness assessment",
    "We check number recognition, counting, attention, comfort with short instructions and any previous abacus learning. This is not a pass-or-fail exam.",
  ],
  [
    "Suitable pathway and starting point",
    "We recommend our Junior pathway for many younger beginners and our Senior pathway for older or continuing learners. Age is a guide; demonstrated readiness decides the starting point.",
  ],
  [
    "Live, trainer-guided classes",
    "Our trainer demonstrates the method, watches the child’s finger and bead movements, asks the child to try it and corrects errors before they become repeated habits.",
  ],
  [
    "Short and focused home practice",
    "Beginners usually receive 10–15 minutes of suitable practice on several days each week. The aim is correct repetition—not long sessions or pressure for speed.",
  ],
  [
    "Review and level progression",
    "We review technique, place value, accuracy, independence and readiness for visualisation. Attendance alone does not move a child to the next stage.",
  ],
];

const ASSESSMENT_CARDS = [
  {
    badge: "01",
    title: "Basic number readiness",
    text: "We look at number recognition, counting order and basic quantity understanding appropriate to the child’s age.",
  },
  {
    badge: "02",
    title: "Learning behaviour",
    text: "We observe whether the child can watch a short demonstration, follow a simple instruction and try again after guidance.",
  },
  {
    badge: "03",
    title: "Previous learning",
    text: "If the child has studied abacus before, we check retained finger technique, place value, operations and any gaps before suggesting a batch.",
  },
];

const LESSON_HEADERS = [
  "Lesson part",
  "What our trainer does",
  "What your child does",
  "Why it matters",
];

const LESSON_ROWS = [
  [
    "Warm-up and review",
    "Checks selected work from the previous topic",
    "Recalls the method and completes a short task",
    "Shows what is stable and what needs revision",
  ],
  [
    "New concept",
    "Demonstrates bead movement slowly and explains place value",
    "Watches, asks questions and copies the movement",
    "Connects the physical action with the number",
  ],
  [
    "Guided practice",
    "Observes posture, fingers, columns and sequence",
    "Solves examples with prompts when needed",
    "Stops an incorrect technique becoming a habit",
  ],
  [
    "Independent attempt",
    "Reduces prompts and checks accuracy",
    "Completes suitable calculations independently",
    "Shows whether the child understands the method",
  ],
  [
    "Recap and practice plan",
    "Explains the focus for home practice",
    "Repeats the key step and records the task",
    "Keeps practice short and purposeful",
  ],
];

function fee(amount) {
  return (
    <p>
      <strong>Course fee:</strong> {amount} · Kit included · EMI available
    </p>
  );
}

const MODE_CARDS = [
  {
    badge: "◎",
    title: "Live Online",
    text: "Your child works on a physical abacus at home. The camera should clearly show the working hands and beads so our trainer can observe the technique.",
    extra: fee(FEES.online.display),
  },
  {
    badge: "⌂",
    title: "Hyderabad Classroom",
    text: "Your child attends face-to-face sessions at our Hyder Nagar centre near JNTU Metro Station. Our trainer can correct posture and movement directly.",
    extra: fee(FEES.classroom.display),
  },
  {
    badge: "↔",
    title: "Hybrid",
    text: "Your child uses both formats. Switching is available when we can place the learner in a suitable open batch at the same learning stage.",
    extra: fee(FEES.hybrid.display),
  },
];

const PRACTICE_PANELS = [
  {
    title: "Our beginner practice guide",
    items: [
      "Practise for about 10–15 focused minutes.",
      "Choose several regular days each week.",
      "Use the assigned method and physical abacus.",
      "Stop when tiredness creates repeated errors.",
      "Tell our trainer where the child became confused.",
    ],
  },
  {
    title: "What parents should avoid",
    items: [
      "Giving the answer before the child tries.",
      "Teaching a different finger method from a video.",
      "Comparing speed with another child.",
      "Repeating an incorrect method for many pages.",
      "Using practice as a punishment.",
    ],
  },
];

const PROGRESS_CHECKS = [
  "Uses the correct posture and finger technique",
  "Places values in the correct columns",
  "Solves the current operation accurately",
  "Works with fewer prompts",
  "Notices and corrects some errors",
  "Maintains the skill across more than one lesson",
];

const PARENT_CARDS = [
  {
    badge: "✓",
    title: "What helps",
    text: "Provide a quiet desk, keep a regular practice time, make sure the kit is ready, praise careful effort and share difficulties honestly with our trainer.",
  },
  {
    badge: "!",
    title: "What to remember",
    text: "Children progress at different rates. Abacus supports arithmetic practice but does not replace the full school mathematics curriculum or guarantee marks, memory or IQ outcomes.",
  },
];

export default function HowClassesWorkPage() {
  return (
    <ContentPage
      hero={{
        eyebrow: "A parent’s step-by-step guide",
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
    >
      <DirectAnswer>
        At Abacus Experts, learning follows five connected steps: readiness
        check, level placement, live guided teaching, short home practice and a
        progress review. Children first learn accurate bead movement and place
        value. Mental arithmetic begins gradually after they can use the
        physical abacus with control.
      </DirectAnswer>

      <ContentSection
        id="process"
        eyebrow="The complete learning journey"
        title="Our Abacus Learning Process in Five Steps"
        lede="Parents can see what happens before enrolment, during lessons and before a child moves to the next learning stage."
      >
        <NumberedProcess steps={PROCESS} />
      </ContentSection>

      <ContentSection
        id="assessment"
        tinted
        eyebrow="Before the first paid class"
        title="What Happens in Our Free Readiness Assessment?"
        lede="The assessment helps us avoid placing a child in work that is too easy, too difficult or unsuitable at that time."
      >
        <ContentCardGrid cards={ASSESSMENT_CARDS} />
        <ContentNote title="What parents receive">
          We explain the suggested pathway, starting point, learning mode,
          current batch choices, complete course fee, EMI availability and kit
          inclusion before enrolment.
        </ContentNote>
      </ContentSection>

      <ContentSection
        id="lesson"
        eyebrow="Show, practise, check, explain"
        title="What Happens During a Live Abacus Lesson?"
        lede="Every activity has a learning purpose. Our trainer focuses on the method as well as the final answer."
      >
        <ContentTable headers={LESSON_HEADERS} rows={LESSON_ROWS} />
        <ContentNote title="Typical class structure">
          We normally conduct two live classes each week. Junior lessons are
          usually 45–50 minutes with up to six learners; Senior lessons are
          usually 55–60 minutes with up to eight learners.
        </ContentNote>
      </ContentSection>

      <ContentSection
        id="modes"
        tinted
        eyebrow="One curriculum, three attendance choices"
        title="How Online, Classroom and Hybrid Abacus Classes Work"
      >
        <ContentCardGrid cards={MODE_CARDS} />
      </ContentSection>

      <ContentSection
        id="practice"
        eyebrow="Correct repetition matters"
        title="How Does Home Abacus Practice Work?"
        lede="Practice supports learning only when the child repeats the technique taught in class. More time is not always better."
      >
        <ContentSplit panels={PRACTICE_PANELS} />
      </ContentSection>

      <ContentSection
        id="progress"
        tinted
        eyebrow="Accuracy before controlled speed"
        title="How Do Children Progress from Abacus to Mental Maths?"
        lede="We introduce visualisation in stages. A child should not be rushed away from the physical abacus before the foundation is reliable."
      >
        <CheckList items={PROGRESS_CHECKS} />
        <div className="content-note">
          <h3>When does mental arithmetic begin?</h3>
          <p>
            Early visualisation may begin after basic bead movements become
            familiar. More complex mental arithmetic is introduced gradually as
            the child can picture and control bead movement without losing
            accuracy. Read our detailed{" "}
            <SiteLink href="/student-progress-and-assessment/">
              student progress and assessment process
            </SiteLink>
            .
          </p>
        </div>
      </ContentSection>

      <ContentSection
        id="parents"
        eyebrow="Support without pressure"
        title="What Is the Parent’s Role in Abacus Learning?"
      >
        <ContentCardGrid cards={PARENT_CARDS} columns="two" />
        <RelatedLinks
          links={[
            {
              href: "/student-progress-and-assessment/",
              label: "How we assess progress",
            },
            { href: "/parent-faqs/", label: "Read parent FAQs" },
            { href: "/areas-we-serve/", label: "Centre and service areas" },
          ]}
        />
      </ContentSection>

      <OfficialSources
        id="official-learning-resources-for-parents"
        eyebrow="Official, non-commercial references"
        title="Official Learning Resources for Parents"
        lede="These official resources explain foundational numeracy and age-appropriate teaching in the wider education system. Abacus Experts links to them for background reading, not as an endorsement of our private course."
        sources={OFFICIAL_SOURCES}
      />

      <PageCta
        title="See the method before you enrol"
        text="Book our free readiness assessment. We will check your child’s starting point, demonstrate the learning approach and explain the suitable mode, batch and fee."
      />
    </ContentPage>
  );
}
