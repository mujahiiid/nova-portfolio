import type { Metadata } from 'next'
import { LegalPage } from '@/components/nova/legal-page'

export const metadata: Metadata = { title: 'Size Guide' }

export default function SizeGuidePage() {
  return <LegalPage eyebrow="Collection 06 / Fit Notes" title="Size Guide"><p>NOVA silhouettes are intentionally oversized. Choose your usual size for the intended volume, or one size down for a closer fit.</p><div className="overflow-x-auto"><table className="w-full border-collapse text-left"><thead><tr className="border-b border-foreground/30"><th className="label py-3">Size</th><th className="label py-3">Chest</th><th className="label py-3">Waist</th><th className="label py-3">Hip</th></tr></thead><tbody>{[['XS','82–86','64–68','88–92'],['S','87–91','69–73','93–97'],['M','92–98','74–80','98–104'],['L','99–105','81–87','105–111']].map(row=><tr key={row[0]} className="border-b border-foreground/15">{row.map(cell=><td key={cell} className="py-3">{cell}{cell !== row[0] ? ' cm' : ''}</td>)}</tr>)}</tbody></table></div><p>For individual garment measurements, email the studio with the product name and your preferred fit.</p></LegalPage>
}
