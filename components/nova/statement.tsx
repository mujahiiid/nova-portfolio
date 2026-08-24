import { Reveal } from './reveal'

export function Statement() {
  return (
    <section id="about" aria-labelledby="statement-heading" className="nova-section-shell border-b border-foreground/15">
      <p className="label mb-12 flex items-center gap-4 text-muted-foreground md:mb-20">
        <span aria-hidden="true" className="inline-block h-[1px] w-16 bg-foreground/40" />
        03 / Manifesto
      </p>

      <h2 id="statement-heading" className="display type-statement max-w-[28ch]">
        <Reveal as="span" className="block">
          We don&apos;t follow
        </Reveal>
        <Reveal as="span" delay={120} className="block pl-[6%]">
          the shape of
        </Reveal>
        <Reveal as="span" delay={240} className="block">
          the moment.
        </Reveal>
        <Reveal as="span" delay={420} className="mt-[0.35em] block text-right text-[var(--blaze)]">
          We change it.
        </Reveal>
      </h2>

      <div className="mt-16 grid gap-8 border-t border-foreground/20 pt-6 md:mt-24 md:grid-cols-12">
        <p className="label text-muted-foreground md:col-span-3">Est. 2019 — Independent</p>
        <div className="md:col-span-6 md:col-start-6">
          <p className="nova-copy">
            NOVA is an independent Cairo studio exploring how volume, movement and restraint can reshape everyday dress. We create limited collections designed beyond the cycle of passing trends.
          </p>
          <a href="/journal#our-story" className="label mt-7 inline-flex min-h-11 items-center text-[var(--blaze)] hover:text-foreground">Read our story →</a>
        </div>
      </div>
    </section>
  )
}
