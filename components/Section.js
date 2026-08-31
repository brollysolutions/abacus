/**
 * Standard vertical section with an inner container.
 * `tone`: default (warm), "mist", or "navy".
 */
export default function Section({
  id,
  tone = "default",
  className = "",
  containerClassName = "",
  "aria-labelledby": ariaLabelledby,
  children,
}) {
  const toneClass =
    tone === "mist"
      ? "bg-mist"
      : tone === "navy"
      ? "bg-navy text-white/80 [&_h2]:text-white [&_h3]:text-white"
      : "";
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`py-[88px] max-sm2:py-16 ${toneClass} ${className}`}
    >
      <div
        className={`mx-auto w-[min(var(--max-width-site),calc(100%-36px))] max-sm2:w-[min(calc(100%-28px),var(--max-width-site))] ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

/** Just the centered container (no vertical padding), for custom sections. */
export function Container({ className = "", children }) {
  return (
    <div
      className={`mx-auto w-[min(var(--max-width-site),calc(100%-36px))] max-sm2:w-[min(calc(100%-28px),var(--max-width-site))] ${className}`}
    >
      {children}
    </div>
  );
}
