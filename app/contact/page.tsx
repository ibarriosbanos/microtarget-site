import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Microtarget",
  description: "Request a demo, sample data, or access to Microtarget indicators.",
  openGraph: {
    title: "Contact | Microtarget",
    description: "Request a demo, sample data, or access to Microtarget indicators.",
    type: "website",
  },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { topic?: string | string[]; datasetId?: string | string[] };
}) {
  const rawTopic = searchParams?.topic;
  const rawDataset = searchParams?.datasetId;
  const topicValue = Array.isArray(rawTopic) ? rawTopic[0] : rawTopic;
  const datasetValue = Array.isArray(rawDataset) ? rawDataset[0] : rawDataset;
  const topic = topicValue ? decodeURIComponent(topicValue) : undefined;
  const defaultMessage = datasetValue
    ? `I am interested in dataset: ${decodeURIComponent(datasetValue)}.`
    : undefined;

  return (
    <main className="pb-20">
      <Section
        eyebrow="Contact"
        title="Tell us what you need"
        description="We will guide you to the right data access and format for your team."
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4 rounded-3xl border border-border bg-surface p-6">
              <h2 className="text-2xl font-semibold text-foreground">Get in touch</h2>
              <p className="text-sm text-muted">
                Share your project goals and we will recommend the best path: API, tables,
                custom app, or consulting.
              </p>
              <div className="rounded-2xl border border-border bg-background p-4 text-sm text-muted">
                <p className="font-semibold text-foreground">Microtarget</p>
                <p>Carrer Calàbria 242, 08029 Barcelona</p>
                <p>+34 659 88 90 32</p>
                <p>info@unica360.com</p>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-6">
              <ContactForm defaultTopic={topic} defaultMessage={defaultMessage} />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
