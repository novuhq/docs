'use client';

import { useState } from 'react';
import { Copy, Check, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { OpenAIIcon } from '@/components/icons/openai';

interface PageActionsProps {
  pageContent: string;
  title?: string;
  githubUrl?: string;
  path?: string;
}

export function PageActions({ pageContent, title, githubUrl, path }: PageActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyMarkdown = async () => {
    try {
      const formattedContent = `# ${title || 'Documentation'}

${pageContent}`;

      await navigator.clipboard.writeText(formattedContent);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleOpenInChatGPT = () => {
    const encodedUrl = encodeURIComponent(`https://docs.novu.co/${path}`);
    const chatGPTUrl = `https://chatgpt.com/??hints=search&q=Read+${encodedUrl}`;
    window.open(chatGPTUrl, '_blank');
  };

  return (
    <div className="space-y-1 mt-5">
      <button
        onClick={handleCopyMarkdown}
        className="flex items-center gap-2 w-full text-left px-3 py-1 text-sm text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-accent rounded-md transition-colors"
        disabled={copied}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            Copy page as markdown
          </>
        )}
      </button>

      {githubUrl && (
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 w-full text-left px-3 py-1 text-sm text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-accent rounded-md transition-colors"
        >
          <Github className="h-4 w-4" />
          <span className="flex items-center gap-1">
            Edit this page on GitHub
            <ExternalLink className="h-3 w-3" />
          </span>
        </Link>
      )}

      <button
        onClick={handleOpenInChatGPT}
        className="flex items-center gap-2 w-full text-left px-3 py-1 text-sm text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-accent rounded-md transition-colors"
      >
        <OpenAIIcon className="h-4 w-4" />
        <span className="flex items-center gap-1">
          Open in ChatGPT
          <ExternalLink className="h-3 w-3" />
        </span>
      </button>
    </div>
  );
}
