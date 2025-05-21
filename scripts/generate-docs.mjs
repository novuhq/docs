import * as OpenAPI from 'fumadocs-openapi';
import { rimrafSync } from 'rimraf';
import { mkdir, writeFile } from 'node:fs/promises';
import * as path from 'node:path';

const out = './content/docs/api-reference';

// Helper function for slugifying
function slugify(text) {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-'); // Replace multiple - with single -
}

async function main() {
  // clean generated files
  rimrafSync(out, {
    filter(v) {
      const relativePath = path.relative(out, v);
      return (
        !relativePath.endsWith('index.mdx') && // Preserves top-level index.mdx if any
        !relativePath.endsWith('overview.mdx') &&
        !relativePath.endsWith('rate-limiting.mdx') &&
        !relativePath.endsWith('meta.json') &&
        !relativePath.endsWith('model.mdx') &&
        !relativePath.endsWith('api-types.ts')
      );
    },
  });

  const docsOutputPath = out; // './content/docs/api-reference'
  const openApiInput = ['https://spec.speakeasy.com/novu/novu/json-development-with-code-samples']; // Or your actual input

  const pages = await OpenAPI.generatePages(openApiInput[0], {
    includeDescription: true,
  });

  // Structure to hold metadata for each tag: Map<tagSlug, Record<operationSlug, operationTitle>>
  const tagsMeta = new Map();

  for (const page of pages) {
    if (page.type === 'operation' && page.operation.summary) {
      let tagName = 'unknown';
      if (page.operation.tags && page.operation.tags.length > 0) {
        tagName = page.operation.tags[0];
      }
      const tagSlug = slugify(tagName);

      const operationSummary = page.operation.summary; // Keep original summary for title
      const operationSummarySlug = slugify(operationSummary);

      if (!operationSummarySlug) {
        console.warn(
          `Skipping operation with empty slug from summary: ${operationSummary} (method: ${page.operation.method}, path: ${page.item.path})`
        );
        continue;
      }

      // Ensure the entry for this tag exists in tagsMeta
      if (!tagsMeta.has(tagSlug)) {
        tagsMeta.set(tagSlug, {});
      }

      // Add/update the operation's metadata for this tag
      const currentTagMeta = tagsMeta.get(tagSlug);
      currentTagMeta[operationSummarySlug] = operationSummary; // Map slug to original summary for title

      const relativeFilePath = path.join(tagSlug, `${operationSummarySlug}.mdx`);
      const absoluteFilePath = path.join(docsOutputPath, relativeFilePath);

      await mkdir(path.dirname(absoluteFilePath), { recursive: true });
      await writeFile(absoluteFilePath, page.content);
      console.log(`Generated MDX: ${absoluteFilePath}`);
    }
  }
}

main().catch(console.error);
