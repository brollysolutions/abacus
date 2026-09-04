/* ------------------------------------------------------------------
   Copy for the five remaining secondary pages.

   Each page is stored as a list of sections, and each section as an
   ordered list of blocks that <PageBlocks> renders:

     ["heading", eyebrow, title, lede]
     ["process", [[title, text], …]]        numbered steps
     ["cards", columns, [{badge,title,text,more,items}, …]]
     ["split", [{title, items}, …]]         two side-by-side panels
     ["table", [headers], [[cells], …]]
     ["checklist", [item, …]]
     ["definitions", [[term, detail], …]]
     ["note", title, text]                  boxed aside
     ["pnote", text]                        one-paragraph aside
     ["contact", title, text]               policy contact panel
     ["questions", [[number, q, a], …]]
     ["related", [[label, href], …]]
     ["centre"]                             the address + map block

   Text may contain **bold** and [[label|href]]; see <PageBlocks>.
------------------------------------------------------------------- */

export const PAGES = {
  "areas-we-serve": {
    "slug": "areas-we-serve",
    "title": "Abacus Classes Near Hyder Nagar, Hyderabad | Areas",
    "description": "Find Abacus Experts near JNTU Metro in Hyder Nagar. We serve families from Nizampet, KPHB, Kukatpally, Miyapur, Bachupally and across Hyderabad online.",
    "breadcrumb": "Areas We Serve for Abacus Classes in Hyderabad",
    "eyebrow": "Classroom, online and hybrid learning",
    "h1": "Areas We Serve for Abacus Classes in Hyderabad",
    "summary": "Our physical abacus training centre is in Hyder Nagar near JNTU Metro Station. Families from Nizampet, KPHB, Kukatpally, Miyapur, Bachupally and nearby areas can attend the centre, while Live Online classes serve families across Hyderabad.",
    "policyPage": false,
    "actions": [
      [
        "Book a free readiness assessment",
        "/#assessment"
      ],
      [
        "Ask us on WhatsApp",
        "https://wa.me/919032589990?text=Hi%20Abacus%20Experts%2C%20I%20would%20like%20details%20about%20abacus%20classes%20for%20my%20child."
      ]
    ],
    "sections": [
      {
        "id": "centre",
        "label": "Hyder Nagar centre"
      },
      {
        "id": "areas",
        "label": "Nearby areas"
      },
      {
        "id": "online",
        "label": "Online classes"
      },
      {
        "id": "choose",
        "label": "Choose a mode"
      },
      {
        "id": "fees",
        "label": "Fees"
      },
      {
        "id": "visit",
        "label": "Plan your visit"
      },
      {
        "id": "questions",
        "label": "Location FAQs"
      }
    ],
    "directAnswer": "For face-to-face abacus classes, visit Abacus Experts at Metro Pillar A689 in Hyder Nagar. If regular travel is difficult, choose Live Online classes or ask about our Hybrid mode. All three modes use our level-based curriculum and include a physical abacus kit.",
    "updated": null,
    "body": [
      {
        "kind": "section",
        "id": "centre",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Our verified classroom location",
            "Abacus Training Centre in Hyder Nagar Near JNTU Metro",
            null
          ],
          [
            "centre"
          ]
        ]
      },
      {
        "kind": "section",
        "id": "areas",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "Neighbourhoods around our centre",
            "Abacus Classes for Families Near Hyder Nagar",
            "These are service areas, not separate Abacus Experts branches. Our only location listed on this website is the Hyder Nagar centre."
          ],
          [
            "table",
            [
              "Area",
              "Available learning choices",
              "What parents should confirm"
            ],
            [
              [
                "Hyder Nagar",
                "Classroom, Live Online and Hybrid",
                "Current level-matched batch and demo time"
              ],
              [
                "Nizampet",
                "Attend Hyder Nagar, Live Online or Hybrid",
                "Preferred travel and switching arrangement"
              ],
              [
                "KPHB",
                "Attend Hyder Nagar, Live Online or Hybrid",
                "Suitable Junior or Senior batch"
              ],
              [
                "Kukatpally",
                "Attend Hyder Nagar, Live Online or Hybrid",
                "Class days, timing and open seats"
              ],
              [
                "Miyapur",
                "Attend Hyder Nagar, Live Online or Hybrid",
                "Travel preference and current batch"
              ],
              [
                "Bachupally",
                "Attend Hyder Nagar, Live Online or Hybrid",
                "Online or centre-based learning preference"
              ],
              [
                "Other Hyderabad areas",
                "Live Online; Hybrid where practical",
                "Internet setup and a matching online batch"
              ]
            ]
          ],
          [
            "note",
            "No false “near me” branches",
            "We clearly distinguish the areas we serve from our physical centre. We do not claim to have a classroom branch in a locality unless that location is genuinely operated and can be verified."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "online",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Learn without regular travel",
            "Live Online Abacus Classes Across Hyderabad",
            null
          ],
          [
            "cards",
            null,
            [
              {
                "badge": "1",
                "title": "Live trainer guidance",
                "text": "Your child attends a scheduled small-group lesson and receives real-time demonstration and correction.",
                "more": [],
                "items": []
              },
              {
                "badge": "2",
                "title": "Physical abacus at home",
                "text": "The kit is included. Your child still learns on a real bead frame rather than only watching a screen.",
                "more": [],
                "items": []
              },
              {
                "badge": "3",
                "title": "Camera-based observation",
                "text": "Place the device so the trainer can see the working hands and beads while protecting unnecessary private space.",
                "more": [],
                "items": []
              }
            ]
          ],
          [
            "note",
            "Online does not mean recorded-only learning",
            "Our online mode is live. Your child needs a stable connection, camera-enabled device, suitable lighting, clear desk, workbook, pencil and physical abacus."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "choose",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "Match the mode to family needs",
            "Should You Choose Classroom, Online or Hybrid?",
            null
          ],
          [
            "table",
            [
              "Choose this mode",
              "When it may suit your family",
              "Important point"
            ],
            [
              [
                "Hyderabad Classroom",
                "You prefer face-to-face observation and can travel to Hyder Nagar regularly",
                "Confirm a suitable level-matched batch before visiting"
              ],
              [
                "Live Online",
                "You want to avoid travel and can prepare a good home learning setup",
                "The camera must show the hands and beads clearly"
              ],
              [
                "Hybrid",
                "You need both formats and can plan classroom visits when useful",
                "Switching depends on a matching available batch"
              ]
            ]
          ]
        ]
      },
      {
        "kind": "section",
        "id": "fees",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "The complete verified course prices",
            "Abacus Course Fees by Learning Mode",
            null
          ],
          [
            "cards",
            null,
            [
              {
                "badge": "₹",
                "title": "Live Online — ₹18,000",
                "text": "Live classes, level-based teaching and physical abacus kit. EMI is available.",
                "more": [],
                "items": []
              },
              {
                "badge": "₹",
                "title": "Classroom — ₹20,000",
                "text": "Face-to-face classes at Hyder Nagar and physical abacus kit. EMI is available.",
                "more": [],
                "items": []
              },
              {
                "badge": "₹",
                "title": "Hybrid — ₹19,000",
                "text": "Online and classroom access with switching subject to a matching batch. Kit and EMI are available.",
                "more": [],
                "items": []
              }
            ]
          ]
        ]
      },
      {
        "kind": "section",
        "id": "visit",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "Avoid an unnecessary trip",
            "Plan Your First Visit or Demo",
            null
          ],
          [
            "process",
            [
              [
                "Contact admissions",
                "Share the child’s age, previous abacus experience, locality and preferred learning mode."
              ],
              [
                "Confirm the readiness assessment",
                "Ask for the current date, time and whether it will be online or at the Hyder Nagar centre."
              ],
              [
                "Use the directions link",
                "Navigate to Dr Atmaram Estates near Metro Pillar A689 and Sri Bhramaramba Theatre."
              ],
              [
                "Review options before payment",
                "Understand the recommended pathway, complete fee, EMI, kit and batch before enrolling."
              ]
            ]
          ]
        ]
      },
      {
        "kind": "section",
        "id": "questions",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Direct location answers",
            "Frequently Asked Questions About Our Service Areas",
            null
          ],
          [
            "questions",
            [
              [
                "01",
                "Where is Abacus Experts in Hyderabad?",
                "Our classroom centre is on the 3rd Floor of Dr Atmaram Estates, near Metro Pillar A689, beside Sri Bhramaramba Theatre, Hyder Nagar, Vasantha Nagar, Hyderabad, Telangana 500072."
              ],
              [
                "02",
                "Do you provide abacus classes near JNTU Metro?",
                "Yes. Our Hyder Nagar centre is near JNTU Metro Station and Metro Pillar A689. Please use our directions link or contact us before your first visit."
              ],
              [
                "03",
                "Can children from Nizampet, KPHB or Kukatpally join?",
                "Yes. Families from these areas may attend our Hyder Nagar classroom, choose Live Online classes or ask about Hybrid learning, subject to a suitable open batch."
              ],
              [
                "04",
                "Are online abacus classes available across Hyderabad?",
                "Yes. Live Online classes are not limited to the neighbourhoods around our centre. The child needs a suitable device, stable internet, clear camera position and the physical abacus kit."
              ],
              [
                "05",
                "Should I visit the centre before enrolment?",
                "You may contact us to arrange a readiness assessment and confirm the current schedule before visiting. This helps us make sure the suitable trainer and batch information are available."
              ]
            ]
          ],
          [
            "related",
            [
              [
                "How our classes work",
                "/how-abacus-classes-work/"
              ],
              [
                "How we assess progress",
                "/student-progress-and-assessment/"
              ],
              [
                "Read all parent FAQs",
                "/parent-faqs/"
              ]
            ]
          ]
        ]
      }
    ],
    "cta": {
      "title": "Find the right class without guessing",
      "text": "Tell us your locality, child’s age and preferred mode. We will confirm the current demo, suitable batch and attendance option before you travel or pay.",
      "buttons": [
        {
          "label": "Book a free assessment",
          "href": "/#assessment",
          "secondary": false,
          "whatsapp": false
        },
        {
          "label": "WhatsApp us",
          "href": "https://wa.me/919032589990?text=Hi%20Abacus%20Experts%2C%20I%20would%20like%20details%20about%20abacus%20classes%20for%20my%20child.",
          "secondary": false,
          "whatsapp": true
        }
      ]
    },
    "centre": {
      "heading": "Abacus Experts — Hyder Nagar",
      "contactLabel": "Admissions"
    }
  },
  "student-progress-and-assessment": {
    "slug": "student-progress-and-assessment",
    "title": "Abacus Student Progress & Assessment | Abacus Experts",
    "description": "See how Abacus Experts assesses technique, place value, accuracy, independence, visualisation and practice before recommending the next level.",
    "breadcrumb": "How We Assess Abacus Student Progress",
    "eyebrow": "Progress parents can understand",
    "h1": "How We Assess Abacus Student Progress",
    "summary": "We assess how a child reaches an answer—not only whether the answer is correct. Our reviews consider technique, place value, accuracy, independence, visualisation and practice consistency before we recommend the next learning stage.",
    "policyPage": false,
    "actions": [
      [
        "Book a free readiness assessment",
        "/#assessment"
      ],
      [
        "Ask us on WhatsApp",
        "https://wa.me/919032589990?text=Hi%20Abacus%20Experts%2C%20I%20would%20like%20details%20about%20abacus%20classes%20for%20my%20child."
      ]
    ],
    "sections": [
      {
        "id": "what-we-assess",
        "label": "What we assess"
      },
      {
        "id": "assessment-points",
        "label": "When we assess"
      },
      {
        "id": "level-progress",
        "label": "Level progression"
      },
      {
        "id": "report",
        "label": "Progress report"
      },
      {
        "id": "speed",
        "label": "Accuracy and speed"
      },
      {
        "id": "support",
        "label": "When support is needed"
      },
      {
        "id": "parents",
        "label": "Parent updates"
      }
    ],
    "directAnswer": "Abacus progress is measured through observation, guided exercises and independent attempts. We look for stable skills across lessons. A child does not move forward only because a workbook is finished or a fixed number of classes has been attended.",
    "updated": null,
    "body": [
      {
        "kind": "section",
        "id": "what-we-assess",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Six connected progress areas",
            "What Do We Assess in an Abacus Student?",
            "A correct final answer can hide an unstable method. We therefore observe both the result and the learning process."
          ],
          [
            "table",
            [
              "Assessment area",
              "What we observe",
              "Evidence of progress",
              "What parents need to know"
            ],
            [
              [
                "Physical technique",
                "Posture, hand position, finger choice and bead movement",
                "The child uses the taught movement without repeated correction",
                "Incorrect movement may need revision even when answers are right"
              ],
              [
                "Place value",
                "Use of ones, tens, hundreds and higher columns",
                "The child represents and reads numbers in the correct columns",
                "Place-value gaps can affect every later operation"
              ],
              [
                "Accuracy",
                "Correct answers produced with the correct method",
                "Accuracy remains dependable across suitable practice sets",
                "We strengthen accuracy before increasing speed"
              ],
              [
                "Independence",
                "How much prompting or demonstration is needed",
                "The child starts, continues and checks work with less help",
                "Independent work shows that the method is becoming usable"
              ],
              [
                "Visualisation",
                "Ability to picture bead positions and movement",
                "The child completes suitable mental tasks without losing the method",
                "Visualisation is introduced gradually, not forced"
              ],
              [
                "Consistency",
                "Performance across lessons and home practice",
                "The skill remains stable on more than one day and in mixed work",
                "One fast or perfect worksheet does not prove mastery"
              ]
            ]
          ]
        ]
      },
      {
        "kind": "section",
        "id": "assessment-points",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "Assessment throughout the journey",
            "When Do We Check Student Progress?",
            null
          ],
          [
            "cards",
            null,
            [
              {
                "badge": "01",
                "title": "Before placement",
                "text": "Our free readiness assessment checks basic number skills, attention and previous learning so that we can recommend a suitable starting point.",
                "more": [],
                "items": []
              },
              {
                "badge": "02",
                "title": "During every lesson",
                "text": "Our trainer watches technique, asks short checking questions and notes where the child needs prompts, correction or additional practice.",
                "more": [],
                "items": []
              },
              {
                "badge": "03",
                "title": "At a learning checkpoint",
                "text": "After a group of connected skills, we review suitable exercises and decide whether to progress, revise or provide focused support.",
                "more": [],
                "items": []
              }
            ]
          ],
          [
            "note",
            "Assessment is not meant to create fear",
            "We use reviews to choose the next teaching step. They are not school examinations, public rankings or competitions between children."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "level-progress",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Mastery before movement",
            "How Do We Decide When a Child Can Move to the Next Level?",
            "The exact standard depends on the current curriculum stage, but our decision follows the same practical questions."
          ],
          [
            "checklist",
            [
              "Is the taught finger technique stable?",
              "Does the child understand the place value used?",
              "Are current operations reasonably accurate?",
              "Can the child work with fewer prompts?",
              "Can the child recognise and correct some mistakes?",
              "Does the skill remain stable in mixed practice?",
              "Is visualisation suitable at this point?",
              "Can the child handle the next step without unnecessary pressure?"
            ]
          ],
          [
            "note",
            "Three possible recommendations",
            "**Progress:** begin the next connected skill. **Consolidate:** continue the same stage with mixed practice. **Targeted revision:** return to a specific foundation that is causing errors."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "report",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "No vague progress language",
            "What Does an Abacus Progress Update Include?",
            null
          ],
          [
            "split",
            [
              {
                "title": "Example parent update",
                "items": [],
                "paras": [
                  "**Current strength:** Direct addition is accurate and finger movement is stable.",
                  "**Needs practice:** Big-friend subtraction still needs a verbal prompt.",
                  "**Next action:** Complete three short mixed sets before the next review.",
                  "**Progress decision:** Consolidate this stage before adding a new subtraction pattern."
                ]
              },
              {
                "title": "Useful progress language",
                "items": [
                  "Names the exact skill being discussed",
                  "Explains what the child can do now",
                  "Identifies one practical difficulty",
                  "Gives a clear practice action",
                  "States the reason for progressing or revising"
                ],
                "paras": []
              }
            ]
          ]
        ]
      },
      {
        "kind": "section",
        "id": "speed",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Correct method comes first",
            "Why Do We Assess Accuracy Before Calculation Speed?",
            null
          ],
          [
            "cards",
            "two",
            [
              {
                "badge": "1",
                "title": "Accuracy builds trust in the method",
                "text": "Fast work is not useful when the child uses the wrong column, finger or operation. We first help the child produce dependable answers with a repeatable method.",
                "more": [],
                "items": []
              },
              {
                "badge": "2",
                "title": "Speed should grow under control",
                "text": "After the technique becomes stable, suitable timed activities may help build fluency. We do not treat speed as the only sign of learning.",
                "more": [],
                "items": []
              }
            ]
          ],
          [
            "note",
            "What we do not promise",
            "We do not guarantee a fixed calculation speed, school marks, IQ improvement or identical results for every learner. Progress depends on the child’s starting point, attendance, practice, wellbeing and response to instruction."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "support",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "A difficulty is useful information",
            "What Happens When a Child Is Not Ready to Progress?",
            null
          ],
          [
            "process",
            [
              [
                "Identify the exact gap",
                "We separate a technique problem, place-value misunderstanding, attention difficulty or lack of practice instead of calling the child “weak.”"
              ],
              [
                "Reduce the task",
                "We return to a smaller step, demonstrate again and use suitable examples so the child can focus on one correction."
              ],
              [
                "Set a short practice goal",
                "Parents receive a specific activity rather than a general instruction to “practise more.”"
              ],
              [
                "Review again",
                "We check whether the correction remains stable before adding more complexity."
              ]
            ]
          ]
        ]
      },
      {
        "kind": "section",
        "id": "parents",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "A shared view of learning",
            "How Do We Keep Parents Informed?",
            null
          ],
          [
            "cards",
            null,
            [
              {
                "badge": "✓",
                "title": "Clear observations",
                "text": "We describe the skill, the evidence we observed and the next action in simple language.",
                "more": [],
                "items": []
              },
              {
                "badge": "✓",
                "title": "Practice guidance",
                "text": "We explain what to practise, how much support to give and which errors parents should report.",
                "more": [],
                "items": []
              },
              {
                "badge": "✓",
                "title": "Questions are welcome",
                "text": "Parents can ask why revision is needed, what progression means and how the current work connects to the curriculum.",
                "more": [],
                "items": []
              }
            ]
          ],
          [
            "related",
            [
              [
                "How our classes work",
                "/how-abacus-classes-work/"
              ],
              [
                "Parent questions answered",
                "/parent-faqs/"
              ],
              [
                "View the curriculum",
                "/#syllabus"
              ]
            ]
          ]
        ]
      },
      {
        "kind": "official",
        "id": "official-references-on-learning-outcomes",
        "eyebrow": "Official, non-commercial references",
        "title": "Official References on Learning Outcomes",
        "lede": "These NCERT resources provide broader educational context for learning outcomes and foundational-stage development. Our course assessments remain specific to the Abacus Experts curriculum.",
        "sources": [
          {
            "publisher": "NCERT",
            "title": "NCERT Learning Outcomes",
            "text": "Official learning-outcome resources for foundational, elementary and later school stages.",
            "href": "https://ncert.nic.in/learning-outcome.php?ln=en"
          },
          {
            "publisher": "NCERT",
            "title": "National Curriculum Framework for Foundational Stage",
            "text": "Official guidance on learning processes, assessment and age-appropriate foundational education.",
            "href": "https://ncert.nic.in/pdf/focus-group/NCF-FS_2022EN.pdf"
          }
        ]
      }
    ],
    "cta": {
      "title": "Start with a clear baseline",
      "text": "Book a free readiness assessment. We will identify a suitable starting point and explain how progress will be observed before you enrol.",
      "buttons": [
        {
          "label": "Book a free assessment",
          "href": "/#assessment",
          "secondary": false,
          "whatsapp": false
        },
        {
          "label": "WhatsApp us",
          "href": "https://wa.me/919032589990?text=Hi%20Abacus%20Experts%2C%20I%20would%20like%20details%20about%20abacus%20classes%20for%20my%20child.",
          "secondary": false,
          "whatsapp": true
        }
      ]
    },
    "centre": null
  },
  "child-safeguarding-policy": {
    "slug": "child-safeguarding-policy",
    "title": "Child Safeguarding Policy | Abacus Experts",
    "description": "Read the Abacus Experts child safeguarding policy for classroom and online abacus classes, including conduct, supervision, privacy and reporting concerns.",
    "breadcrumb": "Child Safeguarding Policy",
    "eyebrow": "Safety and respectful learning",
    "h1": "Child Safeguarding Policy",
    "summary": "This policy explains the standards Abacus Experts follows to support the safety, dignity, privacy and wellbeing of children in our classroom, live online and hybrid abacus programmes.",
    "policyPage": true,
    "actions": [],
    "sections": [
      {
        "id": "commitment",
        "label": "Our commitment"
      },
      {
        "id": "conduct",
        "label": "Adult conduct"
      },
      {
        "id": "classroom",
        "label": "Classroom safety"
      },
      {
        "id": "online",
        "label": "Online safety"
      },
      {
        "id": "behaviour",
        "label": "Behaviour"
      },
      {
        "id": "reporting",
        "label": "Report a concern"
      },
      {
        "id": "responsibilities",
        "label": "Responsibilities"
      }
    ],
    "directAnswer": "Abacus Experts does not tolerate abuse, harassment, bullying, humiliation, discrimination, exploitation or inappropriate contact with a child. A parent or guardian may report a concern by calling +91 90325 89990 or emailing hello@abacusexperts.com. If a child is in immediate danger in India, call the integrated emergency helpline [[112|https://www.india.gov.in/directory/helpline]] first.",
    "updated": "Effective date: 2 September 2026 · Last reviewed: 2 September 2026",
    "body": [
      {
        "kind": "section",
        "id": "commitment",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Who and what this policy covers",
            "Our Safeguarding Commitment",
            null
          ],
          [
            "p",
            "This policy applies to our trainers, employees, contractors, volunteers and any person representing Abacus Experts. It covers classroom sessions, live online classes, hybrid sessions, demo classes, assessments, events, telephone or online communication and any activity organised by us."
          ],
          [
            "checklist",
            [
              "Treat every child with dignity and patience",
              "Use age-appropriate language and instruction",
              "Maintain clear professional boundaries",
              "Protect unnecessary personal information",
              "Respond seriously to safety concerns",
              "Avoid promises of secrecy to a child",
              "Keep parents informed when appropriate",
              "Record and escalate significant incidents"
            ]
          ],
          [
            "note",
            "Safeguarding is broader than physical safety",
            "It includes emotional wellbeing, respectful communication, privacy, online safety, appropriate adult behaviour and a clear way to raise concerns without fear."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "conduct",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "Professional boundaries",
            "Expected Conduct for Trainers and Adults",
            null
          ],
          [
            "split",
            [
              {
                "title": "Adults working with children must",
                "items": [
                  "Communicate calmly and respectfully.",
                  "Give feedback about the work, not attack the child.",
                  "Use only necessary, appropriate learning communication.",
                  "Keep interactions visible and connected to the class purpose.",
                  "Escalate a concern instead of investigating it informally."
                ],
                "paras": []
              },
              {
                "title": "Adults must never",
                "items": [
                  "Hit, threaten, shame, frighten or insult a child.",
                  "Use sexual, discriminatory or humiliating language.",
                  "Request private meetings or secret communication.",
                  "Share a child’s contact details or images without authority.",
                  "Offer gifts or favour in exchange for secrecy or special access."
                ],
                "paras": []
              }
            ]
          ],
          [
            "note",
            "Physical guidance",
            "Abacus teaching may require correction of posture or finger movement. Our trainer should demonstrate first and use verbal guidance wherever possible. Any direct physical correction must be limited, suitable for the learning task and stopped if the child or parent is uncomfortable."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "classroom",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Arrival, learning and collection",
            "Safeguarding in Classroom Abacus Classes",
            null
          ],
          [
            "cards",
            null,
            [
              {
                "badge": "01",
                "title": "Supervision",
                "text": "Children should remain in the designated learning area during class. Parents must tell us about any approved person who may collect the child.",
                "more": [],
                "items": []
              },
              {
                "badge": "02",
                "title": "Visible instruction",
                "text": "Teaching should take place in an appropriate learning space. One-to-one support should remain observable and directly connected to the lesson.",
                "more": [],
                "items": []
              },
              {
                "badge": "03",
                "title": "Safe handover",
                "text": "Parents or guardians are responsible for timely drop-off and collection. A child should not leave with an unapproved person.",
                "more": [],
                "items": []
              }
            ]
          ],
          [
            "note",
            "Medical and support information",
            "Before class, a parent should tell us about relevant allergies, health needs, accessibility requirements or emergency instructions needed to support the child. Please share only information that is necessary for safe participation."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "online",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "Privacy in live digital learning",
            "Safeguarding in Online Abacus Classes",
            null
          ],
          [
            "checklist",
            [
              "A parent should know when the child is attending",
              "Use a shared or suitable learning space where possible",
              "Position the camera to show hands and the abacus",
              "Avoid showing bedrooms or unnecessary private areas",
              "Use the class link only for the enrolled learner",
              "Do not record or screenshot other children",
              "Use the learner’s first name or approved display name",
              "Report unexpected or inappropriate online behaviour"
            ]
          ],
          [
            "note",
            "Direct messages",
            "Class communication with a child should use the parent’s approved contact channel or include the parent where practical. Trainers should not begin private social-media conversations with learners."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "behaviour",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "A respectful learning environment",
            "Bullying, Discipline and Child Behaviour",
            null
          ],
          [
            "p",
            "We guide behaviour without humiliation or physical punishment. If a child disrupts learning, our response should be calm, proportionate and suitable for the child’s age."
          ],
          [
            "process",
            [
              [
                "Give a clear reminder",
                "Explain the expected behaviour and help the child return to the learning task."
              ],
              [
                "Reduce immediate pressure",
                "Use a short pause, simpler instruction or suitable seating change when needed."
              ],
              [
                "Inform the parent",
                "Discuss repeated or significant behaviour privately and factually, without labelling the child."
              ],
              [
                "Agree on a support plan",
                "Decide whether an adjusted batch, additional supervision or another learning arrangement is appropriate."
              ]
            ]
          ],
          [
            "pnote",
            "Bullying, discriminatory remarks, deliberate exclusion and repeated intimidation by any learner or adult are not acceptable."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "reporting",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "Speak up early",
            "How to Report a Safeguarding Concern",
            null
          ],
          [
            "contact",
            "Contact Abacus Experts",
            "Call [[+91 90325 89990|tel:+919032589990]] or email [[hello@abacusexperts.com|mailto:hello@abacusexperts.com]]. Tell us what happened, when it happened, who was present and whether the child needs immediate help.",
            [
              "Report by email",
              "mailto:hello@abacusexperts.com?subject=Child%20safeguarding%20concern"
            ]
          ],
          [
            "h3",
            "How we respond"
          ],
          [
            "process",
            [
              [
                "Listen and protect",
                "We listen without blaming the child and consider any immediate step needed to reduce risk."
              ],
              [
                "Record facts carefully",
                "We record the words used, known facts, dates and actions. We avoid leading questions or promising complete secrecy."
              ],
              [
                "Limit information",
                "We share details only with people who need them to respond, support the child or meet an applicable reporting duty."
              ],
              [
                "Escalate when required",
                "Serious or immediate concerns may need to be referred to the appropriate emergency, child-protection or law-enforcement authority."
              ]
            ]
          ],
          [
            "note",
            "If a child tells us something",
            "We take the child seriously, do not conduct our own detailed investigation and do not confront the person involved in a way that could increase risk. We record and escalate the concern appropriately."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "responsibilities",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Working together",
            "Responsibilities of Abacus Experts, Parents and Learners",
            null
          ],
          [
            "definitions",
            [
              [
                "Abacus Experts",
                "Maintain professional conduct, suitable learning spaces, privacy-aware communication, a reporting route and an appropriate response to concerns."
              ],
              [
                "Parents or guardians",
                "Provide accurate emergency and collection information, supervise online attendance as appropriate, report relevant needs and raise concerns promptly."
              ],
              [
                "Learners",
                "Treat others respectfully, follow reasonable safety instructions, avoid recording classmates and tell a trusted adult when something feels unsafe."
              ],
              [
                "Visitors",
                "Follow staff directions, avoid photographing children and remain only in permitted areas."
              ]
            ]
          ],
          [
            "related",
            [
              [
                "Photo and video consent",
                "/photo-and-video-consent-policy/"
              ],
              [
                "Accessibility statement",
                "/accessibility/"
              ],
              [
                "Privacy policy",
                "/privacy-policy/"
              ]
            ]
          ]
        ]
      },
      {
        "kind": "official",
        "id": "official-child-safety-and-reporting-resources",
        "eyebrow": "Official, non-commercial references",
        "title": "Official Child-Safety and Reporting Resources",
        "lede": "Use these Government of India resources for wider child-safety guidance and official reporting routes. They do not replace urgent professional or emergency help.",
        "sources": [
          {
            "publisher": "National Commission for Protection of Child Rights",
            "title": "Education Safety Guidelines",
            "text": "Official education guidelines, including school safety, security and child-protection material.",
            "href": "https://ncpcr.gov.in/public/index.php/education-guidelines"
          },
          {
            "publisher": "National Cyber Crime Reporting Portal",
            "title": "Cyber Safety Tips for Parents",
            "text": "Official guidance for parents about grooming, bullying, stalking and children’s online activity.",
            "href": "https://cybercrime.gov.in/Webform/Crime_OnlineSafetyTips.aspx"
          },
          {
            "publisher": "National Portal of India",
            "title": "Emergency Helplines in India",
            "text": "Official directory listing 112 as the integrated emergency response helpline.",
            "href": "https://www.india.gov.in/directory/helpline"
          }
        ]
      }
    ],
    "cta": {
      "title": "Questions or concerns about child safety?",
      "text": "Contact us privately. We will listen, document the concern and explain the next appropriate step. This policy will be reviewed when our services or safeguarding practices change.",
      "buttons": [
        {
          "label": "Email us",
          "href": "mailto:hello@abacusexperts.com",
          "secondary": false,
          "whatsapp": false
        },
        {
          "label": "Call +91 90325 89990",
          "href": "tel:+919032589990",
          "secondary": true,
          "whatsapp": false
        }
      ]
    },
    "centre": null
  },
  "photo-and-video-consent-policy": {
    "slug": "photo-and-video-consent-policy",
    "title": "Photo & Video Consent Policy | Abacus Experts",
    "description": "Learn how Abacus Experts requests parent consent before using a child’s photo, class video, voice or learning work and how consent can be withdrawn.",
    "breadcrumb": "Photo and Video Consent Policy",
    "eyebrow": "Parent choice and child privacy",
    "h1": "Photo and Video Consent Policy",
    "summary": "We ask a parent or legal guardian for clear permission before using an identifiable child’s photo, video, voice recording, testimonial or learning work for promotion or public communication.",
    "policyPage": true,
    "actions": [],
    "sections": [
      {
        "id": "principles",
        "label": "Consent principles"
      },
      {
        "id": "choices",
        "label": "Your choices"
      },
      {
        "id": "collection",
        "label": "What we may collect"
      },
      {
        "id": "use",
        "label": "How media may be used"
      },
      {
        "id": "protection",
        "label": "Protection"
      },
      {
        "id": "withdrawal",
        "label": "Withdraw consent"
      },
      {
        "id": "online",
        "label": "Online classes"
      }
    ],
    "directAnswer": "Media consent is optional and separate from course enrolment. Saying no will not reduce a child’s access to classes. Parents may choose the types of media and uses they allow, and they may withdraw consent for future use by emailing hello@abacusexperts.com.",
    "updated": "Effective date: 2 September 2026 · Last reviewed: 2 September 2026",
    "body": [
      {
        "kind": "section",
        "id": "principles",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Clear permission, no pressure",
            "Our Consent Principles",
            null
          ],
          [
            "checklist",
            [
              "Consent is optional",
              "Enrolment does not require promotional consent",
              "A parent or legal guardian gives permission",
              "Choices should be specific and understandable",
              "We avoid unnecessary identifying details",
              "A child’s discomfort should be respected",
              "Consent can be withdrawn for future use",
              "Media should be used only for approved purposes"
            ]
          ],
          [
            "note",
            "The child’s voice matters",
            "Even when a parent has consented, we should not pressure a child who does not want to be photographed, filmed or recorded at that moment."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "choices",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "Choose what you permit",
            "What Consent Choices Can Parents Make?",
            null
          ],
          [
            "table",
            [
              "Consent choice",
              "What it can cover",
              "Default when not selected"
            ],
            [
              [
                "Internal learning use",
                "A short recording or image used privately to review technique, trainer practice or student progress",
                "Not used beyond the reason explained at collection"
              ],
              [
                "Private parent communication",
                "Sharing the child’s class moment or work directly with the child’s parent or guardian",
                "Not shared with unrelated families"
              ],
              [
                "Website and social media",
                "Approved photos, videos, audio, comments or learning work used on Abacus Experts channels",
                "No identifiable promotional use"
              ],
              [
                "Printed material",
                "Approved media used in brochures, posters, centre displays or event material",
                "No identifiable printed use"
              ],
              [
                "Group media",
                "A class or event image containing the child with other participants",
                "We do not treat attendance as automatic consent"
              ]
            ]
          ],
          [
            "note",
            "One choice does not automatically permit every use",
            "For example, permission to share a progress image privately with a parent does not automatically permit posting the same image on social media."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "collection",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Only what supports a stated purpose",
            "What Photos, Videos or Learning Content May Be Collected?",
            null
          ],
          [
            "cards",
            null,
            [
              {
                "badge": "01",
                "title": "Classroom media",
                "text": "Photos or short video clips showing a learning activity, an event, a demonstration or use of the physical abacus.",
                "more": [],
                "items": []
              },
              {
                "badge": "02",
                "title": "Online class media",
                "text": "A screenshot or recording collected only when the parent has been informed of the purpose and the required permission has been obtained.",
                "more": [],
                "items": []
              },
              {
                "badge": "03",
                "title": "Student work and feedback",
                "text": "A worksheet, progress example, parent comment, child voice or testimonial. Identifying details should be limited to what the parent approved.",
                "more": [],
                "items": []
              }
            ]
          ]
        ]
      },
      {
        "kind": "section",
        "id": "use",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "Approved Abacus Experts purposes",
            "How May We Use Consented Media?",
            null
          ],
          [
            "split",
            [
              {
                "title": "Possible uses",
                "items": [
                  "Explain our teaching approach.",
                  "Show an abacus activity or event.",
                  "Share a consented learning experience.",
                  "Communicate with the learner’s parent.",
                  "Create approved website, social or printed content."
                ],
                "paras": []
              },
              {
                "title": "Uses we avoid",
                "items": [
                  "Selling a child’s image as a separate product.",
                  "Combining an image with a false result claim.",
                  "Publishing a home address, school or private schedule.",
                  "Using media for an unrelated purpose without new consent.",
                  "Presenting staged content as a genuine testimonial."
                ],
                "paras": []
              }
            ]
          ],
          [
            "pnote",
            "Editing may include cropping, captions, colour correction or combining clips. We should not edit a child’s media in a misleading, humiliating or inappropriate way."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "protection",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Limit identity and access",
            "How We Protect Children’s Media",
            null
          ],
          [
            "checklist",
            [
              "Limit collection to an explained purpose",
              "Restrict access to people who need it",
              "Avoid full names unless specifically approved",
              "Do not publish home addresses or school details",
              "Review whether stored media is still needed",
              "Remove unsuitable media from active use",
              "Use approved business channels for publication",
              "Respond to withdrawal or correction requests"
            ]
          ],
          [
            "note",
            "Public platforms have their own systems",
            "When consented content is posted on a public website or social platform, other people may view, share, copy or capture it. Abacus Experts cannot fully control copies made by third parties after public publication. We explain this risk so parents can make an informed choice."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "withdrawal",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "Change your decision",
            "How Can a Parent Withdraw Photo or Video Consent?",
            null
          ],
          [
            "process",
            [
              [
                "Send the request",
                "Email [[hello@abacusexperts.com|mailto:hello@abacusexperts.com?subject=Withdraw%20media%20consent]] or call [[+91 90325 89990|tel:+919032589990]]. Identify the child and the media or permission concerned."
              ],
              [
                "We verify the request",
                "We may confirm that the requester is the parent or legal guardian and ask enough information to locate the media."
              ],
              [
                "We stop future use",
                "After verification, we stop new use covered by the withdrawn consent and remove content from channels we control where reasonably possible."
              ],
              [
                "We explain any limitation",
                "Already distributed print material, third-party shares, cached copies or content needed for a legal record may not disappear immediately or completely."
              ]
            ]
          ],
          [
            "note",
            "Withdrawal does not affect enrolment",
            "A child can continue learning even when a parent declines or withdraws promotional media consent."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "online",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Respect every participant",
            "Recording Rules for Online Classes",
            null
          ],
          [
            "cards",
            "two",
            [
              {
                "badge": "✓",
                "title": "Our responsibility",
                "text": "If we plan to record a live class, we should explain the purpose, who may access it and whether identifiable children appear. Promotional use requires the relevant consent.",
                "more": [],
                "items": []
              },
              {
                "badge": "!",
                "title": "Family responsibility",
                "text": "Parents and learners must not record, screenshot, repost or share another child, parent or trainer without permission. Keep class links private and position the camera carefully.",
                "more": [],
                "items": []
              }
            ]
          ],
          [
            "related",
            [
              [
                "Child safeguarding policy",
                "/child-safeguarding-policy/"
              ],
              [
                "Privacy policy",
                "/privacy-policy/"
              ],
              [
                "Parent FAQs",
                "/parent-faqs/"
              ]
            ]
          ]
        ]
      },
      {
        "kind": "official",
        "id": "official-privacy-and-online-safety-references",
        "eyebrow": "Official, non-commercial references",
        "title": "Official Privacy and Online-Safety References",
        "lede": "These Government of India sources provide the wider legal and safety context for digital personal data and online reporting. This page explains our operational media-consent approach and is not legal advice.",
        "sources": [
          {
            "publisher": "Ministry of Electronics and Information Technology",
            "title": "Digital Personal Data Protection Act, 2023",
            "text": "The official Act covering the processing and protection of digital personal data in India.",
            "href": "https://www.meity.gov.in/content/digital-personal-data-protection-act-2023"
          },
          {
            "publisher": "Ministry of Electronics and Information Technology",
            "title": "Digital Personal Data Protection Rules, 2025",
            "text": "The official rules published under India’s digital personal-data framework.",
            "href": "https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa"
          },
          {
            "publisher": "Government of India",
            "title": "National Cyber Crime Reporting Portal",
            "text": "The official portal for cybercrime information and reporting, including women- and children-related online crime.",
            "href": "https://cybercrime.gov.in/"
          }
        ]
      }
    ],
    "cta": {
      "title": "Manage your media consent",
      "text": "Contact us to give, limit or withdraw consent. Please identify the child and the specific media so that we can respond accurately.",
      "buttons": [
        {
          "label": "Email us",
          "href": "mailto:hello@abacusexperts.com",
          "secondary": false,
          "whatsapp": false
        },
        {
          "label": "Call +91 90325 89990",
          "href": "tel:+919032589990",
          "secondary": true,
          "whatsapp": false
        }
      ]
    },
    "centre": null
  },
  "accessibility": {
    "slug": "accessibility",
    "title": "Accessibility Statement | Abacus Experts",
    "description": "Read the Abacus Experts accessibility statement and learn about keyboard use, readable content, forms, zoom support and how to request assistance.",
    "breadcrumb": "Accessibility Statement",
    "eyebrow": "Clear information and inclusive access",
    "h1": "Accessibility Statement",
    "summary": "Abacus Experts aims to make our website, admissions information and learning communication easier to use for people with different access needs. This statement explains our current approach and how to request assistance.",
    "policyPage": true,
    "actions": [],
    "sections": [
      {
        "id": "commitment",
        "label": "Commitment"
      },
      {
        "id": "website",
        "label": "Website features"
      },
      {
        "id": "classes",
        "label": "Learning support"
      },
      {
        "id": "limitations",
        "label": "Known limitations"
      },
      {
        "id": "feedback",
        "label": "Request help"
      },
      {
        "id": "technical",
        "label": "Technical approach"
      }
    ],
    "directAnswer": "If you cannot access information, complete an enquiry or understand a document, call +91 90325 89990 or email hello@abacusexperts.com. Tell us the page, format or task causing difficulty and the alternative format or assistance that would help.",
    "updated": "Effective date: 2 September 2026 · Last reviewed: 2 September 2026",
    "body": [
      {
        "kind": "section",
        "id": "commitment",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "An ongoing responsibility",
            "Our Accessibility Commitment",
            null
          ],
          [
            "p",
            "We aim to provide information that is perceivable, operable, understandable and robust. We use the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA as a direction for improving this website. This is an aim—not a claim that every page or third-party service has passed a complete independent audit."
          ],
          [
            "checklist",
            [
              "Use plain and direct language",
              "Maintain readable colour contrast",
              "Support keyboard navigation",
              "Use meaningful headings and links",
              "Label enquiry form fields",
              "Provide text alternatives for useful images",
              "Support browser zoom and text resizing",
              "Offer human help when a barrier remains"
            ]
          ]
        ]
      },
      {
        "kind": "section",
        "id": "website",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "How the website is designed",
            "Accessibility Features on the Abacus Experts Website",
            null
          ],
          [
            "cards",
            null,
            [
              {
                "badge": "Aa",
                "title": "Readable content",
                "text": "We use clear headings, short paragraphs, descriptive labels and simple words so parents can scan and understand important course information.",
                "more": [],
                "items": []
              },
              {
                "badge": "↹",
                "title": "Keyboard access",
                "text": "Links, menus and form controls are intended to work without a mouse. Visible focus styles help show which control is active.",
                "more": [],
                "items": []
              },
              {
                "badge": "+",
                "title": "Flexible display",
                "text": "The layout is designed to respond to smaller screens and browser zoom. Content should remain usable without forcing a fixed text size.",
                "more": [],
                "items": []
              },
              {
                "badge": "◐",
                "title": "Colour and contrast",
                "text": "Important information is not intentionally communicated by colour alone. Text and controls use the Abacus Experts palette with readable contrast.",
                "more": [],
                "items": []
              },
              {
                "badge": "✓",
                "title": "Forms and instructions",
                "text": "Fields use visible labels and understandable instructions. Required information should be clear before a parent submits an enquiry.",
                "more": [],
                "items": []
              },
              {
                "badge": "▤",
                "title": "Structured pages",
                "text": "Semantic headings, lists, tables and landmarks help assistive technology interpret the relationship between sections.",
                "more": [],
                "items": []
              }
            ]
          ]
        ]
      },
      {
        "kind": "section",
        "id": "classes",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Support beyond the website",
            "Accessibility Support for Abacus Classes",
            null
          ],
          [
            "p",
            "Abacus is a visual and hands-on learning method, but children may still benefit from reasonable adjustments to communication, seating, pacing, lighting, movement or learning material. A parent should share relevant needs before the readiness assessment so we can discuss what is practical and safe."
          ],
          [
            "split",
            [
              {
                "title": "Information parents can share",
                "items": [
                  "Vision, hearing or communication needs",
                  "Fine-motor or mobility needs",
                  "Sensory sensitivities",
                  "Attention or learning-support needs",
                  "Relevant medical or emergency instructions"
                ],
                "paras": []
              },
              {
                "title": "Possible adjustments to discuss",
                "items": [
                  "Seating and lighting changes",
                  "Shorter instruction steps",
                  "Additional demonstration time",
                  "Reduced visual or sound distraction",
                  "An appropriate online or classroom format"
                ],
                "paras": []
              }
            ]
          ],
          [
            "note",
            "Assessment is individual",
            "We cannot promise that every adjustment or programme will suit every learner. We will discuss the child’s needs, the essential abacus activity and available support honestly before enrolment."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "limitations",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "Transparency about barriers",
            "Known and Possible Accessibility Limitations",
            null
          ],
          [
            "definitions",
            [
              [
                "Third-party services",
                "WhatsApp, maps, payment tools, video-class platforms and external research websites follow their own accessibility practices, which we do not fully control."
              ],
              [
                "Older documents or media",
                "Some previously created images, PDFs or videos may not yet have complete text alternatives, captions or accessible structure."
              ],
              [
                "Physical abacus tasks",
                "The standard method requires visual interpretation and controlled bead movement. Some learners may require an adjusted teaching approach or may find another maths method more suitable."
              ],
              [
                "Live communication",
                "Captions, interpretation or another communication support may require advance notice and may depend on availability."
              ]
            ]
          ],
          [
            "pnote",
            "If a specific barrier prevents access, please report it. A description of the task is more useful than only naming the device or disability."
          ]
        ]
      },
      {
        "kind": "section",
        "id": "feedback",
        "tinted": false,
        "blocks": [
          [
            "heading",
            "Tell us what is not working",
            "How to Request Accessibility Help",
            null
          ],
          [
            "contact",
            "Contact Abacus Experts",
            "Email [[hello@abacusexperts.com|mailto:hello@abacusexperts.com?subject=Accessibility%20request]] or call [[+91 90325 89990|tel:+919032589990]]. Include the page or service, the barrier and your preferred way to receive the information.",
            [
              "Request assistance",
              "mailto:hello@abacusexperts.com?subject=Accessibility%20request"
            ]
          ],
          [
            "process",
            [
              [
                "Describe the task",
                "Tell us what you were trying to read, understand or complete."
              ],
              [
                "Explain the barrier",
                "For example: keyboard focus, text contrast, a missing label, inaccessible media or difficulty using a document."
              ],
              [
                "Request a useful alternative",
                "Ask for plain text, a telephone explanation, a different document format or another reasonable form of support."
              ]
            ]
          ]
        ]
      },
      {
        "kind": "section",
        "id": "technical",
        "tinted": true,
        "blocks": [
          [
            "heading",
            "Compatibility and review",
            "Technical Approach and Statement Review",
            null
          ],
          [
            "p",
            "This website is designed for current versions of commonly used browsers and assistive technologies. Very old browser versions or unusual combinations may not provide the same experience. We review this statement when significant website, class-delivery or accessibility changes are made."
          ],
          [
            "related",
            [
              [
                "Child safeguarding",
                "/child-safeguarding-policy/"
              ],
              [
                "Privacy policy",
                "/privacy-policy/"
              ],
              [
                "Parent FAQs",
                "/parent-faqs/"
              ]
            ]
          ]
        ]
      },
      {
        "kind": "official",
        "id": "official-web-accessibility-standards-and-guidance",
        "eyebrow": "Official, non-commercial references",
        "title": "Official Web-Accessibility Standards and Guidance",
        "lede": "We use these standards as reference points for continuous improvement. Linking to them does not mean that an independent organisation has certified every page of this website.",
        "sources": [
          {
            "publisher": "World Wide Web Consortium (W3C)",
            "title": "Web Content Accessibility Guidelines 2.2",
            "text": "The international technical standard explaining how to make web content more accessible to people with disabilities.",
            "href": "https://www.w3.org/TR/WCAG22/"
          },
          {
            "publisher": "Government of India",
            "title": "GIGW 3.0 Accessibility Guidance",
            "text": "Official Indian guidance covering accessibility, quality, cybersecurity and lifecycle management for websites and apps.",
            "href": "https://guidelines.india.gov.in/accessibility-guidelines-and-attributes/"
          },
          {
            "publisher": "Government of India",
            "title": "GIGW Accessibility Tools and Resources",
            "text": "Official tools and resources for understanding and checking accessible digital content.",
            "href": "https://guidelines.india.gov.in/tools-and-resources/"
          }
        ]
      }
    ],
    "cta": {
      "title": "Need information in another format?",
      "text": "Tell us what you need and how you prefer to receive it. We will review the request and explain what support we can provide.",
      "buttons": [
        {
          "label": "Email us",
          "href": "mailto:hello@abacusexperts.com",
          "secondary": false,
          "whatsapp": false
        },
        {
          "label": "Call +91 90325 89990",
          "href": "tel:+919032589990",
          "secondary": true,
          "whatsapp": false
        }
      ]
    },
    "centre": null
  }
};
