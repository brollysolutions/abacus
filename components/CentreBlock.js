import { BUSINESS, ADDRESS } from "@/lib/business";

/**
 * Address card plus the embedded map, shared by the pages that show the
 * Hyder Nagar centre.
 *
 * `extraAction` appends a third button (contact-us adds a call link).
 */
export default function CentreBlock({
  heading = "Centre address",
  labelledContacts = false,
  contactLabel,
  directionsLabel = "Get directions",
  extraAction,
}) {
  return (
    <div className="area-lead">
      <article className="centre-detail">
        <h3>{heading}</h3>
        <address>
          3rd Floor, Dr Atmaram Estates
          <br />
          Metro Pillar No. A689
          <br />
          Beside Sri Bhramaramba Theatre
          <br />
          Hyder Nagar, Vasantha Nagar
          <br />
          Hyderabad, Telangana 500072
        </address>
        <p>
          {contactLabel ? (
            <strong>{contactLabel}:</strong>
          ) : labelledContacts ? (
            <strong>Phone:</strong>
          ) : (
            "Call:"
          )}{" "}
          <a href={`tel:+${BUSINESS.phoneDigits}`}>{BUSINESS.phoneDisplay}</a>
          <br />
          {labelledContacts ? <strong>Email:</strong> : "Email:"}{" "}
          <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
        </p>
        <div className="button-row">
          <a
            className="button"
            href={ADDRESS.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {directionsLabel}
            <span>↗</span>
          </a>
          <a
            className="button secondary"
            href={BUSINESS.mapsShareUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View us on Google
            <span>↗</span>
          </a>
          {extraAction}
        </div>
      </article>

      <figure className="google-map-card">
        <iframe
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            `${BUSINESS.name}, ${ADDRESS.streetAddress}, ${ADDRESS.locality}, ${ADDRESS.region} ${ADDRESS.postalCode}`
          )}&output=embed`}
          title={`Map showing ${BUSINESS.name} in Hyder Nagar, Hyderabad`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <figcaption>
          <div>
            <strong>{ADDRESS.name}</strong>
            <span>{ADDRESS.landmark}</span>
          </div>
          <a
            href={BUSINESS.mapsShareUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open on Google
            <span aria-hidden="true">↗</span>
          </a>
        </figcaption>
      </figure>
    </div>
  );
}
