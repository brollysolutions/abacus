import ContentPage from "@/components/ContentPage";
import LegalBlocks from "@/components/LegalBlocks";
import SiteLink from "@/components/SiteLink";
import { pageOpenGraph } from "@/lib/seo";
import { buildSiteGraph } from "@/lib/schema";
import { LEGAL_PAGES } from "@/lib/content/legal";

const PAGE = LEGAL_PAGES["terms-and-conditions"];

export const metadata = {
  title: PAGE.title,
  description: PAGE.description,
  alternates: { canonical: "/terms-and-conditions/" },
  robots: { index: true, follow: true },
  openGraph: pageOpenGraph({
    url: "/terms-and-conditions/",
    title: PAGE.h1,
    description: PAGE.description,
  }),
};

export default function TermsAndConditionsPage() {
  return (
    <ContentPage
      variant="legal"
      hero={{
        eyebrow: PAGE.eyebrow,
        title: PAGE.h1,
        summary: PAGE.summary,
        updated: PAGE.updated,
      }}
      sections={PAGE.sections}
      schema={buildSiteGraph()}
    >
      <LegalBlocks blocks={PAGE.blocks} />
      <section className="legal-related-section">
        <h2>{PAGE.relatedHeading}</h2>
        <nav className="related-links">
          {PAGE.related.map(([label, href]) => (
            <SiteLink key={href} href={href}>
              {label}
              <span>→</span>
            </SiteLink>
          ))}
        </nav>
      </section>
    </ContentPage>
  );
}
