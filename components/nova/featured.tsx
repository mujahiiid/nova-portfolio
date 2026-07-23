import Image from 'next/image'
import { Reveal } from './reveal'

const FEATURED = [
  {
    title: 'Structure Jacket',
    price: '€420',
    material: 'Wool / Nylon',
    image: '/images/piece-01.png',
    alt: 'Oversized tailored charcoal wool and nylon jacket',
    offset: 'md:mt-0',
  },
  {
    title: 'Void Coat',
    price: '€680',
    material: 'Boiled Wool',
    image: '/images/piece-04.png',
    alt: 'Floor-length black wool coat photographed in an empty concrete space',
    offset: 'md:mt-16',
  },
  {
    title: 'Object Shirt',
    price: '€190',
    material: 'Poplin',
    image: '/images/piece-03.png',
    alt: 'Oversized off-white poplin shirt with a sculptural collar',
    offset: 'md:mt-6',
  },
  {
    title: 'Form Trouser',
    price: '€260',
    material: 'Cotton Twill',
    image: '/images/piece-02.png',
    alt: 'Wide-leg bone white pleated trousers',
    offset: 'md:mt-24',
  },
]

export function Featured() {
  return (
    <section id="pieces" aria-labelledby="featured-heading" className="py-20 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-4 px-4 md:px-8">
        <h2 id="featured-heading" className="display text-[12vw] leading-none md:text-[6vw]">
          Featured pieces
        </h2>
        <span className="label text-muted-foreground">Drag / scroll →</span>
      </div>

      <ul
        className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 md:mt-16 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {FEATURED.map((piece, i) => (
          <Reveal
            as="li"
            key={piece.title}
            delay={i * 90}
            className={`group w-[76vw] shrink-0 snap-start sm:w-[46vw] lg:w-[30vw] ${piece.offset}`}
          >
            <a href="#collection" className="block">
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--ash)]/25">
                <Image
                  src={piece.image || '/placeholder.svg'}
                  alt={piece.alt}
                  fill
                  sizes="(max-width: 640px) 76vw, 40vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4 border-t border-foreground/20 pt-3">
                <div>
                  <h3 className="display text-2xl md:text-3xl">{piece.title}</h3>
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
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
