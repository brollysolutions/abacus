"use client";

import { useState } from "react";
import { BUSINESS, track } from "@/lib/business";

const AGES = ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13+"];
const fieldWrap = "mb-[13px]";
const labelCls = "mb-1.5 block text-[.8rem] font-[820] text-navy";
const controlCls =
  "w-full rounded-[10px] border border-[#cbd9e1] bg-white px-3 py-[11px] text-ink placeholder:text-[#84929e] focus-visible:outline-[3px] focus-visible:outline-teal/35 focus-visible:outline-offset-[3px]";
const gridCls = "grid grid-cols-2 gap-3 max-sm2:grid-cols-1";

/**
 * Lead capture form. `variant` controls the extra fields and the
 * WhatsApp message wording:
 *   - "online"    -> parentName, phone, childAge, experience
 *   - "hyderabad" -> parentName, phone, childAge, area, format
 */
export default function LeadForm({ variant = "online" }) {
  const [status, setStatus] = useState("");
  const [ok, setOk] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") || "").replace(/\D/g, "");

    if (!form.checkValidity() || !/^[6-9]\d{9}$/.test(phone)) {
      setOk(false);
      setStatus(
        "Please enter your name, child’s age and a valid 10-digit Indian mobile number."
      );
      form.reportValidity();
      return;
    }

    const parentName = data.get("parentName");
    const childAge = data.get("childAge");

    let message;
    if (variant === "hyderabad") {
      const area = data.get("area");
      const format = data.get("format");
      track("lead_submit", { child_age: childAge, format, area });
      message = [
        "Hello Abacus Experts, I would like a free readiness assessment.",
        `Parent: ${parentName}`,
        `Mobile: ${phone}`,
        `Child's age: ${childAge}`,
        `Hyderabad area: ${area || "Not specified"}`,
        `Preferred format: ${format}`,
      ].join("\n");
    } else {
      const experience = data.get("experience");
      track("lead_submit", { child_age: childAge, experience });
      message = [
        "Hello Abacus Experts, I would like a free online readiness assessment.",
        `Parent: ${parentName}`,
        `Mobile: ${phone}`,
        `Child's age: ${childAge}`,
        `Previous experience: ${experience}`,
      ].join("\n");
    }

    if (!BUSINESS.whatsappDigits) {
      setOk(false);
      setStatus(
        "The form is ready, but the verified WhatsApp number must be added in lib/business.js before launch."
      );
      return;
    }

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
    <form onSubmit={handleSubmit} noValidate>
      {variant === "hyderabad" ? (
        <>
          <div className={fieldWrap}>
            <label className={labelCls} htmlFor="parent-name">
              Parent’s name
            </label>
            <input
              id="parent-name"
              name="parentName"
              autoComplete="name"
              placeholder="Your name"
              required
              className={controlCls}
            />
          </div>
          <div className={gridCls}>
            <div className={fieldWrap}>
              <label className={labelCls} htmlFor="phone">
                Mobile number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="10-digit number"
                pattern="[6-9][0-9]{9}"
                required
                className={controlCls}
              />
            </div>
            <div className={fieldWrap}>
              <label className={labelCls} htmlFor="child-age">
                Child’s age
              </label>
              <select
                id="child-age"
                name="childAge"
                required
                defaultValue=""
                className={controlCls}
              >
                <option value="">Select age</option>
                {AGES.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={gridCls}>
            <div className={fieldWrap}>
              <label className={labelCls} htmlFor="area">
                Hyderabad area
              </label>
              <input
                id="area"
                name="area"
                autoComplete="address-level3"
                placeholder="e.g. Miyapur"
                className={controlCls}
              />
            </div>
            <div className={fieldWrap}>
              <label className={labelCls} htmlFor="format">
                Preferred format
              </label>
              <select id="format" name="format" className={controlCls}>
                <option>Help me choose</option>
                <option>Live online</option>
                <option>Classroom</option>
              </select>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={gridCls}>
            <div className={fieldWrap}>
              <label className={labelCls} htmlFor="parent-name">
                Parent’s name
              </label>
              <input
                id="parent-name"
                name="parentName"
                autoComplete="name"
                placeholder="Your name"
                required
                className={controlCls}
              />
            </div>
            <div className={fieldWrap}>
              <label className={labelCls} htmlFor="phone">
                Mobile number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="10-digit Indian number"
                pattern="[6-9][0-9]{9}"
                required
                className={controlCls}
              />
            </div>
          </div>
          <div className={gridCls}>
            <div className={fieldWrap}>
              <label className={labelCls} htmlFor="child-age">
                Child’s age
              </label>
              <select
                id="child-age"
                name="childAge"
                required
                defaultValue=""
                className={controlCls}
              >
                <option value="">Select age</option>
                {AGES.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>
            <div className={fieldWrap}>
              <label className={labelCls} htmlFor="experience">
                Previous abacus experience
              </label>
              <select id="experience" name="experience" className={controlCls}>
                <option>Complete beginner</option>
                <option>Less than 6 months</option>
                <option>6–12 months</option>
                <option>More than 1 year</option>
                <option>Not sure</option>
              </select>
            </div>
          </div>
        </>
      )}

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[13px] bg-amber px-[19px] py-3 font-extrabold leading-tight text-deep shadow-[0_10px_25px_rgba(255,183,3,.27)] transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#ffc329]"
      >
        Request free assessment
      </button>
      <p className="mt-2.5 text-[.74rem] leading-[1.45] text-slate">
        No payment required. By submitting, you agree to be contacted about this
        enquiry. Do not enter sensitive child information.
      </p>
      <p
        aria-live="polite"
        className={`mt-2 min-h-[21px] text-[.79rem] font-[750] ${
          ok ? "text-[#0f7a56]" : "text-error"
        }`}
      >
        {status}
      </p>
    </form>
  );
}
