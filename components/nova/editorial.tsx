import Image from 'next/image'
import { Reveal } from './reveal'

export function Editorial() {
  return (
    <section id="collection-notes" aria-labelledby="editorial-heading" className="nova-section-shell nova-section-compact relative overflow-hidden">
      <h2 id="editorial-heading" className="sr-only">
        Collection 06 editorial
      </h2>

      <div className="relative grid gap-8 md:grid-cols-12 md:items-start md:gap-6">
        <span
          aria-hidden="true"
          className="display pointer-events-none absolute -top-8 right-0 z-0 text-[clamp(8rem,20vw,18rem)] leading-[0.7] text-foreground/8 select-none"
        >
          06
        </span>

        <Reveal
          variant="mask"
          className="relative z-10 md:col-span-7 md:col-start-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--ash)]/25 md:aspect-[4/3]">
            <Image
              src="/images/campaign/structure-jacket-editorial.webp"
              alt="Model in NOVA's oversized charcoal Structure Jacket in a warm plaster studio"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover object-[center_22%]"
            />
          </div>
          <p className="label mt-3 text-muted-foreground">Fig. A — Drape study</p>
        </Reveal>

        <div className="relative z-20 grid gap-6 md:col-span-5">
          <Reveal delay={100}>
            <blockquote className="bg-[var(--ink)] p-6 text-[var(--cream)] md:p-8">
              <p className="display type-statement">
                &ldquo;Clothes should argue
                <span className="text-[var(--blaze)]"> with the room.</span>&rdquo;
              </p>
              <footer className="label mt-6 leading-relaxed text-[var(--ash)]">
                Amina Rafa — Creative Director, NOVA Studio
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={170}>
            <div className="grid gap-6 border-t border-foreground/20 pt-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <dl className="grid gap-3">
                {[
                  ['Collection', '06'],
                  ['Season', 'SS 2026'],
                  ['Pieces', '24'],
                  ['Location', 'Cairo'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4">
                    <dt className="label text-muted-foreground">{k}</dt>
                    <dd className="display text-xl">{v}</dd>
                  </div>
                ))}
              </dl>
              <div>
                <p className="nova-copy text-[0.95rem]">
                  Collection 06 studies how volume changes the body in motion—four core forms,
                  developed into a limited run of twenty-four pieces.
                </p>
                <a href="/journal#collection-06" className="label mt-6 inline-flex min-h-11 items-center text-[var(--blaze)] hover:text-foreground">
                  Read the collection notes →
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal variant="mask" delay={220}>
            <div className="relative aspect-[16/9] overflow-hidden bg-[var(--ash)]/25">
              <Image
                src="/images/campaign/object-shirt-editorial.webp"
                alt="Model seated on a cream plinth wearing NOVA's sculptural Object Shirt"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[center_38%]"
              />
            </div>
            <p className="label mt-3 flex items-center justify-between text-muted-foreground">
              <span>Fig. B — Object Shirt</span>
              <span className="text-[var(--electric)]">003 / 024</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
