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
    <section id="top" aria-label="NOVA Collection 06 campaign" className="relative h-[calc(100svh-88px)] overflow-hidden md:h-[calc(100svh-106px)]">
      <div className="nova-container relative h-full py-6 md:py-8 lg:py-10">
        {/* red accent block */}
        <div
          aria-hidden="true"
          className="absolute top-16 right-[6%] h-20 w-20 bg-[var(--blaze)] md:top-20 md:h-32 md:w-32 lg:right-[7%] lg:h-36 lg:w-36"
        />
        {/* blue floating detail */}
        <div
          aria-hidden="true"
          className="absolute right-[4%] bottom-[18%] hidden h-3 w-24 bg-[var(--electric)] lg:block"
        />

        <div className="relative grid h-full gap-5 lg:grid-cols-12 lg:gap-6">
          {/* image sits behind the headline */}
          <div ref={ref} className="relative lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:h-full">
            <div className="nova-clip relative h-[32svh] min-h-[230px] max-h-[310px] w-[76%] overflow-hidden bg-[var(--ash)]/30 sm:w-[58%] lg:ml-auto lg:h-full lg:max-h-none lg:w-full">
              <Image
                src="/images/campaign/nova-collection-06-hero.webp"
                alt="A model wearing an oversized structured cream and black NOVA outfit against a warm cream backdrop"
                fill
                priority
                sizes="(max-width: 1024px) 76vw, 46vw"
                className="object-cover object-[center_32%]"
                style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.08)` }}
              />
            </div>

            <p className="label mt-3 flex items-center gap-3 text-muted-foreground lg:absolute lg:right-0 lg:bottom-0 lg:bg-background/85 lg:px-3 lg:py-2">
              <span className="inline-block h-[1px] w-10 bg-foreground/40" />
              Campaign image / Look 01
            </p>
          </div>

          {/* headline */}
          <div className="relative z-10 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:self-center">
            <h1 className="display type-hero hero-title">
              <span className="nova-clip">
                <span style={{ animationDelay: '80ms' }}>Wear</span>
              </span>
              <span className="nova-clip">
                <span className="block pl-[8%] text-[var(--blaze)]" style={{ animationDelay: '200ms' }}>
                  The
                </span>
              </span>
              <span className="nova-clip">
                <span className="type-hero-long" style={{ animationDelay: '320ms' }}>
                  Unexpected<span className="text-[var(--electric)]">.</span>
                </span>
              </span>
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3 md:mt-8 lg:mt-10">
              <a
                href="#collection"
                className="editorial-cta-primary group"
              >
                <span className="label">View Collection</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#about"
                className="editorial-cta-secondary group"
              >
                <span className="label">Discover NOVA</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            <p className="label mt-5 max-w-[30ch] text-muted-foreground leading-relaxed md:mt-7">
              A study in volume, structure and refusal.
            </p>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="display pointer-events-none absolute right-4 bottom-4 text-[clamp(5.5rem,12vw,10rem)] leading-[0.7] text-foreground/[0.07] md:right-[48%]"
        >
          06
        </span>
        <span className="label pointer-events-none absolute right-5 bottom-5 text-muted-foreground md:right-[48%] md:bottom-6">Collection 06</span>
      </div>
    </section>
  )
}
