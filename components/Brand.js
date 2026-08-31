/**
 * Brand lockup: the abacus icon + "Abacus Experts" wordmark set in the
 * app's display font (Nunito Sans), matching the headings.
 *
 * tone="dark"  -> navy text, icon as-is (for light backgrounds / header)
 * tone="light" -> white text, icon on a white chip (for the dark footer,
 *                 where the navy icon would otherwise disappear)
 */
export default function Brand({ tone = "dark", iconClassName = "h-10 w-auto" }) {
  const icon = (
    <img
      src="/abacus_icon_transparent.svg"
      alt=""
      width={510}
      height={400}
      className={iconClassName}
    />
  );
  return (
    <span className="inline-flex items-center gap-2.5">
      {tone === "light" ? (
        <span className="inline-flex items-center rounded-[10px] bg-white p-1.5">
          {icon}
        </span>
      ) : (
        icon
      )}
      <span
        className={`font-display text-[1.25rem] font-extrabold leading-none tracking-[-.02em] ${
          tone === "light" ? "text-white" : "text-navy"
        }`}
      >
        Abacus Experts
      </span>
    </span>
  );
}
