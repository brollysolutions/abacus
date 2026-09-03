import SiteLink from "./SiteLink";

/**
 * Hero for the secondary pages: breadcrumb, eyebrow, title, summary and
 * the two calls to action.
 *
 * `actions` is optional — the policy pages use <LegalHero> instead.
 */
export default function ContentHero({
  title,
  eyebrow,
  summary,
  breadcrumb,
  actions,
  updated,
}) {
  return (
    <section className="content-hero">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <SiteLink href="/">Home</SiteLink>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{breadcrumb || title}</span>
      </nav>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="content-hero-summary">{summary}</p>
      {actions && (
        <div className="button-row content-hero-actions">{actions}</div>
      )}
      {updated && <p className="content-updated">{updated}</p>}
    </section>
  );
}

/** Hero for the four policy pages. */
export function LegalHero({ eyebrow, title, summary, updated }) {
  return (
    <section className="legal-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{summary}</p>
      <small>{updated}</small>
    </section>
  );
}
