import type { Metadata } from 'next'
import { LegalPage } from '@/components/nova/legal-page'

export const metadata: Metadata = { title: 'Terms' }

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Last updated — August 2026" title="Terms">
      <p>This site presents NOVA Collection 06 and its editorial materials. Content is provided for general information and may be updated without notice.</p>
      <p>All NOVA names, campaign images, garment designs, and written material are reserved to NOVA Studio unless otherwise stated. They may not be republished for commercial use without permission.</p>
      <p>For product, press, or rights enquiries, contact <a className="underline underline-offset-4" href="mailto:studio@novawear.com">studio@novawear.com</a>.</p>
    </LegalPage>
  )
}
