import Link from "next/link";
import { categoryLabels, datasets } from "@/lib/catalogue";

export default function DataHubTeaser() {
  const featured = datasets.slice(0, 6);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {featured.map((dataset) => (
        <Link
          key={dataset.dataset_id}
          href={`/data-hub?category=${dataset.category}`}
          className="group rounded-3xl border border-border bg-surface p-5 transition hover:border-[var(--fluor)] hover:shadow-[0_0_26px_rgba(124,255,79,0.2)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {categoryLabels[dataset.category]}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-[var(--fluor)]">
            {dataset.name}
          </h3>
          <p className="mt-2 text-sm text-muted">{dataset.description}</p>
          <p className="mt-4 text-sm font-semibold text-[var(--fluor)]">View datasets</p>
        </Link>
      ))}
    </div>
  );
}
