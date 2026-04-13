import type { InferPageType } from 'fumadocs-core/source';
import { fileGenerator, remarkDocGen, remarkInstall } from 'fumadocs-docgen';
import { remarkInclude } from 'fumadocs-mdx/config';
import { remarkAutoTypeTable } from 'fumadocs-typescript';
import matter from 'gray-matter';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkStringify from 'remark-stringify';
import type { source } from './source';

const processor = remark()
  .use(remarkMdx)
  .use(remarkInclude)
  .use(remarkGfm)
  .use(remarkAutoTypeTable)
  .use(remarkDocGen, { generators: [fileGenerator()] })
  .use(remarkInstall, { persist: { id: 'package-manager' } })
  .use(remarkStringify);

export async function getLLMText(page: InferPageType<typeof source>) {
  const filePath = path.join(process.cwd(), 'content', 'docs', page.file.path);

  let body = '';
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const { content } = matter(raw);
    const processed = await processor.process({ path: filePath, value: content });
    body = String(processed);
  } catch (err) {
    console.error(`[llm-text] failed to process ${page.file.path}:`, err);
  }

  const title = page.data.pageTitle ?? page.data.title;
  const description = typeof page.data.description === 'string' ? page.data.description : '';

  return `# ${title} (${page.url})\n\n${description}\n\n${body}`;
}
