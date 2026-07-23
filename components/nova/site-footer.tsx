const NAV = ['Collection', 'Campaign', 'About', 'Journal', 'Contact']
const SOCIAL = ['Instagram', 'TikTok', 'Pinterest']

export function SiteFooter() {
  return (
    <footer id="footer" className="px-4 pt-16 pb-6 md:px-8 md:pt-24">
      <div className="grid gap-10 border-b border-foreground/20 pb-12 md:grid-cols-12">
        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="grid gap-2">
            {NAV.map((item) => (
              <li key={item}>
                <a
                  href="#top"
                  className="text-lg transition-colors hover:text-[var(--blaze)] md:text-xl"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Social" className="md:col-span-3">
          <ul className="grid gap-2">
            {SOCIAL.map((item) => (
              <li key={item}>
                <a
                  href="#top"
                  className="text-lg text-muted-foreground transition-colors hover:text-[var(--electric)] md:text-xl"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4 md:col-start-9 md:text-right">
          <p className="label text-muted-foreground">Designed in Cairo</p>
          <p className="label mt-1 text-muted-foreground">Made for everywhere</p>
        </div>
      </div>

      <p aria-hidden="true" className="display mt-8 text-[27vw] leading-[0.72] tracking-[-0.06em]">
        NOVA<span className="text-[var(--blaze)]">®</span>
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="label text-muted-foreground">© 2026 NOVA</p>
        <ul className="flex gap-6">
          {['Privacy', 'Terms'].map((item) => (
            <li key={item}>
              <a href="#top" className="label text-muted-foreground hover:text-foreground">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
