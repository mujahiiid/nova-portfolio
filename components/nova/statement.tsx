import { Reveal } from './reveal'

export function Statement() {
  return (
    <section id="about" aria-labelledby="statement-heading" className="px-4 py-28 md:px-8 md:py-48">
      <p className="label mb-16 flex items-center gap-4 text-muted-foreground md:mb-28">
        <span aria-hidden="true" className="inline-block h-[1px] w-16 bg-foreground/40" />
        Manifesto
      </p>

      <h2 id="statement-heading" className="display text-[15vw] leading-[0.84] md:text-[9.5vw]">
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

      <div className="mt-20 grid gap-8 border-t border-foreground/20 pt-6 md:mt-32 md:grid-cols-12">
        <p className="label text-muted-foreground md:col-span-3">Est. 2019 — Independent</p>
        <p className="text-base leading-relaxed md:col-span-5 md:col-start-6 md:text-lg">
          NOVA is a contemporary apparel studio working in short, deliberate runs. Every garment
          begins as an object study — proportion first, trend never. We&apos;d rather be early than
          agreeable.
        </p>
      </div>
    </section>
  )
}
