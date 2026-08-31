/**
 * Small uppercase label with the amber bar before it.
 * `tone` picks the label colour to suit the section background.
 */
export default function Eyebrow({ children, tone = "teal", className = "" }) {
  const toneClass =
    tone === "amber"
      ? "text-amber"
      : tone === "white"
      ? "text-white"
      : "text-teal";
  return (
    <span
      className={`mb-3.5 inline-flex items-center gap-2 text-[.78rem] font-black uppercase tracking-[.12em] ${toneClass} before:h-[3px] before:w-[27px] before:rounded-full before:bg-amber before:content-[''] ${className}`}
    >
      {children}
    </span>
  );
}
