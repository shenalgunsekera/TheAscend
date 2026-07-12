import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Compass, Heart } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Ascend was founded on the belief that sustainable organizational transformation begins with people.",
};

const pillars = [
  {
    icon: Eye,
    title: "Our Vision",
    body: "Transforming people, elevating performance, and shaping the future.",
  },
  {
    icon: Compass,
    title: "Our Mission",
    body: "We help organisations grow by unlocking talent, building strong leaders, and creating engaging learning experiences that drive lasting results.",
  },
  {
    icon: Heart,
    title: "Our Belief",
    body: "Sustainable organizational transformation begins with people. When people grow, organizations ascend.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About The Ascend"
        title={
          <>
            A story of purpose, passion, and <em className="text-dawn-400 italic">proven results</em>
          </>
        }
        lede="Helping leaders and teams thrive in a complex world."
        image={img.openOffice}
        imageAlt="A team collaborating in an open office"
      />

      {/* Our story */}
      <section className="section-pad-loose">
        <div className="container-asc grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col items-start gap-6">
            <SectionHeading
              kicker="Our story"
              title={
                <>
                  A story that is still{" "}
                  <em className="text-summit-600 italic">being written</em>
                </>
              }
            />
            <Reveal kind="up" delay={0.15} as="p">
              <span className="text-[1.05rem] leading-relaxed text-ink-soft">
                The Ascend was founded on the belief that sustainable
                organizational transformation begins with people. Though our
                story is still being written, it is one of purpose, passion,
                and proven results in helping leaders and teams thrive in a
                complex world.
              </span>
            </Reveal>
          </div>
          <Reveal kind="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-(--shadow-lg)">
              <Image
                src={img.meetingGolden}
                alt="A team taking notes together around a meeting table"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision / Mission / Belief */}
      <section className="section-pad bg-surface">
        <div className="container-asc">
          <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.12}>
            {pillars.map((p) => (
              <RevealItem key={p.title} kind="up" as="article">
                <div className="flex h-full flex-col gap-4 rounded-3xl bg-white p-8 shadow-(--shadow-sm) transition-all duration-500 hover:-translate-y-1 hover:shadow-(--shadow-md)">
                  <span className="grid size-12 place-items-center rounded-full bg-summit-50 text-summit-600">
                    <p.icon className="size-5" strokeWidth={1.8} aria-hidden />
                  </span>
                  <h2 className="font-display text-2xl tracking-tight text-ink">{p.title}</h2>
                  <p className="leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-pad-loose overflow-hidden">
        <div className="container-asc grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal kind="left" className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-(--shadow-lg)">
              <Image
                src={img.teamAbove}
                alt="A team working together around a shared table"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
          </Reveal>
          <div className="order-1 flex flex-col items-start gap-6 lg:order-2">
            <SectionHeading
              kicker="Why choose us"
              title={
                <>
                  Built on insight, measured by{" "}
                  <em className="text-summit-600 italic">impact</em>
                </>
              }
            />
            <Reveal kind="up" delay={0.15} as="p">
              <span className="text-[1.05rem] leading-relaxed text-ink-soft">
                We deliver customized talent solutions aligned with your
                business goals, combining insight-driven strategies that focus
                on measurable impact. With deep expertise in leadership, HR,
                and organizational development, we bring a strong foundation of
                experience to every engagement.
              </span>
            </Reveal>
            <Reveal kind="up" delay={0.22} as="p">
              <span className="text-[1.05rem] leading-relaxed text-ink-soft">
                Our work is guided by a passion for building inclusive,
                engaged, and high-performing workplaces where both people and
                organizations can thrive.
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
