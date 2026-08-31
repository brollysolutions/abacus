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
  title: "Abacus Classes in Hyderabad for Kids | Abacus Experts",
  description:
    "Explore live abacus classes in Hyderabad for kids aged 5–13. Compare levels, formats, practice and progress. Book a free readiness assessment.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: { canonical: "/abacus-classes-in-hyderabad" },
  openGraph: pageOpenGraph({
    url: "/abacus-classes-in-hyderabad",
    title: "Abacus Classes in Hyderabad for Kids | Abacus Experts",
    description:
      "A clear, level-based abacus programme with live teaching, guided practice and parent-visible progress.",
  }),
  twitter: {
    card: "summary",
    title: "Abacus Classes in Hyderabad for Kids | Abacus Experts",
    description:
      "Compare age readiness, curriculum, class formats, practice and progress tracking. Book a free assessment.",
  },
};

const NAV = [
  { href: "/", label: "Home" },
  CLASSES_MENU,
  { href: "#programme", label: "Programme" },
  { href: "#formats", label: "Online vs classroom" },
  { href: "#fees", label: "Fees" },
  { href: "#questions", label: "Parent FAQs" },
];

const TRUST = [
  ["Readiness-led placement", "Age plus current number skills"],
  ["Structured progression", "Physical abacus to visualisation"],
  ["Short regular practice", "Designed around accuracy and habit"],
  ["Clear parent updates", "Skills, accuracy and next steps"],
];

const ANSWER_LIST = [
  ["Typical readiness", "About age 5+, with basic number recognition and attention"],
  ["Learning rhythm", "Live instruction plus short, consistent home practice"],
  ["Core skills", "Addition, subtraction, multiplication, division and mental visualisation"],
  ["Good programme sign", "Accuracy, technique and understanding are checked before speed"],
];

const BENEFITS = [
  ["Calculation fluency", "Repeated bead patterns help children practise arithmetic operations and become more comfortable manipulating numbers."],
  ["Accuracy habits", "Students learn to follow a sequence, check place value and correct technique before trying to calculate faster."],
  ["Mental visualisation", "As learners progress, they practise representing bead positions mentally instead of relying only on the physical tool."],
  ["Focused practice", "Short timed and untimed activities give children a clear task, immediate correction and a visible sense of progress."],
  ["Number confidence", "Mastering a level can help a child feel more capable with arithmetic, especially when the learning pace stays supportive."],
  ["Learning discipline", "Regular practice builds a repeatable routine: understand, attempt, check, correct and try again."],
];

const CURRICULUM_ROWS = [
  ["Foundation", "Tool orientation, place value, number representation, finger movement and direct operations", "Correct bead setting, controlled movement and fewer avoidable errors"],
  ["Core arithmetic", "Complement strategies, mixed addition and subtraction, multiplication and division", "Stable method, improving accuracy and less dependence on prompts"],
  ["Visualisation", "Moving from physical beads to imagined bead patterns for mental arithmetic", "Ability to explain or demonstrate the method without guessing"],
  ["Fluency", "Larger numbers, mixed operations, timed and untimed work, correction routines", "Accuracy remains stable as pace gradually increases"],
  ["Mastery", "Independent mental calculation, sustained practice and advanced level targets", "Consistent performance across different question sets, not memorised worksheets"],
];

const STEPS = [
  ["Readiness check", "Review number recognition, counting, instructions, attention and previous abacus experience."],
  ["Right-level placement", "Choose the junior or senior pathway and an entry point that is challenging but manageable."],
  ["Live instruction", "Teacher demonstrates, observes hand technique, corrects errors and checks understanding."],
  ["Short practice", "Targeted worksheets and bead drills reinforce the week’s skill without overwhelming the child."],
  ["Progress review", "Track technique, accuracy, independence, visualisation and only then sustainable speed."],
];

const COMPARE_ROWS = [
  ["Best for", "Families wanting citywide access, no commute and flexible batch choices", "Children who respond better to a physical learning environment and in-person peer routine"],
  ["What is essential", "Physical abacus, stable internet, correctly placed camera and a distraction-light space", "Safe, accessible centre, level-matched batch and visible teacher supervision"],
  ["Parent involvement", "Setup support may be useful for younger children; parents should not answer for the child", "Reliable travel and home-practice support between classes"],
  ["Quality check", "Teacher must see fingers and beads, call on each child and correct technique live", "Teacher should circulate, check individual work and avoid oversized mixed-level groups"],
  ["Hyderabad availability", "Ask about current batches accessible across the city", "Confirm the exact verified centre, trainer, schedule and seat availability before payment"],
];

