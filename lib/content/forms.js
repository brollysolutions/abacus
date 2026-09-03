/* ------------------------------------------------------------------
   The two enquiry forms and the enrolment path around them.

   Each form is described by data rather than a branch inside
   EnquiryForm, so a new question is added here, not in the component.
   Field descriptors:

     name          form field name; also the id suffix
     label         visible <label> text
     type          "text" | "tel" | "select"
     options       select only
     placeholder   select: the disabled first option; input: the hint
------------------------------------------------------------------- */

export const AGES = ["5", "6", "7", "8", "9", "10", "11", "12", "13"];

const AGE_OPTIONS = AGES.map((a) => `${a} years`);

const CHILD_AGE = {
  name: "childAge",
  label: "Child’s age",
  type: "select",
  placeholder: "Select age",
  options: AGE_OPTIONS,
  required: true,
};

/* Hero form — kept short so the first screen is not a wall of fields. */
export const HERO_FORM = {
  formId: "hero",
  className: "hero-enquiry-form",
  submitClassName: "button hero-form-submit",
  intro: "Hello Abacus Experts, I would like a free readiness assessment.",
  submitLabel: "Request demo on WhatsApp",
  fields: [
    {
      name: "parentName",
      label: "Parent’s name",
      type: "text",
      placeholder: "Your name",
      autoComplete: "name",
      required: true,
    },
    {
      name: "mobile",
      label: "Mobile number",
      type: "tel",
      placeholder: "+91 98765 43210",
      autoComplete: "tel",
      inputMode: "numeric",
      required: true,
    },
    CHILD_AGE,
    {
      name: "mode",
      label: "Preferred mode",
      type: "select",
      placeholder: "Select mode",
      options: [
        "Live Online",
        "Hyderabad Classroom",
        "Hybrid",
        "Help me choose",
      ],
      required: true,
    },
  ],
  fineprint:
    "WhatsApp opens in a new tab. Please do not share sensitive information about your child.",
};

/* Closing form — asks the two extra questions that shape the pathway
   recommendation. */
export const DEMO_FORM = {
  formId: "demo",
  intro: "Hello Abacus Experts, I would like to book a free abacus demo class.",
  submitLabel: "Request demo on WhatsApp",
  fields: [
    {
      name: "parentName",
      label: "Parent’s name",
      type: "text",
      placeholder: "Your name",
      autoComplete: "name",
      required: true,
    },
    {
      name: "mobile",
      label: "Mobile number",
      type: "tel",
      placeholder: "10-digit number",
      autoComplete: "tel",
      inputMode: "tel",
      required: true,
    },
    CHILD_AGE,
    {
      name: "experience",
      label: "Previous experience",
      type: "select",
      placeholder: "Select one",
      options: ["First-time learner", "Studied before", "Currently learning"],
      required: true,
    },
    {
      name: "mode",
      label: "Preferred mode",
      type: "select",
      placeholder: "Select one",
      options: [
        "Hyderabad classroom",
        "Live online",
        "Hybrid",
        "Help me compare",
      ],
      required: true,
    },
  ],
  fineprint:
    "WhatsApp opens in a new tab. Please share the form details there; do not enter sensitive child information.",
};

/* Section 25 — #enrol */
export const ENROL_SECTION = {
  eyebrow: "Our simple admission process",
  title: "How to Enrol with Abacus Experts in Hyderabad",
  lede: "We explain the recommended pathway, complete fee and available batch before you make a payment.",
};

export const ENROL_STEPS = [
  [
    "Share your child’s details",
    "Tell us the age, previous abacus experience, area and preferred class mode.",
  ],
  [
    "Attend our free readiness check",
    "We assess readiness and recommend a suitable junior or senior starting point.",
  ],
  [
    "Review our fees and batches",
    "We explain the complete fee, EMI option, kit inclusion and current batch choices.",
  ],
  [
    "Confirm enrolment",
    "Choose the suitable batch, review our written policies and complete payment.",
  ],
];

export const ENROL_CTA = {
  eyebrow: "Our admissions support",
  title: "Ready to check availability?",
  lede: "Call or WhatsApp us for the current demo, course fee and open seats.",
  whatsappLabel: "Start enrolment on WhatsApp",
};

/* Final section — #assessment */
export const DEMO_SECTION = {
  eyebrow: "No payment. No pressure.",
  title: "Free Abacus Demo Class in Hyderabad",
  lede: "Tell us about your child. We will help you understand readiness, pathway, format, fees and batches before you decide.",
  points: [
    "Basic readiness check",
    "Pathway suggestion",
    "Online, classroom and hybrid comparison",
    "Complete fee and EMI details",
  ],
};
