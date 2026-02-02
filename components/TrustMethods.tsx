export default function TrustMethods() {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="h-1 w-12 rounded-full bg-[var(--fluor)] shadow-[0_0_10px_rgba(124,255,79,0.6)]" />
          <h3 className="mt-4 text-xl font-semibold text-foreground">Built from open sources</h3>
          <p className="mt-3 text-sm text-muted">
            Indicators are derived from advanced modeling applied mostly to public data sources,
            with consistent coverage across Spain.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-background p-4 text-sm text-muted">
          <p className="font-semibold text-foreground">Privacy first</p>
          <p className="mt-2">
            Insights are aggregated indicators. No personal data is exposed.
          </p>
        </div>
      </div>
    </div>
  );
}
