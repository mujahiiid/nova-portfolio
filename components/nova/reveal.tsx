'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  /** "mask" wipes an image in from the bottom, "rise" fades + translates */
  variant?: 'rise' | 'mask'
  as?: 'div' | 'span' | 'li' | 'figure' | 'section' | 'header'
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = 'rise',
  as = 'div',
}: RevealProps) {
  const Tag = as as React.ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin: '12% 0px 12% 0px', threshold: 0.01 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      data-visible={visible ? 'true' : 'false'}
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
      className={cn(variant === 'mask' ? 'nova-mask-observer' : 'nova-reveal', className)}
    >
      {variant === 'mask' ? <div className="nova-img-mask-inner">{children}</div> : children}
    </Tag>
  )
}
