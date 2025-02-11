import { defineDocs, frontmatterSchema, metaSchema } from "fumadocs-mdx/config";
import { z } from "zod";

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      preview: z.string().optional(),
      index: z.boolean().default(false),
      sidebarTitle: z.string().optional(),
      /**
       * API routes only
       */
      method: z.string().optional(),
    }),
  },
  meta: {
    schema: metaSchema.extend({
      description: z.string().optional(),
    }),
  },
});
