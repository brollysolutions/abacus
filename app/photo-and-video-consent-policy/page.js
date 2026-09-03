import ContentPage from "@/components/ContentPage";
import PageBlocks, { inline } from "@/components/PageBlocks";
import PageCta from "@/components/PageCta";
import SiteLink from "@/components/SiteLink";
import { DirectAnswer } from "@/components/content";
import { WHATSAPP_MESSAGES, buildWhatsappHref } from "@/lib/business";
import { pageOpenGraph } from "@/lib/seo";
import { buildSiteGraph } from "@/lib/schema";
import { PAGES } from "@/lib/content/pages";

const PAGE = PAGES["photo-and-video-consent-policy"];

export const metadata = {
  title: PAGE.title,
  description: PAGE.description,
  alternates: { canonical: "/photo-and-video-consent-policy/" },
  robots: { index: true, follow: true },
  openGraph: pageOpenGraph({
    url: "/photo-and-video-consent-policy/",
    title: PAGE.h1,
    description: PAGE.summary,
  }),
};

export default function MediaConsentPage() {
  return (
    <ContentPage
      variant={PAGE.policyPage ? "policy" : "content"}
      updated={PAGE.updated}
      hero={{
        eyebrow: PAGE.eyebrow,
        title: PAGE.h1,
        breadcrumb: PAGE.breadcrumb,
        summary: PAGE.summary,
        actions: PAGE.actions.length > 0 && (
          <>
            {PAGE.actions.map(([label, href]) =>
              href.startsWith("http") ? (
                <a
                  key={href}
                  className="button whatsapp"
                  href={buildWhatsappHref(WHATSAPP_MESSAGES.child)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <SiteLink key={href} href={href} className="button">
                  {label}
                </SiteLink>
              )
            )}
          </>
        ),
      }}
      sections={PAGE.sections}
      schema={buildSiteGraph()}
      afterBody={
        PAGE.cta && (
          <PageCta
            title={PAGE.cta.title}
            text={PAGE.cta.text}
            buttons={PAGE.cta.buttons}
          />
        )
      }
    >
      {PAGE.directAnswer && <DirectAnswer>{inline(PAGE.directAnswer)}</DirectAnswer>}
      <PageBlocks sections={PAGE.body} centre={PAGE.centre} />
    </ContentPage>
  );
}
