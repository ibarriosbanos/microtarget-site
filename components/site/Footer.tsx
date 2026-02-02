import Link from "next/link";

type FooterProps = {
  lang: string;
};

const footerLinks = [
  { label: "Privacy policy", href: "#" },
  { label: "Legal notice", href: "#" },
  { label: "Cookies policy", href: "#" },
  { label: "Social media privacy policy", href: "#" },
];

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <Link href={`/${lang}`} className="text-sm font-semibold text-[var(--color-foreground)]">
          Microtarget by Unica Analytics
        </Link>
        <div className="flex flex-wrap gap-4 text-xs font-medium uppercase tracking-wide text-[var(--color-muted)]">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-[var(--color-accent-strong)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
