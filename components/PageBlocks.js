import { Fragment } from "react";
import SiteLink from "./SiteLink";
import CentreBlock from "./CentreBlock";
import {
  ContentSection,
  NumberedProcess,
  ContentCardGrid,
  ContentSplit,
  ContentTable,
  CheckList,
  DefinitionList,
  ContentNote,
  PolicyContact,
  OpenQuestionList,
  RelatedLinks,
  OfficialSources,
} from "./content";

/* ------------------------------------------------------------------
   Renders the section/block lists in lib/content/pages.js.

   Copy in those modules is plain text with two inline markers so it
   stays editable without touching JSX: **bold** and [[label|href]].
------------------------------------------------------------------- */

const INLINE = /(\*\*[^*]+\*\*|\[\[[^\]]+\]\])/g;

export function inline(text) {
  if (typeof text !== "string") return text;
  return text.split(INLINE).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("[[") && part.endsWith("]]")) {
      const [label, href] = part.slice(2, -2).split("|");
      const external = /^https?:|^mailto:|^tel:/.test(href);
      return external ? (
        <a
          key={i}
          href={href}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {label}
        </a>
      ) : (
        <SiteLink key={i} href={href}>
          {label}
        </SiteLink>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function Block({ block, centre }) {
  const [kind] = block;

  switch (kind) {
    case "process":
      return (
        <NumberedProcess
          steps={block[1].map(([t, d]) => [t, inline(d)])}
        />
      );
    case "cards":
      return (
        <ContentCardGrid
          columns={block[1] || undefined}
          cards={block[2].map((c) => ({
            badge: c.badge,
            title: c.title,
            text: inline(c.text),
            extra: (
              <>
                {c.more?.map((m, i) => (
                  <p key={i}>{inline(m)}</p>
                ))}
                {c.items?.length > 0 && (
                  <ul>
                    {c.items.map((item, i) => (
                      <li key={i}>{inline(item)}</li>
                    ))}
                  </ul>
                )}
              </>
            ),
          }))}
        />
      );
    case "split":
      return (
        <ContentSplit
          panels={block[1].map((p) => ({
            title: p.title,
            items: p.items.map(inline),
            paras: p.paras?.map(inline),
          }))}
        />
      );
    case "table":
      return (
        <ContentTable
          headers={block[1]}
          rows={block[2].map((r) => r.map(inline))}
        />
      );
    case "checklist":
      return <CheckList items={block[1].map(inline)} />;
    case "definitions":
      return (
        <DefinitionList items={block[1].map(([t, d]) => [t, inline(d)])} />
      );
    case "note":
      return <ContentNote title={block[1]}>{inline(block[2])}</ContentNote>;
    case "pnote":
      return <p className="content-note">{inline(block[1])}</p>;
    case "contact": {
      const [, title, text, action] = block;
      return (
        <PolicyContact
          title={title}
          action={
            action && (
              <a className="button" href={action[1]}>
                {action[0]}
              </a>
            )
          }
        >
          {inline(text)}
        </PolicyContact>
      );
    }
    case "h3":
      return <h3>{inline(block[1])}</h3>;
    case "p":
      return <p>{inline(block[1])}</p>;
    case "questions":
      return <OpenQuestionList questions={block[1]} />;
    case "related":
      return (
        <RelatedLinks
          links={block[1].map(([label, href]) => ({ label, href }))}
        />
      );
    case "centre":
      return <CentreBlock {...(centre || {})} />;
    default:
      return null;
  }
}

export default function PageBlocks({ sections, centre }) {
  return sections.map((section, i) => {
    if (section.kind === "official") {
      return (
        <OfficialSources
          key={i}
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
          lede={section.lede}
          sources={section.sources}
        />
      );
    }

    const heading = section.blocks.find((b) => b[0] === "heading");
    const rest = section.blocks.filter((b) => b[0] !== "heading");

    return (
      <ContentSection
        key={section.id || i}
        id={section.id || undefined}
        tinted={section.tinted}
        eyebrow={heading?.[1]}
        title={heading?.[2]}
        lede={heading?.[3] ? inline(heading[3]) : undefined}
      >
        {rest.map((block, j) => (
          <Block key={j} block={block} centre={centre} />
        ))}
      </ContentSection>
    );
  });
}
