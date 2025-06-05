'use client';

import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import { InkeepSearchBarProps, InkeepModalSearch, InkeepSearchBar } from '@inkeep/cxkit-react';
import { useCallback, useEffect, useState } from 'react';
import { inkeepConfig } from './common';

export default function InkeepSearch() {
  const [syncTarget, setSyncTarget] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  // We do this because document is not available in the server
  useEffect(() => {
    setSyncTarget(document.documentElement);
  }, []);

  const handleOpenChange = useCallback((newOpen: boolean) => {
    setOpen(newOpen);
  }, []);

  const config: InkeepSearchBarProps = {
    baseSettings: {
      apiKey: process.env.NEXT_PUBLIC_INKEEP_API_KEY,
      primaryBrandColor: '#DD2450',
      ...inkeepConfig.baseSettings,
      colorMode: {
        sync: {
          target: syncTarget,
          attributes: ['class'],
          isDarkMode: (attributes) => !!attributes.class?.includes('dark'),
        },
      },
    },
    modalSettings: {
      isOpen: open,
      onOpenChange: setOpen,
      ...inkeepConfig.modalSettings,
    },
    searchSettings: {
      ...inkeepConfig.searchSettings,
      placeholder: 'Search docs',
    },
    aiChatSettings: {
      ...inkeepConfig.aiChatSettings,
    },
    canToggleView: true,
    defaultView: 'search',
  };
  return (
    <div className="h-8 align-self-stretch flex-1">
      <InkeepSearchBar {...config} />
    </div>
  );
}
