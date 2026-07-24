import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Official "The Ascend" logo lockup (swoosh + wordmark). Two supplied colour
 * options: charcoal wordmark for light surfaces, white wordmark for dark.
 * Caller sets the height via `className` (e.g. "h-7"); width stays auto.
 */
export function Logo({
  onDark = false,
  className,
  priority = false,
}: {
  onDark?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={onDark ? "/logo-white.png" : "/logo-dark.png"}
      alt="The Ascend"
      width={983}
      height={380}
      priority={priority}
      className={cn("w-auto", className)}
    />
  );
}
