import { ActionLink } from "../components/ui/ActionLink";

export function NotFound() {
  return (
    <div className="panel mx-auto max-w-2xl p-9 text-center">
      <p className="system-label">Error 404</p>
      <h1 className="mt-5 text-4xl font-semibold text-slate-50">Module not found.</h1>
      <p className="mt-4 text-slate-400">The requested route is not registered in this portfolio.</p>
      <div className="mt-7"><ActionLink href="/" variant="primary">Return home</ActionLink></div>
    </div>
  );
}
