import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';

/**
 * Renders a docs page `description` string as Markdown (bold, fenced code, GFM, etc.).
 * Used for API reference and other pages where frontmatter description contains Markdown.
 *
 * For OG images, meta tags, and JSON-LD, use `plainTextFromMarkdownDescription` from
 * `@/lib/plain-text-description` so markup is not shown literally.
 */
export function MarkdownDescription({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  if (!children.trim()) {
    return null;
  }

  return (
    <div
      className={cn(
        'mb-8 w-full max-w-none text-lg text-fd-muted-foreground prose prose-lg dark:prose-invert prose-p:my-2 prose-pre:my-2 prose-code:before:content-none prose-code:after:content-none',
        className
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
