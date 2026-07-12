import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { posts, getPost, type Block } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display mt-12 mb-4 text-[clamp(1.4rem,2.6vw,1.9rem)] leading-snug tracking-tight text-ink">
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 className="font-display mt-8 mb-3 text-xl tracking-tight text-ink">{block.text}</h3>;
    case "p":
      return <p className="mb-5 leading-[1.8] text-ink-soft">{block.text}</p>;
    case "ul":
      return (
        <ul className="mb-6 flex list-none flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 leading-relaxed text-ink-soft">
              <svg viewBox="0 0 20 20" className="mt-2 size-2.5 shrink-0 fill-dawn-500" aria-hidden>
                <path d="M10 2 18 17H2L10 2Z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="font-display my-10 border-l-[3px] border-dawn-500 pl-6 text-[clamp(1.2rem,2.2vw,1.55rem)] leading-snug text-summit-700 italic">
          {block.text}
        </blockquote>
      );
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Article hero */}
      <section className="relative p-[clamp(0.6rem,1.6vw,1.4rem)]">
        <div aria-hidden className="hero-fog absolute inset-0" />
        <div className="relative flex min-h-[58svh] flex-col justify-end overflow-hidden rounded-[clamp(1.2rem,3vw,2.2rem)] bg-summit-950 text-white">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-summit-950/95 via-summit-950/40 to-summit-950/40" />
          <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-[clamp(1.8rem,4vw,3.2rem)] pt-36">
            <Reveal kind="fade">
              <p className="mb-4 text-sm tracking-wide text-mist-soft">
                <time dateTime={post.dateISO}>{post.date}</time> · {post.category}
              </p>
            </Reveal>
            <Reveal kind="blur">
              <h1 className="font-display text-[clamp(1.9rem,4.5vw,3.4rem)] leading-[1.06] tracking-tight text-balance">
                {post.title}
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="section-pad-tight">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal kind="fade">
            <Link
              href="/perspectives"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-summit-600 transition-colors hover:text-summit-800"
            >
              <ArrowLeft className="size-4" aria-hidden /> All posts
            </Link>
          </Reveal>
          <Reveal kind="up" amount={0.05}>
            <div className="text-[1.05rem]">
              {post.body.map((block, i) => (
                <BlockView key={i} block={block} />
              ))}
            </div>
          </Reveal>
        </div>
      </article>

      {/* More posts */}
      <section className="section-pad bg-surface">
        <div className="container-asc">
          <h2 className="font-display mb-10 text-2xl tracking-tight text-ink">Recent posts</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((p) => (
              <Link key={p.slug} href={`/perspectives/${p.slug}`} className="group block">
                <div className="relative mb-4 aspect-[3/2] overflow-hidden rounded-2xl">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <p className="mb-1.5 text-sm text-ink-faint">
                  <time dateTime={p.dateISO}>{p.date}</time>
                </p>
                <h3 className="font-display flex items-start gap-1.5 text-lg leading-snug tracking-tight text-ink transition-colors group-hover:text-summit-700">
                  {p.title}
                  <ArrowUpRight className="mt-1 size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
