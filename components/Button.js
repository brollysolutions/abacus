import Link from "next/link";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-[13px] border-2 px-[19px] py-3 font-extrabold leading-tight cursor-pointer transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-[3px] focus-visible:outline-teal/35 focus-visible:outline-offset-[3px]";

// Each variant sets its own border colour: keeping `border-transparent`
// in `base` made it compete with the variants' border colour in the same
// Tailwind layer, so the secondary outline never rendered.
const variants = {
  primary:
    "border-transparent bg-amber text-deep shadow-[0_10px_25px_rgba(255,183,3,.27)] hover:bg-[#ffc329]",
  secondary:
    "bg-white/80 border-navy/20 text-navy hover:border-teal",
  // secondary button used on dark (navy) backgrounds
  secondaryOnDark:
    "bg-transparent border-white/30 text-white hover:border-teal",
};

/**
 * Shared button. Renders a next/link when `href` is internal, a plain
 * anchor for hashes/external, or a <button> when `as="button"`.
 */
export default function Button({
  variant = "primary",
  wide = false,
  as,
  href,
  className = "",
  children,
  ...props
}) {
  const cls = `${base} ${variants[variant] || variants.primary} ${
    wide ? "w-full" : ""
  } ${className}`;

  if (as === "button") {
    return (
      <button className={cls} {...props}>
        {children}
      </button>
    );
  }

  // Use next/link for internal routes; plain <a> for hash + external links.
  const isInternal = href && href.startsWith("/") && !href.startsWith("//");
  if (isInternal) {
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...props}>
      {children}
    </a>
  );
}
