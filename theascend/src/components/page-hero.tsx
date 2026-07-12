"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { heroDelay } from "@/lib/boot";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Inner-page hero: shorter inset rounded photograph with kicker + display
 * title, parallaxing gently on scroll. Shares the Hiei-style inset frame
 * with the home hero so every page opens with the same signature.
 */
export function PageHero({
  kicker,
  title,
  lede,
  image,
  imageAlt = "",
}: {
  kicker: string;
  title: ReactNode;
  lede?: string;
  image: string;
  imageAlt?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  // Entrances wait for the loader curtain on hard loads only.
  const T0 = heroDelay();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);

  return (
    <section ref={ref} className="relative p-[clamp(0.6rem,1.6vw,1.4rem)]">
      <div aria-hidden className="hero-fog absolute inset-0" />
      <div className="relative flex min-h-[62svh] flex-col justify-end overflow-hidden rounded-[clamp(1.2rem,3vw,2.2rem)] bg-summit-950 text-white">
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <motion.div className="absolute inset-0 scale-[1.14]" style={{ y: photoY }}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-t from-summit-950/90 via-summit-950/30 to-summit-950/40" />
        </div>

        <div className="relative z-10 flex flex-col items-start gap-5 p-[clamp(1.4rem,4vw,3.5rem)] pt-32">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: T0, ease: EASE }}
            className="kicker kicker--dark"
          >
            {kicker}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: T0 + 0.12, ease: EASE }}
            className="font-display max-w-4xl text-[clamp(2.4rem,6.5vw,4.8rem)] leading-[1.02] tracking-[-0.02em]"
          >
            {title}
          </motion.h1>
          {lede && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: T0 + 0.3, ease: EASE }}
              className="max-w-xl text-[1.05rem] leading-relaxed text-mist"
            >
              {lede}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
