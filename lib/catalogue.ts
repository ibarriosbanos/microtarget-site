import catalogue from "@/content/data-hub/catalogue.json";

export type DatasetCategory =
  | "sociodemographics"
  | "income"
  | "mobility"
  | "commercial_offer"
  | "labor_demand"
  | "tourism"
  | "urban_centrality"
  | "b2b_demand";

export type DatasetAccess =
  | "api"
  | "tables_product"
  | "location_intelligence_app"
  | "consulting";

export type GeographyLevel =
  | "100m_grid"
  | "road_segment"
  | "building_portal"
  | "census_tract"
  | "postal_code"
  | "municipality";

export type DatasetFormat = "gpkg" | "csv" | "Ask us";

export type Dataset = {
  dataset_id: string;
  name: string;
  category: DatasetCategory;
  description: string;
  best_for: string[];
  geographies: GeographyLevel[];
  inside: string[];
  access: DatasetAccess[];
  formats: DatasetFormat[];
  coverage: { country: string; notes: string };
  sample: { available: boolean; url: string; notes: string };
};

export const datasets = catalogue as Dataset[];

export const categoryLabels: Record<DatasetCategory, string> = {
  sociodemographics: "Sociodemographics",
  income: "Income",
  mobility: "Mobility",
  commercial_offer: "Commercial offer",
  labor_demand: "Labor demand",
  tourism: "Tourism",
  urban_centrality: "Urban centrality",
  b2b_demand: "B2B demand",
};

export const accessLabels: Record<DatasetAccess, string> = {
  api: "API",
  tables_product: "Product tables",
  location_intelligence_app: "Location Intelligence app",
  consulting: "Consulting",
};

export const geographyLabels: Record<GeographyLevel, string> = {
  "100m_grid": "100 m grid",
  road_segment: "Road segment",
  building_portal: "Building / portal",
  census_tract: "Census tract",
  postal_code: "Postal code",
  municipality: "Municipality",
};

export const formatLabels: Record<DatasetFormat, string> = {
  gpkg: "GPKG",
  csv: "CSV",
  "Ask us": "Ask us",
};
