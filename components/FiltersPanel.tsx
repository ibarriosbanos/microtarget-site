import { accessLabels, categoryLabels, geographyLabels } from "@/lib/catalogue";
import type { DatasetAccess, DatasetCategory, GeographyLevel } from "@/lib/catalogue";

const categories = Object.entries(categoryLabels) as [DatasetCategory, string][];
const accessMethods = Object.entries(accessLabels) as [DatasetAccess, string][];
const geographies = Object.entries(geographyLabels) as [GeographyLevel, string][];

type FiltersPanelProps = {
  search: string;
  onSearch: (value: string) => void;
  selectedCategories: DatasetCategory[];
  selectedAccess: DatasetAccess[];
  selectedGeographies: GeographyLevel[];
  onToggleCategory: (category: DatasetCategory) => void;
  onToggleAccess: (access: DatasetAccess) => void;
  onToggleGeography: (geo: GeographyLevel) => void;
  sampleOnly: boolean;
  onToggleSample: () => void;
};

export default function FiltersPanel({
  search,
  onSearch,
  selectedCategories,
  selectedAccess,
  selectedGeographies,
  onToggleCategory,
  onToggleAccess,
  onToggleGeography,
  sampleOnly,
  onToggleSample,
}: FiltersPanelProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-foreground">Search</label>
        <input
          type="search"
          value={search}
          onChange={(event) => onSearch(event.target.value)}
          placeholder="Search datasets"
          className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        />
      </div>
      <div className="space-y-3">
        <p className="text-sm font-semibold text-foreground">Sample</p>
        <button
          type="button"
          onClick={onToggleSample}
          className={`w-full rounded-xl border px-3 py-2 text-left text-sm font-semibold transition ${
            sampleOnly
              ? "border-accent bg-accent/10 text-foreground"
              : "border-border bg-surface text-muted"
          }`}
        >
          {sampleOnly ? "Showing sample-ready" : "Show only with sample"}
        </button>
      </div>
      <div className="space-y-3">
        <p className="text-sm font-semibold text-foreground">Categories</p>
        <div className="space-y-2">
          {categories.map(([value, label]) => (
            <label key={value} className="flex items-center gap-2 text-sm text-muted">
              <input
                type="checkbox"
                checked={selectedCategories.includes(value)}
                onChange={() => onToggleCategory(value)}
                className="h-4 w-4 rounded border-border text-accent focus-visible:ring-accent"
              />
              {label}
            </label>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-sm font-semibold text-foreground">Geography level</p>
        <div className="space-y-2">
          {geographies.map(([value, label]) => (
            <label key={value} className="flex items-center gap-2 text-sm text-muted">
              <input
                type="checkbox"
                checked={selectedGeographies.includes(value)}
                onChange={() => onToggleGeography(value)}
                className="h-4 w-4 rounded border-border text-accent focus-visible:ring-accent"
              />
              {label}
            </label>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-sm font-semibold text-foreground">Access method</p>
        <div className="space-y-2">
          {accessMethods.map(([value, label]) => (
            <label key={value} className="flex items-center gap-2 text-sm text-muted">
              <input
                type="checkbox"
                checked={selectedAccess.includes(value)}
                onChange={() => onToggleAccess(value)}
                className="h-4 w-4 rounded border-border text-accent focus-visible:ring-accent"
              />
              {label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
