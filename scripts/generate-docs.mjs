import * as OpenAPI from 'fumadocs-openapi';
import { rimrafSync } from 'rimraf';

const out = './content/docs/api-reference';

async function main() {
  // clean generated files
  rimrafSync(out, {
    filter(v) {
      return (
        !v.endsWith('index.mdx') &&
        !v.endsWith('meta.json') &&
        !v.endsWith('overview.mdx') &&
        !v.endsWith('rate-limiting.mdx')
      );
    },
  });

  // Generate files
  await OpenAPI.generateFiles({
    input: ['https://spec.speakeasy.com/novu/novu/json-development-with-code-samples'],
    output: out,
    groupBy: 'tag',
    per: 'operation',
    includeDescription: true,
  });
}

main().catch(console.error);
