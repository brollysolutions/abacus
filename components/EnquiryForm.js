"use client";

import { useState } from "react";
import { BUSINESS, track } from "@/lib/business";

/**
 * Enquiry form. Two instances render on the page — the hero form and
 * the one in the closing demo section — so `formId` namespaces the
 * input ids; without it their labels would target each other's fields.
 *
 * There is no backend: submitting validates the mobile number and opens
 * WhatsApp with the answers prefilled for the parent to send.
 *
 * `className`, `heading` and `points` cover the two layouts in the
 * reference: the hero form carries its own heading block, the closing
 * one sits beside a separate copy column.
 */
export default function EnquiryForm({
  formId,
  fields,
  intro,
  submitLabel,
  submitClassName = "button form-whatsapp",
  fineprint,
  className,
  heading,
}) {
  const [status, setStatus] = useState("");
  const [ok, setOk] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const telField = fields.find((f) => f.type === "tel");
    const phone = String(data.get(telField.name) || "").replace(/\D/g, "");

    if (!form.checkValidity() || !/^[6-9]\d{9}$/.test(phone)) {
      setOk(false);
      setStatus(
        "Please enter your name, child’s age and a valid 10-digit Indian mobile number."
      );
      form.reportValidity();
      return;
    }

    const values = Object.fromEntries(
      fields.map((f) => [
        f.name,
        f.name === telField.name ? phone : String(data.get(f.name) || ""),
      ])
    );

    // Name and number are personal data: they go to WhatsApp only, never
    // into the dataLayer.
    const { parentName, [telField.name]: _mobile, ...analytics } = values;
    track("lead_submit", { form: formId, ...analytics });

    const message = [
      intro,
      ...fields.map((f) => `${f.label}: ${values[f.name] || "Not specified"}`),
    ].join("\n");

    window.open(
      `https://wa.me/${BUSINESS.whatsappDigits}?text=${encodeURIComponent(
        message
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
    setOk(true);
    setStatus("Your enquiry is ready in WhatsApp. Please tap Send to complete it.");
    form.reset();
  }

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      {heading}

      {/* The control is nested inside its <label>, which associates the
          two implicitly — no id needed, and so no ids to collide between
          the two forms on this page. */}
      {fields.map((field) => (
          <label key={field.name}>
            {field.label}
            {field.type === "select" ? (
              <select name={field.name} required={field.required} defaultValue="">
                <option value="" disabled>
                  {field.placeholder}
                </option>
                {field.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                inputMode={field.inputMode}
                required={field.required}
              />
            )}
          </label>
      ))}

      <button className={submitClassName} type="submit">
        {submitLabel}
        <span aria-hidden="true">↗</span>
      </button>

      <p aria-live="polite" className={ok ? "form-status ok" : "form-status"}>
        {status}
      </p>
      <small>{fineprint}</small>
    </form>
  );
}
