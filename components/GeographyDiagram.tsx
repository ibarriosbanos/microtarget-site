const LEVELS = [
  "Road segment",
  "Building / portal",
  "Census tract",
  "Postal code",
  "Municipality",
];

export default function GeographyDiagram() {
  return (
    <div className="rounded-3xl border border-border bg-background p-6">
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="space-y-3">
          {LEVELS.slice(0, 3).map((level) => (
            <div
              key={level}
              className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-foreground"
            >
              {level}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-3 text-sm font-semibold text-[var(--fluor)]">
          <span>←</span>
          <span className="rounded-2xl border border-[var(--fluor)] bg-[var(--fluor)]/10 px-4 py-3 text-center text-base font-semibold text-foreground shadow-[0_0_18px_rgba(124,255,79,0.45)]">
            100 m grid
          </span>
          <span>→</span>
        </div>
        <div className="space-y-3">
          {LEVELS.slice(3).map((level) => (
            <div
              key={level}
              className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-foreground"
            >
              {level}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm text-muted">Modeled for your selected geography.</p>
    </div>
  );
}
