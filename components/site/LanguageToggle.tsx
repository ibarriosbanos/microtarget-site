"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const locales = ["en", "es"] as const;

export default function LanguageToggle() {
  const pathname = usePathname();
  const current = pathname?.split("/")[1] ?? "en";
  const nextLocale = current === "en" ? "es" : "en";
  const targetPath = pathname?.replace(`/${current}`, `/${nextLocale}`) ?? `/${nextLocale}`;

  return (
    <div className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-2 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
      {locales.map((locale) => {
        const isActive = current === locale;
        const href = pathname?.replace(`/${current}`, `/${locale}`) ?? `/${locale}`;
        return (
          <Link
            key={locale}
            href={href}
            className={`rounded-full px-2 py-1 transition ${
              isActive ? "bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)]" : ""
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {locale}
          </Link>
        );
      })}
      <span className="sr-only">Switch language</span>
      <Link href={targetPath} className="sr-only">
        Toggle language
      </Link>
    </div>
  );
}
