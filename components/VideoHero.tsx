"use client";

import { useRef, useState } from "react";
import Button from "./Button";
import ChatMapMock from "./ChatMapMock";
import Container from "./Container";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  const handleWatch = () => {
    const video = videoRef.current;
    if (!video) return;
    video.scrollIntoView({ behavior: "smooth", block: "center" });
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => setVideoError(true));
    }
  };

  return (
    <section className="pt-12 sm:pt-16" id="top">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--fluor)]">
              Better location based decisions
            </p>
            <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
              Micro territory indicators shaping demand across sectors in Spain.
            </h1>
            <p className="max-w-xl text-base text-muted sm:text-lg">
              Work at 100 meter grid detail and roll up to road segments, buildings,
              census tracts, postcodes, or municipalities. Built for consistent coverage
              across the whole of Spain.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleWatch}>Watch the demo</Button>
              <Button href="/data-hub?sample=1#demo-sample" variant="secondary">
                Get a sample
              </Button>
            </div>
          </div>
          <div className="space-y-4" data-reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-4 shadow-lg">
              <video
                ref={videoRef}
                className="h-auto w-full rounded-2xl"
                controls
                preload="metadata"
                poster="/mock-map.png"
                onError={() => setVideoError(true)}
              >
                <source src="/demo.mp4" type="video/mp4" />
              </video>
              {videoError && (
                <div className="mt-3 rounded-xl border border-dashed border-border bg-background px-4 py-3 text-sm text-muted">
                  Demo video placeholder. Replace /public/demo.mp4 with the real demo.
                </div>
              )}
            </div>
            <ChatMapMock />
          </div>
        </div>
      </Container>
    </section>
  );
}
