"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { boot } from "@/lib/boot";
import { Logo } from "@/components/logo";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Brand intro on every full page load: deep-summit curtain, wordmark settles
 * in, a giant counter surges to 100, then the curtain lifts to reveal the
 * page. The curtain is part of the server-rendered HTML so it is on screen
 * from the very first paint (no flash of the page before it). Reduced-motion
 * users never see it: CSS hides `.asc-loader` for them before hydration.
 */
export function PageLoader() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"loading" | "done">("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduce) {
      boot.done = true;
      const t = setTimeout(() => setPhase("done"), 0);
      return () => clearTimeout(t);
    }
    document.documentElement.style.overflow = "hidden";

    const start = performance.now();
    const DURATION = 1500;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      // ease-out-expo on the counter so it surges then settles
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          boot.done = true;
          setPhase("done");
        }, 240);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = "";
    };
  }, [reduce]);

  useEffect(() => {
    if (phase === "done") document.documentElement.style.overflow = "";
  }, [phase]);

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          key="loader"
          className="asc-loader fixed inset-0 z-[1000] flex flex-col justify-between overflow-hidden bg-(image:--grad-dark) p-[clamp(1.5rem,4vw,3rem)] text-white"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE_EXPO }}
        >
          {/* dawn spotlight from the top */}
          <div aria-hidden className="glow-dawn pointer-events-none absolute inset-x-0 top-0 h-1/2" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:26px_26px]"
          />

          {/* Logo — top left */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_EXPO }}
            className="relative pt-4 pl-1"
          >
            <Logo onDark className="h-12" />
          </motion.div>

          {/* Centre line */}
          <motion.p
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE_EXPO }}
            className="relative mx-auto max-w-md text-center text-sm font-medium tracking-[0.22em] text-mist-soft uppercase"
          >
            People transformation
          </motion.p>

          {/* Counter — bottom, subduxion-style giant number */}
          <div className="relative flex items-end justify-between gap-6">
            <div className="mb-3 h-px flex-1 overflow-hidden bg-white/15">
              <div
                className="h-full bg-dawn-500 transition-[width] duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="font-display text-[clamp(4rem,12vw,8.5rem)] leading-none font-medium tracking-tight tabular">
              {progress}
              <span className="text-[0.35em] text-mist-soft">%</span>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
