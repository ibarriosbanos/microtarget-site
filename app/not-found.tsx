import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-muted md:text-base">
        The page you are looking for doesn&apos;t exist yet. Head back to the home page
        to explore Microtarget.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
      >
        Back to home
      </Link>
    </div>
  );
}
