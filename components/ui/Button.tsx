import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent-strong)] text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md",
  secondary:
    "border border-[var(--color-foreground)]/15 bg-white text-[var(--color-foreground)] hover:bg-[var(--color-accent-soft)]",
  ghost: "text-[var(--color-accent-strong)] hover:bg-[var(--color-accent-soft)]",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className ?? ""}`}
      {...props}
    />
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]} ${className ?? ""}`}>
      {children}
    </Link>
  );
}
