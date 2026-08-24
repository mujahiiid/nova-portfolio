'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { PRODUCTS, type Product } from './product-data'
import { ProductQuickView } from './product-quick-view'
import { Reveal } from './reveal'

const FEATURED = [PRODUCTS[0], PRODUCTS[3], PRODUCTS[2], PRODUCTS[1]]

export function Featured() {
  const railRef = useRef<HTMLUListElement | null>(null)
  const drag = useRef({ active: false, moved: false, x: 0, scrollLeft: 0 })
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <>
    <section id="pieces" aria-labelledby="featured-heading" className="nova-section-shell nova-section-compact border-b border-foreground/15 !px-0">
      <div className="flex flex-wrap items-end justify-between gap-4 px-4 md:px-8">
        <div>
          <p className="label mb-4 text-muted-foreground">04 / Featured Pieces</p>
          <h2 id="featured-heading" className="display type-section">Featured pieces</h2>
        </div>
        <span className="label border-b border-foreground/30 pb-1 text-foreground">Drag / scroll →</span>
      </div>

      <ul
        ref={railRef}
        aria-label="Featured NOVA pieces"
        onPointerDown={(event) => {
          if (event.pointerType !== 'mouse') return
          const rail = railRef.current
          if (!rail) return
          drag.current = { active: true, moved: false, x: event.clientX, scrollLeft: rail.scrollLeft }
          rail.setPointerCapture(event.pointerId)
        }}
        onPointerMove={(event) => {
          const rail = railRef.current
          if (!rail || !drag.current.active) return
          const distance = event.clientX - drag.current.x
          if (Math.abs(distance) > 6) drag.current.moved = true
          rail.scrollLeft = drag.current.scrollLeft - distance
        }}
        onPointerUp={(event) => {
          const rail = railRef.current
          drag.current.active = false
          if (rail?.hasPointerCapture(event.pointerId)) rail.releasePointerCapture(event.pointerId)
        }}
        onPointerCancel={() => {
          drag.current.active = false
        }}
        onKeyDown={(event) => {
          const rail = railRef.current
          if (!rail || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return
          event.preventDefault()
          rail.scrollBy({ left: event.key === 'ArrowRight' ? rail.clientWidth * 0.7 : rail.clientWidth * -0.7, behavior: 'smooth' })
        }}
        tabIndex={0}
        className="mt-10 flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 active:cursor-grabbing md:mt-12 md:gap-6 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {FEATURED.map((piece, i) => (
          <Reveal
            as="li"
            key={piece.id}
            delay={i * 90}
            className="group w-[82vw] shrink-0 snap-start sm:w-[46vw] lg:w-[28vw]"
          >
            <button
              type="button"
              onClick={(event) => {
                if (drag.current.moved) {
                  event.preventDefault()
                  drag.current.moved = false
                  return
                }
                setSelected(piece)
              }}
              className="block w-full text-left focus-visible:outline-offset-4"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--ash)]/25">
                <Image
                  src={piece.image}
                  alt={piece.alt}
                  fill
                  sizes="(max-width: 640px) 76vw, 40vw"
                  draggable={false}
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4 border-t border-foreground/20 pt-3">
                <div>
                  <h3 className="display type-product">{piece.name}</h3>
                  <p className="label mt-2 text-muted-foreground">{piece.material}</p>
                </div>
                <div className="text-right">
                  <p className="display text-xl">{piece.price}</p>
                  <p className="label mt-2 inline-flex items-center gap-1 text-[var(--blaze)]">
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                    View piece
                  </p>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </ul>
    </section>
    <ProductQuickView product={selected} onClose={() => setSelected(null)} />
    </>
  )
}
