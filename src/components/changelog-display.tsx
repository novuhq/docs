import { fetchChangelog } from '@/lib/fetch-changelog';

interface MarkdownNode {
  type: 'h1' | 'h2' | 'h3' | 'p' | 'ul' | 'li' | 'code';
  content: string;
  children?: MarkdownNode[];
  id?: string;
}

export async function ChangelogDisplay() {
  const { content } = await fetchChangelog();
  const nodes = parseMarkdown(content);

  return (
    <div className="relative">
      <div className="prose dark:prose-invert max-w-none">{renderNodes(nodes)}</div>=
    </div>
  );
}

function parseMarkdown(markdown: string): MarkdownNode[] {
  const lines = markdown.split('\n');
  const nodes: MarkdownNode[] = [];
  let currentList: MarkdownNode | null = null;
  let inCodeBlock = false;
  let codeContent: string[] = [];

  for (const line of lines) {
    // Code blocks
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeContent = [];
      } else {
        nodes.push({ type: 'code', content: codeContent.join('\n') });
        inCodeBlock = false;
        codeContent = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      continue;
    }

    // Headers
    if (line.startsWith('### ')) {
      if (currentList) {
        nodes.push(currentList);
        currentList = null;
      }
      const text = line.slice(4);
      nodes.push({ type: 'h3', content: text, id: generateId(text) });
      continue;
    }
    if (line.startsWith('## ')) {
      if (currentList) {
        nodes.push(currentList);
        currentList = null;
      }
      const text = line.slice(3);
      nodes.push({ type: 'h2', content: text, id: generateId(text) });
      continue;
    }
    if (line.startsWith('# ')) {
      if (currentList) {
        nodes.push(currentList);
        currentList = null;
      }
      const text = line.slice(2);
      nodes.push({ type: 'h1', content: text, id: generateId(text) });
      continue;
    }

    // List items
    if (line.match(/^[\*\-]\s+/)) {
      if (!currentList) {
        currentList = { type: 'ul', content: '', children: [] };
      }
      currentList.children!.push({ type: 'li', content: line.slice(2) });
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      if (currentList) {
        nodes.push(currentList);
        currentList = null;
      }
      continue;
    }

    // Regular paragraph
    if (currentList) {
      nodes.push(currentList);
      currentList = null;
    }
    if (line.trim()) {
      nodes.push({ type: 'p', content: line });
    }
  }

  if (currentList) {
    nodes.push(currentList);
  }

  return nodes;
}

function renderNodes(nodes: MarkdownNode[]): React.ReactNode {
  return nodes.map((node, i) => {
    const key = `${node.type}-${i}`;

    switch (node.type) {
      case 'h1':
        return (
          <h1 key={key} id={node.id}>
            {renderInline(node.content)}
          </h1>
        );
      case 'h2':
        return (
          <h2 key={key} id={node.id}>
            {renderInline(node.content)}
          </h2>
        );
      case 'h3':
        return (
          <h3 key={key} id={node.id}>
            {renderInline(node.content)}
          </h3>
        );
      case 'p':
        return <p key={key}>{renderInline(node.content)}</p>;
      case 'ul':
        return <ul key={key}>{node.children?.map((child, j) => renderNodes([child]))}</ul>;
      case 'li':
        return <li key={key}>{renderInline(node.content)}</li>;
      case 'code':
        return (
          <pre key={key}>
            <code>{node.content}</code>
          </pre>
        );
      default:
        return null;
    }
  });
}

function renderInline(text: string): React.ReactNode {
  // Split by inline elements and render them
  const parts: React.ReactNode[] = [];
  const remaining = text;
  let key = 0;

  // Process links, bold, italic, code
  const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(remaining)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(remaining.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      // Link
      parts.push(
        <a key={key++} href={match[3]} target="_blank" rel="noopener noreferrer">
          {match[2]}
        </a>
      );
    } else if (match[4]) {
      // Bold
      parts.push(<strong key={key++}>{match[4]}</strong>);
    } else if (match[5]) {
      // Italic
      parts.push(<em key={key++}>{match[5]}</em>);
    } else if (match[6]) {
      // Code
      parts.push(<code key={key++}>{match[6]}</code>);
    }

    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < remaining.length) {
    parts.push(remaining.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
