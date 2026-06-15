/**
 * Resolve a path inside /public against the configured base path
 * (e.g. "/" locally, "/digital-portfolio/" on GitHub Pages).
 * Pass paths without a leading slash, e.g. asset("images/portrait.jpg").
 */
export function asset(path?: string): string | undefined {
  if (!path) return undefined;
  const base = import.meta.env.BASE_URL; // always ends with "/"
  return base + path.replace(/^\/+/, "");
}
