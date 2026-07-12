"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { img } from "@/lib/site";
import { heroDelay } from "@/lib/boot";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Hiei-style hero: an inset, rounded full-viewport photograph with a giant
 * display wordmark anchored bottom-left and the mission statement + CTA
 * bottom-right. Photo parallaxes on scroll; content drifts and fades out.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  // Entrances wait for the loader curtain on hard loads only.
  const T0 = heroDelay();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 110]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section ref={ref} className="relative p-[clamp(0.6rem,1.6vw,1.4rem)]">
      <div aria-hidden className="hero-fog absolute inset-0" />
      <div className="relative flex min-h-[calc(100svh-2rem)] flex-col overflow-hidden rounded-[clamp(1.2rem,3vw,2.2rem)] bg-summit-950 text-white">
        {/* ── Background photo, parallax via overscan ── */}
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <motion.div className="absolute inset-0 scale-[1.16]" style={{ y: photoY }}>
            <Image
              src={img.heroSummit}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-t from-summit-950/90 via-summit-950/25 to-summit-950/45" />
          <div className="absolute inset-0 [box-shadow:inset_0_0_160px_60px_oklch(16%_0.028_200_/_0.45)]" />
        </div>

        {/* ── Content ── */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 mt-auto flex flex-col gap-8 p-[clamp(1.4rem,4vw,3.5rem)] pb-[clamp(1.6rem,4vw,3rem)] lg:flex-row lg:items-end lg:justify-between lg:gap-16"
        >
          {/* Giant wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: T0, ease: EASE }}
            className="font-display text-[clamp(4.9rem,16vw,13rem)] leading-[0.9] tracking-[-0.03em] text-mist"
          >
            Ascend
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: T0 + 0.7, ease: EASE }}
              className="inline-block align-super text-[0.22em] text-dawn-400"
            >
              &nbsp;✦
            </motion.span>
          </motion.h1>

          {/* Mission + CTA */}
          <div className="flex max-w-md flex-col items-start gap-6 lg:pb-4">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: T0 + 0.25, ease: EASE }}
              className="text-[0.72rem] font-bold tracking-[0.24em] text-mist-soft uppercase lg:hidden"
            >
              Talent · Leadership · Culture
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: T0 + 0.35, ease: EASE }}
              className="border-l-2 border-dawn-500/70 pl-4 text-[clamp(1rem,1.4vw,1.15rem)] leading-relaxed text-mist lg:border-0 lg:pl-0"
            >
              <span className="text-white">Your partner for people transformation.</span>{" "}
              Shape your organization&rsquo;s future and let The Ascend align
              your talent with tomorrow&rsquo;s success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: T0 + 0.55, ease: EASE }}
              className="max-lg:w-full"
            >
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-pill bg-white py-2.5 pr-2.5 pl-7 font-semibold text-summit-900 transition-all duration-300 hover:bg-dawn-300 active:scale-[0.98] max-lg:w-full max-lg:justify-between max-lg:py-3 max-lg:text-lg"
              >
                Start the climb
                <span className="grid size-10 place-items-center rounded-full bg-summit-900 text-white transition-transform duration-500 group-hover:rotate-[-45deg] max-lg:size-11">
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: T0 + 1.1 }}
          aria-hidden
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
        >
          <span className="block h-10 w-px overflow-hidden bg-white/20">
            <motion.span
              animate={reduce ? undefined : { y: ["-100%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="block h-1/2 w-full bg-dawn-400"
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
