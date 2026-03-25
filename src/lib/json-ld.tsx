type JsonLdData = Record<string, unknown>;

export function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function JsonLdGraph({ items }: { items: JsonLdData[] }) {
  if (items.length === 0) return null;
  const cleaned = items.map(({ '@context': _, ...rest }) => rest);
  const graph = { '@context': 'https://schema.org', '@graph': cleaned };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

const SITE_URL = 'https://docs.novu.co';

export function buildOrganizationSchema(): JsonLdData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Novu',
    url: 'https://novu.co',
    logo: `${SITE_URL}/banner.png`,
    sameAs: ['https://github.com/novuhq/novu', 'https://twitter.com/novuhq'],
  };
}

export function buildWebSiteSchema(): JsonLdData {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Novu Documentation',
    url: SITE_URL,
  };
}

export function buildArticleSchema({
  title,
  description,
  dateModified,
  url,
  slug,
}: {
  title: string;
  description?: string;
  dateModified?: string;
  url: string;
  slug?: string;
}): JsonLdData {
  const ogImage = slug ? `${SITE_URL}/docs-og/${slug}/image.png` : `${SITE_URL}/banner.png`;

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description: description ?? '',
    url: `${SITE_URL}${url}`,
    image: ogImage,
    datePublished: dateModified ?? '2024-01-01T00:00:00Z',
    ...(dateModified && { dateModified }),
    author: {
      '@type': 'Organization',
      name: 'Novu',
      url: 'https://novu.co',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Novu',
      url: 'https://novu.co',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo/standalone-gradient.svg`,
      },
    },
  };
}

export function buildVideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  embedUrl,
  contentUrl,
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  embedUrl: string;
  contentUrl: string;
}): JsonLdData {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    embedUrl,
    contentUrl,
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]): JsonLdData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function buildFaqSchema(items: { question: string; answer: string }[]): JsonLdData {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
