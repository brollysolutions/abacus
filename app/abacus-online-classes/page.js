import Link from "next/link";
import SkipLink from "@/components/SkipLink";
import Notice from "@/components/Notice";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";
import Section, { Container } from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import Programme from "@/components/Programme";
import Faq from "@/components/Faq";
import { CLASSES_MENU, CLASS_LINKS } from "@/lib/nav";
import { BUSINESS, absoluteUrl } from "@/lib/business";
import { pageOpenGraph } from "@/lib/seo";

export const metadata = {
  title: "Abacus Online Classes for Kids | Live Abacus Experts",
  description:
    "Join live abacus online classes for kids aged 5–13. Small batches, structured levels, guided practice and parent progress reports. Book a free assessment.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: { canonical: "/abacus-online-classes" },
  openGraph: pageOpenGraph({
    url: "/abacus-online-classes",
    title: "Abacus Online Classes for Kids | Abacus Experts",
    description:
      "Live, accuracy-first online abacus training with small batches, clear levels and parent-visible progress.",
  }),
  twitter: {
    card: "summary",
    title: "Abacus Online Classes for Kids | Abacus Experts",
    description:
      "Live teacher-led abacus learning for children aged 5–13. Start with a free readiness assessment.",
  },
};

const NAV = [
  { href: "/", label: "Home" },
  CLASSES_MENU,
  { href: "#how", label: "How it works" },
  { href: "#syllabus", label: "Syllabus" },
  { href: "#fees", label: "Fees" },
  { href: "#faq", label: "FAQs" },
];

const HOW_CARDS = [
  ["Readiness and placement", "We check number recognition, counting, attention, instructions and previous learning before recommending junior, senior or a later start."],
  ["Level-matched live batch", "The child joins peers learning the same skill range, so demonstrations, questions and practice remain relevant."],
  ["Camera-visible technique", "The device is positioned so the trainer can see finger movement and bead placement, not merely the child’s face."],
  ["Guided practice", "Children watch a demonstration, attempt examples, explain steps and receive immediate correction during class."],
  ["Short home reinforcement", "Focused worksheets and bead drills reinforce the current technique without creating an excessive homework burden."],
  ["Visible progress", "Parents receive updates on technique, accuracy, independence, visualisation, practice and next-level readiness."],
];

const STEPS = [
  ["Represent", "Set numbers correctly and understand place value on the physical abacus."],
  ["Operate", "Use consistent finger technique for direct addition and subtraction."],
  ["Combine", "Apply five- and ten-complement strategies before larger operations."],
  ["Visualise", "Begin calculating with imagined bead positions while retaining accuracy."],
  ["Build fluency", "Increase range and sustainable speed only after the method is stable."],
];

const SYLLABUS_ROWS = [
  ["Foundation", "Tool orientation, place value, bead setting and finger movement", "Close camera demonstration, imitation and individual technique checks", "Correct setup and fewer movement errors"],
  ["Core operations", "Direct and complement-based addition and subtraction", "Worked examples, call-and-response practice and screen-visible correction", "Stable method and improving accuracy"],
  ["Extended arithmetic", "Multiplication, division and larger number ranges", "Step breakdowns, guided attempts and independent questions", "Fewer prompts and reliable place value"],
  ["Visualisation", "Imagined bead movement and mental arithmetic", "Flash prompts, oral questions and a gradual reduction in physical-tool dependence", "Correct answers supported by consistent method"],
  ["Fluency", "Mixed operations, timed and untimed practice", "Varied question sets, error review and level assessment", "Accuracy remains stable as speed increases"],
];

const TIMELINE = [
  ["5 min", "Settle and review", "Equipment check, previous-skill recap and a quick accuracy warm-up."],
  ["10 min", "Teacher demonstration", "New technique shown slowly with verbal place-value cues."],
  ["15 min", "Guided bead work", "Children attempt examples while the trainer watches and corrects movement."],
  ["10 min", "Individual checks", "Each learner answers, demonstrates or explains without help from a parent."],
  ["5–15 min", "Application and practice brief", "Mental visualisation or fluency activity, error recap and home-practice instructions."],
];

