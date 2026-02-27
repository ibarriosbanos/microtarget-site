import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { getVerticalBySlug, verticals } from "@/content/verticals";
import { categoryLabels } from "@/lib/catalogue";

type VerticalPageProps = {
  params: Promise<{ slug: string }>;
};

const CASE_PLACEHOLDER_IMAGES = [
  "/placeholders/location-heatmap.svg",
  "/placeholders/demand-flow.svg",
  "/placeholders/coverage-zones.svg",
];

export function generateStaticParams() {
  return verticals.map((vertical) => ({ slug: vertical.slug }));
}

export async function generateMetadata({
  params,
}: VerticalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const vertical = getVerticalBySlug(slug);

  if (!vertical) {
    return {
      title: "Vertical not found | Microtarget",
    };
  }

  return {
    title: `${vertical.name} | Microtarget`,
    description: vertical.intro,
    openGraph: {
      title: `${vertical.name} | Microtarget`,
      description: vertical.intro,
      type: "website",
    },
  };
}

export default async function VerticalDetailPage({ params }: VerticalPageProps) {
  const { slug } = await params;
  const vertical = getVerticalBySlug(slug);

  if (!vertical) {
    notFound();
  }

  return (
    <main className="pb-20">
      <Section
        eyebrow="Vertical use case"
        title={vertical.name}
        description={vertical.promise}
      >
        <Container>
          <div className="space-y-5 rounded-3xl border border-border bg-surface p-6">
            <p className="text-base text-muted">{vertical.intro}</p>
            <div className="rounded-2xl border border-dashed border-border bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--fluor)]">
                Vertical overview video
              </p>
              <div className="relative mt-3 aspect-video overflow-hidden rounded-xl border border-border bg-surface">
                <Image
                  src="/placeholders/location-heatmap.svg"
                  alt={`${vertical.name} heatmap placeholder`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060a18]/80 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                  Video placeholder for {vertical.name}
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--fluor)]">
                Key decision questions
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {vertical.executiveQuestions.map((question) => (
                  <li key={question} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--fluor)]" />
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Request access/demo</Button>
              <Button href="/data-hub" variant="secondary">
                Explore related indicators
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        eyebrow="Cases"
        title="Case modules with decision-ready outputs"
        description="Case -> Description -> Common answered questions -> Value to client."
      >
        <Container>
          <div className="space-y-5">
            {vertical.cases.map((module, index) => (
              <article
                key={module.title}
                className="grid gap-5 rounded-3xl border border-border bg-surface p-5 lg:grid-cols-[0.95fr_1.05fr]"
                data-reveal
              >
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--fluor)]">
                    Case video
                  </p>
                  <video
                    className="aspect-video w-full rounded-2xl border border-border object-cover"
                    controls
                    preload="metadata"
                    poster={CASE_PLACEHOLDER_IMAGES[index % CASE_PLACEHOLDER_IMAGES.length]}
                  >
                    <source src="/demo.mp4" type="video/mp4" />
                  </video>
                  <p className="text-xs text-muted">
                    Replace with the case-specific short module video.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--fluor)]">
                      Case
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{module.title}</h3>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground">Description</p>
                    <p className="mt-1 text-sm text-muted">{module.description}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Common answered questions
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-muted">
                      {module.answeredQuestions.map((question) => (
                        <li key={question} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[var(--fluor)]" />
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground">Value to client</p>
                    <p className="mt-1 text-sm text-muted">{module.valueToClient}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        eyebrow="Related indicators"
        title="Connect this vertical to the Data Hub"
        description="Filter datasets by domain and download samples before your demo."
      >
        <Container>
          <div className="space-y-5 rounded-3xl border border-border bg-surface p-6">
            <div className="flex flex-wrap gap-3">
              {vertical.relatedCategories.map((category) => (
                <Link
                  key={category}
                  href={`/data-hub?category=${category}`}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:border-[var(--fluor)] hover:text-[var(--fluor)]"
                >
                  {categoryLabels[category]}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Book a tailored demo</Button>
              <Button href="/verticals" variant="secondary">
                Back to all verticals
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
