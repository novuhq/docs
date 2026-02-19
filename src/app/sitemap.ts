import { baseUrl } from '@/lib/metadata';
import { source } from '@/lib/source';
import type { MetadataRoute } from 'next';

export const revalidate = false;

const HIGH_PRIORITY_PATHS = [
  '/platform',
  '/platform/inbox',
  '/platform/workflow',
  '/platform/integrations',
  '/platform/quickstart/react',
  '/framework',
  '/api-reference',
  '/guides',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString();

  const docPages = await Promise.all(
    source.getPages().map(async (page) => {
      const { lastModified } = await page.data;
      const isHighPriority = HIGH_PRIORITY_PATHS.includes(page.url);

      return {
        url: url(page.url),
        lastModified: lastModified ? new Date(lastModified) : undefined,
        changeFrequency: 'weekly' as const,
        priority: isHighPriority ? 0.9 : 0.5,
      } satisfies MetadataRoute.Sitemap[number];
    })
  );

  return [
    {
      url: url('/'),
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    ...docPages,
  ];
}
