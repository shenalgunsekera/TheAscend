import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { cn } from "@/lib/utils";
import { img, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Strategic talent management, leadership assessments, employee surveys, and learning management solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Our Services"
        title={
          <>
            Talent solutions, <em className="text-dawn-400 italic">tailored</em> to your goals
          </>
        }
        lede="We help organisations build high-performing teams through strategic talent management, leadership assessments, employee insights, and innovative learning solutions."
        image={img.teamLaptop}
        imageAlt="A diverse team gathered around a laptop"
      />

      {/* Alternating deep-dives */}
      {services.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={s.slug}
            id={s.slug}
            className={cn("section-pad overflow-hidden", flip && "bg-surface")}
          >
            <div className="container-asc grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal kind={flip ? "right" : "left"} className={cn(flip && "lg:order-2")}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-(--shadow-lg)">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                  <span className="font-display absolute top-5 left-5 grid size-12 place-items-center rounded-full bg-summit-950/80 text-lg text-dawn-400 backdrop-blur-sm tabular">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>

              <div className={cn("flex flex-col items-start gap-6", flip && "lg:order-1")}>
                <Reveal kind="blur" as="h2">
                  <span className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight text-ink">
                    {s.title}
                  </span>
                </Reveal>
                <Reveal kind="up" delay={0.12} as="p">
                  <span className="text-[1.02rem] leading-relaxed text-ink-soft">{s.pitch}</span>
                </Reveal>
                <RevealGroup as="ul" className="flex flex-col gap-2.5" stagger={0.06} delayChildren={0.15}>
                  {s.offers.map((offer) => (
                    <RevealItem key={offer} kind="left" as="li">
                      <span className="flex items-start gap-3">
                        <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-summit-50">
                          <Check className="size-3 text-summit-600" strokeWidth={3} aria-hidden />
                        </span>
                        <span className="text-[0.98rem] text-ink">{offer}</span>
                      </span>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand
        title="Ready to elevate your people and performance?"
        body="Whether you're rethinking your talent strategy, developing your leaders, or building a learning culture, we're here to support you every step of the way."
      />
    </>
  );
}
