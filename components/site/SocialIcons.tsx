import { Linkedin, Twitter } from "lucide-react";

type SocialIconsProps = {
  className?: string;
};

export default function SocialIcons({ className }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-3 text-sm text-[var(--color-muted)] ${className ?? ""}`}>
      <a
        aria-label="LinkedIn"
        href="https://www.linkedin.com"
        className="rounded-full border border-transparent p-2 transition hover:border-[var(--color-border)] hover:text-[var(--color-accent-strong)]"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        aria-label="X"
        href="https://x.com"
        className="rounded-full border border-transparent p-2 transition hover:border-[var(--color-border)] hover:text-[var(--color-accent-strong)]"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter className="h-4 w-4" />
      </a>
    </div>
  );
}
