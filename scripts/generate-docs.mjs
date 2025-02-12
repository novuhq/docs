import { writeFileSync } from 'fs';
import * as OpenAPI from 'fumadocs-openapi';
import { rimrafSync } from 'rimraf';

const out = './content/docs/api-reference';
const SPEC_URL = 'https://spec.speakeasy.com/novu/novu/json-development-with-code-samples';

async function main() {
  // Fetch the OpenAPI spec
  const response = await fetch(SPEC_URL);
  const spec = await response.json();
  
  // Save it to disk
  writeFileSync('./openapi.json', JSON.stringify(spec, null, 2));

  // clean generated files
  rimrafSync(out, {
    filter(v) {
      return !v.endsWith('index.mdx') && !v.endsWith('meta.json') && !v.endsWith('overview.mdx') && !v.endsWith('rate-limiting.mdx');
    },
  });

  // Generate files
  await OpenAPI.generateFiles({
    input: ['./openapi.json'],
    output: out,
    groupBy: 'tag',
    per: 'operation',
  });
}

main().catch(console.error);
