import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import DataHubClient from "@/components/DataHubClient";
import { datasets } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Data Hub | Microtarget",
  description:
    "Browse Microtarget datasets by domain, geography, and access method. Download the demo sample for Spain.",
  openGraph: {
    title: "Data Hub | Microtarget",
    description:
      "Browse Microtarget datasets by domain, geography, and access method. Download the demo sample for Spain.",
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
          <DataHubClient datasets={datasets} />
        </Container>
      </Section>
    </main>
  );
}
