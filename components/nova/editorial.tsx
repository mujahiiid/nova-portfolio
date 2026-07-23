import Image from 'next/image'
import { Reveal } from './reveal'

export function Editorial() {
  return (
    <section aria-labelledby="editorial-heading" className="relative px-4 pb-24 md:px-8 md:pb-40">
      <h2 id="editorial-heading" className="sr-only">
        Collection 06 editorial
      </h2>

      <div className="relative grid gap-10 md:grid-cols-12 md:gap-6">
        {/* oversized number, behind everything */}
        <span
          aria-hidden="true"
          className="display pointer-events-none absolute -top-[6vw] right-0 z-0 text-[38vw] leading-[0.7] text-foreground/8 select-none md:text-[26vw]"
        >
          06
        </span>

        {/* campaign image */}
        <Reveal
          variant="mask"
          className="relative z-10 md:col-span-7 md:col-start-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--ash)]/25 md:aspect-[4/3]">
            <Image
              src="/images/editorial-a.png"
              alt="Detail of black wool fabric draping over a model's shoulder"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <p className="label mt-3 text-muted-foreground">Fig. A — Drape study</p>
        </Reveal>

        {/* quote, overlapping the image on desktop */}
        <Reveal
          delay={140}
          className="relative z-20 md:col-span-6 md:col-start-6 md:-mt-24 md:self-start"
        >
          <blockquote className="bg-[var(--ink)] p-6 text-[var(--cream)] md:p-10">
            <p className="display text-[8vw] leading-[0.9] md:text-[3.4vw]">
              &ldquo;Clothes should argue
              <span className="text-[var(--blaze)]"> with the room.</span>&rdquo;
            </p>
            <footer className="label mt-6 text-[var(--ash)]">
              Amina Rafa — Creative Director, NOVA Studio
            </footer>
          </blockquote>
        </Reveal>

        {/* metadata column */}
        <Reveal delay={200} className="relative z-10 md:col-span-3 md:col-start-1 md:mt-8">
          <dl className="grid gap-4 border-t border-foreground/20 pt-4">
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
        </Reveal>

        {/* product image, offset */}
        <Reveal
          variant="mask"
          delay={120}
          className="relative z-10 md:col-span-5 md:col-start-8 md:-mt-6"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-[var(--ash)]/25">
            <Image
              src="/images/editorial-b.png"
              alt="Model seated on a cream plinth in an empty gallery wearing experimental NOVA apparel"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <p className="label mt-3 flex items-center justify-between text-muted-foreground">
            <span>Fig. B — Object Shirt</span>
            <span className="text-[var(--electric)]">003 / 024</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
