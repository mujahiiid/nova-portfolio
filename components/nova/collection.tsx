'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { PRODUCTS, type Product } from './product-data'
import { ProductQuickView } from './product-quick-view'
import { Reveal } from './reveal'

const LAYOUT = [
  { ratio: 'aspect-[3/4]', wrapper: 'md:col-span-5 md:col-start-1' },
  { ratio: 'aspect-[4/3]', wrapper: 'md:col-span-6 md:col-start-7 md:mt-20' },
  { ratio: 'aspect-[3/4]', wrapper: 'md:col-span-5 md:col-start-1' },
  { ratio: 'aspect-[16/9] md:aspect-auto md:h-[clamp(32rem,70vh,48rem)]', wrapper: 'md:col-span-12 md:mt-16' },
]

function ProductMeta({ product, onOpen }: { product: Product; onOpen: () => void }) {
  return (
    <figcaption className="mt-3 grid gap-2 border-t border-foreground/25 pt-3 sm:grid-cols-[1fr_auto_1fr] sm:items-baseline">
      <span className="label text-muted-foreground">{product.look}</span>
      <button type="button" onClick={onOpen} className="display type-product min-h-11 justify-self-start hover:text-[var(--blaze)] sm:justify-self-center">
        {product.name}
      </button>
      <span className="label text-foreground sm:text-right">{product.material} — {product.price}</span>
      <button type="button" onClick={onOpen} className="label min-h-11 justify-self-start text-[var(--blaze)] hover:text-foreground sm:col-span-3 sm:justify-self-end">
        View piece →
      </button>
    </figcaption>
  )
}

function PieceFigure({ product, index, onOpen }: { product: Product; index: number; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement | null>(null)
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null)
  const layout = LAYOUT[index]

  return (
    <Reveal as="figure" delay={index * 90} className={cn('group relative', layout.wrapper)}>
      <button
        ref={ref}
        type="button"
        onClick={onOpen}
        onPointerMove={(event) => {
          if (event.pointerType !== 'mouse') return
          const rect = event.currentTarget.getBoundingClientRect()
          setCursor({ x: event.clientX - rect.left, y: event.clientY - rect.top })
        }}
        onPointerLeave={() => setCursor(null)}
        className={cn('relative block w-full overflow-hidden bg-[var(--ash)]/25 text-left', layout.ratio)}
        aria-label={`View ${product.name}`}
      >
        <Image src={product.image} alt={product.alt} fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" />
        <span
          aria-hidden="true"
          className={cn('label pointer-events-none absolute z-10 hidden items-center bg-[var(--blaze)] px-3 py-2 text-[var(--cream)] transition-opacity duration-300 md:flex', cursor ? 'opacity-100' : 'opacity-0')}
          style={{ left: cursor?.x ?? 0, top: cursor?.y ?? 0, transform: 'translate(-50%, -50%)' }}
        >
          View piece →
        </span>
      </button>
      <ProductMeta product={product} onOpen={onOpen} />
    </Reveal>
  )
}

export function Collection() {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <>
      <section id="collection" aria-labelledby="collection-heading" className="nova-section-shell nova-section-compact">
        <div className="nova-section-intro md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="label mb-4 text-muted-foreground">01 / Collection</p>
            <h2 id="collection-heading" className="display type-section">Collection <span className="text-[var(--blaze)]">06</span></h2>
            <p className="label mt-5 text-foreground">Four studies in volume, structure and movement.</p>
          </div>
          <p className="nova-copy md:col-span-4 md:col-start-9">
            Spring / Summer 2026 explores proportion, negative space and the relationship between clothing and the moving body.
          </p>
        </div>

        <div className="mt-10 grid gap-12 md:mt-12 md:grid-cols-12 md:gap-x-6 md:gap-y-0">
          {PRODUCTS.map((product, index) => (
            <div key={product.id} className="contents">
              <PieceFigure product={product} index={index} onOpen={() => setSelected(product)} />
              {index === 2 ? (
                <Reveal delay={300} className="border-y border-foreground/20 py-6 md:col-span-4 md:col-start-8 md:self-center">
                  <p className="label text-muted-foreground">Look 03 / Study</p>
                  <p className="nova-copy mt-5">A folded collar and extended hem turn crisp cotton poplin into a sculptural everyday layer.</p>
                  <dl className="mt-6 grid gap-3 text-sm">
                    <div className="flex justify-between gap-4"><dt className="label text-muted-foreground">Colours</dt><dd>Chalk / Electric</dd></div>
                    <div className="flex justify-between gap-4"><dt className="label text-muted-foreground">Sizes</dt><dd>XS/S / M/L</dd></div>
                  </dl>
                  <button type="button" onClick={() => setSelected(product)} className="label mt-7 min-h-11 text-[var(--blaze)] hover:text-foreground">View Object Shirt →</button>
                </Reveal>
              ) : null}
            </div>
          ))}
        </div>
      </section>
      <ProductQuickView product={selected} onClose={() => setSelected(null)} />
    </>
  )
}
