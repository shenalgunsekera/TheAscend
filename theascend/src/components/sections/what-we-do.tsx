import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { services } from "@/lib/site";

/** Service cards with photography — the "plenty of pictures" beat. */
export function WhatWeDo() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-asc">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            kicker="What we do"
            title={
              <>
                High-performing teams,{" "}
                <em className="text-summit-600 italic">built deliberately</em>
              </>
            }
            lede="We create tailored solutions that strengthen leadership, enhance engagement, and transform workplace culture."
          />
          <Reveal kind="fade" delay={0.2}>
            <ButtonLink href="/services" variant="ghost">
              Find out more <ArrowUpRight className="size-4" aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4" stagger={0.1}>
          {services.map((s) => (
            <RevealItem key={s.slug} kind="up" as="article">
              <Link
                href={`/services#${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-(--shadow-sm) transition-all duration-500 hover:-translate-y-1.5 hover:shadow-(--shadow-lg)"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-summit-950/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-display text-xl tracking-tight text-ink">{s.title}</h3>
                  <p className="flex-1 text-[0.92rem] leading-relaxed text-ink-soft">{s.short}</p>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-summit-600">
                    Learn more
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
