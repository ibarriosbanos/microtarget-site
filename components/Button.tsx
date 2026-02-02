import type { ButtonHTMLAttributes } from "react";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border-accent bg-accent text-white shadow-[0_0_24px_rgba(31,107,255,0.35)] hover:border-accent-strong hover:bg-accent-strong",
  secondary:
    "border-border bg-surface text-foreground hover:border-accent hover:text-accent",
  ghost:
    "border-transparent text-foreground hover:text-accent hover:shadow-[0_0_20px_rgba(124,255,79,0.35)]",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "text-xs px-4 py-1.5",
  md: "text-sm px-5 py-2",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    className ?? ""
  }`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
