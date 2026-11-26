import { MetadataRoute } from 'next';
import { ARTICLES } from '@/lib/articles';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: SITE.url, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${SITE.url}/servicios`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${SITE.url}/ds44`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${SITE.url}/plataforma`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SITE.url}/recursos`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        ...ARTICLES.map((a) => ({
            url: `${SITE.url}/recursos/${a.slug}`,
            lastModified: new Date(a.date),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
    ];
}
