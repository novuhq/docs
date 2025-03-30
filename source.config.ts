import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import { remarkInstall } from 'fumadocs-docgen';
import { defineConfig, defineDocs, frontmatterSchema, metaSchema } from 'fumadocs-mdx/config';
import { transformerTwoslash } from 'fumadocs-twoslash';
import remarkDirective from 'remark-directive';
import { z } from 'zod';
import { remarkTooltip } from './src/lib/remark-tooltip';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema.extend({
      preview: z.string().optional(),
      index: z.boolean().default(false),
      pageTitle: z.string().optional(),
      /**
       * API routes only
       */
      method: z.string().optional(),
    }),
  },
  meta: {
    schema: metaSchema.extend({
      description: z.string().optional(),
      pageTitle: z.string().optional(),
    }),
  },
});

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {
    rehypeCodeOptions: {
      lazy: true,
      experimentalJSEngine: true,
      langs: [
        'ts',
        'js',
        'html',
        'tsx',
        'mdx',
        'json',
        'bash',
        'php',
        'csharp',
        'python',
        'ruby',
        'go',
        'java',
        'kotlin',
        'swift',
      ],

      inline: 'tailing-curly-colon',
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
        {
          name: 'transformers:remove-notation-escape',
          preprocess(code: string) {
            return code;
          },
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>

          code(hast: any) {
            for (const line of hast.children) {
              if (line.type !== 'element') continue;

              const lastSpan = line.children.findLast(
                (v: { type: string }) => v.type === 'element'
              );

              const head = lastSpan?.children[0];
              if (head?.type !== 'text') return;

              head.value = head.value.replace(/\[\\!code/g, '[!code');
            }
          },
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        } as any,
      ],
    },
    remarkPlugins: [
      remarkDirective,
      remarkTooltip,
      [remarkInstall, { persist: { id: 'package-manager' } }],
    ],
  },
});
