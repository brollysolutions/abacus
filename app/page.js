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
import { CLASSES_MENU, CLASS_LINKS, ROUTES } from "@/lib/nav";
import { BUSINESS, absoluteUrl } from "@/lib/business";
import { pageOpenGraph } from "@/lib/seo";

export const metadata = {
  title: "Abacus Experts | Live Abacus Classes for Kids, Online & Hyderabad",
  description:
    "Abacus Experts teaches children aged 5–13 mental arithmetic through live, level-based abacus classes — online across India and in Hyderabad. Book a free readiness assessment.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: { canonical: "/" },
  openGraph: pageOpenGraph({
    url: "/",
    title: "Abacus Experts | Live Abacus Classes for Kids",
    description:
      "Live, accuracy-first abacus and mental arithmetic learning for children — online and in Hyderabad.",
  }),
  twitter: {
    card: "summary",
    title: "Abacus Experts | Live Abacus Classes for Kids",
    description:
      "Small live batches, a written syllabus and parent-visible progress. Start with a free readiness assessment.",
  },
};

const NAV = [
  { href: "#why", label: "Why us" },
  CLASSES_MENU,
  { href: "#programmes", label: "Programmes" },
  { href: "#how", label: "How it works" },
  { href: "#faq", label: "FAQs" },
];

const FORMATS = [
  {
    href: ROUTES.online,
    tone: "teal",
    pill: "Available across India",
    title: "Abacus online classes",
    lede: "Live, teacher-led lessons your child joins from home on a physical abacus, with the camera positioned so the trainer can see hands and beads.",
    points: [
      "Small level-matched batches",
      "Real-time technique correction",
      "No commute; flexible batch times",
      "Junior and senior pathways",
    ],
    cta: "Explore online classes",
  },
  {
    href: ROUTES.hyderabad,
    tone: "amber",
    pill: "Hyderabad, Telangana",
    title: "Abacus classes in Hyderabad",
    lede: "The same level-based programme for families in Hyderabad, with guidance on choosing between a nearby centre and a live online batch.",
    points: [
      "Areas across the city covered",
      "In-person or online, your choice",
      "Level-matched groups, not mixed",
      "Written fees and policies",
    ],
    cta: "See Hyderabad classes",
  },
];

const WHY_CARDS = [
  ["Placement before enrolment", "Every child starts with a free readiness check — number recognition, counting, attention and previous learning — so nobody is pushed into the wrong level."],
  ["Small, level-matched batches", "Up to six junior learners and up to eight senior learners, so the trainer can watch each child's technique and hear each child's answer."],
  ["Technique the teacher can see", "Lessons are built around observation. The trainer corrects finger movement and bead placement, not just the final answer."],
  ["Accuracy before speed", "Children move up when method, place value and independence are stable — not because a stopwatch or a term calendar says so."],
  ["A written syllabus", "Each level states the concepts covered, the practice expected, how it is assessed and what the child must demonstrate to progress."],
  ["Progress parents can read", "Updates cover technique, accuracy, independence, visualisation and practice — in plain language, with the next step spelled out."],
];

const STEPS = [
  ["Free readiness assessment", "We meet your child, check basic number skills and recommend a starting level — or a later start if that suits better."],
  ["Level-matched placement", "Junior or senior pathway, with an entry point that is challenging but achievable for your child."],
  ["Live guided classes", "Twice-weekly lessons: demonstration, guided bead work, individual checks and immediate correction."],
  ["Short home practice", "Focused worksheets and bead drills — usually 10–15 minutes on several days, not hours of homework."],
  ["Review and progression", "Technique, accuracy, independence and visualisation are checked before the next level opens."],
];

const PRINCIPLES = [
  ["Physical abacus first", "Foundation levels use a real bead frame. A digital abacus is not a substitute while finger technique is still forming."],
  ["Explain, don't just answer", "Children are asked to demonstrate or talk through a step, which surfaces guessing that a correct answer can hide."],
  ["Correct calmly and early", "Small movement errors are fixed in the same lesson, before they harden into habits that are difficult to unlearn."],
  ["Honest about limits", "We describe what abacus practice can support, and we do not promise IQ gains, photographic memory or guaranteed marks."],
];

