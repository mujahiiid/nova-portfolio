'use client'

import Image from 'next/image'
import { ModalShell } from './modal-shell'

const CAMPAIGN_IMAGES = [
  { src: '/images/campaign/nova-campaign-cairo-courtyard.webp', alt: 'Two NOVA models in architectural tailoring in a Cairo courtyard', caption: 'Campaign 06 / Cairo Courtyard' },
  { src: '/images/campaign/nova-collection-06-hero.webp', alt: 'NOVA model wearing structured cream and black layers', caption: 'Look 01 / Structure Study' },
  { src: '/images/campaign/object-shirt-editorial.webp', alt: 'NOVA Object Shirt photographed on a cream plinth', caption: 'Look 03 / Object Shirt' },
  { src: '/images/campaign/void-coat-gallery.webp', alt: 'NOVA Void Coat crossing a pale concrete gallery', caption: 'Look 04 / Void Coat' },
]

export function CampaignGallery({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <ModalShell open={open} titleId="campaign-gallery-title" onClose={onClose} panelClassName="md:max-w-6xl">
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-foreground/20 bg-background/95 px-4 py-3 backdrop-blur md:px-8">
        <div>
          <p className="label text-muted-foreground">Campaign 06</p>
          <h2 id="campaign-gallery-title" className="display text-2xl md:text-3xl">Form / Function / Attitude</h2>
        </div>
        <button type="button" onClick={onClose} className="label min-h-11 border border-foreground/30 px-4 hover:bg-foreground hover:text-background">Close ×</button>
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-2 md:p-8">
        {CAMPAIGN_IMAGES.map((image, index) => (
          <figure key={image.src} className={index === 0 ? 'sm:col-span-2' : ''}>
            <div className={`relative overflow-hidden bg-[var(--ash)]/20 ${index === 0 ? 'aspect-[16/9]' : 'aspect-[3/4]'}`}>
              <Image src={image.src} alt={image.alt} fill sizes={index === 0 ? '100vw' : '(max-width: 768px) 100vw, 50vw'} className="object-cover object-[center_28%]" />
            </div>
            <figcaption className="label mt-3 text-muted-foreground">{String(index + 1).padStart(2, '0')} / {image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </ModalShell>
  )
}