const COMPARE_ROWS = [
  ["Real-time technique correction", "Yes, when hands and beads are camera-visible", "No; parent or child must self-check", "Usually checks answers, not physical technique"],
  ["Personal pacing", "Trainer can repeat, slow down or assign level-specific work", "Child can replay but receives no immediate teaching response", "Automated difficulty may adapt to answers"],
  ["Engagement", "Questions, peers, demonstration and accountability", "Depends heavily on self-motivation", "Game mechanics may motivate short practice"],
  ["Best use", "Primary instruction for beginners and progressive learners", "Revision or supplementary explanation", "Repetition after the technique is correctly learned"],
  ["Main risk", "Overcrowded batch or poor camera setup", "Incorrect technique can continue unnoticed", "Fast guessing may replace thoughtful method"],
];

const SETUP = [
  ["Physical abacus", "Use the model recommended for the curriculum; digital beads should not replace early physical practice."],
  ["Camera and internet", "A stable connection and device positioned to show the child’s working hand and abacus."],
  ["Clear learning space", "A desk, workbook, pencil and distraction-light environment with enough room for hand movement."],
  ["Light parent support", "Younger learners may need help joining and setting up—but parents should not supply answers."],
];

const BENEFITS = [
  ["✓", "Can support arithmetic fluency", "Repeated physical and mental bead work gives children structured practice with number operations."],
  ["✓", "Can reinforce accuracy habits", "Correct technique encourages sequencing, place-value control, checking and error correction."],
  ["✓", "Can build calculation confidence", "Achievable level goals can make number practice feel more manageable and visible."],
  ["!", "Does not replace school maths", "Abacus does not cover the complete curriculum, including every concept, proof, word problem or application."],
  ["!", "Does not suit every child equally", "Age, attention, visual-spatial skills, teaching quality and practice consistency affect learning."],
  ["!", "Cannot guarantee outcomes", "No ethical provider should guarantee marks, memory, intelligence, competition results or calculation speed."],
];

const CHOOSE = [
  ["Confirm it is genuinely live", "Ask how much time is interactive and whether the trainer watches each child’s technique."],
  ["Verify the actual batch size", "Request the maximum, not the “typical” number, and check whether levels are mixed."],
  ["Request the written syllabus", "Every level should state concepts, practice, assessment and progression criteria."],
  ["Evaluate correction quality", "The trainer should notice finger and bead errors and explain corrections calmly."],
  ["Ask how progress is reported", "Look for technique, accuracy, independence and visualisation—not only speed."],
  ["Check the practice burden", "Understand frequency, minutes, worksheet checking and support when the child struggles."],
  ["Review safety and privacy", "Ask about recording, access, class links, child data, parent communication and safeguarding."],
  ["Get every fee in writing", "Confirm tuition, kit, books, exams, certificates, makeup classes and refund terms."],
];

const FEE_ITEMS = [
  "Number and duration of live classes per level",
  "Maximum batch size and group or one-to-one format",
  "Physical abacus, workbook and worksheet costs",
  "Assessment, exam and certificate charges",
  "Makeup, pause, transfer, cancellation and refund policy",
  "Any recordings, practice platform or support access",
];

