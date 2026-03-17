export function extractFaqItems(mdxContent: string): { question: string; answer: string }[] {
  const regex = /<Accordion\s+title="([^"]+)"[^>]*>([\s\S]*?)<\/Accordion>/g;
  const items: { question: string; answer: string }[] = [];

  let match: RegExpExecArray | null;
  while ((match = regex.exec(mdxContent)) !== null) {
    const question = match[1].trim();
    const answer = stripMarkup(match[2]).trim();
    if (question && answer) {
      items.push({ question, answer });
    }
  }

  return items;
}

function stripMarkup(text: string): string {
  return (
    text
      // Remove JSX/HTML tags
      .replace(/<[^>]+>/g, '')
      // Remove markdown links [text](url) → text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      // Remove markdown bold/italic
      .replace(/\*{1,3}([^*]+)\*{1,3}/g, '$1')
      // Remove markdown code blocks
      .replace(/```[\s\S]*?```/g, '')
      // Remove inline code
      .replace(/`([^`]+)`/g, '$1')
      // Remove markdown headings
      .replace(/^#{1,6}\s+/gm, '')
      // Collapse whitespace
      .replace(/\s+/g, ' ')
  );
}
