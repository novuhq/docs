import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export function getRawMarkdownContent(filePath: string): string {
  try {
    const fullPath = join(process.cwd(), 'content', 'docs', filePath);
    const fileContent = readFileSync(fullPath, 'utf8');

    // Parse the frontmatter and content
    const { content } = matter(fileContent);

    return content;
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return '';
  }
}
