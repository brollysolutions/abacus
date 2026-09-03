import { Fragment } from "react";
import SiteLink from "./SiteLink";

/**
 * Renders the flat block list a policy page is stored as.
 *
 * Policy copy is mostly prose with the occasional bold label or
 * cross-link, so the content module keeps it as text with two markers
 * rather than as JSX: `**bold**` and `[[label|href]]`. That keeps the
 * copy editable without touching components.
 */
const INLINE = /(\*\*[^*]+\*\*|\[\[[^\]]+\]\])/g;

function inline(text) {
  return text.split(INLINE).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("[[") && part.endsWith("]]")) {
      const [label, href] = part.slice(2, -2).split("|");
      return (
        <SiteLink key={i} href={href}>
          {label}
        </SiteLink>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export default function LegalBlocks({ blocks }) {
  return blocks.map((block, i) => {
    const [kind] = block;
    if (kind === "h2") {
      return (
        <h2 key={i} id={block[2] || undefined}>
          {inline(block[1])}
        </h2>
      );
    }
    if (kind === "p") {
      return <p key={i}>{inline(block[1])}</p>;
    }
    if (kind === "legalnote") {
      return (
        <div key={i} className="legal-note">
          {inline(block[1])}
        </div>
      );
    }
    const List = kind === "ol" ? "ol" : "ul";
    return (
      <List key={i}>
        {block[1].map((item, j) => (
          <li key={j}>{inline(item)}</li>
        ))}
      </List>
    );
  });
}
