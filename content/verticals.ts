import type { DatasetCategory } from "@/lib/catalogue";

export type VerticalCaseModule = {
  title: string;
  description: string;
  answeredQuestions: string[];
  valueToClient: string;
};

export type Vertical = {
  slug: string;
  name: string;
  tagline: string;
  promise: string;
  intro: string;
  executiveQuestions: string[];
  relatedCategories: DatasetCategory[];
  cases: VerticalCaseModule[];
};

export const verticals: Vertical[] = [
  {
    slug: "retail",
    name: "Retail",
    tagline: "Open, optimize, and defend every location decision.",
    promise: "Compare territories on one grid and choose the next best retail move with confidence.",
    intro:
      "Retail performance is local. Microtarget helps you compare territories on the same grid, spot demand gaps, and choose the next best move with confidence.",
    executiveQuestions: [
      "Where should we open next -- and what is the revenue case by micro-zone?",
      "Which stores are cannibalizing each other vs. expanding the network?",
    ],
    relatedCategories: ["sociodemographics", "commercial_offer", "income"],
    cases: [
      {
        title: "Site selection & expansion",
        description:
          "Rank candidate zones with micro-territory indicators and roll up to postcode, tract, or municipality for governance-ready decisions.",
        answeredQuestions: [
          "Where should we open next?",
          "What surrounds each site (demand, centrality, movement)?",
          "Where is competitor saturation vs. whitespace?",
        ],
        valueToClient: "Fewer bad openings, faster screening, clearer investment memos.",
      },
      {
        title: "Network optimization (closures, cannibalization, coverage)",
        description:
          "See overlap and coverage by micro-zone, not just circles on a map.",
        answeredQuestions: [
          "Which stores compete with each other?",
          "Where do we lose coverage if we close or relocate?",
          "Which areas are underserved by the current footprint?",
        ],
        valueToClient: "Better margin protection and smarter consolidation decisions.",
      },
      {
        title: "Local assortment & offer planning",
        description:
          "Align assortment and pricing strategy to micro-territory demand signals.",
        answeredQuestions: [
          "What mix fits this neighborhood?",
          "Where do we need premium vs. value positioning?",
          "Which zones show unmet demand for key categories?",
        ],
        valueToClient: "Higher conversion and better local relevance.",
      },
      {
        title: "Trade area storytelling (teams + stakeholders)",
        description:
          "Plain-language indicators that help business and analytics teams align on one map.",
        answeredQuestions: [
          "How do we justify this choice internally?",
          "What is the narrative behind the location score?",
          "What evidence supports the recommendation?",
        ],
        valueToClient: "Faster alignment across real estate, ops, and marketing.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Price catchments with evidence, not intuition.",
    promise: "Turn street-level signals into underwriting assumptions you can defend.",
    intro:
      "Microtarget turns micro-territory indicators into a structured view of demand, centrality, mobility, and surrounding offer so you can underwrite with confidence.",
    executiveQuestions: [
      "Which locations will outperform -- based on demand signals at street-level granularity?",
      "What tenant mix fits this catchment now (not last year)?",
    ],
    relatedCategories: ["urban_centrality", "income", "mobility"],
    cases: [
      {
        title: "Acquisition & underwriting",
        description:
          "Compare locations consistently and translate local context into defensible assumptions.",
        answeredQuestions: [
          "Which assets will outperform?",
          "What local signals support rent and absorption assumptions?",
          "Which areas show momentum vs. stagnation?",
        ],
        valueToClient: "Better underwriting and fewer surprises post-acquisition.",
      },
      {
        title: "Leasing & tenant strategy",
        description:
          "Match tenant mix to catchment reality and identify underserved demand pockets.",
        answeredQuestions: [
          "What tenant categories fit this catchment?",
          "Where is unmet demand for retail/services around the asset?",
          "Which sub-areas drive the strongest footfall potential?",
        ],
        valueToClient: "Stronger tenant mix and faster leasing cycles.",
      },
      {
        title: "Portfolio risk & resilience",
        description:
          "Monitor territory shifts and exposure factors across the portfolio.",
        answeredQuestions: [
          "Which assets are exposed to demand shifts?",
          "Where is accessibility changing?",
          "Which micro-areas are deteriorating or improving?",
        ],
        valueToClient: "Earlier risk detection and smarter capex prioritization.",
      },
    ],
  },
  {
    slug: "mobility-smart-cities",
    name: "Mobility & Smart Cities",
    tagline: "Plan infrastructure where demand actually is.",
    promise: "Prioritize services and infrastructure with a consistent view of demand concentration.",
    intro:
      "Plan services and infrastructure with a consistent micro-territory view of how demand concentrates and moves.",
    executiveQuestions: [
      "Where is demand concentrating -- and where are the service gaps?",
      "Which corridors should we prioritize for capacity, safety, or new mobility assets?",
    ],
    relatedCategories: ["mobility", "urban_centrality", "sociodemographics"],
    cases: [
      {
        title: "Infrastructure prioritization",
        description:
          "Identify where investment delivers the highest impact and improves accessibility.",
        answeredQuestions: [
          "Where should we invest first?",
          "Which corridors matter most?",
          "Where do constraints create recurring congestion or delays?",
        ],
        valueToClient: "Higher impact per euro and clearer accountability.",
      },
      {
        title: "Service coverage & accessibility",
        description:
          "Reveal underserved areas and optimize coverage based on lived mobility patterns.",
        answeredQuestions: [
          "Where are service gaps?",
          "Which neighborhoods are underserved?",
          "Where should we add access points or capacity?",
        ],
        valueToClient: "Better equity and higher service performance.",
      },
      {
        title: "Scenario planning",
        description:
          "Test changes (routes, stops, assets) and communicate outcomes clearly.",
        answeredQuestions: [
          "What happens if we add/remove a line or station?",
          "How do demand hotspots shift under each scenario?",
          "What are the trade-offs by district?",
        ],
        valueToClient: "Faster planning cycles and stronger stakeholder communication.",
      },
    ],
  },
  {
    slug: "tourism",
    name: "Tourism",
    tagline: "Match capacity and services to real visitor flows.",
    promise: "Plan seasonal demand with visitor-flow signals instead of assumptions.",
    intro:
      "Tourism is seasonal, localized, and sensitive to flows. Microtarget helps you plan capacity and services based on visitor-driven demand signals.",
    executiveQuestions: [
      "Which areas will absorb visitor pressure next season -- and when?",
      "Where should we activate services to match visitor flows (not assumptions)?",
    ],
    relatedCategories: ["tourism", "mobility", "commercial_offer"],
    cases: [
      {
        title: "Seasonal capacity planning",
        description:
          "Anticipate where demand peaks and how hotspots shift across seasons.",
        answeredQuestions: [
          "Where will demand peak?",
          "When do hotspots shift?",
          "Which zones need additional services during peak weeks?",
        ],
        valueToClient: "Reduced congestion and better service levels.",
      },
      {
        title: "Destination development & activation",
        description:
          "Prioritize investments and activations by micro-territory potential.",
        answeredQuestions: [
          "Which zones deserve investment?",
          "Where do we expand the offer?",
          "Which areas can absorb visitors without degrading experience?",
        ],
        valueToClient: "Higher spend capture and improved visitor experience.",
      },
      {
        title: "Hospitality opportunity mapping",
        description:
          "Screen areas for short-stay and hospitality development using local signals.",
        answeredQuestions: [
          "Where is demand rising?",
          "What surrounding offer supports occupancy?",
          "Which micro-areas show sustained momentum?",
        ],
        valueToClient: "Better location strategy and faster screening.",
      },
    ],
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    tagline: "Design networks that reduce cost-to-serve.",
    promise: "Design and rebalance logistics networks with micro-territory demand and access signals.",
    intro:
      "Design networks from the ground up: micro-territory demand, movement, and access, rolled up to the geographies you manage.",
    executiveQuestions: [
      "Where should we place hubs to minimize time-to-serve and cost-to-serve?",
      "Which zones create bottlenecks -- and what is the best reroute/coverage plan?",
    ],
    relatedCategories: ["mobility", "b2b_demand", "urban_centrality"],
    cases: [
      {
        title: "Hub & depot placement",
        description:
          "Select hub locations to reduce time-to-serve and improve reach.",
        answeredQuestions: [
          "Where should hubs go to reduce time-to-serve?",
          "Which areas are expensive to serve today?",
          "Where is demand shifting?",
        ],
        valueToClient: "Lower cost-to-serve and stronger coverage.",
      },
      {
        title: "Territory design & routing strategy",
        description:
          "Redraw territories based on operational reality and recurring constraints.",
        answeredQuestions: [
          "Which zones create bottlenecks?",
          "Where should we rebalance territories?",
          "How can we reduce deadhead distance?",
        ],
        valueToClient: "More reliable operations and fewer exceptions.",
      },
      {
        title: "Service level planning",
        description:
          "Match service tiers and capacity to micro-territory needs.",
        answeredQuestions: [
          "Where do we need faster service tiers?",
          "Which zones require buffer capacity?",
          "Where are SLA breaches most likely?",
        ],
        valueToClient: "SLA improvements with controlled cost.",
      },
    ],
  },
  {
    slug: "banking-assurance",
    name: "Banking & Assurance",
    tagline: "Balance coverage, performance, and risk territory-by-territory.",
    promise: "Balance growth, accessibility, and exposure with local demand and change signals.",
    intro:
      "Balance growth, accessibility, and risk with a micro-territory view of local demand and change.",
    executiveQuestions: [
      "Where are we over-served vs. under-served -- by local demand and accessibility?",
      "Which micro-territories show rising risk or changing client profiles?",
    ],
    relatedCategories: ["sociodemographics", "income", "mobility"],
    cases: [
      {
        title: "Branch/ATM network strategy",
        description:
          "Optimize physical presence based on accessibility and local demand signals.",
        answeredQuestions: [
          "Where should we expand or consolidate?",
          "Which areas are underserved?",
          "Where is demand shifting away from current coverage?",
        ],
        valueToClient: "Smarter capex decisions and better accessibility.",
      },
      {
        title: "Micro-market growth targeting",
        description:
          "Prioritize local acquisition and retention based on micro-territory potential.",
        answeredQuestions: [
          "Where are high-potential client pockets?",
          "Which territories justify dedicated outreach?",
          "Where do we see early growth signals?",
        ],
        valueToClient: "Higher acquisition efficiency and clearer GTM focus.",
      },
      {
        title: "Risk signals & exposure mapping",
        description:
          "Track territorial change signals that influence risk exposure.",
        answeredQuestions: [
          "Where is the territory changing in ways that affect risk?",
          "Which micro-areas show rising exposure signals?",
          "Where should we intervene earlier?",
        ],
        valueToClient: "Earlier interventions and clearer portfolio governance.",
      },
    ],
  },
  {
    slug: "geomarketing",
    name: "Geomarketing",
    tagline: "Target micro-territories with the right offer and timing.",
    promise: "Prioritize target micro-territories with explainable local signals.",
    intro:
      "Move from broad segments to micro-territories you can act on: prioritized, explainable, and consistent.",
    executiveQuestions: [
      "Which micro-territories should we target first -- and with what message/offer?",
      "Where do we have whitespace vs. competitor saturation?",
    ],
    relatedCategories: ["sociodemographics", "commercial_offer", "b2b_demand"],
    cases: [
      {
        title: "Audience & territory targeting",
        description:
          "Choose micro-territories to target first and align offer/message to local signals.",
        answeredQuestions: [
          "Which micro-areas should we target first?",
          "With what offer?",
          "Where will we see the fastest lift?",
        ],
        valueToClient: "Better performance and less wasted spend.",
      },
      {
        title: "Competitor & whitespace mapping",
        description:
          "Identify competitor concentrations and realistic whitespace by micro-zone.",
        answeredQuestions: [
          "Where are competitors concentrated?",
          "Where do we have room to win?",
          "Which zones are saturated vs. open?",
        ],
        valueToClient: "Clearer GTM priorities and better territory selection.",
      },
      {
        title: "Campaign planning & measurement areas",
        description:
          "Define test vs. control areas and measure uplift with cleaner geography design.",
        answeredQuestions: [
          "Which zones should be treated or held out?",
          "How do we build a clean geo experiment?",
          "Where should we focus measurement?",
        ],
        valueToClient: "Cleaner experiments and faster learning loops.",
      },
    ],
  },
  {
    slug: "last-mile-delivery",
    name: "Last Mile Delivery",
    tagline: "Redraw zones to hit SLA and improve unit economics.",
    promise:
      "Redesign last-mile territories and capacity so SLA stays protected during peak demand.",
    intro:
      "Last mile is won in micro-zones. Microtarget helps you redesign territories, place micro-fulfillment, and protect unit economics without losing coverage.",
    executiveQuestions: [
      "How should we redraw delivery zones to hit SLA during peak demand?",
      "Where should we add micro-fulfillment to reduce failed deliveries and churn?",
    ],
    relatedCategories: ["mobility", "b2b_demand", "urban_centrality"],
    cases: [
      {
        title: "Zone design & SLA protection",
        description:
          "Redraw zones to match peak demand patterns and protect service levels.",
        answeredQuestions: [
          "How do we redraw zones for peak demand?",
          "Where do we breach SLA?",
          "Which zones are operationally fragile?",
        ],
        valueToClient: "Better on-time delivery and reduced churn.",
      },
      {
        title: "Micro-fulfillment placement",
        description:
          "Identify where capacity reduces distance, failures, and re-deliveries.",
        answeredQuestions: [
          "Where should we add micro-fulfillment?",
          "Which zones drive failed deliveries?",
          "Where does distance create unit-cost spikes?",
        ],
        valueToClient: "Lower cost per delivery and higher success rate.",
      },
      {
        title: "Fleet & workforce planning",
        description:
          "Align staffing and fleet allocation to demand concentration by micro-territory.",
        answeredQuestions: [
          "Where will demand spike?",
          "Where do we need staffing buffers?",
          "Which zones require flexible capacity?",
        ],
        valueToClient: "Smoother operations and fewer costly surprises.",
      },
    ],
  },
];

export function getVerticalBySlug(slug: string) {
  return verticals.find((vertical) => vertical.slug === slug);
}
