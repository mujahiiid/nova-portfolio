import type { Metadata } from 'next'
import { LegalPage } from '@/components/nova/legal-page'

export const metadata: Metadata = { title: 'Privacy' }

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Last updated — August 2026" title="Privacy">
      <p>This portfolio website validates newsletter email addresses in the browser for demonstration purposes. It does not store or transmit the submitted address.</p>
      <p>Basic aggregate performance information may be processed by the hosting platform. NOVA does not sell personal information.</p>
      <p>You may ask to access or remove your information at any time by emailing <a className="underline underline-offset-4" href="mailto:studio@novawear.com">studio@novawear.com</a>.</p>
    </LegalPage>
  )
}
