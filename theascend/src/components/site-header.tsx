"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const links = [...nav, { href: "/#contact", label: "Inquiries" }];

/**
 * One floating dark-glass pill: brand lockup on the left, links beside it.
 * Collapses to logo + round menu button with a full-screen overlay on mobile.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : href.startsWith("/#") ? false : pathname.startsWith(href);

  const setMenu = (next: boolean) => {
    setOpen(next);
    document.documentElement.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.9, ease: EASE }}
        className="fixed inset-x-0 top-0 z-[600] flex justify-center max-lg:px-3"
      >
        {/* Tab hanging from the top edge: flat top, rounded bottom corners */}
        <div className="flex w-full max-w-fit items-center gap-2 rounded-b-2xl border border-t-0 border-white/10 bg-summit-950/85 py-1 pr-2 pl-5 shadow-(--shadow-lg) backdrop-blur-xl max-lg:w-full max-lg:max-w-none max-lg:justify-between max-lg:py-1.5 max-lg:pr-2.5 sm:pl-7">
          <Link href="/" aria-label="The Ascend home page" className="block py-1">
            <Logo onDark textClass="text-[1.15rem] lg:text-[1.02rem]" />
          </Link>

          {/* Desktop links */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="ml-6 flex items-center">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "relative block rounded-lg px-3.5 py-2 text-[0.9rem] font-medium whitespace-nowrap transition-colors duration-300",
                      isActive(item.href)
                        ? "text-white"
                        : "text-mist-soft hover:bg-white/8 hover:text-white",
                    )}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span
                        aria-hidden
                        className="absolute inset-x-3.5 bottom-0.5 h-0.5 rounded-full bg-(image:--grad-dawn)"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenu(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-[590] flex flex-col justify-center bg-summit-950/97 px-8 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-2">
                {links.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.08 + i * 0.06, ease: EASE }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenu(false)}
                      className={cn(
                        "font-display block py-2 text-4xl tracking-tight transition-colors",
                        isActive(item.href) ? "text-dawn-400" : "text-white hover:text-dawn-300",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
