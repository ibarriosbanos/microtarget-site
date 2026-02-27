import Link from "next/link";
import { verticals } from "@/content/verticals";

type VerticalsGridProps = {
  layout?: "compact" | "large";
};

export default function VerticalsGrid({ layout = "compact" }: VerticalsGridProps) {
  const isLarge = layout === "large";

  return (
    <div className={isLarge ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"}>
      {verticals.map((vertical) => (
        <Link
          key={vertical.slug}
          href={`/verticals/${vertical.slug}`}
          className={`group border border-border bg-surface transition hover:border-[var(--fluor)] hover:shadow-[0_0_24px_rgba(124,255,79,0.18)] ${
            isLarge ? "rounded-3xl p-6" : "rounded-2xl p-4"
          }`}
        >
          <div className="h-1 w-10 rounded-full bg-[var(--fluor)] shadow-[0_0_10px_rgba(124,255,79,0.6)]" />
          <p className="mt-3 text-sm font-semibold text-foreground">{vertical.name}</p>
          <p className="mt-2 text-sm text-muted">{vertical.tagline}</p>
          {isLarge && <p className="mt-3 text-sm text-muted">{vertical.promise}</p>}
          <p className="mt-4 text-sm font-semibold text-[var(--fluor)] group-hover:text-foreground">
            Explore vertical
          </p>
        </Link>
      ))}
    </div>
  );
}
