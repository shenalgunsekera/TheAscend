import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { img } from "@/lib/site";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Our Perspectives",
  description:
    "Ideas and insights on talent management, leadership development, engagement, and workplace culture from The Ascend.",
};

export default function PerspectivesPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        kicker="Our Perspectives"
        title={
          <>
            Ideas that help people <em className="text-dawn-400 italic">rise</em>
          </>
        }
        lede="Insights on talent, leadership, engagement, and the future of work."
        image={img.typingDark}
        imageAlt="Hands typing on a laptop"
      />

      <section className="section-pad">
        <div className="container-asc">
          {/* Featured post */}
          <RevealGroup stagger={0.1}>
            <RevealItem kind="up" as="article">
              <Link
                href={`/perspectives/${featured.slug}`}
                className="group grid overflow-hidden rounded-[2rem] bg-summit-950 text-white shadow-(--shadow-lg) lg:grid-cols-2"
              >
                <div className="relative aspect-[3/2] overflow-hidden lg:aspect-auto">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-4 p-[clamp(1.8rem,4vw,3.5rem)]">
                  <p className="text-sm text-mist-soft">
                    <time dateTime={featured.dateISO}>{featured.date}</time> · {featured.category} · Latest
                  </p>
                  <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-tight tracking-tight transition-colors group-hover:text-dawn-300">
                    {featured.title}
                  </h2>
                  <p className="leading-relaxed text-mist-soft">{featured.excerpt}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 font-semibold text-dawn-400">
                    Continue reading
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </RevealItem>
          </RevealGroup>

          {/* Remaining posts */}
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.1}>
            {rest.map((post) => (
              <RevealItem key={post.slug} kind="up" as="article">
                <Link href={`/perspectives/${post.slug}`} className="group block h-full">
                  <div className="relative mb-5 aspect-[3/2] overflow-hidden rounded-2xl">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(min-width: 768px) 30vw, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="mb-2 text-sm text-ink-faint">
                    <time dateTime={post.dateISO}>{post.date}</time> · {post.category}
                  </p>
                  <h2 className="font-display mb-2 text-xl leading-snug tracking-tight text-ink transition-colors group-hover:text-summit-700">
                    {post.title}
                  </h2>
                  <p className="text-[0.92rem] leading-relaxed text-ink-soft">{post.excerpt}</p>
                  <span className="link-underline mt-3 inline-block text-sm font-semibold text-summit-600">
                    Continue reading
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
