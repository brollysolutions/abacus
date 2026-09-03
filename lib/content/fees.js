/* ------------------------------------------------------------------
   Copy for the fee/mode cards, the mode comparison table, the centre
   location block and the home-practice guidance.

   Fee figures come from lib/programme.js so the cards, the comparison
   table and the schema.org Offer nodes cannot drift apart.
------------------------------------------------------------------- */
import { FEES } from "@/lib/programme";

/* Section 13 — #fees */
export const FEES_SECTION = {
  eyebrow: "Training modes and clear pricing",
  title: "Abacus Class Modes and Course Fees in Hyderabad",
  lede: "We offer Live Online, Hyderabad Classroom and Hybrid learning. We use the same level-based curriculum and progress checks in every mode, include a physical abacus kit and provide an EMI option.",
  primary: "Enroll for a demo class →",
  secondary: "WhatsApp us for details",
};

export const FEE_MODES = [
  {
    icon: "◎",
    iconTone: "blue",
    title: "Live Online",
    lede: "Join our live small-group class from home while our trainer observes your child’s hands and beads through the camera.",
    features: [
      "Live interaction with our trainer",
      "No daily travel",
      "Junior and senior pathways",
      "Same progress checks",
      "Abacus kit included",
    ],
    price: FEES.online.display,
    note: "EMI available",
  },
  {
    icon: "⌂",
    iconTone: "white",
    title: "Classroom — Hyderabad",
    lede: "Learn face to face with our trainer at our Hyder Nagar centre near JNTU Metro Station.",
    features: [
      "Metro Pillar A689",
      "Small level-matched batches",
      "Immediate finger correction",
      "Up to 6 junior / 8 senior learners",
      "Abacus kit included",
    ],
    price: FEES.classroom.display,
    note: "EMI available",
  },
  {
    icon: "↔",
    iconTone: "yellow",
    title: "Hybrid",
    lede: "Use our online classes when convenient and attend our classroom sessions when your child needs direct, in-person guidance.",
    features: [
      "Online and classroom learning",
      "Hybrid switching available",
      "Same curriculum and levels",
      "We arrange a matching available batch",
      "Abacus kit included",
    ],
    price: FEES.hybrid.display,
    note: "EMI available",
  },
];

export const FEE_COMPARE_HEADERS = [
  "Compare",
  "Live Online",
  "Hyderabad Classroom",
  "Hybrid",
];

export const FEE_COMPARE_ROWS = [
  [
    "Course fee",
    FEES.online.display,
    FEES.classroom.display,
    FEES.hybrid.display,
  ],
  ["Interaction", "Live video", "Face to face", "Both formats"],
  ["Travel", "No commute", "Travel to centre", "Only for classroom sessions"],
  ["Mode switching", "Not applicable", "Not applicable", "Available"],
  ["Abacus kit", "Included", "Included", "Included"],
  ["EMI", "Available", "Available", "Available"],
];

/* Section 15 — #centre */
export const CENTRE_SECTION = {
  eyebrow: "Abacus classes near me in Hyderabad",
  title: "Abacus Training Centre Near JNTU Metro in Hyder Nagar",
  ledeStart:
    "Our abacus institute in Hyderabad serves families from Hyder Nagar, Nizampet, KPHB, Kukatpally, Miyapur, Bachupally and nearby areas. Read our ",
  ledeLinkLabel: "Hyderabad service-area guide",
  ledeLinkHref: "/areas-we-serve/",
  ledeEnd:
    ", join classroom abacus training at the centre or choose live online classes anywhere in Hyderabad.",
};

/* Section 16 — home practice */
export const PRACTICE_SECTION = {
  eyebrow: "Practice without pressure",
  title: "How Much Home Practice Do We Recommend?",
  lede: "We recommend short, correct and regular practice instead of long, irregular sessions.",
  note: "We adjust the practice plan according to your child’s level, accuracy and confidence.",
};

export const PRACTICE_BLOCKS = [
  [
    "Our beginner practice guide",
    "We usually suggest practice on several days each week in a quiet place. Follow our trainer’s method and stop when tiredness causes repeated errors.",
  ],
  [
    "How parents can help",
    "Set a regular practice time, encourage effort and share any difficulty with our trainer. Please do not complete the answers for your child.",
  ],
];
