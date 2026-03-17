import { createGenerator } from 'fumadocs-typescript';
import * as path from 'node:path';
import * as fs from 'node:fs';
import fg from 'fast-glob';

const generator = createGenerator();

async function processModelFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const outputLines = [];
  let i = 0;

  while (i < lines.length) {
    if (lines[i].trim() === '---type-table---') {
      const refLine = lines[i + 1]?.trim();
      const endLine = lines[i + 2]?.trim();

      if (refLine && endLine === '---end---') {
        const [refPath, typeName] = refLine.split('#');
        const resolvedPath = path.resolve(path.dirname(filePath), refPath);

        try {
          const docs = await generator.generateDocumentation(
            { path: resolvedPath },
            typeName,
          );

          for (const doc of docs) {
            const typeObj = {};
            for (const entry of doc.entries || []) {
              typeObj[entry.name] = {
                description: entry.description || '',
                type: entry.type,
                ...(entry.tags?.find(t => t.name === 'default')
                  ? { default: entry.tags.find(t => t.name === 'default').text }
                  : {}),
              };
            }
            outputLines.push(
              `<TypeTable name="${doc.name}" type={${JSON.stringify(typeObj, null, 2)}} />`
            );
          }
        } catch (err) {
          console.warn(`Warning: Could not generate types for ${refPath}#${typeName}: ${err.message}`);
          outputLines.push(`{/* Failed to generate TypeTable for ${refPath}#${typeName} */}`);
        }

        i += 3;
        continue;
      }
    }

    outputLines.push(lines[i]);
    i++;
  }

  const outputPath = path.resolve(
    path.dirname(filePath),
    `${path.basename(filePath).split('.')[0]}.mdx`
  );

  fs.writeFileSync(outputPath, outputLines.join('\n'));
  console.log(`Generated: ${outputPath}`);
}

async function main() {
  const files = await fg(['./content/docs/**/*.model.mdx']);

  for (const file of files) {
    await processModelFile(file);
  }
}

main().catch(console.error);
