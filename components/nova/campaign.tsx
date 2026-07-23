import Image from 'next/image'
import { Reveal } from './reveal'

export function Campaign() {
  return (
    <section
      id="campaign"
      aria-labelledby="campaign-heading"
      className="relative bg-[var(--ink)] text-[var(--cream)]"
    >
      {/* dramatic transition: black wedge rising out of the cream above */}
      <div aria-hidden="true" className="flex h-16 md:h-24">
        <div className="w-1/3 bg-background" />
        <div className="w-1/3 bg-[var(--blaze)]" />
        <div className="w-1/3 bg-background" />
      </div>

      <div className="relative h-[85svh] min-h-[520px] w-full overflow-hidden">
        <Reveal variant="mask" className="absolute inset-0">
          <Image
            src="/images/campaign.png"
            alt="Two models in bold black and cream NOVA tailoring against a raw concrete wall"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>
        <div aria-hidden="true" className="absolute inset-0 bg-[var(--ink)]/35" />

        <div className="relative flex h-full flex-col justify-between p-4 md:p-8">
          <p className="label text-[var(--cream)]/80">NOVA Campaign 06</p>

          <h2
            id="campaign-heading"
            className="display max-w-[14ch] text-[14vw] leading-[0.82] md:max-w-none md:text-[8vw]"
          >
            Form <span className="text-[var(--cream)]/40">/</span> Function{' '}
            <span className="text-[var(--blaze)]">/</span> Attitude
          </h2>

          <div className="flex items-end justify-between gap-4">
            <p className="label max-w-[24ch] text-[var(--cream)]/70 leading-relaxed">
              Photographed on location. Cairo, February 2026.
            </p>
            <span className="label text-[var(--cream)]/70">002 / 024</span>
          </div>
        </div>
      </div>
    </section>
  )
}