const AUDIENCE = [
  ["Ages 5–8", "Junior pathway", "Shorter activity cycles, concrete demonstration and plenty of repetition for first-time learners."],
  ["Ages 8–13", "Senior pathway", "A faster progression for older beginners or children continuing from earlier abacus levels."],
  ["Returning learners", "Placement check", "Children who studied abacus before are re-assessed so gaps are fixed rather than skipped over."],
];

const FEE_ITEMS = [
  "Total tuition and the number of live classes included",
  "Class duration, frequency and maximum batch size",
  "Physical abacus, workbook and worksheet costs",
  "Assessment, exam and certificate charges",
  "Makeup, pause, transfer, cancellation and refund terms",
];

const FAQS = [
  ["What does Abacus Experts teach?", "We teach children to calculate on a physical abacus and, as they progress, with an imagined abacus. The pathway runs from tool orientation and place value through addition, subtraction, multiplication, division and mental visualisation, with accuracy checked at every level."],
  ["Do you offer online classes or classroom classes?", "Both. Live online classes are available to families across India, and we run a Hyderabad programme for families who prefer or are comparing an in-person option. The syllabus, batch sizes and progression rules are the same in either format."],
  ["What age should my child start?", "Many children are ready from about age five. The useful signals are basic number recognition, reliable counting, following short instructions and staying with a guided activity for a while. Readiness matters more than the birthday, which is why we assess first."],
  ["How long is a class and how often?", "A practical rhythm is two live classes each week. Junior learners generally do better with 45–50 minute lessons; senior learners usually manage 55–60 minutes. Placement and attention guide the final schedule."],
  ["How much home practice is expected?", "Short and consistent beats long and occasional. Most beginners start with 10–15 focused minutes on several days a week, and the trainer reduces the load if accuracy or confidence starts slipping."],
  ["What does my child need to get started?", "A curriculum-compatible physical abacus, workbook, pencil and a clear desk. For online classes, add a device with a camera and a stable connection, positioned so the trainer can see the working hand and the abacus."],
  ["Will abacus improve my child's school maths?", "Abacus practice can support arithmetic fluency and comfort with numbers, which often helps. It does not cover the whole school curriculum — word problems, geometry, reasoning and proof still belong to classroom maths — and no provider should guarantee marks."],
  ["Is the free assessment really free?", "Yes. The readiness assessment carries no payment and no obligation. Its purpose is to work out whether abacus suits your child right now, and if so, where they should start."],
];

