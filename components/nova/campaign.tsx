'use client'

import Image from 'next/image'
import { useState } from 'react'
import { CampaignGallery } from './campaign-gallery'
import { Reveal } from './reveal'

export function Campaign() {
  const [galleryOpen, setGalleryOpen] = useState(false)

  return (
    <>
    <section
      id="campaign"
      aria-labelledby="campaign-heading"
      className="relative bg-[var(--ink)] text-[var(--cream)]"
    >
      <div aria-hidden="true" className="relative h-8 bg-background md:h-12">
        <div className="absolute inset-y-0 right-[8%] w-40 bg-[var(--blaze)] md:w-72" />
      </div>

      <div className="relative h-[clamp(34rem,72svh,48rem)] w-full overflow-hidden">
        <Reveal variant="mask" className="absolute inset-0">
          <Image
            src="/images/campaign/nova-campaign-cairo-courtyard.webp"
            alt="Two models in bold black and cream NOVA tailoring against a raw concrete wall"
            fill
            sizes="100vw"
            className="object-cover object-[center_28%]"
          />
        </Reveal>
        <div aria-hidden="true" className="absolute inset-0 bg-[var(--ink)]/25" />

        <div className="relative grid h-full grid-rows-[auto_1fr_auto] p-4 md:p-8">
          <p className="label text-[var(--cream)]/80">02 / NOVA Campaign 06</p>

          <h2
            id="campaign-heading"
            className="display type-statement max-w-[16ch] self-end pb-10 md:pb-14"
          >
            Form <span className="text-[var(--cream)]/40">/</span> Function{' '}
            <span className="text-[var(--blaze)]">/</span> Attitude
          </h2>

          <div className="grid items-end gap-5 sm:grid-cols-[1fr_auto]">
            <p className="label max-w-[24ch] text-[var(--cream)]/70 leading-relaxed">
              Photographed on location, Cairo, February 2026.
            </p>
            <button type="button" onClick={() => setGalleryOpen(true)} className="label min-h-11 justify-self-start border-b border-[var(--cream)]/50 pb-1 text-[var(--cream)] hover:border-[var(--blaze)] hover:text-[var(--blaze)] sm:justify-self-end">
              View campaign →
            </button>
          </div>
        </div>
      </div>
    </section>
    <CampaignGallery open={galleryOpen} onClose={() => setGalleryOpen(false)} />
    </>
  )
}
