import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { img } from "@/lib/site";

/** Reusable end-of-page call-to-action for inner pages. */
export function CtaBand({
  title = "Ready to elevate your people and performance?",
  body = "Shape your organisation's future and let The Ascend align your talent with tomorrow's success.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section-pad">
      <div className="container-asc">
        <Reveal kind="scale">
          <div className="relative overflow-hidden rounded-[2rem] bg-summit-950 text-white">
            <div aria-hidden className="absolute inset-0">
              <Image src={img.ctaTeam} alt="" fill sizes="100vw" className="object-cover object-center opacity-60" />
              <div className="absolute inset-0 bg-linear-to-r from-summit-950 via-summit-950/60 to-summit-900/15" />
            </div>
            <div className="relative flex flex-col items-start gap-6 p-[clamp(2rem,6vw,4.5rem)] lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.6rem)] leading-tight tracking-tight">
                  {title}
                </h2>
                <p className="mt-3 text-mist-soft">{body}</p>
              </div>
              <ButtonLink href="/#contact" variant="onDark" size="lg" className="shrink-0">
                Contact us <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
