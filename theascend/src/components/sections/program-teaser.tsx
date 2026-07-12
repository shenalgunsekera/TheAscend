import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { img, program } from "@/lib/site";

/** Dark band introducing the Signature Leadership Program with its 5 phases. */
export function ProgramTeaser() {
  return (
    <section className="relative section-pad-loose overflow-hidden bg-summit-950 text-white">
      {/* Backdrop photo, heavily veiled */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src={img.conferenceDark}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-b from-summit-950 via-summit-950/60 to-summit-950" />
      </div>
      <div aria-hidden className="glow-dawn pointer-events-none absolute inset-x-0 top-0 h-1/2" />

      <div className="container-asc relative">
        <SectionHeading
          dark
          align="center"
          kicker="Our Signature Program"
          title={
            <>
              Learning journeys that{" "}
              <em className="text-dawn-400 italic">outlast the workshop</em>
            </>
          }
          lede="These are not one-off workshops. They are immersive learning experiences that align talent development with business goals and deliver results that last."
        />

        {/* Phase timeline */}
        <RevealGroup className="mt-16 grid gap-4 md:grid-cols-5" stagger={0.12}>
          {program.phases.map((p) => (
            <RevealItem key={p.step} kind="up" as="article">
              <div className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-500 hover:border-dawn-500/40 hover:bg-white/10">
                <span className="font-display text-3xl text-dawn-400 tabular">{p.step}</span>
                <h3 className="font-display text-lg tracking-tight text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-mist-soft">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal kind="up" delay={0.2} className="mt-12 flex justify-center">
          <ButtonLink href="/program" variant="onDark" size="lg">
            Explore the program <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
