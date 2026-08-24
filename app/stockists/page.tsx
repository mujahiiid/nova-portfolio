import type { Metadata } from 'next'
import { LegalPage } from '@/components/nova/legal-page'

export const metadata: Metadata = { title: 'Stockists' }

export default function StockistsPage() {
  return <LegalPage eyebrow="NOVA Studio / Cairo" title="Stockists"><p>NOVA is a fictional portfolio fashion studio and Collection 06 is not currently distributed through retail stockists.</p><p>For exhibition, editorial or portfolio enquiries, contact <a className="underline underline-offset-4" href="mailto:studio@novawear.com">studio@novawear.com</a>.</p></LegalPage>
}
