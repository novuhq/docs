import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://docs.novu.co',
      images: '/banner.png',
      siteName: 'Novu Documentation',
      ...override.openGraph,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.VERCEL_URL
    ? new URL('https://docs.novu.co')
    : new URL(`https://${process.env.VERCEL_URL}`);
