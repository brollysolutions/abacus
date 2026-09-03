import ContentPage from "@/components/ContentPage";
import PageCta from "@/components/PageCta";
import SiteLink from "@/components/SiteLink";
import {
  DirectAnswer,
  ContentSection,
  RelatedLinks,
  OfficialSources,
} from "@/components/content";

import { FEES } from "@/lib/programme";
import { WHATSAPP_MESSAGES, buildWhatsappHref } from "@/lib/business";
import { pageOpenGraph } from "@/lib/seo";
import { buildSiteGraph, OFFICIAL_SOURCES, NCPCR_SOURCE } from "@/lib/schema";
import { FAQ_GROUPS } from "@/lib/content/parent-faqs";

const TITLE = "30 Questions About Abacus Classes—Answered";
const SUMMARY =
  "These open-format answers explain how our course works, who it suits, what it costs, how children progress and what parents should check before enrolling with Abacus Experts.";

export const metadata = {
  title: "30 Abacus Class FAQs for Parents | Abacus Experts",
  description:
    "Get clear answers to 30 parent questions about abacus age, curriculum, fees, batches, online classes, practice, progress, kit, safety and enrolment.",
  alternates: { canonical: "/parent-faqs/" },
  robots: { index: true, follow: true },
  openGraph: pageOpenGraph({
    url: "/parent-faqs/",
    title: TITLE,
    description: SUMMARY,
  }),
};

const SECTIONS = [
  { id: "starting", label: "Starting abacus classes" },
  { id: "curriculum", label: "Curriculum & teaching" },
  { id: "classes", label: "Classes, modes & batches" },
  { id: "fees", label: "Fees, kit & enrolment" },
  { id: "practice", label: "Practice, progress & outcomes" },
  { id: "location", label: "Location, safety & support" },
  { id: "related-guides", label: "Useful parent pages" },
];

export default function ParentFaqsPage() {
  return (
    <ContentPage
      hero={{
        eyebrow: "Straight answers for parents",
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
        <PageCta
          title="Have a question about your child?"
          text="Share your child’s age, previous abacus experience and preferred class mode. We will give you a clear answer before asking you to enrol."
        />
      }
    >
      <DirectAnswer>
        Our classes are designed for children aged about 5–13 and begin with a
        free readiness assessment. We offer Live Online ({FEES.online.display}),
        Hyderabad Classroom ({FEES.classroom.display}) and Hybrid (
        {FEES.hybrid.display}) learning. A physical abacus kit is included, EMI
        is available and progress is based on demonstrated skill—not attendance
        alone.
      </DirectAnswer>

      <ContentSection
        id="starting"
        eyebrow="All answers remain open and readable"
        title="Parent FAQs About Abacus Learning"
        lede="Use the topic headings below or read all 30 questions in order."
      >
        <div className="open-question-list">
          {FAQ_GROUPS.map((group) => (
            <section key={group.title} id={group.id || undefined}>
              <h2 className="faq-topic">{group.title}</h2>
              {group.questions.map(([number, question, answer]) => (
                <article className="open-question" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{question}</h3>
                    <p>{answer}</p>
                  </div>
                </article>
              ))}
            </section>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="related-guides"
        eyebrow="Continue with the complete course guide"
        title="Useful Pages for Parents"
      >
        <RelatedLinks
          links={[
            { href: "/#syllabus", label: "View the full abacus curriculum" },
            {
              href: "/student-progress-and-assessment/",
              label: "Read our progress and assessment process",
            },
            {
              href: "/child-safeguarding-policy/",
              label: "Read our child safeguarding policy",
            },
          ]}
        />
      </ContentSection>

      <OfficialSources
        id="official-parent-reference-links"
        eyebrow="Official, non-commercial references"
        title="Official Parent Reference Links"
        lede="These non-commercial sources provide background on foundational numeracy, age-appropriate learning and child safety. They do not certify or endorse our course."
        sources={[
          {
            ...OFFICIAL_SOURCES[0],
            text: "Official information on India’s foundational literacy and numeracy mission.",
          },
          {
            ...OFFICIAL_SOURCES[1],
            text: "Official curriculum guidance for learning and development in the foundational stage.",
          },
          NCPCR_SOURCE,
        ]}
      />
    </ContentPage>
  );
}
