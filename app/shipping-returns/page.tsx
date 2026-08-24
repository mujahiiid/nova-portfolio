import type { Metadata } from 'next'
import { LegalPage } from '@/components/nova/legal-page'

export const metadata: Metadata = { title: 'Shipping & Returns' }

export default function ShippingReturnsPage() {
  return <LegalPage eyebrow="NOVA Studio / Client Services" title="Shipping & Returns"><p>Collection 06 is presented as a fictional portfolio project and is not currently available for online purchase. No payment or shipping information is collected by this website.</p><p>For a future production release, delivery timing, duties and return eligibility would be confirmed before an order is accepted.</p></LegalPage>
}
