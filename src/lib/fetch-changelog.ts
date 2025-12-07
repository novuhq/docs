import { cache } from 'react';

export interface ChangelogData {
  content: string;
  lastUpdated: string;
  headings: { level: number; text: string; id: string }[];
}

/**
 * Fetches the changelog from GitHub's raw content URL
 * Cached and revalidated every hour for optimal performance
 */
export const fetchChangelog = cache(async (): Promise<ChangelogData> => {
  try {
    // Use raw.githubusercontent.com for direct markdown access
    const url = 'https://raw.githubusercontent.com/novuhq/novu/next/packages/react/CHANGELOG.md';

    const response = await fetch(url, {
      next: {
        // Revalidate every hour (3600 seconds)
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch changelog: ${response.status}`);
    }

    const content = await response.text();
    const headings = extractHeadings(content);

    return {
      content,
      lastUpdated: new Date().toISOString(),
      headings,
    };
  } catch (error) {
    console.error('Error fetching changelog:', error);
    return {
      content:
        '# Changelog\n\nFailed to load changelog. Please visit [GitHub](https://github.com/novuhq/novu/blob/next/packages/react/CHANGELOG.md) to view the latest changes.',
      lastUpdated: new Date().toISOString(),
      headings: [],
    };
  }
});

function extractHeadings(markdown: string): { level: number; text: string; id: string }[] {
  const headings: { level: number; text: string; id: string }[] = [];
  const lines = markdown.split('\n');

  for (const line of lines) {
    if (line.startsWith('### ')) {
      const text = line.slice(4).trim();
      headings.push({ level: 3, text, id: generateId(text) });
    } else if (line.startsWith('## ')) {
      const text = line.slice(3).trim();
      headings.push({ level: 2, text, id: generateId(text) });
    } else if (line.startsWith('# ')) {
      const text = line.slice(2).trim();
      headings.push({ level: 1, text, id: generateId(text) });
    }
  }

  return headings;
}

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
