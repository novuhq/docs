import { generateFiles } from 'fumadocs-openapi';
import { createOpenAPI } from 'fumadocs-openapi/server';
import { rimrafSync } from 'rimraf';
import * as path from 'node:path';

const out = './content/docs/api-reference';

function slugify(text) {
  if (!text) return '';

  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

async function main() {
  rimrafSync(out, {
    filter(v) {
      const relativePath = path.relative(out, v);

      return (
        !relativePath.endsWith('index.mdx') &&
        !relativePath.endsWith('overview.mdx') &&
        !relativePath.endsWith('rate-limiting.mdx') &&
        !relativePath.endsWith('payload-limits.mdx') &&
        !relativePath.endsWith('idempotency.mdx') &&
        !relativePath.endsWith('meta.json') &&
        !relativePath.endsWith('model.mdx') &&
        !relativePath.endsWith('api-types.ts')
      );
    },
  });

  const openapi = createOpenAPI({
    input: ['https://spec.speakeasy.com/novu/novu/json-development-with-code-samples'],
  });

  await generateFiles({
    input: openapi,
    output: out,
    per: 'operation',
    groupBy: 'tag',
    includeDescription: true,
    frontmatter: (title, description) => ({
      title,
      description,
    }),
    name: {
      algorithm: 'v1',
    },
  });
}

main().catch(console.error);
