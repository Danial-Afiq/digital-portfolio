import type { ComponentType, ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

type ActionLinkProps = {
  children: ReactNode;
  href?: string;
  icon?: ComponentType<{ size?: number; "aria-hidden"?: boolean }>;
  variant?: "primary" | "secondary" | "quiet";
  external?: boolean;
  className?: string;
};

const variants = {
  primary: "border-emerald-300/60 bg-emerald-300 text-slate-950 hover:bg-emerald-200",
  secondary: "border-slate-600 bg-slate-900/70 text-slate-100 hover:border-emerald-300/50 hover:text-emerald-200",
  quiet: "border-transparent bg-transparent text-slate-300 hover:text-emerald-200",
};

export function ActionLink({
  children,
  href,
  icon: Icon,
  variant = "secondary",
  external = false,
  className = "",
}: ActionLinkProps) {
  const styles = `inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wide transition ${variants[variant]} ${className}`;

  if (!href) {
    return (
      <span className={`${styles} cursor-not-allowed opacity-45`} title="TODO: add link">
        {Icon && <Icon size={15} aria-hidden />}
        {children}
        <span className="text-[9px]">TODO</span>
      </span>
    );
  }

  if (external) {
    return (
      <a className={styles} href={href} target="_blank" rel="noreferrer">
        {Icon && <Icon size={15} aria-hidden />}
        {children}
        <ExternalLink size={13} aria-hidden />
      </a>
    );
  }

  return (
    <Link className={styles} to={href}>
      {Icon && <Icon size={15} aria-hidden />}
      {children}
    </Link>
  );
}