const FOOTER_COLUMNS = [
  {
    heading: "Classes",
    items: [
      ...CLASS_LINKS,
      { href: "#programmes", label: "Junior & senior programmes" },
      { href: "#how", label: "How it works" },
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

const WHATSAPP_MSG =
  "Hello Abacus Experts, I would like to know about your abacus classes and book a free readiness assessment.";

/* Absolute @ids so every page in the site refers to the SAME
   Organization and WebSite node rather than a per-page duplicate. */
const ORG_ID = `${BUSINESS.url}/#organization`;
const SITE_ID = `${BUSINESS.url}/#website`;

const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: BUSINESS.name,
      url: BUSINESS.url,
      email: BUSINESS.email,
      slogan: "Measured Mental Maths. Confident Learners.",
      description:
        "Live, level-based abacus and mental arithmetic learning for children, delivered online across India and in Hyderabad.",
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      name: BUSINESS.name,
      url: BUSINESS.url,
      inLanguage: "en-IN",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "WebPage",
      "@id": `${absoluteUrl("/")}#webpage`,
      url: absoluteUrl("/"),
      name: "Abacus Experts | Live Abacus Classes for Kids",
      description:
        "Home page for Abacus Experts: live abacus classes for children aged 5–13, available online and in Hyderabad, with readiness assessment, level-based syllabus and parent progress reports.",
      inLanguage: "en-IN",
      isPartOf: { "@id": SITE_ID },
      about: [
        { "@type": "Thing", name: "Abacus" },
        { "@type": "Thing", name: "Mental arithmetic" },
      ],
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

const CARD = "rounded-[19px] border border-line bg-white p-[25px]";
const ICON =
  "mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-[13px] font-black";

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

export default function Home() {
  return (
    <>
      <JsonLd data={JSONLD} />
      <SkipLink />
      <Notice>
        <strong>New batches open:</strong> Start with a free child-readiness
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
              <Eyebrow>Live abacus learning for children aged 5–13</Eyebrow>
              <h1 className="mb-[22px] text-[clamp(2.45rem,6.2vw,5rem)] max-sm2:text-[2.55rem]">
                Mental maths built on{" "}
                <span className="text-teal">method, not shortcuts</span>
              </h1>
              <p className="max-w-[760px] text-[clamp(1.04rem,2vw,1.23rem)] text-slate">
                Abacus Experts teaches children to calculate on a physical
                abacus and then in their heads — in small live batches, with a
                written syllabus, real-time correction and progress you can
                actually read. Available online across India and in Hyderabad.
              </p>
              <div className="my-6 flex flex-wrap gap-3 max-sm2:[&>a]:w-full">
                <Button href="#assessment">
                  Book a free readiness assessment
                </Button>
                <Button variant="secondary" href="#classes">
                  Compare our classes
                </Button>
              </div>
              <ul
                className="m-0 flex list-none flex-wrap gap-x-[18px] gap-y-2.5 p-0"
                aria-label="Programme highlights"
              >
                {[
                  "Live—not pre-recorded",
                  "Physical abacus practice",
                  "Small level-matched batches",
                  "Parent progress updates",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-[7px] text-[.89rem] font-[760] text-navy"
                  >
                    <span className="grid h-[19px] w-[19px] place-items-center rounded-full bg-teal-soft text-[.72rem] font-black text-teal">
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Class illustration */}
            <div
              className="relative rounded-[27px] border border-navy/12 bg-white p-[15px] shadow-card"
              aria-label="Illustration of an Abacus Experts class"
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
                      className={`mr-[-8px] grid h-9 w-9 place-items-center rounded-full border-[3px] border-navy text-[.7rem] font-black text-navy ${
                        i === 3 ? "bg-amber-soft" : "bg-teal-soft"
                      }`}
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
        <div
          className="border-y border-line bg-white"
          aria-label="Programme facts"
        >
          <Container className="grid grid-cols-4 max-lg2:grid-cols-2 max-sm2:grid-cols-1">
            {[
              ["Approx. ages 5–13", "Readiness matters more than age alone"],
              ["Two live classes a week", "Plus short, focused home practice"],
              ["Up to 6 junior learners", "Designed for closer beginner observation"],
              ["Up to 8 senior learners", "Level-matched groups, never mixed"],
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

        {/* Choose a format */}
        <Section id="classes" aria-labelledby="classes-title">
          <Eyebrow>Two ways to learn</Eyebrow>
          <h2 id="classes-title">Choose the class that fits your family</h2>
          <p className="mb-[38px] max-w-[760px] text-[1.06rem] text-slate">
            The curriculum, batch sizes and progression rules are identical.
            Only the delivery differs — pick whichever your child will attend
            most consistently.
          </p>
          <div className="grid grid-cols-2 gap-[23px] max-sm2:grid-cols-1">
            {FORMATS.map((f) => {
              const isTeal = f.tone === "teal";
              return (
                <article
                  key={f.href}
                  className="relative flex flex-col overflow-hidden rounded-xl2 border border-line bg-white p-[30px] shadow-card max-sm2:p-[27px_22px]"
                >
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-[7px] ${
                      isTeal ? "bg-teal" : "bg-amber"
                    }`}
                  />
                  <span
                    className={`mb-[15px] inline-flex self-start rounded-full px-2.5 py-1.5 text-[.74rem] font-extrabold ${
                      isTeal
                        ? "bg-teal-soft text-[#076567]"
                        : "bg-amber-soft text-[#7a5200]"
                    }`}
                  >
                    {f.pill}
                  </span>
                  <h3 className="text-[1.42rem]">{f.title}</h3>
                  <p className="text-slate">{f.lede}</p>
                  <ul className="m-0 mt-2 grid list-none gap-2 p-0">
                    {f.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-[.9rem] text-slate"
                      >
                        <b className={isTeal ? "text-teal" : "text-[#8a5c00]"}>
                          ✓
                        </b>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-[25px]">
                    <Button
                      href={f.href}
                      variant={isTeal ? "primary" : "secondary"}
                    >
                      {f.cta}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        {/* Why us */}
        <Section id="why" tone="mist" aria-labelledby="why-title">
          <Eyebrow>Why parents choose us</Eyebrow>
          <h2 id="why-title">What makes an Abacus Experts class different</h2>
          <p className="mb-[38px] max-w-[760px] text-[1.06rem] text-slate">
            Abacus is a hands-on skill. Everything below exists so a trainer can
            actually see what each child is doing and correct it while it still
            matters.
          </p>
          <div className="grid grid-cols-3 gap-[19px] max-lg2:grid-cols-2 max-sm2:grid-cols-1">
            {WHY_CARDS.map(([title, text], i) => (
              <article key={title} className={CARD}>
                <div
                  className={`${ICON} ${
                    i % 2 === 1
                      ? "bg-amber-soft text-[#8a5c00]"
                      : "bg-teal-soft text-teal"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-[9px] text-[1.2rem]">{title}</h3>
                <p className="m-0 text-[.91rem] text-slate">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Programmes */}
        <Section id="programmes" aria-labelledby="programmes-title">
          <Eyebrow>Junior and senior pathways</Eyebrow>
          <h2 id="programmes-title">Our programmes</h2>
          <p className="mb-[38px] max-w-[760px] text-[1.06rem] text-slate">
            Both pathways cover the full progression from bead calculation to
            mental arithmetic. The entry point depends on the readiness
            assessment, not only on age.
          </p>
          <div className="grid grid-cols-2 gap-[23px] max-sm2:grid-cols-1">
            <Programme
              tone="junior"
              pill="Approx. ages 5–8"
              title="Junior Abacus"
              lede="Shorter activity cycles and more concrete demonstration for first-time learners."
              items={[
                "Parts of the abacus, posture and finger technique",
                "Number recognition, place value and bead representation",
                "Direct addition and subtraction",
                "Small friends and big friends/complement strategies",
                "Early multiplication, division and visualisation",
                "Accuracy-led mental arithmetic practice",
              ]}
              meta={["45–50 minute classes", "Up to 6 learners"]}
            />
            <Programme
              tone="senior"
              pill="Approx. ages 8–13"
              title="Senior Abacus"
              lede="A faster progression for older beginners or learners continuing from earlier levels."
              items={[
                "Technique calibration and place-value fluency",
                "Multi-digit mixed addition and subtraction",
                "Multiplication and division progression",
                "Decimals and extended operations when appropriate",
                "Advanced visualisation and mental arithmetic",
                "Accuracy, independence and controlled speed",
              ]}
              meta={["55–60 minute classes", "Up to 8 learners"]}
            />
          </div>
          <div className="mt-[27px] grid grid-cols-3 gap-4 max-sm2:grid-cols-1">
            {AUDIENCE.map(([age, label, text]) => (
              <div
                key={age}
                className="rounded-[15px] border border-line bg-white p-5"
              >
                <strong className="block text-[.76rem] uppercase tracking-[.08em] text-teal">
                  {age}
                </strong>
                <h3 className="mb-[5px] mt-1 text-[1.05rem]">{label}</h3>
                <p className="m-0 text-[.86rem] text-slate">{text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* How it works */}
        <Section id="how" tone="navy" aria-labelledby="how-title">
          <Eyebrow>From enquiry to first level</Eyebrow>
          <h2 id="how-title">How it works</h2>
          <p className="mb-[38px] max-w-[760px] text-[1.06rem] text-white/66">
            Five steps, in order. Nothing is skipped to fill a batch, and no
            child is promoted on attendance alone.
          </p>
          <div className="steps grid grid-cols-5 gap-3.5 max-lg2:grid-cols-2 max-sm2:grid-cols-1">
            {STEPS.map(([title, text], i) => (
              <article
                key={title}
                className={`step min-h-[225px] rounded-[17px] border border-white/11 bg-white/8 px-[18px] py-[23px] max-sm2:min-h-0 ${
                  i === STEPS.length - 1
                    ? "max-lg2:col-span-2 max-lg2:min-h-0 max-sm2:col-auto"
                    : ""
                }`}
              >
                <h3 className="text-[1.2rem]">{title}</h3>
                <p className="m-0 text-[.84rem] text-white/68">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Teaching principles */}
        <Section tone="mist" aria-labelledby="principles-title">
          <div className="grid grid-cols-[.7fr_1.3fr] items-start gap-9 max-lg2:grid-cols-1">
            <div>
              <Eyebrow>How we teach</Eyebrow>
              <h2 id="principles-title">Our teaching principles</h2>
              <p className="text-slate">
                These are the rules we hold ourselves to, and the same ones we
                suggest you use when comparing any abacus provider.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-[15px] max-sm2:grid-cols-1">
              {PRINCIPLES.map(([title, text], i) => (
                <article
                  key={title}
                  className="rounded-[15px] border border-line bg-white p-5"
                >
                  <span className="mb-3 grid h-[34px] w-[34px] place-items-center rounded-full bg-amber text-[.76rem] font-black text-deep">
                    {i + 1}
                  </span>
                  <h3 className="mb-[5px] text-[1.05rem]">{title}</h3>
                  <p className="m-0 text-[.86rem] text-slate">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-[12px] border border-[#f0d58b] border-l-[5px] border-l-amber bg-[#fffaf0] px-[23px] py-[21px] text-[.91rem] text-[#514526]">
            <strong className="text-navy">What we don’t claim:</strong> abacus
            training does not raise IQ, create photographic memory, activate a
            “whole brain” or guarantee school marks. Controlled studies have
            found arithmetic benefits for some learners, with ease of
            acquisition and broader transfer varying by child. Read the{" "}
            <a
              className="font-extrabold text-[#075f72]"
              href="https://jnc.psychopen.eu/index.php/jnc/article/view/5761/5761.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              classroom study
            </a>{" "}
            and{" "}
            <a
              className="font-extrabold text-[#075f72]"
              href="https://langcog.stanford.edu/papers_new/barner-2015-childdev.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              randomised controlled trial
            </a>
            .
          </div>
        </Section>

        {/* Fees */}
        <Section id="fees" aria-labelledby="fees-title">
          <div className="grid grid-cols-[.85fr_1.15fr] items-center gap-[30px] rounded-xl2 border border-line bg-white p-[35px] max-lg2:grid-cols-1 max-sm2:p-[25px_21px]">
            <div>
              <Eyebrow>Transparent from the start</Eyebrow>
              <h2 id="fees-title">Fees, in writing, before you pay</h2>
              <p className="text-slate">
                Fees depend on format, class frequency, level length, materials
                and assessments. Whatever you are quoted — by us or anyone else
                — ask for the whole list below on paper first.
              </p>
              <Button href="#assessment">Request current fees and batches</Button>
            </div>
            <div className="grid gap-[9px]">
              {FEE_ITEMS.map((t) => (
                <div
                  key={t}
                  className="flex gap-2.5 rounded-[11px] bg-mist px-3.5 py-3 text-[.87rem] text-slate"
                >
                  <b className="text-teal">✓</b>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Lead form */}
        <Section
          tone="mist"
          aria-labelledby="assessment-title"
          containerClassName="max-w-[820px]"
        >
          <div
            id="assessment"
            className="rounded-xl2 border border-line bg-white p-[29px] shadow-card max-sm2:p-[25px_21px]"
          >
            <Eyebrow>Free readiness assessment</Eyebrow>
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
        <Section id="faq" aria-labelledby="faq-title">
          <Eyebrow>Parent questions answered</Eyebrow>
          <h2 id="faq-title">Frequently asked questions</h2>
          <p className="mb-[38px] max-w-[760px] text-[1.06rem] text-slate">
            The essentials about age, format, practice and outcomes. Each class
            page carries a longer, more specific list.
          </p>
          <Faq items={FAQS} />
          <p className="mt-7 text-center text-[.9rem] text-slate">
            More questions about a specific format?{" "}
            <Link
              href={ROUTES.online}
              className="font-extrabold text-teal no-underline hover:underline"
            >
              Online class FAQs
            </Link>{" "}
            ·{" "}
            <Link
              href={ROUTES.hyderabad}
              className="font-extrabold text-teal no-underline hover:underline"
            >
              Hyderabad class FAQs
            </Link>
          </p>
        </Section>

        {/* Final CTA */}
        <Section tone="mist">
          <div className="grid grid-cols-[1fr_.75fr] items-center gap-[42px] rounded-xl2 bg-navy p-[42px] text-white/82 max-lg2:grid-cols-1 max-sm2:p-[25px_21px]">
            <div>
              <Eyebrow>Start with the right fit</Eyebrow>
              <h2 className="text-white">
                See whether abacus learning suits your child
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
        tagline="Live, level-based abacus and mental arithmetic learning for children, with guided practice and parent-visible progress."
        whatsappMessage={WHATSAPP_MSG}
        copyright="Abacus Experts. Educational outcomes vary by learner; no result is guaranteed."
      />
      <MobileCta whatsappMessage={WHATSAPP_MSG} />
    </>
  );
}
