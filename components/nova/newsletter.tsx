'use client'

import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="border-y border-foreground/20 px-4 py-20 md:px-8 md:py-32"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-6">
          <h2 id="newsletter-heading" className="display text-[14vw] leading-[0.85] md:text-[7vw]">
            Stay
            <br />
            <span className="text-[var(--blaze)]">Unexpected.</span>
          </h2>
        </div>

        <div className="md:col-span-5 md:col-start-8 md:pt-4">
          <p className="max-w-[34ch] text-base leading-relaxed">
            New collections, campaigns, and things worth seeing.
          </p>

          <form
            className="mt-8"
            onSubmit={(e) => {
              e.preventDefault()
              if (!email) return
              setJoined(true)
              setEmail('')
            }}
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="nova-email" className="sr-only">
                Your email
              </label>
              <input
                id="nova-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="label w-full border-b border-foreground/40 bg-transparent px-0 py-4 text-sm tracking-[0.12em] placeholder:text-muted-foreground focus:border-foreground focus:outline-none sm:flex-1"
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
            <p aria-live="polite" className="label mt-4 text-muted-foreground">
              {joined ? 'Welcome to NOVA. Check your inbox.' : 'No noise. Unsubscribe anytime.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
