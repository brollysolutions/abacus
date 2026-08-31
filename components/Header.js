"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Brand from "./Brand";
import { track } from "@/lib/business";

/**
 * Sticky site header.
 *
 * `links` is an array of either:
 *   { href, label }                    -> a plain link (page anchor or route)
 *   { label, items: [{ href, label }] } -> a dropdown menu (e.g. "Classes")
 *
 * Below the lg2 breakpoint the links collapse into a toggleable panel.
 */
export default function Header({ links = [] }) {
  const [openMenu, setOpenMenu] = useState(null); // label of the open dropdown
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  // Close the dropdown on outside click / Escape.
  useEffect(() => {
    if (!openMenu && !mobileOpen) return;
    function onPointerDown(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenu, mobileOpen]);

  function closeAll() {
    setOpenMenu(null);
    setMobileOpen(false);
  }

  const linkCls =
    "text-[.9rem] font-[750] text-navy no-underline hover:text-teal";

  return (
    <header
      className="sticky top-0 z-50 border-b border-navy/8 bg-warm/95 backdrop-blur-[14px]"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex min-h-[76px] w-[min(var(--max-width-site),calc(100%-36px))] items-center justify-between gap-5 max-sm2:min-h-[66px] max-sm2:w-[min(calc(100%-28px),var(--max-width-site))]">
        <Link
          href="/"
          onClick={closeAll}
          className="inline-flex items-center no-underline"
          aria-label="Abacus Experts home"
        >
          <Brand tone="dark" iconClassName="h-10 w-auto max-sm2:h-9" />
        </Link>

        <div ref={navRef} className="flex items-center gap-4">
          {/* Desktop navigation */}
          <nav
            className="flex items-center gap-6 max-lg2:hidden"
            aria-label="Page sections"
          >
            {links.map((l) =>
              l.items ? (
                <div
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(l.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === l.label}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenMenu(openMenu === l.label ? null : l.label)
                    }
                    className={`inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 font-sans ${linkCls}`}
                  >
                    {l.label}
                    <span
                      aria-hidden
                      className={`text-[.65rem] transition-transform duration-150 ${
                        openMenu === l.label ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    className={`absolute left-1/2 top-full w-[248px] -translate-x-1/2 pt-3 ${
                      openMenu === l.label ? "block" : "hidden"
                    }`}
                  >
                    <ul className="m-0 grid list-none gap-1 rounded-[14px] border border-line bg-white p-2 shadow-card">
                      {l.items.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            onClick={closeAll}
                            className="block rounded-[10px] px-3 py-2.5 text-[.88rem] font-[750] text-navy no-underline hover:bg-mist hover:text-teal"
                          >
                            {s.label}
                            {s.hint ? (
                              <span className="mt-0.5 block text-[.75rem] font-[600] text-slate">
                                {s.hint}
                              </span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : l.href.startsWith("/") ? (
                <Link key={l.href} href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              ) : (
                <a key={l.href} href={l.href} className={linkCls}>
                  {l.label}
                </a>
              )
            )}
          </nav>

          <a
            href="#assessment"
            onClick={() => {
              closeAll();
              track("cta_click", { cta: "readiness_assessment" });
            }}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[13px] bg-amber px-[19px] py-3 font-extrabold leading-tight text-deep shadow-[0_10px_25px_rgba(255,183,3,.27)] transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#ffc329] max-sm2:hidden"
          >
            Book free assessment
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setOpenMenu(null);
            }}
            className="hidden h-11 w-11 cursor-pointer place-items-center rounded-[11px] border-2 border-navy/15 bg-white/80 text-navy max-lg2:grid"
          >
            <span aria-hidden className="grid gap-[5px]">
              <i className="block h-[2px] w-[19px] rounded bg-navy" />
              <i className="block h-[2px] w-[19px] rounded bg-navy" />
              <i className="block h-[2px] w-[19px] rounded bg-navy" />
            </span>
          </button>

          {/* Mobile panel */}
          <nav
            id="mobile-nav"
            aria-label="Site menu"
            className={`absolute inset-x-0 top-full border-b border-line bg-warm px-[18px] py-4 shadow-card lg2:hidden ${
              mobileOpen ? "block" : "hidden"
            }`}
          >
            <ul className="m-0 grid list-none gap-1 p-0">
              {links.map((l) =>
                l.items ? (
                  <li key={l.label}>
                    <span className="block px-2 pb-1 pt-3 text-[.72rem] font-black uppercase tracking-[.1em] text-slate">
                      {l.label}
                    </span>
                    <ul className="m-0 grid list-none gap-1 p-0">
                      {l.items.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            onClick={closeAll}
                            className="block rounded-[10px] px-2 py-2.5 text-[.95rem] font-[750] text-navy no-underline hover:bg-mist"
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={l.href}>
                    {l.href.startsWith("/") ? (
                      <Link
                        href={l.href}
                        onClick={closeAll}
                        className="block rounded-[10px] px-2 py-2.5 text-[.95rem] font-[750] text-navy no-underline hover:bg-mist"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        onClick={closeAll}
                        className="block rounded-[10px] px-2 py-2.5 text-[.95rem] font-[750] text-navy no-underline hover:bg-mist"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                )
              )}
              <li className="mt-2">
                <a
                  href="#assessment"
                  onClick={() => {
                    closeAll();
                    track("cta_click", { cta: "readiness_assessment" });
                  }}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-[13px] bg-amber px-4 font-extrabold text-deep"
                >
                  Book free assessment
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
