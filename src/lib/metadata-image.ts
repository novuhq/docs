import type { Metadata } from 'next';
import { source } from '@/lib/source';

function getImageUrl(slugs: string[]): string {
  return `/docs-og/${slugs.join('/')}`;
}

export const metadataImage = {
  withImage(slugs: string[], metadata: Metadata): Metadata {
    return {
      ...metadata,
      openGraph: {
        images: getImageUrl(slugs),
        ...metadata.openGraph,
      },
    };
  },

  getImageUrl,

  generateParams() {
    return source.getPages().map((page) => ({
      slug: page.slugs,
    }));
  },
};
