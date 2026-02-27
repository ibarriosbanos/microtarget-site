"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Dataset, DatasetAccess, DatasetCategory, GeographyLevel } from "@/lib/catalogue";
import DatasetCard from "./DatasetCard";
import DatasetDetailPanel from "./DatasetDetailPanel";
import FiltersPanel from "./FiltersPanel";
import Button from "./Button";

const toArray = <T,>(value: string | null): T[] => {
  if (!value) return [];
  return value.split(",").filter(Boolean) as T[];
};

export default function DataHubClient({ datasets }: { datasets: Dataset[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<DatasetCategory[]>(() =>
    toArray<DatasetCategory>(searchParams.get("category")),
  );
  const [selectedAccess, setSelectedAccess] = useState<DatasetAccess[]>(() =>
    toArray<DatasetAccess>(searchParams.get("access")),
  );
  const [selectedGeographies, setSelectedGeographies] = useState<GeographyLevel[]>(() =>
    toArray<GeographyLevel>(searchParams.get("geo")),
  );
  const [selectedId, setSelectedId] = useState<string | null>(() => searchParams.get("dataset"));
  const [sampleOnly, setSampleOnly] = useState(() => searchParams.get("sample") === "1");
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  const filtered = useMemo(() => {
    return datasets.filter((dataset) => {
      const matchesSearch =
        search.trim().length === 0 ||
        `${dataset.name} ${dataset.description} ${dataset.inside.join(" ")}`
          .toLowerCase()
          .includes(search.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(dataset.category);
      const matchesAccess =
        selectedAccess.length === 0 || selectedAccess.some((item) => dataset.access.includes(item));
      const matchesGeo =
        selectedGeographies.length === 0 ||
        selectedGeographies.some((item) => dataset.geographies.includes(item));
      const matchesSample = !sampleOnly || dataset.sample.available;
      return matchesSearch && matchesCategory && matchesAccess && matchesGeo && matchesSample;
    });
  }, [datasets, search, selectedCategories, selectedAccess, selectedGeographies, sampleOnly]);

  const selectedDataset =
    filtered.find((dataset) => dataset.dataset_id === selectedId) ?? filtered[0];

  const handleSelect = (datasetId: string) => {
    setSelectedId(datasetId);
    setShowMobileDetail(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set("dataset", datasetId);
    router.replace(`/data-hub?${params.toString()}`);
  };

  const toggleSelection = <T,>(value: T, list: T[], setList: (next: T[]) => void) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  useEffect(() => {
    if (sampleOnly) {
      const element = document.getElementById("demo-sample");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [sampleOnly]);

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)_320px]">
      <aside className="rounded-3xl border border-border bg-surface p-4 lg:sticky lg:top-28 lg:h-fit">
        <FiltersPanel
          search={search}
          onSearch={setSearch}
          selectedCategories={selectedCategories}
          selectedAccess={selectedAccess}
          selectedGeographies={selectedGeographies}
          onToggleCategory={(value) =>
            toggleSelection(value, selectedCategories, setSelectedCategories)
          }
          onToggleAccess={(value) => toggleSelection(value, selectedAccess, setSelectedAccess)}
          onToggleGeography={(value) =>
            toggleSelection(value, selectedGeographies, setSelectedGeographies)
          }
          sampleOnly={sampleOnly}
          onToggleSample={() => setSampleOnly((prev) => !prev)}
        />
      </aside>

      <main className="space-y-6">
        <div
          id="demo-sample"
          className="rounded-3xl border border-[var(--fluor)]/60 bg-[var(--fluor)]/10 p-4 text-sm text-foreground shadow-[0_0_24px_rgba(124,255,79,0.2)]"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Demo sample download</p>
              <p className="text-xs text-muted">
                Single GeoPackage sample with multiple representative postcodes.
              </p>
            </div>
            <Button href="https://www.microtarget.es/assets/unica360_demo.gpkg" size="sm">
              Download demo
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-border bg-surface p-6 text-sm text-muted">
              No datasets match these filters.
            </div>
          ) : (
            filtered.map((dataset) => (
              <DatasetCard
                key={dataset.dataset_id}
                dataset={dataset}
                onSelect={handleSelect}
              />
            ))
          )}
        </div>
      </main>

      <aside className="hidden rounded-3xl border border-border bg-surface p-6 lg:block">
        {selectedDataset ? (
          <DatasetDetailPanel dataset={selectedDataset} />
        ) : (
          <p className="text-sm text-muted">Select a dataset to see details.</p>
        )}
      </aside>

      {showMobileDetail && selectedDataset && (
        <div className="fixed inset-0 z-50 flex items-end bg-foreground/40 p-4 lg:hidden">
          <div className="max-h-[80vh] w-full overflow-auto rounded-3xl border border-border bg-background p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-muted">Dataset details</p>
              <button
                type="button"
                onClick={() => setShowMobileDetail(false)}
                className="text-sm font-semibold text-[var(--fluor)]"
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              <DatasetDetailPanel dataset={selectedDataset} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
