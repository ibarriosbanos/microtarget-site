import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
