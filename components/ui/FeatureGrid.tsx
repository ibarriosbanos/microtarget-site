import type { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon?: ReactNode;
};

type FeatureGridProps = {
  items: Feature[];
};

export default function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.4)]"
        >
          {item.icon && <div className="mb-4">{item.icon}</div>}
          <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--color-muted)]">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
