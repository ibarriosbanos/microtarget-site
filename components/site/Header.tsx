"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import SocialIcons from "./SocialIcons";

type HeaderProps = {
  lang: string;
};

const navItems = [
  { label: "Market microdata", path: "market-microdata" },
  { label: "Map", path: "map" },
  { label: "Data Access", path: "data-access" },
  { label: "Use cases", path: "use-cases" },
  { label: "Contact us", path: "contact" },
  { label: "Some of our customers", path: "customers" },
  { label: "Access to demos", path: "demos" },
];

const externalLinks = [
  { label: "Blog", href: "https://www.unica360.com" },
  { label: "About us", href: "https://www.unica360.com" },
];

export default function Header({ lang }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-accent-strong)] text-sm font-bold text-white">
            MT
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-[var(--color-foreground)]">
              Microtarget
            </p>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Unica Analytics
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--color-muted)] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={`/${lang}/${item.path}`}
              className="transition hover:text-[var(--color-accent-strong)]"
            >
              {item.label}
            </Link>
          ))}
          {externalLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-[var(--color-accent-strong)]"
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <SocialIcons />
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <SocialIcons />
          <button
            className="rounded-full border border-[var(--color-border)] p-2"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur">
          <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[var(--color-foreground)]">
                Navigation
              </p>
              <button
                className="rounded-full border border-[var(--color-border)] p-2"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-4 text-sm font-medium text-[var(--color-foreground)]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={`/${lang}/${item.path}`}
                  className="rounded-xl border border-transparent px-3 py-2 transition hover:border-[var(--color-border)] hover:bg-[var(--color-accent-soft)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {externalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-xl border border-transparent px-3 py-2 transition hover:border-[var(--color-border)] hover:bg-[var(--color-accent-soft)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
