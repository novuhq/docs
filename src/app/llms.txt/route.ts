import fg from 'fast-glob';
import { fileGenerator, remarkDocGen, remarkInstall } from 'fumadocs-docgen';
import { remarkInclude } from 'fumadocs-mdx/config';
import { remarkAutoTypeTable } from 'fumadocs-typescript';
import matter from 'gray-matter';
import * as fs from 'node:fs/promises';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkStringify from 'remark-stringify';

export const revalidate = false;

const processor = remark()
  .use(remarkMdx)
  .use(remarkInclude)
  .use(remarkGfm)
  .use(remarkAutoTypeTable)
  .use(remarkDocGen, { generators: [fileGenerator()] })
  .use(remarkInstall, { persist: { id: 'package-manager' } })
  .use(remarkStringify);

export async function GET() {
  const files = await fg(['./content/docs/**/*.mdx', '!./content/docs/openapi/**/*']);

  const scan = files.map(async (file) => {
    const fileContent = await fs.readFile(file);
    const { content, data } = matter(fileContent.toString());

    const processed = await processor.process({
      path: file,
      value: content,
    });
    return `file: ${file}
# ${data.title}

${data.description}
        
${processed}`;
  });

  const scanned = await Promise.all(scan);

  return new Response(scanned.join('\n\n'));
}
