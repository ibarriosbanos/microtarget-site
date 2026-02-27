import Link from "next/link";
import Container from "./Container";
import DarkModeToggle from "./DarkModeToggle";
import Button from "./Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white shadow-[0_0_24px_rgba(31,107,255,0.45)]">
            M
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-foreground">Microtarget</p>
            <p className="text-xs text-muted">Better location based decisions</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
          <Link href="/#use-cases" className="transition hover:text-foreground">
            Decisions
          </Link>
          <Link href="/verticals" className="transition hover:text-foreground">
            Verticals
          </Link>
          <Link href="/data-hub" className="transition hover:text-foreground">
            Data Hub
          </Link>
          <Link href="/contact" className="transition hover:text-foreground">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <Button href="/contact" variant="secondary" size="sm" className="hidden sm:inline-flex">
            Talk to us
          </Button>
        </div>
      </Container>
    </header>
  );
}
