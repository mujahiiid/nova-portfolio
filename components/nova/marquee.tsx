const PHRASES = ['COLLECTION 06', 'NOVA', 'SPRING SUMMER 2026', 'DESIGNED IN CAIRO']

export function Marquee({
  tone = 'red',
}: {
  tone?: 'red' | 'ink'
}) {
  const row = (
    <div className="flex shrink-0 items-center">
      {PHRASES.map((phrase, i) => (
        <span key={`${phrase}-${i}`} className="flex items-center">
          <span className="display px-5 py-2 text-[clamp(1.75rem,4vw,2.75rem)] leading-none">
            {phrase}
          </span>
          <span aria-hidden="true" className="text-[clamp(1.75rem,4vw,2.75rem)] leading-none opacity-40">
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
      <div className="nova-marquee-track" role="presentation">
        {row}
        {row}
      </div>
    </div>
  )
}
