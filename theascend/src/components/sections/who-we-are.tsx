import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { img } from "@/lib/site";

/** Split editorial section: layered photos left, manifesto right. */
export function WhoWeAre() {
  return (
    <section className="section-pad-loose overflow-hidden">
      <div className="container-asc grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        {/* Layered images */}
        <div className="relative">
          <Reveal kind="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-(--shadow-lg)">
              <Image
                src={img.teamLaughing}
                alt="Colleagues laughing together while working around a shared table"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
          </Reveal>
          <Reveal kind="scale" delay={0.25} className="absolute -right-4 -bottom-10 w-[46%] sm:-right-8">
            <div className="relative aspect-square overflow-hidden rounded-2xl border-4 border-bg shadow-(--shadow-lg)">
              <Image
                src={img.teamTable}
                alt="Team members reviewing work together"
                fill
                sizes="(min-width: 1024px) 20vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Copy */}
        <div className="flex flex-col items-start gap-6 pt-6 lg:pt-0">
          <Reveal kind="fade" as="span">
            <span className="kicker">Who we are</span>
          </Reveal>
          <Reveal kind="blur" as="h2">
            <span className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] tracking-tight text-ink">
              We see potential where others see{" "}
              <em className="text-summit-600 italic">possibility</em>.
            </span>
          </Reveal>
          <Reveal kind="up" delay={0.12} as="p">
            <span className="text-[1.05rem] leading-relaxed text-ink-soft">
              We are architects of human growth, passionate about shaping
              workplaces where people thrive, leaders inspire, and organizations
              rise beyond expectations. Through strategic talent solutions,
              transformative coaching, and people-centred innovation, we help
              businesses unlock the brilliance within their teams and turn
              ambition into meaningful impact.
            </span>
          </Reveal>
          <Reveal kind="up" delay={0.2} as="p">
            <span className="font-display text-lg text-ink italic">
              Because when people grow, organizations ascend.
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
