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

/** Max characters for OG image body copy (title is large; footer reserves space for the logo). */
export const OG_IMAGE_DESCRIPTION_MAX_LENGTH = 200;

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
