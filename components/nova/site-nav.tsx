'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Collection', href: '#collection' },
  { label: 'Campaign', href: '#campaign' },
  { label: 'About', href: '#about' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/15 bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="flex items-stretch justify-between gap-4 px-4 md:px-8"
      >
        <a
          href="#top"
          className="display flex shrink-0 items-center py-3 text-xl tracking-[-0.05em] md:text-2xl"
        >
          NOVA
          <sup className="ml-0.5 text-[0.5em] align-super">®</sup>
        </a>

        <ul className="hidden flex-1 items-center justify-center gap-10 md:flex">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="label relative py-1 text-foreground transition-colors hover:text-[var(--blaze)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-5">
          <span className="label hidden text-muted-foreground sm:inline">03 / 06</span>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="nova-menu"
            onClick={() => setOpen((v) => !v)}
            className="group flex h-9 w-9 items-center justify-center border border-foreground/25 transition-colors hover:border-foreground hover:bg-foreground"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="flex w-4 flex-col gap-[3px]">
              <span className="h-[1.5px] w-full bg-foreground transition-colors group-hover:bg-background" />
              <span className="h-[1.5px] w-full bg-foreground transition-colors group-hover:bg-background" />
              <span className="h-[1.5px] w-2/3 bg-[var(--blaze)]" />
            </span>
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="nova-menu"
          className="border-t border-foreground/15 bg-[var(--ink)] px-4 py-8 text-[var(--cream)] md:px-8"
        >
          <ul className="grid gap-1">
            {[...LINKS, { label: 'Journal', href: '#footer' }, { label: 'Contact', href: '#footer' }].map(
              (link, i) => (
                <li key={link.label} className="flex items-baseline gap-4">
                  <span className="label text-[var(--ash)]">{String(i + 1).padStart(2, '0')}</span>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="display text-[13vw] leading-[0.9] transition-colors hover:text-[var(--blaze)] md:text-6xl"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
