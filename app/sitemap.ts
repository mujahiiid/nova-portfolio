import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, priority: 1, changeFrequency: 'monthly' },
    { url: `${baseUrl}/journal`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/client-services`, priority: 0.4, changeFrequency: 'yearly' },
    { url: `${baseUrl}/shipping-returns`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/size-guide`, priority: 0.4, changeFrequency: 'yearly' },
    { url: `${baseUrl}/care-guide`, priority: 0.4, changeFrequency: 'yearly' },
    { url: `${baseUrl}/stockists`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/privacy`, priority: 0.2, changeFrequency: 'yearly' },
    { url: `${baseUrl}/terms`, priority: 0.2, changeFrequency: 'yearly' },
  ]
}
