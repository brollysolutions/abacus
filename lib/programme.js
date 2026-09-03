/* ------------------------------------------------------------------
   Course facts: fees, batch limits, trainer and practice guidance.

   Kept out of lib/business.js on purpose — that module is imported by
   client components, this one is read only by the server page and
   lib/schema.js, so none of it reaches the browser bundle.
------------------------------------------------------------------- */

/* `amount`/`currency` feed the schema.org Offer nodes, which reject a
   formatted string; `display` is what the fee cards render. */
export const FEES = {
  online: { amount: 18000, currency: "INR", display: "₹18,000" },
  classroom: { amount: 20000, currency: "INR", display: "₹20,000" },
  hybrid: { amount: 19000, currency: "INR", display: "₹19,000" },
};

export const BATCH = {
  juniorMax: 6,
  seniorMax: 8,
  juniorMinutes: "45–50",
  seniorMinutes: "55–60",
  juniorAges: "About ages 5–8",
  seniorAges: "About ages 8–13",
  frequency: "Two live classes each week",
  ageGuide: "About 5–13 years",
};

export const TRAINER = {
  name: "Joshna",
  experience: "9+ years",
  experienceBadge: "9+ years’ experience",
  bio: "Our lead abacus trainer has more than nine years of teaching experience. Ask us which levels, formats and current batches she handles.",
};

export const PRACTICE = {
  minutes: "10–15",
  unit: "minutes",
};
