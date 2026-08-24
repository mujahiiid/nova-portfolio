import type { Metadata } from 'next'
import { LegalPage } from '@/components/nova/legal-page'

export const metadata: Metadata = { title: 'Care Guide' }

export default function CareGuidePage() {
  return <LegalPage eyebrow="Collection 06 / Garment Care" title="Care Guide"><p>Wool pieces should be brushed between wears, aired naturally and dry-cleaned only when necessary. Store structured jackets and coats on broad hangers.</p><p>Cotton poplin and twill may be washed cold on a gentle cycle. Air dry, reshape while damp and steam lightly from the reverse.</p><p>Always follow the garment-specific care label when it differs from these general notes.</p></LegalPage>
}
