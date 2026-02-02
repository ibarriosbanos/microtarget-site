import type { ReactNode } from "react";

type IconCircleProps = {
  icon: ReactNode;
  className?: string;
};

export default function IconCircle({ icon, className }: IconCircleProps) {
  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)] ${className ?? ""}`}
    >
      {icon}
    </div>
  );
}
