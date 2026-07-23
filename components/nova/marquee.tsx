const PHRASES = ['NOVA', 'NEW COLLECTION', 'SPRING SUMMER 2026', 'NOVA', 'NEW COLLECTION']

export function Marquee({
  tone = 'red',
}: {
  tone?: 'red' | 'ink'
}) {
  const row = (
    <div className="flex shrink-0 items-center">
      {PHRASES.map((phrase, i) => (
        <span key={`${phrase}-${i}`} className="flex items-center">
          <span className="display px-5 py-3 text-[8vw] leading-none md:text-5xl lg:text-6xl">
            {phrase}
          </span>
          <span aria-hidden="true" className="text-[8vw] leading-none opacity-40 md:text-5xl">
            /
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <div
      aria-hidden="true"
      className={
        tone === 'red'
          ? 'overflow-hidden border-y border-[var(--ink)] bg-[var(--blaze)] text-[var(--ink)]'
          : 'overflow-hidden bg-[var(--ink)] text-[var(--cream)]'
      }
    >
      <div className="nova-marquee-track">
        {row}
        {row}
      </div>
    </div>
  )
}
