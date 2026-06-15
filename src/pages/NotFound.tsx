import { Link } from "react-router-dom";
import { Container } from "../components/layout/PageShell";

export function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink">Page not found</h1>
      <p className="mt-2 text-ink-soft">That route doesn't exist (or moved).</p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-bg hover:bg-accent-soft"
      >
        Back home
      </Link>
    </Container>
  );
}
