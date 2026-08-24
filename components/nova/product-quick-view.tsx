'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { Product } from './product-data'
import { ModalShell } from './modal-shell'

type ProductQuickViewProps = {
  product: Product | null
  onClose: () => void
}

export function ProductQuickView({ product, onClose }: ProductQuickViewProps) {
  const [size, setSize] = useState('')

  useEffect(() => setSize(''), [product?.id])

  return (
    <ModalShell open={Boolean(product)} titleId="quick-view-title" onClose={onClose}>
      {product ? (
        <div className="grid min-h-full md:grid-cols-2">
          <div className="relative min-h-[42svh] bg-[var(--ash)]/20 md:min-h-full">
            <Image src={product.image} alt={product.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="flex flex-col p-5 md:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-foreground/20 pb-4">
              <span className="label text-muted-foreground">{product.look} / Quick View</span>
              <button type="button" onClick={onClose} className="label min-h-11 border border-foreground/30 px-4 hover:bg-foreground hover:text-background">
                Close ×
              </button>
            </div>

            <div className="py-8">
              <h2 id="quick-view-title" className="display type-section">{product.name}</h2>
              <div className="mt-5 flex items-center justify-between gap-4 border-y border-foreground/20 py-4">
                <span className="label text-muted-foreground">{product.material}</span>
                <span className="display text-2xl">{product.price}</span>
              </div>
              <p className="nova-copy mt-6">{product.description}</p>

              <fieldset className="mt-8">
                <legend className="label mb-3">Colour</legend>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <span key={color.name} className="inline-flex items-center gap-2 text-sm">
                      <span aria-hidden="true" className="h-7 w-7 border border-foreground/30" style={{ backgroundColor: color.value }} />
                      {color.name}
                    </span>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-8">
                <legend className="label mb-3">Size</legend>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      aria-pressed={size === item}
                      onClick={() => setSize(item)}
                      className="label min-h-11 min-w-12 border border-foreground/30 px-3 aria-pressed:bg-foreground aria-pressed:text-background hover:border-foreground"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8 border-t border-foreground/20 pt-5">
                <p className="label text-muted-foreground">Care</p>
                <p className="mt-2 text-sm leading-relaxed">{product.care}</p>
              </div>
            </div>

            <a
              href={`mailto:studio@novawear.com?subject=${encodeURIComponent(`${product.name} availability enquiry${size ? ` — size ${size}` : ''}`)}`}
              className="label mt-auto inline-flex min-h-12 items-center justify-center bg-[var(--blaze)] px-6 text-[var(--cream)] hover:bg-[var(--ink)]"
            >
              Product enquiry →
            </a>
          </div>
        </div>
      ) : null}
    </ModalShell>
  )
}
