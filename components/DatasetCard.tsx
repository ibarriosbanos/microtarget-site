import Button from "./Button";
import type { Dataset } from "@/lib/catalogue";
import { accessLabels, categoryLabels } from "@/lib/catalogue";

type DatasetCardProps = {
  dataset: Dataset;
  onSelect: (datasetId: string) => void;
};

export default function DatasetCard({ dataset, onSelect }: DatasetCardProps) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-5 transition hover:border-[var(--fluor)] hover:shadow-[0_0_26px_rgba(124,255,79,0.18)]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        {categoryLabels[dataset.category]}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{dataset.name}</h3>
      <p className="mt-2 text-sm text-muted">{dataset.description}</p>
      <div className="mt-4 space-y-2 text-xs text-muted">
        <p>
          <span className="font-semibold text-foreground">Best for:</span> {dataset.best_for.join(", ")}
        </p>
        <p>
          <span className="font-semibold text-foreground">Coverage:</span>{" "}
          {dataset.coverage.country}
        </p>
        <p>
          <span className="font-semibold text-foreground">Access:</span>{" "}
          {dataset.access.map((access) => accessLabels[access]).join(", ")}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Button onClick={() => onSelect(dataset.dataset_id)} variant="secondary" size="sm">
          View details
        </Button>
        {dataset.sample.available && (
          <Button href={dataset.sample.url} variant="ghost" size="sm">
            Download sample
          </Button>
        )}
      </div>
    </div>
  );
}
