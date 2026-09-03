import { Fragment } from "react";
import SiteLink from "./SiteLink";

/* ------------------------------------------------------------------
   The building blocks the secondary pages are assembled from. Class
   names come from the reference stylesheet; each block appears on
   several pages, so they live here rather than in each page file.
------------------------------------------------------------------- */

/** Short summary panel at the top of a page body. */
export function DirectAnswer({ eyebrow = "Quick answer", children }) {
  return (
    <aside className="direct-answer" aria-label={eyebrow}>
      <p className="eyebrow">{eyebrow}</p>
      <p>{children}</p>
    </aside>
  );
}

/** A body section, optionally tinted, with its heading block. */
export function ContentSection({ id, tinted, eyebrow, title, lede, children }) {
  return (
    <section
      id={id}
      className={`content-section${tinted ? " tinted" : ""}`}
    >
      {(eyebrow || title || lede) && (
        <div className="content-section-heading">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2>{title}</h2>}
          {lede && <p>{lede}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

/** Numbered step list. `steps` is [[title, text], …]. */
export function NumberedProcess({ steps }) {
  return (
    <ol className="numbered-process">
      {steps.map(([title, text], i) => (
        <li key={title}>
          <span>{i + 1}</span>
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/**
 * Card grid. Each card is { badge, title, text, extra }; `badge` is the
 * number or glyph in the corner. `columns="two"` narrows the grid.
 */
export function ContentCardGrid({ cards, columns }) {
  return (
    <div className={`content-card-grid${columns ? ` ${columns}` : ""}`}>
      {cards.map((card) => (
        <article className="content-card" key={card.title}>
          <span>{card.badge}</span>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
          {card.extra}
        </article>
      ))}
    </div>
  );
}

/** Highlighted aside inside a section. */
export function ContentNote({ title, children }) {
  return (
    <div className="content-note">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

/** Data table. `headers` is a string list, `rows` an array of row arrays. */
export function ContentTable({ headers, rows }) {
  return (
    <div className="content-table">
      <table>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Two side-by-side panels; the second is tinted with `alt`. */
export function ContentSplit({ panels }) {
  return (
    <div className="content-split">
      {panels.map((panel, i) => (
        <article
          className={`content-panel${i === 1 ? " alt" : ""}`}
          key={panel.title}
        >
          <h3>{panel.title}</h3>
          {/* A panel holds either a bullet list or a run of paragraphs. */}
          {panel.paras?.length > 0 ? (
            panel.paras.map((para, j) => <p key={j}>{para}</p>)
          ) : (
            <ul>
              {/* Items may be links, so key by position, not content. */}
              {panel.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

/** Ticked list. */
export function CheckList({ items }) {
  return (
    <ul className="check-list">
      {/* Items may carry inline links, so key by position. */}
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

/** Row of "next page" links. */
export function RelatedLinks({ links }) {
  return (
    <div className="related-links">
      {links.map((l) => (
        <SiteLink key={l.href} href={l.href}>
          {l.label}
          <span>→</span>
        </SiteLink>
      ))}
    </div>
  );
}

/** Term/definition pairs, used by the safeguarding and accessibility pages. */
export function DefinitionList({ items }) {
  return (
    <dl className="definition-list">
      {items.map(([term, detail]) => (
        <Fragment key={term}>
          <dt>{term}</dt>
          <dd>{detail}</dd>
        </Fragment>
      ))}
    </dl>
  );
}

/** Contact panel closing a policy page, with its action button. */
export function PolicyContact({ title, action, children }) {
  return (
    <div className="policy-contact">
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
      {action}
    </div>
  );
}

/**
 * Always-open question list. `questions` is [[number, question, answer], …];
 * the numbers are part of the reference's visible design, not indices.
 */
export function OpenQuestionList({ questions, children }) {
  return (
    <div className="open-question-list">
      {children}
      {questions?.map(([number, question, answer]) => (
        <article className="open-question" key={number}>
          <span>{number}</span>
          <div>
            <h3>{question}</h3>
            <p>{answer}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

/**
 * Government and research references. These are outbound links to
 * bodies that do not endorse this course, so the copy says so and the
 * links carry rel="noopener noreferrer".
 */
export function OfficialSources({ id, eyebrow, title, lede, sources }) {
  const titleId = `${id}-title`;
  return (
    <section className="official-source-section" aria-labelledby={titleId}>
      <div className="content-section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
        <p>{lede}</p>
      </div>
      <div className="official-source-grid">
        {sources.map((s) => (
          <article key={s.href}>
            <p>{s.publisher}</p>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              Open official resource
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
