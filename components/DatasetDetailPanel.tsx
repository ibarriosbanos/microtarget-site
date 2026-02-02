import Button from "./Button";
import type { Dataset } from "@/lib/catalogue";
import { accessLabels, formatLabels, geographyLabels } from "@/lib/catalogue";

type DatasetDetailPanelProps = {
  dataset: Dataset;
};

export default function DatasetDetailPanel({ dataset }: DatasetDetailPanelProps) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Summary</p>
        <h3 className="mt-2 text-2xl font-semibold text-foreground">{dataset.name}</h3>
        <p className="mt-2 text-sm text-muted">{dataset.description}</p>
      </div>
      <div className="space-y-2 text-sm text-muted">
        <p>
          <span className="font-semibold text-foreground">Best for:</span>{" "}
          {dataset.best_for.join(", ")}
        </p>
        <p>
          <span className="font-semibold text-foreground">Coverage:</span> {dataset.coverage.country}
        </p>
        <p>
          <span className="font-semibold text-foreground">Geographies:</span>{" "}
          {dataset.geographies.map((geo) => geographyLabels[geo]).join(", ")}
        </p>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">What is inside</p>
        <ul className="mt-2 space-y-2 text-sm text-muted">
          {dataset.inside.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-2 text-sm text-muted">
        <p>
          <span className="font-semibold text-foreground">Access:</span>{" "}
          {dataset.access.map((access) => accessLabels[access]).join(", ")}
        </p>
        <p>
          <span className="font-semibold text-foreground">Formats:</span>{" "}
          {dataset.formats.map((format) => formatLabels[format]).join(", ")}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {dataset.sample.available && (
          <Button href={dataset.sample.url} variant="secondary" size="sm">
            Download sample
          </Button>
        )}
        <Button
          href={`/contact?datasetId=${encodeURIComponent(dataset.dataset_id)}`}
          variant="primary"
          size="sm"
        >
          Request access
        </Button>
      </div>
      {dataset.sample.notes && (
        <p className="text-xs text-muted">{dataset.sample.notes}</p>
      )}
    </div>
  );
}
