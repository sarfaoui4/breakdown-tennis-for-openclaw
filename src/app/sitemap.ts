import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://breakdown-tennis-for-openclaw.vercel.app'

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/auth/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/auth/register`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  const blogArticles = [
    {
      slug: 'erreurs-tennis',
      title: 'Les 3 erreurs les plus courantes au tennis',
      date: '2025-02-21',
    },
    {
      slug: 'analyse-video-guide',
      title: 'Comment analyser son jeu vidéo',
      date: '2025-02-15',
    },
    {
      slug: 'ameliorer-service-tennis',
      title: 'Comment améliorer son service au tennis',
      date: '2025-02-28',
    },
    {
      slug: 'technique-revers-complet',
      title: 'La technique du revers complet',
      date: '2025-02-28',
    },
  ]

  const blogRoutes = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...routes, ...blogRoutes]
}
