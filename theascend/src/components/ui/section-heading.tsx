import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/**
 * Section header: optional kicker, display title, optional lede.
 * `dark` flips tints for use on summit-900/950 bands.
 */
export function SectionHeading({
  kicker,
  title,
  lede,
  dark,
  align = "left",
  className,
}: {
  kicker?: string;
  title: ReactNode;
  lede?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {kicker && (
        <Reveal kind="fade" as="span">
          <span className={cn("kicker", dark && "kicker--dark")}>{kicker}</span>
        </Reveal>
      )}
      <Reveal kind="blur" as="h2">
        <span
          className={cn(
            "font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] tracking-tight",
            dark ? "text-white" : "text-ink",
          )}
        >
          {title}
        </span>
      </Reveal>
      {lede && (
        <Reveal kind="up" as="p" delay={0.12}>
          <span className={cn("text-[1.05rem] leading-relaxed", dark ? "text-mist-soft" : "text-ink-soft")}>
            {lede}
          </span>
        </Reveal>
      )}
    </div>
  );
}
