import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import VideoHero from "@/components/VideoHero";
import UseCaseGrid from "@/components/UseCaseGrid";
import DataDomains from "@/components/DataDomains";
import GeographyDiagram from "@/components/GeographyDiagram";
import DataHubTeaser from "@/components/DataHubTeaser";
import AccessMethods from "@/components/AccessMethods";
import TrustMethods from "@/components/TrustMethods";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Microtarget | Better location based decisions",
  description:
    "Micro territory indicators shaping demand across sectors. Work at 100 meter grid detail across Spain.",
  openGraph: {
    title: "Microtarget | Better location based decisions",
    description:
      "Micro territory indicators shaping demand across sectors. Work at 100 meter grid detail across Spain.",
    type: "website",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Microtarget",
  email: "info@unica360.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrer Calàbria 242",
    addressLocality: "Barcelona",
    postalCode: "08029",
    addressCountry: "ES",
  },
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
        eyebrow="From problem to outcome"
        title="Make confident location decisions"
        description="Micro territory indicators turn complexity into clear business actions."
      >
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Choose where to open",
              "Know what surrounds each site",
              "Plan network and delivery",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-border bg-surface p-6 text-sm font-semibold text-foreground"
                data-reveal
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        id="use-cases"
        eyebrow="Use cases"
        title="Microtarget supports the decisions that move growth"
        description="Four core use cases that apply across sectors."
      >
        <Container>
          <UseCaseGrid />
        </Container>
      </Section>

      <Section
        id="data"
        eyebrow="What data you get"
        title="Eight domains, one consistent grid"
        description="Plain-language indicators designed for business teams and analysts alike."
      >
        <Container>
          <div className="space-y-8">
            <DataDomains />
            <GeographyDiagram />
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