const CHECKLIST = [
  ["Trainer preparation", "Ask who trains and observes teachers, and how technique or teaching problems are corrected."],
  ["Batch size and level match", "Confirm the actual number of children and whether beginners share a class with advanced learners."],
  ["Written curriculum", "Look for clear level outcomes, operations covered, assessment criteria and progression rules."],
  ["Correction quality", "Observe whether the trainer catches wrong bead movement and explains the fix calmly."],
  ["Accuracy before speed", "Avoid programmes that celebrate stopwatch scores while the child is guessing or using poor technique."],
  ["Practice expectations", "Ask how many minutes, how often, who checks work and what happens when a child struggles."],
  ["Transparent fees and policies", "Request tuition, kit, test, certificate, makeup, refund and transfer terms in writing."],
  ["Progress evidence", "Reports should show accuracy, method, independence and next steps—not only a generic certificate."],
];

const AREAS = ["Kukatpally", "KPHB", "Miyapur", "Nizampet", "Kondapur", "Gachibowli", "Madhapur", "Manikonda", "Narsingi", "Uppal", "Secunderabad", "Hitech City"];

const FEE_ITEMS = [
  "Total tuition and the number of classes included",
  "Duration of each class and expected home practice",
  "Abacus kit, workbook, assessment and certificate charges",
  "Missed-class, makeup, pause, transfer and refund rules",
  "Whether the quoted batch size is guaranteed or only an estimate",
];

const FAQS = [
  ["What is the best age to start abacus classes?", "Many children are ready from about age five, but readiness matters more than the birthday. Useful signs include basic number recognition, reliable one-to-one counting, following two-step instructions and engaging in a short guided activity. A readiness check helps avoid starting too early or placing the child at the wrong level."],
  ["Are abacus classes suitable for a 5-year-old?", "Yes, if the child recognises basic numbers, counts objects reliably and can join a short guided activity. Younger beginners need shorter lessons, larger movements, breaks and low-pressure practice. If these skills are still emerging, waiting or using a readiness programme can be better than forcing speed."],
  ["How long does an abacus course take?", "Abacus is normally taught through progressive levels, not as a one-time workshop. Total duration depends on the entry level, class frequency, attendance, practice consistency and accuracy. Ask for the learning outcome and assessment rule for every level instead of choosing only by a promised completion date."],
  ["How many classes and how much home practice are needed?", "A practical rhythm is two guided classes each week plus short, regular practice. Beginners often learn better from 10–15 focused minutes than from an occasional long session. The trainer should reduce or adjust work if technique and accuracy begin to fall."],
  ["Do online abacus classes work for children?", "Live online abacus classes can work when the group is small, the teacher sees the child’s hand movement and beads, and the learner uses a physical abacus and printed or digital worksheets. A parent may need to help set up the camera and learning space for younger children."],
  ["What do abacus classes cost in Hyderabad?", "Fees vary by group size, online or classroom format, level, class frequency, materials and assessments. Request an all-inclusive written fee sheet showing the number and length of classes, kit and workbook charges, tests, certification, makeup classes and refund or transfer rules."],
  ["Does abacus improve school maths marks?", "Abacus practice can support arithmetic fluency and comfort with numbers, but it cannot guarantee school marks. It does not replace the full school curriculum, conceptual understanding, fractions, geometry, word problems or the child’s classroom teacher. Treat it as a complementary skill programme."],
  ["Does abacus improve concentration, memory or IQ?", "Abacus lessons involve focused visual and motor practice, and research has explored arithmetic and working-memory effects. Results vary and broader transfer is not guaranteed. Avoid any institute promising a higher IQ, photographic memory, “whole-brain activation” or assured academic results."],
  ["What is the difference between abacus and Vedic Maths?", "Abacus starts with a physical place-value tool and later moves toward visualised bead movement. Vedic Maths teaches calculation strategies and patterns without a physical abacus. Abacus is often chosen for younger learners building arithmetic fluency; Vedic Maths may suit older learners who already understand operations. Individual readiness matters."],
  ["What should be included in an abacus syllabus?", "A good syllabus normally covers tool orientation, finger technique, place value, direct addition and subtraction, complement strategies, multiplication, division, visualisation and graduated mental arithmetic. Each level should state accuracy, independence and progression criteria."],
  ["What is a good batch size for abacus coaching?", "The right size depends on learner age, level and delivery format. What matters is whether the teacher can watch each child’s bead technique, ask individual questions and correct errors during the live class. Ask to observe a real batch rather than relying only on a brochure number."],
  ["How is a child’s progress measured?", "Progress should include correct bead technique, accuracy, calculation fluency, independent visualisation and confidence. Speed should increase only after accuracy is stable. Parents should receive a simple report with strengths, current gaps, practice guidance and the next level target."],
  ["What equipment is needed for online abacus classes?", "A correctly sized physical abacus, worksheets or workbook, pencil, eraser, stable internet, a device with camera and a clear desk are usually enough. The camera should show the child and bead movement without requiring the child to hold the device."],
  ["What happens if my child misses a class?", "Policies differ. Before enrolling, ask whether a recording, makeup class, worksheet explanation or alternate batch is offered; how many makeups are allowed; and whether the teacher checks the missed skill before the child continues."],
  ["Can we take a trial class before enrolling?", "A readiness assessment or observed introductory session is useful because it lets the parent evaluate the teacher’s explanations, corrections, pace and child interaction. It should also produce a clear recommendation for level, format, practice and next steps—not only a sales pitch."],
  ["How do I choose a safe and trustworthy kids’ programme?", "Verify the business identity, trainer details, classroom address or online process, parent communication, child-safeguarding rules, data collection and payment terms. Do not rely only on star ratings; ask for recent, verifiable references and never share unnecessary child data in an enquiry form."],
];

