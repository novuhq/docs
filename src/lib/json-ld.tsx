type JsonLdData = Record<string, unknown>;

export function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
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
}: {
  title: string;
  description?: string;
  dateModified?: string;
  url: string;
}): JsonLdData {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description: description ?? '',
    url: `${SITE_URL}${url}`,
    ...(dateModified && { dateModified }),
    publisher: {
      '@type': 'Organization',
      name: 'Novu',
    },
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