const FAQS = [
  ["Can children really learn abacus online?", "Yes. Live online classes can work when the trainer sees the child’s hands and abacus, corrects movement in real time, keeps batches small and provides structured practice. A video lecture without observation is less suitable for beginners learning physical technique."],
  ["What is the best age to start abacus online classes?", "Many children are ready from about age five. The child should recognise basic numbers, count objects reliably, follow short instructions and participate for a short guided period. Readiness matters more than age alone."],
  ["Are online abacus classes suitable for a five-year-old?", "They can be, provided the lesson is shorter, interactive and paced for a beginner. A parent may need to help with the camera and materials, but should avoid prompting answers. A readiness assessment is recommended before joining."],
  ["Are live classes better than recorded lessons or apps?", "For beginners, live teaching has an important advantage: the teacher can see and correct finger movement, bead placement and misunderstandings immediately. Recordings and apps can support revision or practice after correct technique has been established."],
  ["What device is best for an online abacus class?", "A laptop or tablet generally provides a larger view, but a stable phone can also work if mounted correctly. The child needs to see the trainer while the trainer can see the child’s face, hands and physical abacus."],
  ["What equipment does my child need?", "A curriculum-compatible physical abacus, workbook or worksheets, pencil, eraser, clear desk, device with camera and stable internet are usually enough. Avoid replacing the physical tool with only a digital abacus during foundation levels."],
  ["How long and how frequent are the classes?", "A practical programme rhythm is two live classes per week. Younger learners generally benefit from 45–50 minute lessons, while older learners may manage 55–60 minutes. Actual placement and attention should guide the schedule."],
  ["How much home practice is necessary?", "Short, consistent practice is usually better than occasional long sessions. Many beginners start with 10–15 minutes on several days each week. The trainer should adjust the load if technique, accuracy or confidence declines."],
  ["How long does an online abacus course take?", "Abacus is a progressive, multi-level skill. Total duration depends on the curriculum, entry level, class frequency, attendance, practice and mastery criteria. Ask what the child must demonstrate at each level rather than relying only on a fixed completion promise."],
  ["What does the online abacus syllabus include?", "A complete syllabus normally includes tool orientation, place value, finger technique, direct addition and subtraction, five- and ten-complement strategies, multiplication, division, visualisation and progressively harder mental arithmetic."],
  ["How is progress measured online?", "The teacher should track correct bead technique, accuracy, understanding, independent work, visualisation and sustainable calculation speed. Parents should receive a report with strengths, current gaps, practice guidance and next-level criteria."],
  ["What is a good online batch size?", "The group must be small enough for the trainer to observe every child’s technique and hear individual answers. Abacus Experts is designed around up to six junior learners and up to eight senior learners per online batch."],
  ["How much do abacus online classes cost in India?", "Fees vary by class frequency, batch size, level length, trainer support, materials, assessments and whether learning is group or one-to-one. Request the total cost, included classes, kit, workbooks, exams, certificates and policies in writing."],
  ["What happens if my child misses a live class?", "Before enrolling, verify whether the provider offers a makeup class, recording, alternate batch or teacher explanation, and how the missed technique will be checked before the child moves forward."],
  ["Do online abacus classes improve maths marks?", "Abacus can support arithmetic fluency and comfort with numbers, but it does not cover the entire school curriculum or guarantee marks. It should complement conceptual maths, classroom teaching, word problems and age-appropriate mathematical reasoning."],
  ["Does abacus increase IQ, concentration or photographic memory?", "Abacus requires attention and visual-motor practice, and research has explored arithmetic and working-memory effects. Results vary and broader transfer is not guaranteed. Avoid programmes promising higher IQ, photographic memory, whole-brain development or guaranteed academic outcomes."],
  ["What is the difference between online abacus and Vedic Maths?", "Abacus begins with a physical place-value tool and later progresses to imagined bead movement. Vedic Maths teaches calculation patterns and strategies without an abacus. Abacus is commonly used with younger learners; the right choice depends on age, readiness and goals."],
  ["How can parents keep online classes safe?", "Use provider-controlled class links, keep devices in a family-visible area, understand the recording policy, avoid sharing unnecessary child data and keep payment and communication in official channels. Ask who can enter, observe or access recordings."],
  ["Can we attend a free demo before enrolling?", "A readiness assessment or trial is valuable when it lets the trainer interact with the child, test basic readiness and explain placement. Parents should use it to evaluate pace, correction, engagement, batch size and fee transparency—not only promotional claims."],
];

const FOOTER_COLUMNS = [
  {
    heading: "Learn",
    items: [
      { href: "/", label: "Home" },
      ...CLASS_LINKS,
      { href: "#syllabus", label: "Abacus syllabus" },
      { href: "#fees", label: "Fee checklist" },
      { href: "#faq", label: "Parent FAQs" },
    ],
  },
  {
    heading: "Contact",
    items: [
      { type: "phone" },
      { type: "whatsapp" },
      { type: "email" },
      { href: "/privacy-policy/", label: "Privacy policy" },
    ],
  },
];

/* Same absolute @ids as every other page, so the graph nodes merge
   instead of duplicating per URL. */
const ORG_ID = `${BUSINESS.url}/#organization`;
const SITE_ID = `${BUSINESS.url}/#website`;
const PAGE_URL = absoluteUrl("/abacus-online-classes");

