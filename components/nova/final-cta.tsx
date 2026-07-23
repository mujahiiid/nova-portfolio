import Image from 'next/image'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-heading"
      className="relative overflow-hidden bg-[var(--ink)] px-4 py-24 text-[var(--cream)] md:px-8 md:py-36"
    >
      <Reveal
        variant="mask"
        className="absolute top-1/2 right-0 h-[70%] w-[72%] -translate-y-1/2 md:h-[86%] md:w-[46%]"
      >
        <div className="relative h-full w-full opacity-70">
          <Image
            src="/images/final.png"
            alt="A model walking away down an empty cream corridor in a flowing oversized coat"
            fill
            sizes="(max-width: 768px) 72vw, 46vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <div className="relative z-10">
        <p className="label text-[var(--ash)]">Collection 06 — Now live</p>

        <h2
          id="final-heading"
          className="display mt-8 text-[17vw] leading-[0.82] md:mt-12 md:text-[10vw]"
        >
          See you
          <br />
          <span className="block pl-[8%]">on the</span>
          <span className="text-[var(--blaze)]">other side.</span>
        </h2>

        <a
          href="#collection"
          className="group mt-10 inline-flex items-center gap-3 bg-[var(--cream)] px-7 py-4 text-[var(--ink)] transition-colors hover:bg-[var(--blaze)] hover:text-[var(--cream)] md:mt-16"
        >
          <span className="label">Discover NOVA</span>
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  )
}
