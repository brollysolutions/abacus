import SiteHeader from "./SiteHeader";
import SiteFooter, { FloatingActions } from "./SiteFooter";
import ContentHero, { LegalHero } from "./ContentHero";
import PageToc from "./PageToc";
import SectionNav from "./SectionNav";
import ContentSiteMap from "./ContentSiteMap";
import JsonLd from "./JsonLd";

/**
 * Shell for every page except the home page: chrome, hero, the two
 * section navs, the body, the site map and the footer.
 *
 * `variant="legal"` switches to the policy-page layout — a plain hero,
 * no site map, and `<main class="legal-page">`.
 *
 * The site map, footer and floating actions sit outside <main>, which is
 * what about-us and contact-us do. Two of the reference's pages put them
 * inside instead; it renders the same either way, and a footer is not
 * part of a page's main content.
 */
export default function ContentPage({
  hero,
  sections,
  schema,
  variant = "content",
  updated,
  children,
  afterBody,
}) {
  const isLegal = variant === "legal";
  const isPolicy = variant === "policy";

  return (
    <>
      {schema && <JsonLd data={schema} />}
      <main
        className={
          isLegal
            ? "legal-page"
            : `content-page${isPolicy ? " policy-page" : ""}`
        }
      >
        <SiteHeader />

        {isLegal ? (
          <LegalHero {...hero} />
        ) : (
          <ContentHero {...hero} updated={updated} />
        )}

        <PageToc
          items={sections}
          summaryLabel={isLegal ? "Policy sections" : "Explore this page"}
        />
        <SectionNav items={sections} label={`${hero.title} sections`} />

        <article className={isLegal ? "legal-content" : "content-body"}>
          {children}
        </article>

        {afterBody}
      </main>

      {!isLegal && <ContentSiteMap />}
      <SiteFooter />
      {!isLegal && <FloatingActions />}
    </>
  );
}
