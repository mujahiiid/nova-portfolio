'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

function useParallax(strength = 0.12) {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const node = ref.current
        if (!node) return
        const rect = node.getBoundingClientRect()
        setOffset((rect.top - window.innerHeight / 2) * -strength)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [strength])

  return { ref, offset }
}

export function Hero() {
  const { ref, offset } = useParallax(0.06)

  return (
    <section id="top" aria-label="NOVA Collection 06 campaign" className="relative">
      {/* editorial metadata rail */}
      <div className="flex items-center justify-between gap-4 border-b border-foreground/15 px-4 py-2 md:px-8">
        <span className="label text-muted-foreground">Collection 06</span>
        <span className="label hidden text-muted-foreground sm:inline">Spring / Summer 2026</span>
        <span className="label text-muted-foreground">Nova Studio</span>
      </div>

      <div className="relative px-4 pt-10 pb-6 md:px-8 md:pt-16 lg:pt-20">
        {/* red accent block */}
        <div
          aria-hidden="true"
          className="absolute top-24 right-[6%] h-28 w-28 bg-[var(--blaze)] md:top-28 md:h-52 md:w-52 lg:h-64 lg:w-64"
        />
        {/* blue floating detail */}
        <div
          aria-hidden="true"
          className="absolute right-[4%] bottom-[18%] hidden h-3 w-24 bg-[var(--electric)] lg:block"
        />

        <div className="relative grid gap-6 lg:grid-cols-12">
          {/* image sits behind the headline */}
          <div ref={ref} className="relative lg:col-span-6 lg:col-start-6 lg:row-start-1">
            <div className="nova-clip relative aspect-[3/4] w-[78%] overflow-hidden bg-[var(--ash)]/30 sm:w-[62%] lg:ml-auto lg:w-full">
              <Image
                src="/images/hero.png"
                alt="A model wearing an oversized structured cream and black NOVA outfit against a warm cream backdrop"
                fill
                priority
                sizes="(max-width: 1024px) 78vw, 44vw"
                className="object-cover"
                style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.08)` }}
              />
            </div>

            <p className="label mt-3 flex items-center gap-3 text-muted-foreground lg:justify-end">
              <span className="inline-block h-[1px] w-10 bg-foreground/40" />
              001 / 024
            </p>
          </div>

          {/* headline */}
          <div className="relative z-10 lg:col-span-8 lg:col-start-1 lg:row-start-1 lg:pt-8">
            <h1 className="display text-[19vw] leading-[0.8] sm:text-[17vw] lg:text-[11.5vw] xl:text-[10.5vw]">
              <span className="nova-clip">
                <span style={{ animationDelay: '80ms' }}>Wear</span>
              </span>
              <span className="nova-clip">
                <span className="block pl-[8%] text-[var(--blaze)]" style={{ animationDelay: '200ms' }}>
                  The
                </span>
              </span>
              <span className="nova-clip">
                <span style={{ animationDelay: '320ms' }}>
                  Unexpected<span className="text-[var(--electric)]">.</span>
                </span>
              </span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-12 lg:mt-16">
              <a
                href="#collection"
                className="group inline-flex items-center gap-3 bg-[var(--ink)] px-6 py-4 text-[var(--cream)] transition-colors hover:bg-[var(--blaze)]"
              >
                <span className="label">Discover NOVA</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#pieces"
                className="group inline-flex items-center gap-3 border border-foreground/30 px-6 py-4 transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                <span className="label">View Collection</span>
              </a>
            </div>
          </div>
        </div>

        {/* oversized collection number */}
        <div className="pointer-events-none mt-6 flex items-end justify-between lg:-mt-10">
          <p className="label max-w-[22ch] text-muted-foreground leading-relaxed">
            A study in volume, structure and refusal. Made in limited runs.
          </p>
          <span aria-hidden="true" className="display text-[22vw] leading-[0.7] text-foreground/10">
            06
          </span>
        </div>
      </div>
    </section>
  )
}
