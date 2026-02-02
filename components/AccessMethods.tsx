import Button from "./Button";

const METHODS = [
  {
    title: "API",
    description: "Connect Microtarget indicators to your tools with an API key.",
    cta: "Request API access",
    topic: "API access",
  },
  {
    title: "Product tables",
    description: "Receive ready-to-join tables for your analytics stack.",
    cta: "Get tables",
    topic: "Tables delivery",
  },
  {
    title: "Location Intelligence app",
    description: "Work in a custom online application built for decisions.",
    cta: "See the app",
    topic: "Location Intelligence app",
  },
  {
    title: "Consulting",
    description: "Integrate indicators into your own models and workflows.",
    cta: "Talk to experts",
    topic: "Consulting",
  },
];

export default function AccessMethods() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {METHODS.map((method) => (
        <div
          key={method.title}
          className="flex flex-col justify-between rounded-3xl border border-border bg-surface p-6 transition hover:border-[var(--fluor)] hover:shadow-[0_0_26px_rgba(124,255,79,0.2)]"
        >
          <div>
            <div className="h-1 w-10 rounded-full bg-[var(--fluor)] shadow-[0_0_10px_rgba(124,255,79,0.6)]" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">{method.title}</h3>
            <p className="mt-2 text-sm text-muted">{method.description}</p>
          </div>
          <Button
            href={`/contact?topic=${encodeURIComponent(method.topic)}`}
            variant="secondary"
            size="sm"
            className="mt-6 w-fit"
          >
            {method.cta}
          </Button>
        </div>
      ))}
    </div>
  );
}
