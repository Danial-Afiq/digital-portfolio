import { Link } from "react-router-dom";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg hover:bg-accent-soft font-semibold",
  ghost:
    "border border-line-strong text-ink hover:border-accent hover:text-accent bg-surface/40",
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
};

/** Internal route link. */
export function ButtonLink({
  to,
  variant = "primary",
  children,
}: CommonProps & { to: string }) {
  return (
    <Link to={to} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}

/** External / download anchor. */
export function ButtonAnchor({
  href,
  variant = "primary",
  children,
  download,
  ...rest
}: CommonProps &
  ComponentPropsWithoutRef<"a"> & { href: string; download?: boolean }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      {...(download ? { download: "" } : {})}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
