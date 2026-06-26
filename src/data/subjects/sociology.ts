import type { Subject } from "@/lib/types";

export const sociology: Subject = {
  id: "sociology",
  name: "Sociology",
  short: "Soc",
  accent: "#0d9488",
  blurb:
    "Social structures, institutions, inequality, and demographic change. Pairs with psychology to make up the Psych/Soc section.",
  sections: ["Psych/Soc"],
  topics: [
    {
      id: "soc-theory",
      name: "Theoretical Frameworks",
      blurb: "The major lenses sociologists use to explain society.",
      subtopics: [
        {
          id: "soc-theory-frameworks",
          name: "Major sociological theories",
          summary: {
            highYield: "Matching a scenario to the right framework is the single most common Soc question.",
            body: [
              { type: "list", items: [
                "Functionalism — society is interrelated parts working for stability (manifest vs latent functions).",
                "Conflict theory — society is competition over limited resources; focus on power and inequality.",
                "Symbolic interactionism — society is built from everyday interactions and shared symbols/meanings (micro-level).",
                "Social constructionism — categories like race and gender are created and maintained by society.",
              ] },
              { type: "tip", text: "Conflict & functionalism are macro (big structures); symbolic interactionism is micro (face-to-face)." },
            ],
          },
        },
      ],
    },
    {
      id: "soc-institutions",
      name: "Social Institutions",
      blurb: "Family, education, religion, government, medicine, and the economy.",
      subtopics: [
        {
          id: "soc-inst-medicine",
          name: "Medicine as an institution",
          summary: {
            highYield: "The sick role and medicalization show up because this is a med-school exam.",
            body: [
              { type: "key", term: "Sick role (Parsons)", def: "The sick person is exempt from normal duties and not blamed, but is obligated to want to get well and to seek competent help." },
              { type: "tip", text: "Medicalization — defining non-medical problems as medical issues (e.g., treating shyness as a disorder)." },
            ],
          },
        },
      ],
    },
    {
      id: "soc-stratification",
      name: "Social Inequality",
      blurb: "Class, mobility, and disparities in health and opportunity.",
      subtopics: [
        {
          id: "soc-strat-concepts",
          name: "Stratification & mobility",
          summary: {
            body: [
              { type: "list", items: [
                "Social stratification — hierarchical ranking of groups by wealth, power, prestige.",
                "Meritocracy vs caste/class systems — open vs closed mobility.",
                "Social reproduction — inequality passed across generations (cultural capital).",
              ] },
              { type: "key", term: "Health disparities", def: "Differences in health outcomes tied to social factors — the social determinants of health (income, education, environment, access)." },
            ],
          },
        },
      ],
    },
    {
      id: "soc-demography",
      name: "Demographics & Social Change",
      blurb: "How populations grow, move, and reshape society.",
      subtopics: [
        {
          id: "soc-demo-concepts",
          name: "Demographic transition & movements",
          summary: {
            body: [
              { type: "p", text: "Demographic transition describes the shift from high birth/death rates to low ones as a society industrializes. Population pyramids visualize age/sex structure." },
              { type: "tip", text: "Globalization, urbanization, and social movements drive large-scale social change. Collective behavior includes crowds, fads, and panics." },
            ],
          },
        },
      ],
    },
  ],
};
