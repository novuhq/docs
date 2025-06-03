'use client';

import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import { InkeepModalSearchAndChat, type InkeepModalSearchAndChatProps } from '@inkeep/cxkit-react';
import { useEffect, useState } from 'react';
import { inkeepConfig } from './common';

export default function CustomDialog(props: SharedProps) {
  const [syncTarget, setSyncTarget] = useState<HTMLElement | null>(null);
  const { open, onOpenChange } = props;
  // We do this because document is not available in the server
  useEffect(() => {
    setSyncTarget(document.documentElement);
  }, []);

  const config: InkeepModalSearchAndChatProps = {
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
      onOpenChange,
      ...inkeepConfig.modalSettings,
    },
    searchSettings: {
      ...inkeepConfig.searchSettings,
    },
    aiChatSettings: {
      ...inkeepConfig.aiChatSettings,
    },
  };
  return <InkeepModalSearchAndChat {...config} />;
}
