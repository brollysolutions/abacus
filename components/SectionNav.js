"use client";

import { track } from "@/lib/business";
import useActiveSection from "./useActiveSection";

/**
 * Horizontal strip of section links that highlights the reader's
 * position. `items` is [{ id, label }], `label` names the nav for
 * assistive technology.
 */
export default function SectionNav({ items, label = "Page sections" }) {
  const [activeId, onNavigate] = useActiveSection(items.map((s) => s.id));

  return (
    <nav className="course-section-nav page-section-nav" aria-label={label}>
      <div>
        {items.map((section) => {
          const isActive = section.id === activeId;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={isActive ? "active" : ""}
              aria-current={isActive ? "location" : undefined}
              onClick={() => {
                onNavigate(section.id);
                track("section_nav_click", { section: section.id });
              }}
            >
              {section.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
