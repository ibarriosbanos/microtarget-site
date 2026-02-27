"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type PromptItem = {
  vertical: string;
  question: string;
  response: string;
  mapImage: string;
  layers: string[];
};

const PROMPTS: PromptItem[] = [
  {
    vertical: "Retail",
    question: "Where should we open next -- and what is the revenue case by micro-zone?",
    response:
      "Top opportunity clusters are concentrated around high-centrality mixed-use zones. The strongest candidate combines unmet demand, lower competitor pressure, and better access.",
    mapImage: "/placeholders/location-heatmap.svg",
    layers: ["Demand intensity", "Competitor pressure", "Access score"],
  },
  {
    vertical: "Mobility & Smart Cities",
    question: "Where is demand concentrating -- and where are the service gaps?",
    response:
      "Peak movement is shifting toward two corridor bands with recurring service friction. Priority interventions should focus on coverage gaps near transfer-heavy micro-zones.",
    mapImage: "/placeholders/demand-flow.svg",
    layers: ["Flow corridors", "Service gap index", "Congestion signals"],
  },
  {
    vertical: "Tourism",
    question: "Which areas will absorb visitor pressure next season -- and when?",
    response:
      "Visitor pressure is projected to intensify in three high-attraction pockets. Early capacity activation in adjacent zones reduces peak stress while preserving service quality.",
    mapImage: "/placeholders/coverage-zones.svg",
    layers: ["Seasonal demand", "Capacity risk", "Spillover zones"],
  },
  {
    vertical: "Last Mile Delivery",
    question: "How should we redraw delivery zones to hit SLA during peak demand?",
    response:
      "Current zone boundaries create overload in edge clusters during peaks. A revised split with one additional micro-fulfillment node improves SLA resilience and reduces failed drops.",
    mapImage: "/placeholders/location-heatmap.svg",
    layers: ["SLA breach risk", "Peak load", "Route friction"],
  },
];

type AnimationStage = "typingQuestion" | "thinking" | "typingResponse" | "done";

export default function ChatMapMock() {
  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [typedQuestion, setTypedQuestion] = useState("");
  const [typedResponse, setTypedResponse] = useState("");
  const [stage, setStage] = useState<AnimationStage>("typingQuestion");

  const activePrompt = PROMPTS[activePromptIndex];

  useEffect(() => {
    let cancelled = false;
    const timeoutIds: ReturnType<typeof setTimeout>[] = [];

    const schedule = (fn: () => void, ms: number) => {
      const timeoutId = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timeoutIds.push(timeoutId);
    };

    const typeText = (
      text: string,
      setText: (value: string) => void,
      speed: number,
      onDone: () => void,
    ) => {
      let charIndex = 0;
      const tick = () => {
        charIndex += 1;
        setText(text.slice(0, charIndex));
        if (charIndex < text.length) {
          schedule(tick, speed);
          return;
        }
        onDone();
      };
      schedule(tick, speed);
    };

    schedule(() => {
      setTypedQuestion("");
      setTypedResponse("");
      setStage("typingQuestion");
    }, 0);

    typeText(activePrompt.question, setTypedQuestion, 22, () => {
      setStage("thinking");
      schedule(() => {
        setStage("typingResponse");
        typeText(activePrompt.response, setTypedResponse, 14, () => {
          setStage("done");
          schedule(() => {
            setActivePromptIndex((current) => (current + 1) % PROMPTS.length);
          }, 2600);
        });
      }, 900);
    });

    return () => {
      cancelled = true;
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [activePromptIndex, activePrompt.question, activePrompt.response]);

  return (
    <div className="grid gap-4 rounded-3xl border border-border bg-background p-4 sm:grid-cols-[1fr_1.2fr]">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fluor)]">
          Ask the map
        </p>

        <div className="rounded-2xl border border-border bg-surface p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            {activePrompt.vertical}
          </p>
          <div className="mt-2 min-h-[64px] text-sm font-semibold text-foreground">
            {typedQuestion}
            {stage === "typingQuestion" && (
              <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-[var(--fluor)] align-middle" />
            )}
          </div>
          <p className="mt-2 text-xs text-muted">Querying micro-territory indicators...</p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Map assistant
          </p>
          <div className="mt-2 min-h-[92px] text-sm text-foreground">
            {stage === "thinking" && typedResponse.length === 0 && (
              <p className="text-sm text-muted">Analyzing layers and generating response...</p>
            )}
            {typedResponse}
            {stage === "typingResponse" && (
              <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-[var(--fluor)] align-middle" />
            )}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fluor)]">
          Generated map preview
        </p>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="relative aspect-video">
            <Image
              key={activePrompt.mapImage}
              src={activePrompt.mapImage}
              alt={`${activePrompt.vertical} generated map preview`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060a18]/85 via-transparent to-transparent" />
            <p className="absolute left-3 top-3 rounded-full border border-border/70 bg-background/80 px-2 py-1 text-[11px] font-semibold text-foreground">
              AI map generation
            </p>
            <p className="absolute bottom-3 left-3 text-sm font-semibold text-white">
              {stage === "thinking" || stage === "typingResponse"
                ? "Rendering updated layer..."
                : "Layer update complete"}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {activePrompt.layers.map((layer) => (
            <span
              key={layer}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted"
            >
              {layer}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
