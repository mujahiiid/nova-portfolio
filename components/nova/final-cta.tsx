import Image from 'next/image'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-heading"
      className="nova-section-shell nova-section-compact relative flex min-h-[75svh] items-center overflow-hidden bg-[var(--ink)] text-[var(--cream)]"
    >
      <Reveal
        variant="mask"
        className="absolute top-1/2 right-0 h-[70%] w-[72%] -translate-y-1/2 md:h-[86%] md:w-[46%]"
      >
        <div className="relative h-full w-full opacity-60">
          <Image
            src="/images/campaign/void-coat-gallery.webp"
            alt="A model walking away down an empty cream corridor in a flowing oversized coat"
            fill
            sizes="(max-width: 768px) 72vw, 46vw"
            className="object-cover"
          />
        </div>
      </Reveal>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/80 to-transparent" />

      <div className="relative z-10">
        <p className="label text-[var(--ash)]">06 / Collection 06 — Now live</p>

        <h2
          id="final-heading"
          className="display type-statement mt-8 max-w-[16ch] md:mt-12"
        >
          See you
          <br />
          <span className="block pl-[8%]">on the</span>
          <span className="text-[var(--blaze)]">other side.</span>
        </h2>

        <p className="nova-copy mt-6 max-w-[30ch] text-[var(--ash)]">
          Twenty-four pieces. Cut in Cairo, made in limited runs, available for collection enquiries now.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5 md:mt-12">
          <a
            href="#collection"
            className="group inline-flex items-center gap-3 bg-[var(--cream)] px-7 py-4 text-[var(--ink)] transition-colors hover:bg-[var(--blaze)] hover:text-[var(--cream)]"
          >
            <span className="label">Shop Collection 06</span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#campaign" className="label inline-flex border-b border-[var(--ash)] pb-1 text-[var(--ash)] hover:border-[var(--cream)] hover:text-[var(--cream)]">
            View campaign →
          </a>
        </div>
      </div>
    </section>
  )
}
