const USE_CASES = [
  {
    title: "Network strategy",
    description:
      "Compare territories consistently, spot demand gaps, and prioritize the next moves.",
  },
  {
    title: "Optimal expansion",
    description: "Rank sites, size local potential, and reduce opening risk.",
  },
  {
    title: "Omnichannel and coverage",
    description: "Align store and service coverage to how demand moves.",
  },
  {
    title: "Enrichment and modeling",
    description:
      "Plug indicators into your scoring, forecasting, and planning.",
  },
];

export default function UseCaseGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {USE_CASES.map((useCase) => (
        <div
          key={useCase.title}
          className="rounded-3xl border border-border bg-surface p-6 transition hover:border-[var(--fluor)] hover:shadow-[0_0_30px_rgba(124,255,79,0.22)]"
          data-reveal
        >
          <h3 className="text-xl font-semibold text-foreground">{useCase.title}</h3>
          <p className="mt-3 text-sm text-muted">{useCase.description}</p>
        </div>
      ))}
    </div>
  );
}
