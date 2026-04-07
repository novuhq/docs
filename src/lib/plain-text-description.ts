/**
 * Turns frontmatter `description` strings (often Markdown from OpenAPI) into plain text
 * for meta tags, Open Graph, Twitter cards, and JSON-LD. The visible page still uses
 * full Markdown via `MarkdownDescription`.
 */
export function plainTextFromMarkdownDescription(input: string | undefined): string | undefined {
  if (input == null || typeof input !== 'string') {
    return undefined;
  }

  let s = input.trim();
  if (!s) {
    return undefined;
  }

  // Fenced code blocks (``` ... ```)
  s = s.replace(/```[\s\S]*?```/g, ' ');

  // Inline code `...`
  s = s.replace(/`([^`]+)`/g, '$1');

  // Links and images: [text](url), ![alt](url)
  s = s.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1');
  s = s.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');

  // Bold / italic (common GFM patterns)
  s = s.replace(/\*\*([^*]+)\*\*/g, '$1');
  s = s.replace(/__([^_]+)__/g, '$1');
  s = s.replace(/\*([^*]+)\*/g, '$1');

  // Strikethrough
  s = s.replace(/~~([^~]+)~~/g, '$1');

  // ATX headings at line start
  s = s.replace(/^#{1,6}\s+/gm, '');

  // Blockquotes
  s = s.replace(/^>\s?/gm, '');

  // List markers
  s = s.replace(/^[\s]*[-*+]\s+/gm, '');

  s = s.replace(/\s+/g, ' ').trim();
  return s || undefined;
}

/** Max characters for OG image body copy. Satori often ignores CSS overflow; stay within ~3 lines at OG font size. */
export const OG_IMAGE_DESCRIPTION_MAX_LENGTH = 85;

/** Long titles steal vertical space from the description; keep a single line when possible. */
export const OG_IMAGE_TITLE_MAX_LENGTH = 48;

/**
 * Plain text + length limit for `/docs-og` renders only. Keeps summaries from overlapping
 * the Novu mark. Meta tags and JSON-LD still use the full `plainTextFromMarkdownDescription`.
 */
export function descriptionForOgImage(input: string | undefined): string | undefined {
  const plain = plainTextFromMarkdownDescription(input);
  if (!plain) {
    return undefined;
  }

  const max = OG_IMAGE_DESCRIPTION_MAX_LENGTH;
  if (plain.length <= max) {
    return plain;
  }

  let cut = plain.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  if (lastSpace > max * 0.55) {
    cut = cut.slice(0, lastSpace);
  }

  return `${cut.trimEnd()}…`;
}

/**
 * Short title for OG PNG only (full title remains in HTML meta).
 */
export function titleForOgImage(title: string | undefined): string {
  if (title == null || typeof title !== 'string') {
    return 'Novu';
  }
  const t = title.trim();
  if (!t) {
    return 'Novu';
  }
  const max = OG_IMAGE_TITLE_MAX_LENGTH;
  if (t.length <= max) {
    return t;
  }
  let cut = t.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  if (lastSpace > max * 0.45) {
    cut = cut.slice(0, lastSpace);
  }
  return `${cut.trimEnd()}…`;
}
