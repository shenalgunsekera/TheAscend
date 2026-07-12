import { cn } from "@/lib/utils";

/**
 * Brand lockup rebuilt in code from the logo file: "The Ascend" wordmark with
 * the blue → teal → green swoosh rising off the end. Rendering it as SVG +
 * text keeps it crisp at any size and lets the wordmark switch to white on
 * dark surfaces (the source file's charcoal type is illegible on navy).
 */
export function Logo({
  onDark = false,
  className,
  textClass = "text-[1.15rem]",
  swooshClass = "h-[1.15em] w-auto",
}: {
  onDark?: boolean;
  className?: string;
  textClass?: string;
  swooshClass?: string;
}) {
  return (
    <span className={cn("relative inline-flex items-baseline whitespace-nowrap", className)}>
      <span
        className={cn(
          "font-sans leading-none font-medium tracking-[0.01em]",
          onDark ? "text-white" : "text-ink",
          textClass,
        )}
      >
        The&thinsp;Ascend
      </span>
      <svg
        viewBox="0 0 100 58"
        aria-hidden
        className={cn("absolute -top-[0.62em] right-[0.1em]", swooshClass)}
      >
        <defs>
          <linearGradient id="asc-swoosh" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#2b3990" />
            <stop offset="0.55" stopColor="#1f8fbf" />
            <stop offset="1" stopColor="#7cc98f" />
          </linearGradient>
        </defs>
        <path d="M0 46 C30 40 62 26 96 0 C74 30 38 46 0 46 Z" fill="url(#asc-swoosh)" />
        <path d="M8 52 C36 48 64 38 88 16 C70 42 40 52 8 52 Z" fill="url(#asc-swoosh)" opacity="0.92" />
        <path d="M16 57 C40 55 62 49 78 36 C64 54 40 57 16 57 Z" fill="url(#asc-swoosh)" opacity="0.85" />
      </svg>
    </span>
  );
}
