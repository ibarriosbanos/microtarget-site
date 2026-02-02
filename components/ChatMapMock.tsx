import Image from "next/image";

export default function ChatMapMock() {
  return (
    <div className="grid gap-4 rounded-3xl border border-border bg-background p-4 sm:grid-cols-[1fr_1.2fr]">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fluor)]">
          Ask the map
        </p>
        <div className="rounded-2xl border border-border bg-surface p-3">
          <div className="text-sm font-semibold text-foreground">"Where should we open next?"</div>
          <p className="mt-2 text-xs text-muted">
            The map answers with micro territory indicators.
          </p>
        </div>
        <Image
          src="/mock-chat.png"
          alt="Chat interface mock"
          width={320}
          height={220}
          className="rounded-2xl border border-border"
        />
      </div>
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fluor)]">
          Map preview
        </p>
        <Image
          src="/mock-map.png"
          alt="Map preview mock"
          width={420}
          height={300}
          className="h-full w-full rounded-2xl border border-border object-cover"
        />
      </div>
    </div>
  );
}