const FOOTER_COLUMNS = [
  {
    heading: "Explore",
    items: [
      { href: "/", label: "Home" },
      ...CLASS_LINKS,
      { href: "#programme", label: "Junior & senior programme" },
      { href: "#fees", label: "Fee checklist" },
      { href: "#questions", label: "Parent FAQs" },
      { href: "/privacy-policy/", label: "Privacy policy" },
    ],
  },
  {
    heading: "Contact",
    items: [
      { type: "phone" },
      { type: "whatsapp" },
      { type: "email" },
      { type: "text", label: "Hyderabad, Telangana" },
    ],
  },
];

const WHATSAPP_MSG =
  "Hello Abacus Experts, I would like to know about abacus classes in Hyderabad and book a readiness assessment.";

/* Same absolute @ids as every other page, so the graph nodes merge
   instead of duplicating per URL. */
const ORG_ID = `${BUSINESS.url}/#organization`;
const SITE_ID = `${BUSINESS.url}/#website`;
const PAGE_URL = absoluteUrl("/abacus-classes-in-hyderabad");

const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": ORG_ID, name: BUSINESS.name, url: BUSINESS.url, email: BUSINESS.email, slogan: "Measured Mental Maths. Confident Learners.", description: "A level-based abacus and mental arithmetic learning programme for children." },
    { "@type": "WebPage", "@id": `${PAGE_URL}#webpage`, url: PAGE_URL, name: "Abacus Classes in Hyderabad for Kids", description: "A parent guide to Abacus Experts classes in Hyderabad, including age readiness, curriculum, class formats, practice, fees and progress tracking.", inLanguage: "en-IN", about: [{ "@type": "Thing", name: "Abacus" }, { "@type": "Thing", name: "Mental arithmetic" }, { "@type": "City", name: "Hyderabad" }], isPartOf: { "@id": SITE_ID }, publisher: { "@id": ORG_ID } },
    { "@type": "Course", name: "Abacus Classes for Kids in Hyderabad", description: "Live, level-based abacus instruction progressing from physical bead calculation to mental visualisation and arithmetic.", provider: { "@id": ORG_ID }, educationalLevel: "Beginner to advanced school-age learners", inLanguage: "en-IN" },
    { "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};

const CARD = "rounded-[19px] border border-line bg-white p-[25px]";
const ICON = "mb-[19px] grid h-[46px] w-[46px] place-items-center rounded-[13px] font-black";

export default function HyderabadPage() {
  return (
    <>
      <JsonLd data={JSONLD} />
      <SkipLink />
      <Notice>
        <strong>Hyderabad admissions:</strong> Ask about the next live batch and
        a free child-readiness assessment.
      </Notice>
      <Header links={NAV} />

      <main id="main">
        {/* Hero with lead form */}
        <section
          id="top"
          className="relative overflow-hidden bg-[radial-gradient(circle_at_90%_10%,rgba(255,183,3,.22),transparent_28%),radial-gradient(circle_at_4%_90%,rgba(15,139,141,.14),transparent_26%),var(--color-warm)] pb-[66px] pt-[75px] max-sm2:pb-[55px] max-sm2:pt-12"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-[240px] -right-[210px] h-[380px] w-[380px] rounded-full border-[62px] border-teal/7"
          />
          <Container className="relative z-[1] grid grid-cols-[1.15fr_minmax(330px,.65fr)] items-start gap-[54px] max-lg2:grid-cols-1 max-lg2:gap-[38px]">
            <div className="pt-3.5">
              <Eyebrow>For children learning in Hyderabad</Eyebrow>
              <h1 className="mb-[22px] max-w-[820px] text-[clamp(2.35rem,6vw,4.9rem)] max-sm2:text-[2.55rem]">
                Abacus classes in Hyderabad that put{" "}
                <span className="text-teal">accuracy before speed</span>
              </h1>
              <p className="max-w-[760px] text-[clamp(1.03rem,2vw,1.24rem)] text-slate">
                Abacus Experts offers live, level-based abacus training for
                children aged about 5–13. Students learn with a physical abacus,
                build reliable number skills and gradually progress to mental
                arithmetic—while parents see what is being taught and how
                progress is measured.
              </p>
              <div className="my-7 flex flex-wrap gap-3 max-sm2:[&>a]:w-full">
                <Button href="#assessment">
                  Book a free readiness assessment
                </Button>
                <Button variant="secondary" href="#programme">
                  View the learning pathway
                </Button>
              </div>
              <ul
                className="m-0 flex list-none flex-wrap gap-x-[19px] gap-y-2.5 p-0"
                aria-label="Programme highlights"
              >
                {["Live guided teaching", "Junior and senior pathways", "Small-group attention", "Parent-visible progress"].map((t) => (
                  <li key={t} className="flex items-center gap-[7px] text-[.9rem] font-[750] text-navy">
                    <span className="grid h-[19px] w-[19px] place-items-center rounded-full bg-teal-soft text-[.72rem] font-black text-teal">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <aside
              id="assessment"
              className="relative rounded-xl2 border border-navy/10 bg-white p-[27px] shadow-card max-sm2:p-[23px_19px]"
              aria-labelledby="assessment-title"
            >
              <span className="absolute inset-x-0 top-0 h-1.5 rounded-t-xl2 bg-[linear-gradient(90deg,var(--color-amber),var(--color-teal))]" />
              <h2 id="assessment-title" className="mb-2 mt-1 text-[1.58rem]">
                Find your child’s right starting level
              </h2>
              <p className="text-[.91rem] text-slate">
                Share a few details. We’ll help you check readiness, suitable
                level and current Hyderabad batch options.
              </p>
              <LeadForm variant="hyderabad" />
            </aside>
          </Container>
        </section>

        {/* Trust strip */}
        <div className="border-y border-line bg-white" aria-label="Programme facts">
          <Container className="grid grid-cols-4 max-lg2:grid-cols-2 max-sm2:grid-cols-1">
            {TRUST.map(([s, t]) => (
              <div
                key={s}
                className="border-line px-[26px] py-[23px] [&:not(:last-child)]:border-r max-lg2:[&:nth-child(2)]:border-r-0 max-lg2:[&:nth-child(-n+2)]:border-b max-sm2:border-b max-sm2:border-r-0 max-sm2:px-[18px] max-sm2:[&:last-child]:border-b-0"
              >
                <strong className="mb-1 block text-[1rem] text-navy">{s}</strong>
                <span className="text-[.84rem] text-slate">{t}</span>
              </div>
            ))}
          </Container>
        </div>

        {/* Quick answer */}
        <Section aria-labelledby="quick-answer-title">
          <div className="relative grid grid-cols-[.7fr_1.3fr] gap-9 overflow-hidden rounded-xl2 bg-navy p-9 text-white/86 shadow-card max-lg2:grid-cols-1 max-sm2:p-[26px_21px]">
            <span aria-hidden className="pointer-events-none absolute -bottom-[60px] right-5 text-[210px] font-black leading-none text-white/5">?</span>
            <div>
              <Eyebrow tone="amber">Quick answer</Eyebrow>
              <h2 id="quick-answer-title" className="text-white">
                What are abacus classes?
              </h2>
              <p>
                Abacus classes teach children to represent numbers and calculate
                by moving beads on a place-value tool. With guided practice, many
                learners move from a physical abacus to imagining the bead
                movements for mental arithmetic.
              </p>
            </div>
            <ul className="relative z-[1] m-0 grid list-none grid-cols-2 gap-[13px] p-0 max-sm2:grid-cols-1">
              {ANSWER_LIST.map(([s, t]) => (
                <li key={s} className="rounded-[13px] border border-white/11 bg-white/9 p-[15px]">
                  <strong className="block text-[.77rem] uppercase tracking-[.08em] text-amber">{s}</strong>
                  <span className="text-[.9rem]">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Benefits */}
        <Section tone="mist" aria-labelledby="benefits-title">
          <Eyebrow>Purpose, without the hype</Eyebrow>
          <h2 id="benefits-title">Why parents consider abacus training for kids</h2>
          <p className="mb-[38px] max-w-[730px] text-[1.06rem] text-slate">
            A well-run abacus course is best understood as structured
            mental-arithmetic practice. It can make number work more concrete,
            visible and repeatable—but it should complement school maths, not
            replace it.
          </p>
          <div className="grid grid-cols-3 gap-[19px] max-lg2:grid-cols-2 max-sm2:grid-cols-1">
            {BENEFITS.map(([title, text], i) => (
              <article key={title} className={CARD}>
                <div className={`${ICON} ${i % 2 === 0 ? "bg-[#fff2c9] text-[#9b6900]" : "bg-teal-soft text-teal"}`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-2.5 text-[1.25rem]">{title}</h3>
                <p className="m-0 text-[.93rem] text-slate">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-[25px] rounded-[12px] border border-[#f3d991] border-l-[5px] border-l-amber bg-[#fffaf0] px-[23px] py-[21px] text-[#514526]">
            <strong className="text-navy">Evidence note:</strong> Controlled
            studies have reported gains in arithmetic performance for some
            children, while broader cognitive transfer and the ease of learning
            can vary by age and learner. Abacus is not a guaranteed route to
            higher marks, IQ or memory. See the{" "}
            <a className="font-extrabold text-[#075f72]" href="https://jnc.psychopen.eu/index.php/jnc/article/view/5761/5761.html" target="_blank" rel="noopener noreferrer">classroom-randomised trial</a>{" "}
            and{" "}
            <a className="font-extrabold text-[#075f72]" href="https://langcog.stanford.edu/papers_new/barner-2015-childdev.pdf" target="_blank" rel="noopener noreferrer">randomised controlled study</a>.
          </div>
        </Section>

        {/* Programme */}
        <Section id="programme" aria-labelledby="programme-title">
          <Eyebrow>Junior and senior abacus</Eyebrow>
          <h2 id="programme-title">A level-based abacus course for different starting needs</h2>
          <p className="mb-[38px] max-w-[730px] text-[1.06rem] text-slate">
            Placement is based on readiness and current skill—not only school
            grade. The outline below shows the intended learning progression; the
            trainer confirms the appropriate entry level after assessment.
          </p>
          <div className="grid grid-cols-2 gap-6 max-sm2:grid-cols-1">
            <Programme
              tone="junior"
              pill="Approx. ages 5–8"
              title="Junior Abacus Pathway"
              lede="A gentler entry with shorter activity cycles, concrete bead work and careful number-language foundations."
              items={["Abacus parts, posture and finger technique", "Number recognition and bead representation", "Direct addition and subtraction", "Five-complement and ten-complement strategies", "Early multiplication, division and visualisation"]}
              meta={["Suggested: 45–50 min/class", "Small beginner groups"]}
            />
            <Programme
              tone="senior"
              pill="Approx. ages 8–13"
              title="Senior Abacus Pathway"
              lede="A faster progression for older beginners and continuing learners, with larger numbers and deeper mental calculation."
              items={["Technique calibration and place-value fluency", "Mixed multi-digit addition and subtraction", "Multiplication and division progression", "Decimals and extended operations where appropriate", "Mental visualisation, accuracy and speed control"]}
              meta={["Suggested: 55–60 min/class", "Level-matched groups"]}
            />
          </div>
          <div className="mt-7 overflow-x-auto rounded-[16px] border border-line bg-white">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr>
                  {["Learning stage", "What the child learns", "What a parent should see"].map((h) => (
                    <th key={h} className="border-b border-line bg-navy px-[17px] py-[15px] text-left align-top text-[.81rem] tracking-[.04em] text-white">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CURRICULUM_ROWS.map((row) => (
                  <tr key={row[0]} className="[&:last-child>td]:border-b-0">
                    {row.map((cell, i) => (
                      <td key={i} className={`border-b border-line px-[17px] py-[15px] align-top text-[.9rem] ${i === 0 ? "font-extrabold text-navy" : "text-slate"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Method / steps */}
        <Section tone="navy" aria-labelledby="method-title">
          <Eyebrow>How the programme works</Eyebrow>
          <h2 id="method-title">From first assessment to measurable progress</h2>
          <p className="mb-[38px] max-w-[730px] text-[1.06rem] text-white/66">
            Every stage gives the teacher and parent a useful checkpoint.
            Progress means more than finishing worksheets quickly.
          </p>
          <div className="steps grid grid-cols-5 gap-3.5 max-lg2:grid-cols-2 max-sm2:grid-cols-1">
            {STEPS.map(([title, text], i) => (
              <article
                key={title}
                className={`step min-h-[210px] rounded-[17px] border border-white/11 bg-white/8 px-[18px] py-6 max-sm2:min-h-0 ${i === STEPS.length - 1 ? "max-lg2:col-span-2 max-lg2:min-h-0 max-sm2:col-auto" : ""}`}
              >
                <h3 className="text-[1.25rem]">{title}</h3>
                <p className="m-0 text-[.86rem] text-white/70">{text}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Formats compare */}
        <Section id="formats" aria-labelledby="formats-title">
          <Eyebrow>Choose by learning fit</Eyebrow>
          <h2 id="formats-title">Online vs classroom abacus classes in Hyderabad</h2>
          <p className="mb-[38px] max-w-[730px] text-[1.06rem] text-slate">
            Both formats can work. The best choice is the one that lets the
            teacher observe technique, keeps the child engaged and makes regular
            attendance realistic for your family.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-line bg-white">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-line bg-deep px-[17px] py-[15px] text-left align-top text-[.81rem] tracking-[.04em] text-white">Parent question</th>
                  <th className="border-b border-line bg-teal px-[17px] py-[15px] text-left align-top text-[.81rem] tracking-[.04em] text-white">Live online abacus classes</th>
                  <th className="border-b border-line bg-navy px-[17px] py-[15px] text-left align-top text-[.81rem] tracking-[.04em] text-white">Classroom abacus classes</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row[0]} className="[&:last-child>td]:border-b-0">
                    {row.map((cell, i) => (
                      <td key={i} className={`border-b border-line px-[17px] py-[15px] align-top text-[.9rem] ${i === 0 ? "font-extrabold text-navy" : "text-slate"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Quality checklist */}
        <Section tone="mist" aria-labelledby="choose-title">
          <Eyebrow>Parent’s quality checklist</Eyebrow>
          <h2 id="choose-title">How to choose the best abacus classes in Hyderabad</h2>
          <p className="mb-[38px] max-w-[730px] text-[1.06rem] text-slate">
            Whether you are comparing abacus training in Hyderabad, a nearby
            abacus institute or mental maths classes for your child, “best”
            should mean the right instructional fit—not the loudest claim. Use
            these eight checks during a demo or readiness session.
          </p>
          <div className="grid grid-cols-2 gap-4 max-sm2:grid-cols-1">
            {CHECKLIST.map(([title, text], i) => (
              <article key={title} className="flex gap-3.5 rounded-[15px] border border-line bg-white p-5">
                <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-full bg-amber text-[.78rem] font-black text-deep">{i + 1}</span>
                <div>
                  <h3 className="mb-[5px] text-[1rem]">{title}</h3>
                  <p className="m-0 text-[.87rem] text-slate">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Areas */}
        <Section aria-labelledby="areas-title">
          <div className="grid grid-cols-[.8fr_1.2fr] items-center gap-10 rounded-xl2 border border-[#cde8e6] bg-[linear-gradient(135deg,#e3f7f5,#f7fbfd)] p-[38px] max-lg2:grid-cols-1 max-sm2:p-[26px_21px]">
            <div>
              <Eyebrow>Across Hyderabad</Eyebrow>
              <h2 id="areas-title">Looking for abacus classes near you?</h2>
              <p className="text-slate">
                Live online batches can remove the commute. For classroom
                learning, always confirm the current centre address, trainer and
                schedule before visiting.
              </p>
              <Button href="#assessment">Check batch availability</Button>
            </div>
            <div>
              <div className="flex flex-wrap gap-2.5" aria-label="Hyderabad localities parents may search from">
                {AREAS.map((a) => (
                  <span key={a} className="rounded-full border border-[#b8dcd8] bg-white/75 px-3 py-[9px] text-[.82rem] font-[750] text-navy">{a}</span>
                ))}
              </div>
              <p className="mt-[17px] text-[.85rem] text-slate">
                These are common Hyderabad search areas, not claims of a physical
                centre. Ask us to verify the format currently available for your
                locality.
              </p>
            </div>
          </div>
        </Section>

        {/* Fees */}
        <Section id="fees" tone="mist" aria-labelledby="fees-title">
          <div className="grid grid-cols-[.85fr_1.15fr] items-center gap-[30px] rounded-xl2 border border-line bg-white p-[35px] max-lg2:grid-cols-1 max-sm2:p-[26px_21px]">
            <div>
              <Eyebrow>No surprise charges</Eyebrow>
              <h2 id="fees-title">Abacus class fees in Hyderabad: what to compare</h2>
              <p className="text-slate">
                The lowest headline fee is not always the lowest total cost.
                Price varies by group size, format, class frequency, level,
                learning materials and assessments.
              </p>
              <Button href="#assessment">Request the current fee sheet</Button>
            </div>
            <div className="grid gap-[9px]" aria-label="Fee comparison checklist">
              {FEE_ITEMS.map((t) => (
                <div key={t} className="flex items-start gap-2.5 rounded-[11px] bg-mist px-3.5 py-3 text-[.88rem] text-slate">
                  <b className="text-teal">✓</b>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="questions" aria-labelledby="faq-title">
          <Eyebrow>Questions parents ask</Eyebrow>
          <h2 id="faq-title">Abacus classes in Hyderabad: FAQs</h2>
          <p className="mb-[38px] max-w-[730px] text-[1.06rem] text-slate">
            Clear answers for comparing an abacus training programme, preparing
            your child and deciding whether it fits your family.
          </p>
          <Faq items={FAQS} />
        </Section>

        {/* Final CTA */}
        <Section aria-labelledby="final-title">
          <div className="grid grid-cols-[1fr_.75fr] items-center gap-[45px] rounded-xl2 bg-navy p-[43px] text-white/83 max-lg2:grid-cols-1 max-sm2:p-[26px_21px]">
            <div>
              <Eyebrow>Start with fit, not pressure</Eyebrow>
              <h2 id="final-title" className="text-white">
                See whether abacus is right for your child
              </h2>
              <p>
                A free readiness conversation can clarify the right pathway,
                format, practice expectation and current Hyderabad batch—before
                you commit to a level.
              </p>
            </div>
            <div className="grid gap-[11px]">
              <Button href="#assessment">Book free readiness assessment</Button>
              <Button variant="secondaryOnDark" href="#assessment">
                Ask on WhatsApp
              </Button>
              <p className="m-0 text-center text-[.75rem] text-white/58">
                No obligation. Ask for the written fee sheet and batch details.
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer
        columns={FOOTER_COLUMNS}
        tagline="Level-based abacus and mental arithmetic learning for children, with guided practice and parent-visible progress."
        whatsappMessage={WHATSAPP_MSG}
        copyright="Abacus Experts. All rights reserved. Educational outcomes vary by learner; no result is guaranteed."
      />
      <MobileCta whatsappMessage={WHATSAPP_MSG} />
    </>
  );
}
