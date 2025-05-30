'use client';

import SearchDialog from 'fumadocs-ui/components/dialog/search-algolia';
import { useState } from 'react';

export function SearchButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-lg border bg-background px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="hidden sm:inline">Search docs...</span>
        <span className="hidden sm:inline text-xs">⌘K</span>
      </button>

      <SearchDialog
        open={open}
        onOpenChange={setOpen}
        defaultTag="all"
        index="docs"
        tags={[
          {
            name: 'All',
            value: 'all',
          },
          {
            name: 'Inbox',
            value: 'inbox',
          },
          {
            name: 'Concepts',
            value: 'concepts',
          },
        ]}
      />
    </>
  );
}
