import { Campaign } from '@/components/nova/campaign'
import { Collection } from '@/components/nova/collection'
import { Editorial } from '@/components/nova/editorial'
import { Featured } from '@/components/nova/featured'
import { FinalCta } from '@/components/nova/final-cta'
import { Hero } from '@/components/nova/hero'
import { Marquee } from '@/components/nova/marquee'
import { Newsletter } from '@/components/nova/newsletter'
import { SiteFooter } from '@/components/nova/site-footer'
import { SiteNav } from '@/components/nova/site-nav'
import { Statement } from '@/components/nova/statement'

export default function Page() {
  return (
    <>
      <a
        href="#collection"
        className="label sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <Collection />
        <Campaign />
        <Statement />
        <Editorial />
        <Marquee tone="ink" />
        <Featured />
        <Newsletter />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
