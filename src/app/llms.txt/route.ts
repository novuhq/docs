import { source } from '@/lib/source';
import { plainTextFromMarkdownDescription } from '@/lib/plain-text-description';

export const revalidate = false;

const SECTION_LABELS: Record<string, string> = {
  platform: 'Platform',
  framework: 'Framework',
  community: 'Community',
  'api-reference': 'API Reference',
  guides: 'Guides',
};

export function GET() {
  const pages = source.getPages();

  const bySection = new Map<string, typeof pages>();
  for (const page of pages) {
    const section = page.slugs[0] ?? 'other';
    const list = bySection.get(section) ?? [];
    list.push(page);
    bySection.set(section, list);
  }

  const lines: string[] = ['# Novu Documentation', '', '> Notification infrastructure for developers.', ''];

  for (const [section, items] of bySection) {
    lines.push(`## ${SECTION_LABELS[section] ?? section}`, '');
    items.sort((a, b) => a.url.localeCompare(b.url));
    for (const page of items) {
      const title = page.data.pageTitle ?? page.data.title;
      const rawDesc =
        typeof page.data.description === 'string' ? page.data.description : '';
      const desc = plainTextFromMarkdownDescription(rawDesc) ?? '';
      lines.push(desc ? `- [${title}](${page.url}): ${desc}` : `- [${title}](${page.url})`);
    }
    lines.push('');
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
