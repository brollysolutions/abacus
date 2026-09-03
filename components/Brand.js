import Image from "next/image";
import SiteLink from "./SiteLink";
import { BUSINESS } from "@/lib/business";

/**
 * Logo + wordmark lockup, used in the header and (with `inverse`) the
 * footer. Class names match the reference stylesheet.
 */
export default function Brand({ inverse = false }) {
  return (
    <SiteLink
      href="/#top"
      className={`brand brand-lockup${inverse ? " inverse" : ""}`}
      aria-label={`${BUSINESS.name} home`}
    >
      <Image
        src="/abacus-experts-logo.png"
        alt=""
        width={128}
        height={100}
        priority
        className="brand-logo"
      />
      <span className="brand-name">
        <strong>{BUSINESS.name}</strong>
        <small>{BUSINESS.tagline}</small>
      </span>
    </SiteLink>
  );
}
