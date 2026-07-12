import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "onDark" | "ghost" | "onDarkGhost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-tight transition-all duration-300 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-summit-800 text-white hover:bg-summit-700 hover:shadow-(--shadow-md) active:scale-[0.98]",
  onDark:
    "bg-white text-summit-900 hover:bg-dawn-300 active:scale-[0.98]",
  ghost:
    "border border-line-strong text-ink hover:border-summit-600 hover:text-summit-700 active:scale-[0.98]",
  onDarkGhost:
    "border border-white/30 text-white hover:border-white/70 hover:bg-white/10 active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
}) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
