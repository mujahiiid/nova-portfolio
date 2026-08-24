'use client'

import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [lastEmail, setLastEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'empty' | 'invalid' | 'joined' | 'already'>('idle')

  const feedback = {
    idle: 'No noise. Unsubscribe anytime.',
    empty: 'Enter your email to join the NOVA list.',
    invalid: 'Enter a valid email address, such as name@example.com.',
    joined: 'Email validated for this portfolio demo. No personal data was stored.',
    already: 'This email has already been validated during your current visit.',
  }[status]

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="nova-section-shell nova-section-compact border-b border-foreground/20"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-6">
          <p className="label mb-4 text-muted-foreground">05 / Newsletter</p>
          <h2 id="newsletter-heading" className="display type-section">
            Stay
            <br />
            <span className="text-[var(--blaze)]">Unexpected.</span>
          </h2>
        </div>

        <div className="md:col-span-5 md:col-start-8 md:pt-4">
          <p className="nova-copy max-w-[34ch]">
            New collections, campaigns, and things worth seeing.
          </p>

          <form
            className="mt-8"
            noValidate
            onSubmit={(e) => {
              e.preventDefault()
              const normalized = email.trim()
              if (!normalized) {
                setStatus('empty')
                return
              }
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
                setStatus('invalid')
                return
              }
              if (normalized.toLowerCase() === lastEmail) {
                setStatus('already')
                return
              }
              setLastEmail(normalized.toLowerCase())
              setStatus('joined')
              setEmail('')
            }}
          >
            <label htmlFor="nova-email" className="label mb-2 block text-muted-foreground">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="nova-email"
                type="email"
                aria-describedby="nova-email-feedback"
                aria-invalid={status === 'empty' || status === 'invalid'}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status !== 'idle') setStatus('idle')
                }}
                placeholder="name@example.com"
                className="label w-full border-b border-foreground/40 bg-transparent px-0 py-4 text-sm tracking-[0.12em] placeholder:text-muted-foreground focus:border-foreground focus:outline-none aria-invalid:border-[var(--blaze)] sm:flex-1"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 bg-[var(--blaze)] px-8 py-4 text-[var(--cream)] transition-colors hover:bg-[var(--ink)]"
              >
                <span className="label">Join</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
            <p
              id="nova-email-feedback"
              aria-live="polite"
              className={`label mt-4 leading-relaxed ${status === 'empty' || status === 'invalid' ? 'text-[var(--blaze)]' : 'text-muted-foreground'}`}
            >
              {feedback}
            </p>
            <a href="/privacy" className="label mt-3 inline-flex min-h-11 items-center text-muted-foreground underline underline-offset-4 hover:text-foreground">Privacy</a>
          </form>
        </div>
      </div>
    </section>
  )
}
