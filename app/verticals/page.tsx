import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { verticals } from "@/content/verticals";

export const metadata: Metadata = {
  title: "Verticals | Microtarget",
  description:
    "Explore Microtarget vertical solutions across Retail, Real Estate, Mobility, Tourism, Logistics, Banking, Geomarketing, and Last Mile Delivery.",
  openGraph: {
    title: "Verticals | Microtarget",
    description:
      "Explore Microtarget vertical solutions across Retail, Real Estate, Mobility, Tourism, Logistics, Banking, Geomarketing, and Last Mile Delivery.",
    type: "website",
  },
};

export default function VerticalsPage() {
  return (
    <main className="pb-20">
      <Section
        eyebrow="Vertical solutions"
        title="Eight verticals, one consistent grid"
        description="One modeling framework. One 100m view. Built for decisions across territories."
      >
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {verticals.map((vertical) => (
              <Link
                key={vertical.slug}
                href={`/verticals/${vertical.slug}`}
                className="group rounded-3xl border border-border bg-surface p-6 transition hover:border-[var(--fluor)] hover:shadow-[0_0_30px_rgba(124,255,79,0.22)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--fluor)]">
                  {vertical.name}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{vertical.tagline}</h3>
                <p className="mt-3 text-sm text-muted">{vertical.intro}</p>
                <p className="mt-4 text-sm font-semibold text-[var(--fluor)]">
                  View use cases
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        eyebrow="Next step"
        title="Request access for your vertical"
        description="Share your decision workflow and we will tailor a demo and indicator bundle."
      >
        <Container>
          <div className="rounded-3xl border border-border bg-surface p-6">
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Request a demo</Button>
              <Button href="/data-hub" variant="secondary">
                Explore Data Hub
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
