import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Journal', description: 'Notes from NOVA Studio on Collection 06, form, movement and independent fashion in Cairo.' }

export default function JournalPage() {
  return (
    <main className="px-4 py-8 md:px-8 md:py-12">
      <Link href="/" className="label inline-flex min-h-11 items-center border-b border-foreground/30 hover:text-[var(--blaze)]">← Back to NOVA</Link>
      <header className="nova-section-shell !px-0">
        <p className="label text-muted-foreground">NOVA Studio / Journal 01</p>
        <h1 className="display type-hero mt-6">Notes on<br /><span className="text-[var(--blaze)]">Form.</span></h1>
      </header>
      <div className="mx-auto max-w-5xl border-t border-foreground/20">
        <article id="collection-06" className="scroll-mt-28 grid gap-8 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4"><p className="label text-muted-foreground">01 / Collection 06</p><h2 className="display type-section mt-4">The moving body</h2></div>
          <div className="nova-copy space-y-5 md:col-span-6 md:col-start-7"><p>Collection 06 begins with four core forms: jacket, trouser, shirt and coat. Each is developed through proportion rather than decoration.</p><p>Volume is held away from the body, then released through movement. The result is a limited wardrobe that changes character between stillness and motion.</p><p>Twenty-four pieces were developed in Cairo for Spring / Summer 2026.</p></div>
        </article>
        <article id="our-story" className="scroll-mt-28 grid gap-8 border-t border-foreground/20 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4"><p className="label text-muted-foreground">02 / Our story</p><h2 className="display type-section mt-4">Independent by design</h2></div>
          <div className="nova-copy space-y-5 md:col-span-6 md:col-start-7"><p>NOVA is a fictional independent contemporary fashion studio based in Cairo. The studio explores how restraint, structure and movement can reshape everyday dress.</p><p>Collections are imagined in short, deliberate runs outside the pace of passing trends: proportion first, object second, image last.</p></div>
        </article>
      </div>
    </main>
  )
}
