import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { posts } from "@/lib/posts";

/** Latest three articles from Our Perspectives. */
export function PerspectivesPreview() {
  const latest = posts.slice(0, 3);

  return (
    <section className="section-pad">
      <div className="container-asc">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            kicker="Our Perspectives"
            title={
              <>
                Thinking that helps people <em className="text-summit-600 italic">rise</em>
              </>
            }
          />
          <Reveal kind="fade" delay={0.2}>
            <ButtonLink href="/perspectives" variant="ghost">
              All posts <ArrowUpRight className="size-4" aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {latest.map((post) => (
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
                <h3 className="font-display mb-2 text-xl leading-snug tracking-tight text-ink transition-colors group-hover:text-summit-700">
                  {post.title}
                </h3>
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
  );
}
