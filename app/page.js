import { Fragment } from "react";
import Image from "next/image";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter, { FloatingActions } from "@/components/SiteFooter";
import PageToc from "@/components/PageToc";
import SectionNav from "@/components/SectionNav";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";

import { SECTIONS } from "@/lib/nav";
import {
  BUSINESS,
  ADDRESS,
  WHATSAPP_MESSAGES,
  buildWhatsappHref,
  absoluteUrl,
} from "@/lib/business";
import { TRAINER, PRACTICE } from "@/lib/programme";
import { pageOpenGraph } from "@/lib/seo";
import { buildHomeGraph } from "@/lib/schema";

import {
  HERO,
  BATCH_SECTION,
  BATCH_ROWS,
  BATCH_CTA,
  CURRICULUM_SECTION,
  CURRICULUM_HEADERS,
  CURRICULUM_ROWS,
  PATHWAY_NOTES,
  OVERVIEW_SECTION,
  OVERVIEW_CARDS,
  PROGRAMMES_SECTION,
  PROGRAMMES,
  HOW_SECTION,
  HOW_STEPS,
  METHOD_SECTION,
  METHOD_STEPS,
} from "@/lib/content/course";
import {
  WHY_SECTION,
  WHY_CARDS,
  COMPARISON_SECTION,
  COMPARISON_SUMMARY,
  COMPARISON_HEADERS,
  COMPARISON_ROWS,
  COMPARISON_NOTE,
  ABACUS_SECTION,
  PREREQ_SECTION,
  PREREQUISITES,
  PREREQ_NOTE,
  SKILLS_SECTION,
  SKILLS,
} from "@/lib/content/why";
import {
  FEES_SECTION,
  FEE_MODES,
  FEE_COMPARE_HEADERS,
  FEE_COMPARE_ROWS,
  CENTRE_SECTION,
  PRACTICE_SECTION,
  PRACTICE_BLOCKS,
} from "@/lib/content/fees";
import {
  BENEFITS_SECTION,
  BENEFIT_PILLS,
  EVIDENCE,
  EVIDENCE_LINKS,
  NO_PROMISE,
  FIT_SECTION,
  READY_SIGNS,
  WAIT_SIGNS,
  PROGRESS_SECTION,
  PROGRESS_HEADERS,
  PROGRESS_ROWS,
  EXAMPLE_UPDATE,
  TRAINER_SECTION,
  TESTIMONIALS_SECTION,
  TESTIMONIALS,
  TESTIMONIALS_NOTE,
  CHOOSE_SECTION,
  CHOOSE_CHECKLIST,
  VEDIC_SECTION,
  VEDIC_HEADERS,
  VEDIC_ROWS,
} from "@/lib/content/outcomes";
import { FAQ_SECTION, FAQS } from "@/lib/content/faqs";
import {
  HERO_FORM,
  DEMO_FORM,
  ENROL_SECTION,
  ENROL_STEPS,
  ENROL_CTA,
  DEMO_SECTION,
} from "@/lib/content/forms";

