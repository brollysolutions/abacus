/* ------------------------------------------------------------------
   The thirty parent FAQs.

   Kept in its own module because lib/schema.js reads the same array to
   build the FAQPage graph node — every acceptedAnswer.text must match
   the answer rendered on the page verbatim, so there is exactly one
   copy of each answer.
------------------------------------------------------------------- */

export const FAQ_SECTION = {
  eyebrow: "Clear answers from Abacus Experts",
  title: "Questions About Our Abacus Classes in Hyderabad",
  lede: "Read direct answers about our curriculum, fees, batches, learning modes, assessment process and enrolment.",
  /* Cross-links to the standalone pages that are not built yet — see
     the follow-up list in README. */
  links: [
    { href: "/parent-faqs/", label: "Read all 30 parent FAQs" },
    { href: "/how-abacus-classes-work/", label: "See how our classes work" },
    {
      href: "/student-progress-and-assessment/",
      label: "Understand progress checks",
    },
  ],
  closingTitle: "Still unsure?",
  closingText: "Ask us during the free readiness assessment.",
};

export const FAQS = [
  [
    "What are abacus classes?",
    "At Abacus Experts, we teach children to represent numbers and solve arithmetic using a physical bead frame. After the physical method becomes stable, we gradually introduce bead visualisation and mental arithmetic.",
  ],
  [
    "What is the right age to start abacus classes?",
    "We usually guide children from about five years of age. However, we check number recognition, counting, attention and the ability to follow short instructions before recommending a starting level.",
  ],
  [
    "What do you teach in your abacus course?",
    "Our curriculum covers abacus parts, posture, finger movement, place value, addition, subtraction, multiplication, division, visualisation and mental arithmetic. We teach each topic according to the child’s assessed pathway and progress.",
  ],
  [
    "How often do you conduct abacus classes?",
    "We normally conduct two live classes each week. Our junior lessons usually last 45–50 minutes, while our senior lessons usually last 55–60 minutes.",
  ],
  [
    "How many students are in each batch?",
    "We limit junior batches to six learners and senior batches to eight learners. We also place children with others at a similar learning level.",
  ],
  [
    "How much home practice do you recommend?",
    "We usually recommend 10–15 minutes of focused practice on several days each week for beginners. Our trainer may adjust the practice plan according to the child’s level, accuracy and confidence.",
  ],
  [
    "Does my child need previous abacus experience?",
    "No. We accept first-time learners after a free readiness check. If your child has learned abacus before, we assess retained skills and learning gaps before recommending a level.",
  ],
  [
    "Are your online abacus classes live?",
    "Yes. We conduct live online classes. Your child uses a physical abacus at home, and the camera should show the hands and beads so our trainer can observe and correct the technique.",
  ],
  [
    "Do you teach the same curriculum online and in the classroom?",
    "Yes. We use the same curriculum, batch limits and progression standards for online and classroom learning. The main difference is how your child attends the live lesson.",
  ],
  [
    "How do you measure a child’s progress?",
    "We assess posture, finger technique, place value, accuracy, independence, visualisation and practice consistency. We move a child forward after the required skills become stable, not simply because classes were attended.",
  ],
  [
    "Will your abacus course improve school marks?",
    "Our course can support arithmetic fluency, number confidence and mental-calculation practice. However, abacus does not cover the complete school mathematics curriculum, so we do not guarantee higher marks.",
  ],
  [
    "How much do your abacus classes in Hyderabad cost?",
    "Our complete course fee is ₹18,000 for Live Online, ₹20,000 for Hyderabad Classroom and ₹19,000 for Hybrid learning. EMI is available, and a physical abacus kit is included in every mode.",
  ],
  [
    "Is your readiness assessment free?",
    "Yes. Our readiness assessment is free and does not require payment or enrolment. We use it to check whether abacus suits your child now and to recommend a suitable starting point.",
  ],
  [
    "What happens during your readiness assessment?",
    "We check basic number recognition, counting, attention, comfort with short instructions and previous abacus learning. We then explain the recommended junior or senior pathway and starting point to the parent.",
  ],
  [
    "How long does your complete abacus course take?",
    "The duration depends on the child’s starting point, pathway, class schedule, home practice and assessment progress. We explain the learning roadmap after the readiness check rather than giving one fixed duration for every learner.",
  ],
  [
    "How many levels are in your abacus course?",
    "We organise learning through junior and senior pathways and a step-by-step curriculum. The exact entry point and progression depend on our assessment of the child’s age, readiness, number skills and previous learning.",
  ],
  [
    "Do you offer weekday and weekend batches?",
    "Weekday and weekend options may be available for classroom and live online learning. Please confirm the current days, start times and open seats with our admissions team before enrolling.",
  ],
  [
    "Is an abacus kit included in your course fee?",
    "Yes. We include a physical abacus kit with our Live Online, Hyderabad Classroom and Hybrid course fees. We will explain the kit contents during enrolment.",
  ],
  [
    "Do you provide course certificates?",
    "Certificate availability and any related terms must be confirmed for the selected programme and level. We will provide the current written details before enrolment rather than making an unverified promise online.",
  ],
  [
    "Can my child rejoin after taking a break?",
    "Yes. We first conduct a placement check to identify which skills remain stable and which topics need revision. We then recommend a suitable level-matched batch.",
  ],
  [
    "What should my child bring to classroom lessons?",
    "Your child should bring the materials listed for the selected level, which may include the included physical abacus kit, workbook, pencil and assigned worksheets. We provide the final materials list during enrolment.",
  ],
  [
    "What does my child need for live online abacus classes?",
    "Your child needs a physical abacus, workbook, pencil, clear desk, stable internet, a camera-enabled device and good lighting. Please position the camera so our trainer can see the working hand and beads.",
  ],
  [
    "Which mode should I choose: online, classroom or hybrid?",
    "Choose Live Online if you want to avoid travel, Classroom for direct face-to-face guidance, or Hybrid for access to both formats. We arrange hybrid switches with a matching available batch.",
  ],
  [
    "How does your trainer correct abacus mistakes?",
    "Our trainer observes posture, finger movement, bead position, place value and the calculation method. We correct errors during guided practice before they become repeated habits.",
  ],
  [
    "Why do you focus on accuracy before speed?",
    "We focus on accuracy first because speed is not useful when the method is unstable. We develop controlled speed only after correct bead movement, place-value understanding and answer accuracy become dependable.",
  ],
  [
    "Can your abacus classes improve concentration and memory?",
    "Our lessons involve attention, number recall, visualisation and repeated guided practice, which may support these learning behaviours. Results differ by learner, so we do not guarantee improvements in concentration or memory.",
  ],
  [
    "Does your abacus course replace school mathematics?",
    "No. Our abacus course mainly supports arithmetic and mental-calculation practice. School mathematics also includes geometry, measurement, reasoning, word problems and other areas that abacus does not fully cover.",
  ],
  [
    "Is abacus better than Vedic Maths?",
    "Neither method is automatically better. We generally use abacus to build number, place-value and arithmetic foundations in younger learners, while Vedic Maths usually teaches calculation techniques to children who already understand basic arithmetic.",
  ],
  [
    "Where is your abacus training centre in Hyderabad?",
    "Our classroom centre is in Hyder Nagar, near JNTU Metro Station, at Metro Pillar A689. We serve families from Hyder Nagar, Nizampet, KPHB, Kukatpally, Miyapur, Bachupally and nearby areas.",
  ],
  [
    "How do I enrol my child at Abacus Experts?",
    "Start with our free readiness assessment. We will explain the recommended pathway, starting point, class mode, fee and current batch options before you review the policies and complete enrolment.",
  ],
];
