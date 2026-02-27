import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import DataHubClient from "@/components/DataHubClient";
import { datasets } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Data Hub | Microtarget",
  description:
    "Browse Microtarget datasets by domain, geography, and access method. Download the demo sample for your market.",
  openGraph: {
    title: "Data Hub | Microtarget",
    description:
      "Browse Microtarget datasets by domain, geography, and access method. Download the demo sample for your market.",
    type: "website",
  },
};

export default function DataHubPage() {
  return (
    <main className="pb-20">
      <Section
        eyebrow="Data Hub"
        title="Browse datasets by domain, geography, and access"
        description="Filter the catalogue, open details, and download the demo GeoPackage sample."
      >
        <Container>
          <Suspense
            fallback={
              <div className="rounded-3xl border border-border bg-surface p-6 text-sm text-muted">
                Loading dataset explorer...
              </div>
            }
          >
            <DataHubClient datasets={datasets} />
          </Suspense>
        </Container>
      </Section>
    </main>
  );
}
