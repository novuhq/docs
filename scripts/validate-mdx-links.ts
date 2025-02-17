import chalk from 'chalk';
import fs from 'fs';
import { globSync } from 'glob';
import path from 'path';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

interface BrokenLink {
  filePath: string;
  link: string;
  line: number;
}

const DOCS_DIR = 'content/docs';
const brokenLinks: BrokenLink[] = [];

// Helper to extract line number from position
function getLineNumber(content: string, index: number): number {
  return content.slice(0, index).split('\n').length;
}

// Check if a link exists
function validateLink(link: string, currentFile: string): boolean {
  if (link.startsWith('http')) return true; // Skip external links
  if (link.startsWith('#')) return true; // Skip anchor links

  const basePath = path.dirname(currentFile);
  let targetPath = link;

  // Remove any hash fragments
  targetPath = targetPath.split('#')[0];

  // Handle root-relative paths
  if (targetPath.startsWith('/')) {
    targetPath = path.join(DOCS_DIR, targetPath.slice(1));
  } else {
    targetPath = path.join(basePath, targetPath);
  }

  // Add .mdx extension if no extension present
  if (!path.extname(targetPath)) {
    targetPath += '.mdx';
  }

  return fs.existsSync(targetPath);
}

async function validateFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const file = await unified().use(remarkParse).use(remarkMdx).parse(content);

  visit(file, ['link', 'mdxJsxFlowElement'], (node: any) => {
    let link: string | null = null;

    if (node.type === 'link') {
      link = node.url;
    } else if (node.name === 'Card' || node.name === 'Link') {
      const hrefAttr = node.attributes?.find((attr: any) => attr.name === 'href');
      if (hrefAttr) {
        link = hrefAttr.value;
      }
    }

    if (link && !validateLink(link, filePath)) {
      brokenLinks.push({
        filePath,
        link,
        line: getLineNumber(content, node.position.start.offset),
      });
    }
  });
}

async function main() {
  const mdxFiles = globSync(`${DOCS_DIR}/**/*.mdx`);

  console.log(chalk.blue(`\nValidating ${mdxFiles.length} MDX files...\n`));

  for (const file of mdxFiles) {
    await validateFile(file);
  }

  if (brokenLinks.length > 0) {
    console.log(chalk.red('\nFound broken links:'));
    brokenLinks.forEach(({ filePath, link, line }) => {
      console.log(chalk.yellow(`\nFile: ${filePath}:${line}`), `\nBroken link: ${link}\n`);
    });
    process.exit(1);
  } else {
    console.log(chalk.green('\nNo broken links found! ✨\n'));
  }
}

main().catch(console.error);
