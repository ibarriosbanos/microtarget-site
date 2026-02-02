import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-foreground">Microtarget</p>
          <div className="text-sm text-muted">
            <p>Carrer Calàbria 242, 08029 Barcelona</p>
            <p>+34 659 88 90 32</p>
            <p>info@unica360.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm font-semibold text-muted">
          <Link href="/privacy" className="transition hover:text-foreground">
            Privacy
          </Link>
          <Link href="/contact" className="transition hover:text-foreground">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
