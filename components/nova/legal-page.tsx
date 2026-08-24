import Link from 'next/link'

type LegalPageProps = {
  eyebrow: string
  title: string
  children: React.ReactNode
}

export function LegalPage({ eyebrow, title, children }: LegalPageProps) {
  return (
    <main className="min-h-screen px-4 py-8 md:px-8 md:py-12">
      <Link href="/" className="label inline-flex border-b border-foreground/30 pb-1 hover:text-[var(--blaze)]">
        ← Back to NOVA
      </Link>
      <article className="mx-auto mt-24 max-w-4xl md:mt-32">
        <p className="label text-muted-foreground">{eyebrow}</p>
        <h1 className="display mt-6 text-[15vw] leading-[0.82] md:text-[8vw]">{title}</h1>
        <div className="mt-16 max-w-2xl space-y-8 border-t border-foreground/20 pt-8 text-base leading-relaxed md:text-lg">
          {children}
        </div>
      </article>
    </main>
  )
}
