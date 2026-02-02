const DOMAINS = [
  {
    title: "Sociodemographics",
    description: "Understand who lives and moves through each area.",
  },
  {
    title: "Income",
    description: "Size purchasing power at micro territory detail.",
  },
  {
    title: "Mobility",
    description: "See how demand moves and concentrates.",
  },
  {
    title: "Commercial offer",
    description: "Know what services and offers surround each site.",
  },
  {
    title: "Labor demand",
    description: "Track the local economy and workforce pull.",
  },
  {
    title: "Tourism",
    description: "Plan for seasonal and visitor-driven demand.",
  },
  {
    title: "Urban centrality",
    description: "Measure how central and connected an area feels.",
  },
  {
    title: "B2B demand",
    description: "Support sales coverage and service planning.",
  },
];

export default function DataDomains() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {DOMAINS.map((domain) => (
        <div
          key={domain.title}
          className="rounded-2xl border border-border bg-surface p-4 transition hover:border-[var(--fluor)] hover:shadow-[0_0_24px_rgba(124,255,79,0.18)]"
        >
          <div className="h-1 w-10 rounded-full bg-[var(--fluor)] shadow-[0_0_10px_rgba(124,255,79,0.6)]" />
          <p className="mt-3 text-sm font-semibold text-foreground">{domain.title}</p>
          <p className="mt-2 text-sm text-muted">{domain.description}</p>
        </div>
      ))}
    </div>
  );
}
