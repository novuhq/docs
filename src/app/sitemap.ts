import { baseUrl } from '@/lib/metadata';
import { source } from '@/lib/source';
import type { MetadataRoute } from 'next';

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString();
  const pages = await Promise.all(
    source.getPages().map(async (page) => {
      const { lastModified } = await page.data;

      return {
        url: url(page.url),
        lastModified: lastModified ? new Date(lastModified) : undefined,
        changeFrequency: 'weekly',
        priority: 0.5,
      } as MetadataRoute.Sitemap[number];
    })
  );

  return [
    {
      url: url('/'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...pages.filter((page) => page.url !== url('/')),
  ];
}
