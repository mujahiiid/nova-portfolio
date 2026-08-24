const LINK_GROUPS = [
  {
    label: 'Explore',
    links: [
      { label: 'Collection', href: '#collection' },
      { label: 'Campaign', href: '#campaign' },
      { label: 'About', href: '#about' },
      { label: 'Journal', href: '/journal' },
      { label: 'Contact', href: 'mailto:studio@novawear.com' },
    ],
  },
  {
    label: 'Client services',
    links: [
      { label: 'Client Services', href: '/client-services' },
      { label: 'Shipping & Returns', href: '/shipping-returns' },
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'Care Guide', href: '/care-guide' },
      { label: 'Stockists', href: '/stockists' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer id="footer" className="nova-container pt-14 pb-6 md:pt-20">
      <div className="grid gap-10 border-b border-foreground/20 pb-12 sm:grid-cols-2 md:grid-cols-12">
        {LINK_GROUPS.map((group, index) => (
          <nav key={group.label} aria-label={group.label} className={index === 0 ? 'md:col-span-3' : index === 1 ? 'md:col-span-3' : 'md:col-span-2'}>
            <p className="label mb-4 text-muted-foreground">{group.label}</p>
            <ul className="grid gap-2">
              {group.links.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="inline-flex min-h-8 items-center text-base transition-colors hover:text-[var(--blaze)] md:text-lg">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="sm:col-span-2 md:col-span-4 md:text-right">
          <p className="display text-2xl">NOVA Studio</p>
          <p className="mt-3 text-muted-foreground">Cairo, Egypt</p>
          <a href="mailto:studio@novawear.com" className="mt-2 inline-flex min-h-8 items-center text-muted-foreground underline underline-offset-4 hover:text-foreground">studio@novawear.com</a>
          <p className="label mt-8 text-muted-foreground">Designed in Cairo</p>
          <p className="label mt-1 text-muted-foreground">Made for everywhere</p>
        </div>
      </div>

      <p aria-hidden="true" className="display type-hero mt-12">
        NOVA<span className="text-[var(--blaze)]">™</span>
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/15 pt-5">
        <p className="label text-muted-foreground">© 2026 NOVA</p>
        <p className="label text-muted-foreground">Independent / Cairo</p>
      </div>
    </footer>
  )
}
