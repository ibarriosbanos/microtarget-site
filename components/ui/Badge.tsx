import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-strong)] ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
