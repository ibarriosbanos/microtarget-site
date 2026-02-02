"use client";

import { useState } from "react";

const USE_CASES = [
  {
    title: "Network strategy",
    bullets: [
      "Compare territories with consistent indicators",
      "Spot demand gaps across Spain",
      "Prioritize sites with the strongest local fit",
    ],
  },
  {
    title: "Optimal expansion",
    bullets: [
      "Score candidate locations quickly",
      "Balance coverage and overlap",
      "Plan phased rollouts with confidence",
    ],
  },
  {
    title: "Omnichannel customer",
    bullets: [
      "Align stores and delivery reach",
      "Know what surrounds each site",
      "Match service levels to local demand",
    ],
  },
  {
    title: "Enrichment",
    bullets: [
      "Add micro territory context to your data",
      "Improve segmentation and targeting",
      "Keep reporting consistent across teams",
    ],
  },
];

export default function UseCaseGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {USE_CASES.map((useCase, index) => {
        const isOpen = openIndex === index;
        return (
          <button
            key={useCase.title}
            type="button"
            className="rounded-3xl border border-border bg-surface p-6 text-left transition hover:border-[var(--fluor)] hover:shadow-[0_0_30px_rgba(124,255,79,0.22)]"
            onClick={() => setOpenIndex(isOpen ? null : index)}
            data-reveal
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">{useCase.title}</h3>
              <span className="text-sm font-semibold text-[var(--fluor)]">
                {isOpen ? "Hide" : "Details"}
              </span>
            </div>
            {isOpen && (
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {useCase.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--fluor)] shadow-[0_0_10px_rgba(124,255,79,0.6)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </button>
        );
      })}
    </div>
  );
}
