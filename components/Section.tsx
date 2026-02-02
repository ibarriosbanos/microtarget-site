import type { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className ?? ""}`.trim()}>
      <div className="space-y-6">
        {(eyebrow || title || description) && (
          <Container>
            <div className="space-y-3">
              {eyebrow && (
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--fluor)]">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                  {title}
                </h2>
              )}
              {description && (
                <p className="max-w-2xl text-base text-muted sm:text-lg">
                  {description}
                </p>
              )}
            </div>
          </Container>
        )}
        {children}
      </div>
    </section>
  );
}
