import type { Metadata } from "next";
import Image from "next/image";
import { TrendingUp, Users, Target, Sparkles, BookOpen, Layers, MessagesSquare, FolderKanban, Brain } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { img, program } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Signature Program",
  description:
    "The Ascend Signature Leadership Program: customised, end-to-end learning journeys built for retention, application, and measurable impact.",
};

const impactIcons = [TrendingUp, Users, Target, Sparkles];

const interventionIcons = [BookOpen, Layers, MessagesSquare, FolderKanban, Brain];

export default function ProgramPage() {
  return (
    <>
      <PageHero
        kicker="Our Signature Program"
        title={
          <>
            The Ascend Signature <em className="text-dawn-400 italic">Leadership Program</em>
          </>
        }
        lede="Customised, end-to-end learning experiences that are strategic for the business, relevant to the team, and transformational for every learner."
        image={img.lectureHall}
        imageAlt="Speakers in front of a full lecture hall"
      />

      {/* Intro + impact */}
      <section className="section-pad-loose">
        <div className="container-asc grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="flex flex-col items-start gap-6">
            <SectionHeading
              kicker="The approach"
              title={
                <>
                  Immersive journeys, not <em className="text-summit-600 italic">one-off training</em>
                </>
              }
            />
            <Reveal kind="up" delay={0.12} as="p">
              <span className="text-[1.05rem] leading-relaxed text-ink-soft">
                We begin by understanding your organisation&rsquo;s strategy,
                culture, and people. From there we create tailored learning pathways
                that build role-relevant skills, reinforce high-performance
                behaviours, and drive measurable workplace impact. Whether
                developing leaders, enhancing functional capability, or
                transforming teams, these immersive learning journeys align
                talent development with business goals.
              </span>
            </Reveal>
          </div>

          <div>
            <Reveal kind="fade" as="p" className="mb-5">
              <span className="text-sm font-bold tracking-[0.14em] text-ink-faint uppercase">
                Your investment in people leads to
              </span>
            </Reveal>
            <RevealGroup as="ul" className="grid gap-4 sm:grid-cols-2" stagger={0.1}>
              {program.impact.map((item, i) => {
                const Icon = impactIcons[i];
                return (
                  <RevealItem key={item} kind="scale" as="li">
                    <span className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-5 shadow-(--shadow-sm)">
                      <Icon className="size-5 text-summit-600" strokeWidth={1.8} aria-hidden />
                      <span className="font-medium text-ink">{item}</span>
                    </span>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Challenges we solve */}
      <section className="relative section-pad overflow-hidden bg-summit-950 text-white">
        <div aria-hidden className="absolute inset-0">
          <Image src={img.meetingGolden} alt="" fill sizes="100vw" className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-linear-to-b from-summit-950/80 via-transparent to-summit-950" />
        </div>
        <div className="container-asc relative">
          <SectionHeading
            dark
            align="center"
            kicker="Challenges we solve"
            title={
              <>
                Why most learning programs <em className="text-dawn-400 italic">fail to stick</em>
              </>
            }
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.12}>
            {program.challenges.map((c, i) => (
              <RevealItem key={c.title} kind="up" as="article">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <span className="font-display text-2xl text-dawn-400 tabular">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl tracking-tight">{c.title}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-mist-soft">{c.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Phases — vertical journey */}
      <section className="section-pad-loose">
        <div className="container-asc">
          <SectionHeading
            kicker="Phases of the program"
            title={
              <>
                Five steps from insight to <em className="text-summit-600 italic">lasting change</em>
              </>
            }
          />
          <ol className="relative mt-16 flex flex-col gap-0 border-l-2 border-line pl-0">
            {program.phases.map((p, i) => (
              <Reveal key={p.step} kind="left" as="li" delay={0.05} className="relative">
                <div className="group flex gap-6 py-8 pl-10 transition-colors sm:gap-10">
                  {/* Node */}
                  <span
                    aria-hidden
                    className="absolute top-10 -left-[9px] size-4 rounded-full border-[3px] border-bg bg-dawn-500 shadow-(--shadow-sm)"
                  />
                  <span className="font-display shrink-0 text-[clamp(2.4rem,6vw,4rem)] leading-none text-summit-100 transition-colors duration-500 group-hover:text-summit-300 tabular">
                    {p.step}
                  </span>
                  <div className="max-w-2xl pt-2">
                    <h3 className="font-display text-2xl tracking-tight text-ink">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
                  </div>
                </div>
                {i < program.phases.length - 1 && <span className="block h-px w-full bg-line" aria-hidden />}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Core interventions */}
      <section className="section-pad bg-surface">
        <div className="container-asc">
          <SectionHeading
            kicker="Core learning interventions"
            title={
              <>
                Built for retention, application, and{" "}
                <em className="text-summit-600 italic">measurable impact</em>
              </>
            }
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.09}>
            {program.interventions.map((iv, i) => {
              const Icon = interventionIcons[i];
              return (
                <RevealItem key={iv.title} kind="up" as="article">
                  <div className="flex h-full flex-col gap-4 rounded-3xl bg-white p-8 shadow-(--shadow-sm) transition-all duration-500 hover:-translate-y-1 hover:shadow-(--shadow-md)">
                    <span className="grid size-12 place-items-center rounded-full bg-summit-50 text-summit-600">
                      <Icon className="size-5" strokeWidth={1.8} aria-hidden />
                    </span>
                    <h3 className="font-display text-xl tracking-tight text-ink">{iv.title}</h3>
                    <p className="text-[0.95rem] leading-relaxed text-ink-soft">{iv.body}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <CtaBand
        title="Ready to build a learning journey that lasts?"
        body="Let's design a program that is strategic for the business, relevant to the team, and transformational for every learner."
      />
    </>
  );
}