export const metadata = {
  title: "Abacus Classes in Hyderabad for Kids | Abacus Experts",
  description:
    "Live abacus classes in Hyderabad for kids aged 5–13. Learn at our Hyder Nagar centre or online. Check levels, fees, batches and book a free demo.",
  keywords: [
    "abacus classes in Hyderabad",
    "abacus classes near me",
    "abacus classes for kids",
    "online abacus classes",
    "abacus training in Hyderabad",
    "abacus course in Hyderabad",
    "abacus classes fees in Hyderabad",
    "abacus institute in Hyderabad",
    "mental maths classes for kids",
    "abacus classes in Nizampet",
    "abacus classes in Kukatpally",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: { canonical: absoluteUrl("/") },
  openGraph: pageOpenGraph({
    url: "/",
    title: "Abacus Classes in Hyderabad for Kids",
    description:
      "Live classroom and online abacus training for children aged 5–13, with a free readiness assessment before enrolment.",
  }),
  twitter: {
    card: "summary",
    title: "Abacus Classes in Hyderabad for Kids",
    description:
      "Live classroom and online abacus training for ages 5–13. Book a free readiness assessment.",
  },
};

const JSONLD = buildHomeGraph(FAQS);
const WA_GENERAL = buildWhatsappHref(WHATSAPP_MESSAGES.general);
const WA_DEMO = buildWhatsappHref(WHATSAPP_MESSAGES.demo);
const TEL = `tel:+${BUSINESS.phoneDigits}`;

/** The prompt-plus-button strip that closes most sections. */
function SectionCta({ text, label = "Book free readiness assessment", href = "#assessment" }) {
  return (
    <div className="section-cta">
      <p>{text}</p>
      <a className="button" href={href}>
        {label}
        <span>→</span>
      </a>
    </div>
  );
}

function SectionHead({ eyebrow, title, id, children }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={JSONLD} />
      <main>
        <SiteHeader />

        {/* 1 — Hero */}
        <section className="hero hero-reference" id="top">
          <div className="hero-copy">
            <div className="hero-chips" aria-label="Course highlights">
              <span>
                <b>Hyder Nagar</b> · beside JNTU Metro
              </span>
              <span>
                Ages <b>5–13</b>
              </span>
              <span>Online, classroom &amp; hybrid</span>
            </div>
            <h1>{HERO.title}</h1>
            <p className="lead">{HERO.lede}</p>
            <div className="button-row">
              <a className="button hero-primary" href="#assessment">
                Book a free demo class
              </a>
              <a
                className="button whatsapp hero-whatsapp"
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask on WhatsApp
                <span>↗</span>
              </a>
            </div>
            <div className="hero-trust" aria-label="Verified course trust factors">
              {HERO.stats.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <EnquiryForm
            {...HERO_FORM}
            heading={
              <>
                <p className="eyebrow">{HERO.formEyebrow}</p>
                <h2>{HERO.formTitle}</h2>
                <p>{HERO.formLede}</p>
              </>
            }
          />
        </section>

        {/* 2 — Table of contents */}
        <PageToc items={SECTIONS} />

        {/* 3 — Batch details */}
        <section className="section current-batch" id="batches">
          <SectionHead eyebrow={BATCH_SECTION.eyebrow} title={BATCH_SECTION.title}>
            <p>{BATCH_SECTION.lede}</p>
          </SectionHead>

          <div className="batch-details-wrap">
            <div className="table-wrap batch-details-table">
              <table>
                <tbody>
                  <tr>
                    <th scope="row">Trainer name</th>
                    <td>
                      <a href="/about-us/#trainer">{TRAINER.name}</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Trainer experience</th>
                    <td>
                      <b>{TRAINER.experience}</b>
                    </td>
                  </tr>
                  {BATCH_ROWS.slice(2, 9).map(([term, detail]) => (
                    <tr key={term}>
                      <th scope="row">{term}</th>
                      <td>{detail}</td>
                    </tr>
                  ))}
                  <tr>
                    <th scope="row">Current demo session</th>
                    <td>
                      <a href="/contact-us/#demo">Contact us</a> to confirm the
                      next date, time and open seats
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Call us</th>
                    <td>
                      <a href={TEL}>{BUSINESS.phoneDisplay}</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Email us</th>
                    <td>
                      <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <aside className="batch-demo-card">
              <p className="eyebrow">{BATCH_CTA.eyebrow}</p>
              <h3>{BATCH_CTA.title}</h3>
              <p>{BATCH_CTA.lede}</p>
              <ul>
                {BATCH_CTA.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a className="button" href="#assessment">
                Enroll for a free demo
                <span>→</span>
              </a>
              <a
                className="button whatsapp"
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask for current seats
                <span>↗</span>
              </a>
            </aside>
          </div>
        </section>

        {/* Section jump strip */}
        <SectionNav items={SECTIONS.slice(1)} label="Course page sections" />

        {/* 4 — Curriculum */}
        <section className="section curriculum-section" id="syllabus">
          <SectionHead
            eyebrow={CURRICULUM_SECTION.eyebrow}
            title={CURRICULUM_SECTION.title}
          >
            <p>{CURRICULUM_SECTION.lede}</p>
          </SectionHead>

          <div className="curriculum-table">
            <div className="curriculum-row curriculum-head">
              {CURRICULUM_HEADERS.map((h) => (
                <span key={h}>{h}</span>
              ))}
            </div>
            {CURRICULUM_ROWS.map((row) => (
              <div className="curriculum-row" key={row[0]}>
                <span>
                  <b>{row[0]}</b>
                </span>
                {row.slice(1).map((cell, i) => (
                  <span key={i}>{cell}</span>
                ))}
              </div>
            ))}
          </div>

          <div className="curriculum-notes">
            {PATHWAY_NOTES.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <SectionCta text={CURRICULUM_SECTION.cta} />
        </section>

        {/* 5 — Course overview */}
        <section className="section" id="programme">
          <SectionHead
            eyebrow={OVERVIEW_SECTION.eyebrow}
            title={OVERVIEW_SECTION.title}
          >
            <p>{OVERVIEW_SECTION.lede}</p>
          </SectionHead>

          <div className="three-grid">
            {OVERVIEW_CARDS.map(([title, text], i) => (
              <article key={title}>
                <span className="number">{String(i + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <SectionCta text={OVERVIEW_SECTION.cta} />
        </section>

        {/* 6 — Why us */}
        <section className="section tinted" id="why-us">
          <SectionHead eyebrow={WHY_SECTION.eyebrow} title={WHY_SECTION.title}>
            <p>{WHY_SECTION.lede}</p>
          </SectionHead>

          <div className="feature-grid">
            {WHY_CARDS.map(([title, text]) => (
              <article className="feature" key={title}>
                <span>✓</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <SectionCta text={WHY_SECTION.cta} />
        </section>

        {/* 7 — Comparison */}
        <section className="section comparison" id="comparison">
          <SectionHead
            eyebrow={COMPARISON_SECTION.eyebrow}
            title={COMPARISON_SECTION.title}
          >
            <p>{COMPARISON_SECTION.lede}</p>
          </SectionHead>

          <div className="comparison-summary">
            {COMPARISON_SUMMARY.map(([title, text], i) => (
              <article key={title} className={i === 1 ? "standout" : undefined}>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="table-wrap comparison-table">
            <table>
              <thead>
                <tr>
                  {COMPARISON_HEADERS.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i}>{i === 2 ? <b>{cell}</b> : cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="audit-note">
            <strong>{COMPARISON_NOTE.title}</strong>
            <p>{COMPARISON_NOTE.text}</p>
          </div>

          <SectionCta text={COMPARISON_SECTION.cta} />
        </section>

        {/* 8 — What is an abacus */}
        <section className="section split">
          <div className="method-image">
            <Image
              src="/abacus-method.png"
              alt="Trainer showing correct bead movement on a physical abacus"
              fill
              sizes="(max-width:900px) 100vw, 45vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="eyebrow">{ABACUS_SECTION.eyebrow}</p>
            <h2>{ABACUS_SECTION.title}</h2>
            <p className="lead-small">{ABACUS_SECTION.lede}</p>
            <h3>{ABACUS_SECTION.blockTitle}</h3>
            <p>{ABACUS_SECTION.blockText}</p>
            <a className="button" href="#assessment">
              {ABACUS_SECTION.cta}
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 9 — Prerequisites */}
        <section className="section prerequisites" id="prerequisites">
          <SectionHead
            eyebrow={PREREQ_SECTION.eyebrow}
            title={PREREQ_SECTION.title}
          >
            <p>{PREREQ_SECTION.lede}</p>
          </SectionHead>

          <div className="prerequisite-grid">
            <div className="readiness-checks">
              {PREREQUISITES.map(([title, text]) => (
                <article key={title}>
                  <span>✓</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <aside className="readiness-note">
              <p className="eyebrow">{PREREQ_NOTE.eyebrow}</p>
              <h3>{PREREQ_NOTE.title}</h3>
              <p>{PREREQ_NOTE.text}</p>
              <ul>
                {PREREQ_NOTE.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </aside>
          </div>

          <SectionCta text={PREREQ_SECTION.cta} />
        </section>

        {/* 10 — Skills */}
        <section className="section skill-gain-section tinted" id="skills-gained">
          <SectionHead
            eyebrow={SKILLS_SECTION.eyebrow}
            title={SKILLS_SECTION.title}
          >
            <p>{SKILLS_SECTION.lede}</p>
          </SectionHead>

          <div className="skill-gain-grid">
            {SKILLS.map(([title, text], i) => (
              <article key={title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <SectionCta text={SKILLS_SECTION.cta} />
        </section>

        {/* 11 — Programmes */}
        <section className="section dark" id="programmes">
          <SectionHead
            eyebrow={PROGRAMMES_SECTION.eyebrow}
            title={PROGRAMMES_SECTION.title}
          />

          <div className="path-grid">
            {PROGRAMMES.map((p) => (
              <article key={p.title}>
                <p className="pill">{p.pill}</p>
                <h3>{p.title}</h3>
                <p>{p.lede}</p>
                <ul>
                  {p.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <strong>{p.meta.join(" · ")}</strong>
              </article>
            ))}
          </div>

          <div className="center">
            <a className="button" href="#assessment">
              {PROGRAMMES_SECTION.cta}
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 12 — How it works */}
        <section className="section" id="how-it-works">
          <SectionHead eyebrow={HOW_SECTION.eyebrow} title={HOW_SECTION.title} />

          <ol className="steps">
            {HOW_STEPS.map(([title, text], i) => (
              <li key={title}>
                <span>{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <SectionCta text={HOW_SECTION.cta} />
        </section>

        {/* 13 — Fees and modes */}
        <section className="section learning-modes" id="fees">
          <SectionHead eyebrow={FEES_SECTION.eyebrow} title={FEES_SECTION.title}>
            <p>{FEES_SECTION.lede}</p>
          </SectionHead>

          <div className="mode-card-grid">
            {FEE_MODES.map((mode) => (
              <article key={mode.title}>
                <div className={`mode-icon ${mode.iconTone}`}>{mode.icon}</div>
                <h3>{mode.title}</h3>
                <p>{mode.lede}</p>
                <ul>
                  {mode.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="mode-foot">
                  <div>
                    <strong>{mode.price}</strong>
                    <span>{mode.note}</span>
                  </div>
                  <small>Course fee</small>
                </div>
              </article>
            ))}
          </div>

          <div className="mode-actions">
            <a className="button" href="#assessment">
              Enroll for a demo class
              <span>→</span>
            </a>
            <a
              className="button whatsapp"
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us for details
              <span>↗</span>
            </a>
          </div>

          <div className="table-wrap mode-table">
            <table>
              <thead>
                <tr>
                  {FEE_COMPARE_HEADERS.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEE_COMPARE_ROWS.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 14 — Teaching method */}
        <section className="section">
          <SectionHead
            eyebrow={METHOD_SECTION.eyebrow}
            title={METHOD_SECTION.title}
          >
            <p>{METHOD_SECTION.lede}</p>
          </SectionHead>

          <div className="teaching-flow">
            {METHOD_STEPS.map(([title, text], i) => (
              <article key={title}>
                <span>{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <SectionCta text={METHOD_SECTION.cta} />
        </section>

        {/* 15 — Centre */}
        <section className="section location" id="centre">
          <div>
            <p className="eyebrow">{CENTRE_SECTION.eyebrow}</p>
            <h2>{CENTRE_SECTION.title}</h2>
            <p>
              {CENTRE_SECTION.ledeStart}
              <a href={CENTRE_SECTION.ledeLinkHref}>
                {CENTRE_SECTION.ledeLinkLabel}
              </a>
              {CENTRE_SECTION.ledeEnd}
            </p>
            <address className="centre-address">
              <strong>{ADDRESS.name}</strong>
              <br />
              {ADDRESS.lines.map((line, i) => (
                <Fragment key={line}>
                  {line}
                  {i < ADDRESS.lines.length - 1 && <br />}
                </Fragment>
              ))}
            </address>
            <div className="button-row">
              <a
                className="button"
                href={ADDRESS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
                <span>↗</span>
              </a>
              <a
                className="button secondary"
                href={BUSINESS.mapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View us on Google
                <span>↗</span>
              </a>
              <a className="button secondary" href={TEL}>
                Call centre
              </a>
            </div>
          </div>

          <figure className="google-map-card">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${BUSINESS.name}, ${ADDRESS.streetAddress}, ${ADDRESS.locality}, ${ADDRESS.region} ${ADDRESS.postalCode}`
              )}&output=embed`}
              title={`Map showing ${BUSINESS.name} in Hyder Nagar, Hyderabad`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <figcaption>
              <div>
                <strong>{ADDRESS.name}</strong>
                <span>{ADDRESS.landmark}</span>
              </div>
              <a
                href={BUSINESS.mapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open on Google
                <span>↗</span>
              </a>
            </figcaption>
          </figure>
        </section>

        {/* 16 — Home practice */}
        <section className="section tinted">
          <SectionHead
            eyebrow={PRACTICE_SECTION.eyebrow}
            title={PRACTICE_SECTION.title}
          >
            <p>{PRACTICE_SECTION.lede}</p>
          </SectionHead>

          <div className="practice-grid">
            <div className="practice-number">
              {PRACTICE.minutes}
              <span>{PRACTICE.unit}</span>
            </div>
            <div>
              {PRACTICE_BLOCKS.map(([title, text]) => (
                <Fragment key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Fragment>
              ))}
            </div>
          </div>

          <SectionCta text={PRACTICE_SECTION.note} />
        </section>

        {/* 17 — Benefits and evidence */}
        <section className="section" id="benefits">
          <SectionHead
            eyebrow={BENEFITS_SECTION.eyebrow}
            title={BENEFITS_SECTION.title}
          >
            <p>{BENEFITS_SECTION.lede}</p>
          </SectionHead>

          <div className="benefit-grid">
            {BENEFIT_PILLS.map((pill) => (
              <div key={pill}>
                <span>+</span>
                {pill}
              </div>
            ))}
          </div>

          <div className="research-links">
            <div>
              <p className="eyebrow">{EVIDENCE.eyebrow}</p>
              <h3>{EVIDENCE.title}</h3>
              <p>{EVIDENCE.lede}</p>
            </div>
            <ul>
              {EVIDENCE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {link.label}
                    <span>↗</span>
                  </a>
                  <small>{link.source}</small>
                </li>
              ))}
            </ul>
          </div>

          <div className="honesty">
            <h3>{NO_PROMISE.title}</h3>
            <p>{NO_PROMISE.text}</p>
          </div>

          <SectionCta text={BENEFITS_SECTION.cta} />
        </section>

        {/* 18 — Is abacus right for your child */}
        <section className="section tinted">
          <SectionHead eyebrow={FIT_SECTION.eyebrow} title={FIT_SECTION.title}>
            <p>{FIT_SECTION.lede}</p>
          </SectionHead>

          <div className="fit-grid">
            <article className="fit yes">
              <h3>{READY_SIGNS.title}</h3>
              <ul>
                {READY_SIGNS.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="fit wait">
              <h3>{WAIT_SIGNS.title}</h3>
              <ul>
                {WAIT_SIGNS.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <p className="table-note">{FIT_SECTION.note}</p>

          <SectionCta text={FIT_SECTION.cta} />
        </section>

        {/* 19 — Progress assessment */}
        <section className="section">
          <SectionHead
            eyebrow={PROGRESS_SECTION.eyebrow}
            title={PROGRESS_SECTION.title}
          >
            <p>{PROGRESS_SECTION.lede}</p>
          </SectionHead>

          <div className="progress-table">
            <div className="progress-row heading">
              {PROGRESS_HEADERS.map((h) => (
                <span key={h}>{h}</span>
              ))}
            </div>
            {PROGRESS_ROWS.map((row) => (
              <div className="progress-row" key={row[0]}>
                {row.map((cell, i) => (
                  <span key={i}>{cell}</span>
                ))}
              </div>
            ))}
          </div>

          <div className="sample-report">
            <div>
              <p className="eyebrow">{EXAMPLE_UPDATE.eyebrow}</p>
              <h3>{EXAMPLE_UPDATE.title}</h3>
            </div>
            {EXAMPLE_UPDATE.lines.map(([term, detail]) => (
              <p key={term}>
                <strong>{term}</strong> {detail}
              </p>
            ))}
          </div>

          <SectionCta text={PROGRESS_SECTION.cta} />
        </section>

        {/* 20 — Trainer */}
        <section className="section dark" id="trainer">
          <SectionHead
            eyebrow={TRAINER_SECTION.eyebrow}
            title={TRAINER_SECTION.title}
          >
            <p>{TRAINER_SECTION.lede}</p>
          </SectionHead>

          <div className="trainer-grid single">
            <article>
              <div className="avatar-placeholder">Photo</div>
              <h3>{TRAINER.name}</h3>
              <p>{TRAINER.bio}</p>
              <span className="verify">{TRAINER.experienceBadge}</span>
            </article>
          </div>

          <div className="center">
            <a
              className="button whatsapp"
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {TRAINER_SECTION.cta}
              <span>↗</span>
            </a>
          </div>
        </section>

        {/* 21 — Parent feedback */}
        <section className="section">
          <SectionHead
            eyebrow={TESTIMONIALS_SECTION.eyebrow}
            title={TESTIMONIALS_SECTION.title}
          >
            <p>{TESTIMONIALS_SECTION.lede}</p>
          </SectionHead>

          <div className="review-grid">
            {TESTIMONIALS.map((t, i) => (
              <article key={i}>
                <p>“{t.quote}”</p>
                <div>
                  <strong>Parent</strong>
                  <span>{t.meta}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="honesty">
            <h3>{TESTIMONIALS_NOTE.title}</h3>
            <p>
              {TESTIMONIALS_NOTE.text}{" "}
              <a
                href={BUSINESS.mapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {TESTIMONIALS_NOTE.linkLabel}
                <span>↗</span>
              </a>
              .
            </p>
          </div>

          <SectionCta text={TESTIMONIALS_SECTION.cta} />
        </section>

        {/* 22 — Selection checklist */}
        <section className="section dark">
          <SectionHead
            eyebrow={CHOOSE_SECTION.eyebrow}
            title={CHOOSE_SECTION.title}
          />

          <div className="check-grid">
            {CHOOSE_CHECKLIST.map((item, i) => (
              <div key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="center">
            <a className="button" href="#assessment">
              {CHOOSE_SECTION.cta}
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 23 — Abacus vs Vedic maths */}
        <section className="section">
          <SectionHead
            eyebrow={VEDIC_SECTION.eyebrow}
            title={VEDIC_SECTION.title}
          />

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  {VEDIC_HEADERS.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {VEDIC_ROWS.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="table-note">{VEDIC_SECTION.note}</p>

          <SectionCta text={VEDIC_SECTION.cta} />
        </section>

        {/* 24 — FAQs */}
        <section className="section faq" id="faq">
          <SectionHead eyebrow={FAQ_SECTION.eyebrow} title={FAQ_SECTION.title}>
            <p>{FAQ_SECTION.lede}</p>
          </SectionHead>

          <div className="faq-list open-faq">
            {FAQS.map(([question, answer], i) => (
              <article className="faq-item" key={question}>
                <span className="faq-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="related-links">
            {FAQ_SECTION.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
                <span>→</span>
              </a>
            ))}
          </div>

          <SectionCta
            text={`${FAQ_SECTION.closingTitle} ${FAQ_SECTION.closingText}`}
          />
        </section>

        {/* 25 — Enrolment */}
        <section className="section enrol-section" id="enrol">
          <SectionHead
            eyebrow={ENROL_SECTION.eyebrow}
            title={ENROL_SECTION.title}
          >
            <p>{ENROL_SECTION.lede}</p>
          </SectionHead>

          <div className="enrol-grid">
            <div>
              <ol>
                {ENROL_STEPS.map(([title, text], i) => (
                  <li key={title}>
                    <span>{i + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="enrol-card">
              <p className="eyebrow">{ENROL_CTA.eyebrow}</p>
              <h3>{ENROL_CTA.title}</h3>
              <p>{ENROL_CTA.lede}</p>
              <a className="phone-link" href={TEL}>
                {BUSINESS.phoneDisplay}
              </a>
              <a
                className="button whatsapp"
                href={WA_DEMO}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ENROL_CTA.whatsappLabel}
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Closing demo form */}
        <section className="assessment" id="assessment">
          <div>
            <p className="eyebrow">{DEMO_SECTION.eyebrow}</p>
            <h2>{DEMO_SECTION.title}</h2>
            <p>{DEMO_SECTION.lede}</p>
            <ul>
              {DEMO_SECTION.points.map((p) => (
                <li key={p}>✓ {p}</li>
              ))}
            </ul>
          </div>

          <EnquiryForm {...DEMO_FORM} />
        </section>

        <SiteFooter />
        <FloatingActions ctaHref="#enrol" ctaLabel="Enroll now" />
      </main>
    </>
  );
}
