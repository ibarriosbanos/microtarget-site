import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy | Microtarget",
  description: "Microtarget privacy information.",
  openGraph: {
    title: "Privacy | Microtarget",
    description: "Microtarget privacy information.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className="pb-20">
      <Section eyebrow="Privacy" title="Privacy policy">
        <Container>
          <div className="rounded-3xl border border-border bg-surface p-6 text-sm text-muted">
            <p>
              This is a placeholder privacy policy. Replace this content with the final privacy
              statement before launch.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
