"use client";

import { track } from "@/lib/business";
import useActiveSection from "./useActiveSection";

/**
 * The numbered table of contents that sits under every page's hero.
 *
 * `items` is [{ id, label }]; the page sets the matching section ids.
 *
 * A <details> disclosure, as in the reference: the whole list is in the
 * markup from the first paint and the toggle needs no JavaScript. The
 * only client work is highlighting the section currently in view.
 *
 * `summaryLabel` fixes the text beside "Table of contents". The home
 * page leaves it out so the summary tracks the current section; the
 * content pages pass "Explore this page".
 */
export default function PageToc({ items, summaryLabel }) {
  const [activeId, onNavigate] = useActiveSection(items.map((s) => s.id));
  const current = items.find((s) => s.id === activeId) || items[0];

  return (
    <nav className="page-table-of-contents" aria-label="Table of contents">
      <details>
        <summary>
          <span>
            <small>Table of contents</small>
            <strong>{summaryLabel || current.label}</strong>
          </span>
          <span className="toc-toggle" aria-hidden="true">
            +
          </span>
        </summary>
        <div className="toc-links">
          {items.map((section, i) => {
            const isActive = section.id === activeId;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={isActive ? "active" : ""}
                aria-current={isActive ? "location" : undefined}
                onClick={() => {
                  onNavigate(section.id);
                  track("toc_click", { section: section.id });
                }}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                {section.label}
              </a>
            );
          })}
        </div>
      </details>
    </nav>
  );
}
