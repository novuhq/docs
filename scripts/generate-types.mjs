import { createGenerator, generateFiles } from 'fumadocs-typescript';
import * as path from 'node:path';

const generator = createGenerator();

void generateFiles(generator, {
  input: ['./content/docs/**/*.model.mdx'],
  options: {
    templates: {
      block: (props) => {
        const typeObj = {};

        for (const entry of props.entries || []) {
          typeObj[entry.name] = {
            description: entry.description || '',
            type: entry.type,
            ...(entry.tags?.default ? { default: entry.tags.default } : {}),
          };
        }

        return `<TypeTable name="${props.name}" type={${JSON.stringify(typeObj, null, 2)}} />`;
      },
    },
  },
  // Rename x.model.mdx to x.mdx
  output: (file) => path.resolve(path.dirname(file), `${path.basename(file).split('.')[0]}.mdx`),
});
