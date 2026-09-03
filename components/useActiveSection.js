"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks which of `ids` is the section currently in view, for the two
 * navigation strips that highlight the reader's position.
 *
 * Returns `[activeId, onNavigate]`. Call `onNavigate(id)` from a link's
 * onClick: smooth scrolling walks the observer through every section in
 * between, which makes the highlight flicker down the list, so the
 * observer is muted briefly and the clicked target is trusted instead.
 */
export default function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0]);
  const muted = useRef(false);
  const timer = useRef(null);

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (muted.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -65% 0px", threshold: 0 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      clearTimeout(timer.current);
    };
  }, [ids]);

  function onNavigate(id) {
    muted.current = true;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      muted.current = false;
    }, 700);
    setActiveId(id);
  }

  return [activeId, onNavigate];
}
