import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import VideoHero from "@/components/VideoHero";
import UseCaseGrid from "@/components/UseCaseGrid";
import VerticalsGrid from "@/components/VerticalsGrid";
import DataHubTeaser from "@/components/DataHubTeaser";
import AccessMethods from "@/components/AccessMethods";
import TrustMethods from "@/components/TrustMethods";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Microtarget | Confident location decisions at 100m grid detail",
  description:
    "Turn micro-territory complexity into decisions you can defend, with reliable indicators on a consistent 100m grid.",
  openGraph: {
    title: "Microtarget | Confident location decisions at 100m grid detail",
    description:
      "Turn micro-territory complexity into decisions you can defend, with reliable indicators on a consistent 100m grid.",
    type: "website",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Microtarget",
  email: "info@unica360.com",
};

export default function HomePage() {
  return (
    <main className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <VideoHero />

      <Section
        id="use-cases"
        eyebrow="From problem to outcome"
        title="Make Confident Location Decisions"
        description="Turn micro-territory complexity into decisions you can defend."
      >
        <Container>
          <div className="space-y-8">
            <VerticalsGrid layout="large" />
            <p className="text-sm text-muted">
              Open each vertical to see decision questions and use cases answered on a
              consistent 100m grid.
            </p>
            <UseCaseGrid />
          </div>
        </Container>
      </Section>

      <Section
        eyebrow="Data Hub"
        title="Browse and download ready datasets"
        description="Explore the catalogue and open details for every domain."
      >
        <Container>
          <DataHubTeaser />
        </Container>
      </Section>

      <Section
        eyebrow="How you access it"
        title="Choose the delivery that fits your workflow"
        description="API, product tables, online app, or consulting support."
      >
        <Container>
          <AccessMethods />
        </Container>
      </Section>

      <Section
        eyebrow="Trust and methods"
        title="Reliable indicators, clear governance"
        description="Built to be consistent, explainable, and ready for decisions."
      >
        <Container>
          <TrustMethods />
        </Container>
      </Section>

      <Section
        eyebrow="Contact"
        title="Start with a demo or sample"
        description="Tell us your goal and we will recommend the fastest path to value."
      >
        <Container>
          <div className="rounded-3xl border border-border bg-surface p-6">
            <ContactForm />
          </div>
        </Container>
      </Section>
    </main>
  );
}
