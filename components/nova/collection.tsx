'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

type Piece = {
  no: string
  name: string
  image: string
  alt: string
  meta: string
  ratio: string
  wrapper: string
}

const PIECES: Piece[] = [
  {
    no: 'No. 01',
    name: 'Structure Jacket',
    image: '/images/piece-01.png',
    alt: 'Model wearing an oversized tailored charcoal wool and nylon jacket',
    meta: 'Wool / Nylon — €420',
    ratio: 'aspect-[3/4]',
    wrapper: 'md:col-span-5 md:col-start-1',
  },
  {
    no: 'No. 02',
    name: 'Form Trouser',
    image: '/images/piece-02.png',
    alt: 'Close crop of wide-leg bone white pleated trousers mid-stride',
    meta: 'Cotton Twill — €260',
    ratio: 'aspect-[4/3]',
    wrapper: 'md:col-span-6 md:col-start-7 md:mt-32',
  },
  {
    no: 'No. 03',
    name: 'Object Shirt',
    image: '/images/piece-03.png',
    alt: 'Model in an oversized off-white poplin shirt with a sculptural collar',
    meta: 'Poplin — €190',
    ratio: 'aspect-[3/4]',
    wrapper: 'md:col-span-4 md:col-start-3 md:-mt-16',
  },
  {
    no: 'No. 04',
    name: 'Void Coat',
    image: '/images/piece-04.png',
    alt: 'Model in a floor-length black wool coat crossing an empty concrete space',
    ratio: 'aspect-[16/9] md:aspect-[21/9]',
    meta: 'Boiled Wool — €680',
    wrapper: 'md:col-span-12 md:mt-24',
  },
]

function PieceFigure({ piece, index }: { piece: Piece; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null)

  return (
    <Reveal
      as="figure"
      delay={index * 90}
      className={cn('group relative', piece.wrapper)}
    >
      <div
        ref={ref}
        onPointerMove={(e) => {
          if (e.pointerType !== 'mouse') return
          const rect = e.currentTarget.getBoundingClientRect()
          setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        }}
        onPointerLeave={() => setCursor(null)}
        className={cn('relative overflow-hidden bg-[var(--ash)]/25', piece.ratio)}
      >
        <Image
          src={piece.image || '/placeholder.svg'}
          alt={piece.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />

        <span
          aria-hidden="true"
          className={cn(
            'label pointer-events-none absolute z-10 hidden items-center gap-2 bg-[var(--blaze)] px-3 py-2 text-[var(--cream)] transition-opacity duration-300 md:flex',
            cursor ? 'opacity-100' : 'opacity-0',
          )}
          style={{
            left: cursor?.x ?? 0,
            top: cursor?.y ?? 0,
            transform: 'translate(-50%, -50%)',
          }}
        >
          View piece →
        </span>
      </div>

      <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-foreground/20 pt-3">
        <span className="label text-muted-foreground">{piece.no}</span>
        <h3 className="display text-[9vw] leading-none transition-transform duration-500 group-hover:-translate-y-1 md:text-4xl lg:text-5xl">
          {piece.name}
        </h3>
        <span className="label max-w-[10ch] text-right text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:max-w-none">
          {piece.meta}
        </span>
      </figcaption>
    </Reveal>
  )
}

export function Collection() {
  return (
    <section id="collection" aria-labelledby="collection-heading" className="px-4 py-20 md:px-8 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-foreground/20 pb-6">
        <h2 id="collection-heading" className="display text-[16vw] leading-[0.82] md:text-[9vw]">
          Collection <span className="text-[var(--blaze)]">06</span>
        </h2>
        <p className="label max-w-[26ch] text-muted-foreground leading-relaxed">
          Four pieces. Built around volume, negative space and a refusal of the obvious.
        </p>
      </div>

      <div className="mt-12 grid gap-14 md:mt-16 md:grid-cols-12 md:gap-x-6 md:gap-y-0">
        {PIECES.map((piece, i) => (
          <PieceFigure key={piece.no} piece={piece} index={i} />
        ))}
      </div>
    </section>
  )
}
