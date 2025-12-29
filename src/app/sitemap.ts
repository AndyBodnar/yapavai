import type { MetadataRoute } from 'next';
import { serviceAreaLinks } from '@/data/service-areas';

const baseUrl = 'https://yavapaiwastesolutions.com';

const staticRoutes = [
  { path: '', priority: 1 },
  { path: '/about', priority: 0.7 },
  { path: '/blog', priority: 0.7 },
  { path: '/blog/2026-clean-start', priority: 0.6 },
  { path: '/contact', priority: 0.7 },
  { path: '/privacy', priority: 0.3 },
  { path: '/quote', priority: 0.8 },
  { path: '/service-areas', priority: 0.8 },
  { path: '/services', priority: 0.8 },
  { path: '/services/commercial', priority: 0.6 },
  { path: '/services/construction', priority: 0.6 },
  { path: '/services/roll-off-dumpsters', priority: 0.7 },
  { path: '/terms', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.path === '' ? 'weekly' : 'monthly',
    priority: route.priority,
  }));

  const serviceAreaPages: MetadataRoute.Sitemap = serviceAreaLinks.map((area) => ({
    url: `${baseUrl}/service-areas/${area.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...pages, ...serviceAreaPages];
}
