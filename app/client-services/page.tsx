import type { Metadata } from 'next'
import { LegalPage } from '@/components/nova/legal-page'

export const metadata: Metadata = { title: 'Client Services' }

export default function ClientServicesPage() {
  return <LegalPage eyebrow="NOVA Studio / Client Services" title="How can we help?"><p>For availability, sizing, press loans and collection appointments, contact the studio at <a className="underline underline-offset-4" href="mailto:studio@novawear.com">studio@novawear.com</a>.</p><p>Studio correspondence is answered Monday–Friday, 10:00–18:00 Cairo time. Include the product name and preferred size so we can respond clearly.</p></LegalPage>
}