const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": ORG_ID, name: BUSINESS.name, url: BUSINESS.url, email: BUSINESS.email, slogan: "Measured Mental Maths. Confident Learners.", description: "Live, level-based online abacus and mental arithmetic learning for children." },
    { "@type": "WebPage", "@id": `${PAGE_URL}#webpage`, url: PAGE_URL, name: "Abacus Online Classes for Kids", description: "A parent-focused guide and enrolment page for live online abacus classes, including age readiness, class format, syllabus, equipment, fees and progress tracking.", inLanguage: "en-IN", about: [{ "@type": "Thing", name: "Abacus" }, { "@type": "Thing", name: "Online learning" }, { "@type": "Thing", name: "Mental arithmetic" }], isPartOf: { "@id": SITE_ID }, publisher: { "@id": ORG_ID } },
    { "@type": "Course", name: "Live Abacus Online Classes for Kids", description: "Teacher-led online abacus instruction progressing from physical bead calculation to mental visualisation and arithmetic.", provider: { "@id": ORG_ID }, educationalLevel: "Beginner to advanced school-age learners", inLanguage: "en-IN", availableLanguage: "English" },
    { "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};

const CARD = "rounded-[19px] border border-line bg-white p-[25px]";
const ICON = "mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-[13px] font-black";

function Rod({ beads }) {
  return (
    <div className="relative h-6 border-t-2 border-navy">
      {beads.map((left, i) => (
        <span
          key={i}
          className="absolute top-[-8px] h-[15px] w-[15px] rounded-full odd:bg-teal even:bg-amber"
          style={{ left }}
        />
      ))}
    </div>
  );
}

export default function OnlineHome() {
  return (
    <>
      <JsonLd data={JSONLD} />
      <SkipLink />
      <Notice>
        <strong>New online batches:</strong> Start with a free child-readiness
        assessment—no payment required.
      </Notice>
      <Header links={NAV} />

      <main id="main">
        {/* Hero */}
        <section
          id="top"
          className="relative overflow-hidden bg-[radial-gradient(circle_at_82%_12%,rgba(15,139,141,.14),transparent_29%),radial-gradient(circle_at_8%_92%,rgba(255,183,3,.17),transparent_25%),var(--color-warm)] pb-[68px] pt-[74px] max-sm2:pb-14 max-sm2:pt-12"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-[210px] -right-[180px] h-[390px] w-[390px] rounded-full border-[65px] border-amber/8"
          />
          <Container className="relative z-[1] grid grid-cols-[minmax(0,1.12fr)_minmax(360px,.72fr)] items-center gap-[54px] max-lg2:grid-cols-1">
            <div>
              <Eyebrow>Live, teacher-led learning from home</Eyebrow>
              <h1 className="mb-[22px] text-[clamp(2.45rem,6.2vw,5rem)] max-sm2:text-[2.55rem]">
                Abacus online classes where the teacher can{" "}
                <span className="text-teal">see, guide and correct</span>
              </h1>
              <p className="max-w-[760px] text-[clamp(1.04rem,2vw,1.23rem)] text-slate">
                Abacus Experts provides live online abacus classes for kids aged
                about 5–13. Children learn on a physical abacus in small,
                level-matched groups, receive real-time technique correction and
                progress gradually from bead calculation to mental arithmetic.
              </p>
              <div className="my-6 flex flex-wrap gap-3 max-sm2:[&>a]:w-full">
                <Button href="#assessment">
                  Book a free readiness assessment
                </Button>
                <Button variant="secondary" href="#how">
                  See how online classes work
                </Button>
              </div>
              <ul
                className="m-0 flex list-none flex-wrap gap-x-[18px] gap-y-2.5 p-0"
                aria-label="Online programme highlights"
              >
                {["Live—not pre-recorded", "Physical abacus practice", "Small online batches", "Parent progress updates"].map((t) => (
                  <li key={t} className="flex items-center gap-[7px] text-[.89rem] font-[760] text-navy">
                    <span className="grid h-[19px] w-[19px] place-items-center rounded-full bg-teal-soft text-[.72rem] font-black text-teal">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Live-class illustration */}
            <div
              className="relative rounded-[27px] border border-navy/12 bg-white p-[15px] shadow-card"
              aria-label="Illustration of a live online abacus class"
            >
              <div className="flex items-center justify-between px-[7px] pb-[15px] pt-[7px]">
                <div className="flex gap-1.5">
                  <i className="block h-[9px] w-[9px] rounded-full bg-amber" />
                  <i className="block h-[9px] w-[9px] rounded-full bg-[#d9e3e8]" />
                  <i className="block h-[9px] w-[9px] rounded-full bg-[#d9e3e8]" />
                </div>
                <span className="text-[.72rem] font-[750] text-slate">
                  Abacus Experts · Live class
                </span>
              </div>
              <div className="relative min-h-[365px] overflow-hidden rounded-[19px] bg-[linear-gradient(145deg,var(--color-navy),var(--color-deep))] p-7 max-sm2:min-h-[325px] max-sm2:p-[22px]">
                <span className="mb-[21px] inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1.5 text-[.7rem] font-black uppercase tracking-[.08em] text-white before:h-[7px] before:w-[7px] before:rounded-full before:bg-[#ff5c5c] before:content-['']">
                  Live instruction
                </span>
                <h2 className="max-w-[280px] text-[1.55rem] text-white">
                  Accuracy first. Speed follows.
                </h2>
                <p className="max-w-[270px] text-[.86rem] text-white/66">
                  The trainer observes finger movement and bead placement—not
                  just the final answer.
                </p>
                <div
                  aria-hidden
                  className="absolute -right-[14px] bottom-[25px] h-[165px] w-[245px] rotate-[-3deg] rounded-[17px] border-8 border-amber bg-[#fff8df] px-5 py-[18px] shadow-[0_18px_45px_rgba(0,0,0,.25)] max-sm2:-right-[38px] max-sm2:h-[150px] max-sm2:w-[220px]"
                >
                  <Rod beads={["15%", "40%"]} />
                  <Rod beads={["50%", "70%"]} />
                  <Rod beads={["22%", "39%", "58%"]} />
                  <Rod beads={["62%", "80%"]} />
                  <Rod beads={["30%", "49%"]} />
                </div>
                <div aria-hidden className="absolute bottom-5 left-6 flex">
                  {["AK", "RS", "VM", "+3"].map((c, i) => (
                    <span
                      key={c}
                      className={`mr-[-8px] grid h-9 w-9 place-items-center rounded-full border-[3px] border-navy text-[.7rem] font-black text-navy ${i === 3 ? "bg-amber-soft" : "bg-teal-soft"}`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Stats strip */}
        <div className="border-y border-line bg-white" aria-label="Programme facts">
          <Container className="grid grid-cols-4 max-lg2:grid-cols-2 max-sm2:grid-cols-1">
            {[
              ["Approx. ages 5–13", "Readiness matters more than age alone"],
              ["Twice-weekly rhythm", "Live instruction plus short home practice"],
              ["Up to 6 junior learners", "Designed for closer beginner observation"],
              ["Up to 8 senior learners", "Level-matched online groups"],
            ].map(([s, t]) => (
              <div
                key={s}
                className="border-line px-[25px] py-[23px] [&:not(:last-child)]:border-r max-lg2:[&:nth-child(2)]:border-r-0 max-lg2:[&:nth-child(-n+2)]:border-b max-sm2:border-b max-sm2:border-r-0 max-sm2:px-[18px] max-sm2:[&:last-child]:border-b-0"
              >
                <strong className="block text-[1rem] text-navy">{s}</strong>
                <span className="text-[.82rem] text-slate">{t}</span>
              </div>
            ))}
          </Container>
        </div>

        {/* Direct answer */}
        <Section aria-labelledby="answer-title">
          <div className="grid grid-cols-[.75fr_1.25fr] gap-9 rounded-xl2 bg-navy p-9 text-white/84 shadow-card max-lg2:grid-cols-1 max-sm2:p-[25px_21px]">
            <div>
              <Eyebrow tone="amber">Direct answer</Eyebrow>
              <h2 id="answer-title" className="text-white">
                What are abacus online classes?
              </h2>
              <p>
                Abacus online classes are live or recorded lessons that teach
                children to calculate using a physical bead frame and, later, an
                imagined abacus. In a quality live class, the teacher
                demonstrates a technique, observes each child’s hands and beads,
                corrects errors and assigns level-appropriate practice.
              </p>
            </div>
            <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 max-sm2:grid-cols-1">
              {[
                ["Best format", "Live, interactive and teacher-observed"],
                ["Starting readiness", "Usually age 5+, basic numbers and short-task attention"],
                ["Core equipment", "Physical abacus, worksheets, camera and clear desk"],
                ["Learning outcome", "Reliable technique, arithmetic fluency and mental visualisation"],
              ].map(([s, t]) => (
                <li key={s} className="rounded-[13px] border border-white/11 bg-white/8 p-[15px]">
                  <strong className="block text-[.76rem] uppercase tracking-[.08em] text-amber">{s}</strong>
                  <span className="text-[.89rem]">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* How it works */}
        <Section id="how" tone="mist" aria-labelledby="how-title">
          <Eyebrow>Built for online delivery</Eyebrow>
          <h2 id="how-title">How Abacus Experts’ live online classes work</h2>
          <p className="mb-[38px] max-w-[760px] text-[1.06rem] text-slate">
            Online teaching only works when the class design allows real
            observation. The child should never disappear behind slides,
            automated games or a crowded video grid.
          </p>
          <div className="grid grid-cols-3 gap-[19px] max-lg2:grid-cols-2 max-sm2:grid-cols-1">
            {HOW_CARDS.map(([title, text], i) => (
              <article key={title} className={CARD}>
                <div className={`${ICON} ${i % 2 === 1 ? "bg-amber-soft text-[#8a5c00]" : "bg-teal-soft text-teal"}`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-[9px] text-[1.2rem]">{title}</h3>
                <p className="m-0 text-[.91rem] text-slate">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Journey / process */}
        <Section tone="navy" aria-labelledby="journey-title">
          <Eyebrow>The learning journey</Eyebrow>
          <h2 id="journey-title">From physical beads to mental calculation</h2>
          <p className="mb-[38px] max-w-[760px] text-[1.06rem] text-white/66">
            An online abacus course should progress through observable skills
            instead of promoting children based only on attendance or a
            stopwatch score.
          </p>
          <div className="steps grid grid-cols-5 gap-3.5 max-lg2:grid-cols-2 max-sm2:grid-cols-1">
            {STEPS.map(([title, text], i) => (
              <article
                key={title}
                className={`step min-h-[225px] rounded-[17px] border border-white/11 bg-white/8 px-[18px] py-[23px] max-sm2:min-h-0 ${i === STEPS.length - 1 ? "max-lg2:col-span-2 max-lg2:min-h-0 max-sm2:col-auto" : ""}`}
              >
                <h3 className="text-[1.2rem]">{title}</h3>
                <p className="m-0 text-[.84rem] text-white/68">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Syllabus */}
        <Section id="syllabus" aria-labelledby="syllabus-title">
          <Eyebrow>Junior and senior pathways</Eyebrow>
          <h2 id="syllabus-title">Online abacus course syllabus</h2>
          <p className="mb-[38px] max-w-[760px] text-[1.06rem] text-slate">
            The right entry point depends on readiness and previous learning.
            The pathway below provides progressive coverage; individual pace may
            vary.
          </p>
          <div className="grid grid-cols-2 gap-[23px] max-sm2:grid-cols-1">
            <Programme
              tone="junior"
              pill="Approx. ages 5–8"
              title="Junior Online Abacus"
              lede="Shorter activity cycles and more concrete demonstration for first-time learners."
              items={["Parts of the abacus, posture and finger technique", "Number recognition, place value and bead representation", "Direct addition and subtraction", "Small friends and big friends/complement strategies", "Early multiplication, division and visualisation", "Accuracy-led mental arithmetic practice"]}
              meta={["45–50 minute classes", "Up to 6 learners"]}
            />
            <Programme
              tone="senior"
              pill="Approx. ages 8–13"
              title="Senior Online Abacus"
              lede="A faster progression for older beginners or learners continuing from earlier levels."
              items={["Technique calibration and place-value fluency", "Multi-digit mixed addition and subtraction", "Multiplication and division progression", "Decimals and extended operations when appropriate", "Advanced visualisation and mental arithmetic", "Accuracy, independence and controlled speed"]}
              meta={["55–60 minute classes", "Up to 8 learners"]}
            />
          </div>
          <div className="mt-[27px] overflow-x-auto rounded-[17px] border border-line bg-white">
            <table className="w-full min-w-[740px] border-collapse">
              <thead>
                <tr>
                  {["Stage", "Concepts", "Online teaching method", "Progress evidence"].map((h) => (
                    <th key={h} className="border-b border-line bg-navy px-[17px] py-[15px] text-left align-top text-[.79rem] tracking-[.04em] text-white">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SYLLABUS_ROWS.map((row) => (
                  <tr key={row[0]} className="[&:last-child>td]:border-b-0">
                    {row.map((cell, i) => (
                      <td key={i} className={`border-b border-line px-[17px] py-[15px] align-top text-[.88rem] ${i === 0 ? "font-extrabold text-navy" : "text-slate"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Inside a live session */}
        <Section tone="mist" aria-labelledby="class-title">
          <div className="grid grid-cols-[.7fr_1.3fr] items-start gap-9 max-lg2:grid-cols-1">
            <div>
              <Eyebrow>Inside a live session</Eyebrow>
              <h2 id="class-title">What happens during an online abacus class?</h2>
              <p className="text-slate">
                A strong virtual class alternates instruction and observation.
                Continuous screen sharing or one-way lecturing is not enough for
                a hands-on skill.
              </p>
            </div>
            <div className="grid gap-[11px]">
              {TIMELINE.map(([time, title, text]) => (
                <div key={title} className="grid grid-cols-[82px_1fr] gap-3.5 rounded-[13px] border border-line bg-white p-[15px] max-sm2:grid-cols-[68px_1fr]">
                  <b className="text-[.8rem] text-teal">{time}</b>
                  <div>
                    <strong className="block text-[.93rem] text-navy">{title}</strong>
                    <span className="text-[.82rem] text-slate">{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Compare formats */}
        <Section id="compare" aria-labelledby="compare-title">
          <Eyebrow>Not all digital learning is equal</Eyebrow>
          <h2 id="compare-title">Live online abacus class vs recorded course vs app</h2>
          <p className="mb-[38px] max-w-[760px] text-[1.06rem] text-slate">
            Parents searching for the best online abacus classes should first
            confirm what “online” actually means. A video library, automated app
            and live teacher-led batch solve different problems.
          </p>
          <div className="overflow-x-auto rounded-[17px] border border-line bg-white">
            <table className="w-full min-w-[740px] border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-line bg-navy px-[17px] py-[15px] text-left align-top text-[.79rem] tracking-[.04em] text-white">Quality factor</th>
                  <th className="border-b border-line bg-teal px-[17px] py-[15px] text-left align-top text-[.79rem] tracking-[.04em] text-white">Live teacher-led class</th>
                  <th className="border-b border-line bg-[#5c6b78] px-[17px] py-[15px] text-left align-top text-[.79rem] tracking-[.04em] text-white">Recorded course</th>
                  <th className="border-b border-line bg-[#8b6a1d] px-[17px] py-[15px] text-left align-top text-[.79rem] tracking-[.04em] text-white">Practice app</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row[0]} className="[&:last-child>td]:border-b-0">
                    {row.map((cell, i) => (
                      <td key={i} className={`border-b border-line px-[17px] py-[15px] align-top text-[.88rem] ${i === 0 ? "font-extrabold text-navy" : "text-slate"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Home setup */}
        <Section tone="navy" aria-labelledby="setup-title">
          <Eyebrow>Simple home setup</Eyebrow>
          <h2 id="setup-title">What your child needs to learn abacus online</h2>
          <p className="mb-[38px] max-w-[760px] text-[1.06rem] text-white/66">
            A dedicated room is not required. Clear visibility and a consistent
            learning routine matter more than expensive technology.
          </p>
          <div className="grid grid-cols-4 gap-4 max-lg2:grid-cols-2 max-sm2:grid-cols-1">
            {SETUP.map(([title, text], i) => (
              <article key={title} className="rounded-[17px] border border-white/11 bg-white/8 p-[22px]">
                <b className="mb-4 grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-amber text-deep">{i + 1}</b>
                <h3 className="text-[1.2rem]">{title}</h3>
                <p className="m-0 text-[.84rem] text-white/68">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Benefits & boundaries */}
        <Section tone="mist" aria-labelledby="benefits-title">
          <Eyebrow>Benefits and boundaries</Eyebrow>
          <h2 id="benefits-title">What online abacus training can—and cannot—do</h2>
          <p className="mb-[38px] max-w-[760px] text-[1.06rem] text-slate">
            Credible programmes describe the learning mechanism and measure
            progress. They do not promise “whole-brain activation,” photographic
            memory, a higher IQ or guaranteed school marks.
          </p>
          <div className="grid grid-cols-3 gap-[19px] max-lg2:grid-cols-2 max-sm2:grid-cols-1">
            {BENEFITS.map(([icon, title, text], i) => (
              <article key={title} className={CARD}>
                <div className={`${ICON} ${i % 2 === 1 ? "bg-amber-soft text-[#8a5c00]" : "bg-teal-soft text-teal"}`}>{icon}</div>
                <h3 className="mb-[9px] text-[1.2rem]">{title}</h3>
                <p className="m-0 text-[.91rem] text-slate">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-[12px] border border-[#f0d58b] border-l-[5px] border-l-amber bg-[#fffaf0] px-[23px] py-[21px] text-[.91rem] text-[#514526]">
            <strong className="text-navy">Research note:</strong> Controlled
            studies have found arithmetic benefits for some learners, while ease
            of acquisition and broader transfer vary. One classroom-randomised
            trial found older first-school learners acquired the skill more
            successfully than younger learners. See the{" "}
            <a className="font-extrabold text-[#075f72]" href="https://jnc.psychopen.eu/index.php/jnc/article/view/5761/5761.html" target="_blank" rel="noopener noreferrer">classroom study</a>{" "}
            and{" "}
            <a className="font-extrabold text-[#075f72]" href="https://langcog.stanford.edu/papers_new/barner-2015-childdev.pdf" target="_blank" rel="noopener noreferrer">randomised controlled trial</a>.
          </div>
        </Section>

        {/* Choose checklist */}
        <Section aria-labelledby="choose-title">
          <Eyebrow>Parent’s selection checklist</Eyebrow>
          <h2 id="choose-title">How to choose the best online abacus classes for kids</h2>
          <p className="mb-[38px] max-w-[760px] text-[1.06rem] text-slate">
            Do not choose only by price, certificate or a speed-calculation
            video. Observe a real class or assessment and verify how the child
            will actually be taught.
          </p>
          <div className="grid grid-cols-2 gap-[15px] max-sm2:grid-cols-1">
            {CHOOSE.map(([title, text], i) => (
              <article key={title} className="flex gap-3.5 rounded-[15px] border border-line bg-white p-5">
                <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-full bg-amber text-[.76rem] font-black text-deep">{i + 1}</span>
                <div>
                  <h3 className="mb-[5px] text-[1rem]">{title}</h3>
                  <p className="m-0 text-[.86rem] text-slate">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Fees */}
        <Section id="fees" tone="mist" aria-labelledby="fees-title">
          <div className="grid grid-cols-[.85fr_1.15fr] items-center gap-[30px] rounded-xl2 border border-line bg-white p-[35px] max-lg2:grid-cols-1 max-sm2:p-[25px_21px]">
            <div>
              <Eyebrow>Transparent comparison</Eyebrow>
              <h2 id="fees-title">Abacus online classes fees: what should be included?</h2>
              <p className="text-slate">
                Fees vary across India according to format, teacher time, group
                size, number of classes, level duration, materials and
                assessment. Ask for an all-inclusive written fee sheet before
                payment.
              </p>
              <Button href="#assessment">Request current fees and batches</Button>
            </div>
            <div className="grid gap-[9px]">
              {FEE_ITEMS.map((t) => (
                <div key={t} className="flex gap-2.5 rounded-[11px] bg-mist px-3.5 py-3 text-[.87rem] text-slate">
                  <b className="text-teal">✓</b>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Lead form / assessment */}
        <Section aria-labelledby="assessment-title" containerClassName="max-w-[820px]">
          <div id="assessment" className="rounded-xl2 border border-line bg-white p-[29px] shadow-card max-sm2:p-[25px_21px]">
            <Eyebrow>Free online readiness assessment</Eyebrow>
            <h2 id="assessment-title" className="mb-2 text-[1.55rem]">
              Find the right starting level for your child
            </h2>
            <p className="text-[.9rem] text-slate">
              Tell us your child’s age and experience. We’ll help you evaluate
              readiness, pathway, class length, batch and current fee options.
            </p>
            <LeadForm variant="online" />
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" tone="mist" aria-labelledby="faq-title">
          <Eyebrow>Parent questions answered</Eyebrow>
          <h2 id="faq-title">Abacus online classes: FAQs</h2>
          <p className="mb-[38px] max-w-[760px] text-[1.06rem] text-slate">
            Practical answers about readiness, live teaching, devices, practice,
            syllabus, progress, fees and safety.
          </p>
          <Faq items={FAQS} />
        </Section>

        {/* Final CTA */}
        <Section>
          <div className="grid grid-cols-[1fr_.75fr] items-center gap-[42px] rounded-xl2 bg-navy p-[42px] text-white/82 max-lg2:grid-cols-1 max-sm2:p-[25px_21px]">
            <div>
              <Eyebrow>Start with the right fit</Eyebrow>
              <h2 className="text-white">
                See whether live online abacus learning suits your child
              </h2>
              <p>
                A readiness assessment helps you understand the appropriate
                pathway, class length, equipment, practice expectation, batch and
                next step before enrolling.
              </p>
            </div>
            <div className="grid gap-[11px]">
              <Button href="#assessment">Book free readiness assessment</Button>
              <Button variant="secondaryOnDark" href="#assessment">
                Ask on WhatsApp
              </Button>
              <p className="m-0 text-center text-[.74rem] text-white/57">
                No obligation. Ask for current batches and the written fee sheet.
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer
        columns={FOOTER_COLUMNS}
        tagline="Live, level-based online abacus and mental arithmetic learning for children, with guided practice and parent-visible progress."
        whatsappMessage="Hello Abacus Experts, I would like to know about abacus online classes and book a readiness assessment."
        copyright="Abacus Experts. Educational outcomes vary by learner; no result is guaranteed."
      />
      <MobileCta whatsappMessage="Hello Abacus Experts, I would like to know about abacus online classes and book a readiness assessment." />
    </>
  );
}
