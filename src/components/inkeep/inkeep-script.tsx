'use client';

import { useEffect, useState } from 'react';
import { InkeepChatButton, type InkeepChatButtonProps } from '@inkeep/cxkit-react';
import { inkeepConfig } from './common';
export function InkeepScript() {
  // color mode sync target
  const [syncTarget, setSyncTarget] = useState<HTMLElement | null>(null);

  // We do this because document is not available in the server
  useEffect(() => {
    setSyncTarget(document.documentElement);
  }, []);

  const config: InkeepChatButtonProps = {
    baseSettings: {
      ...inkeepConfig.baseSettings,
      apiKey: process.env.NEXT_PUBLIC_INKEEP_API_KEY,
      primaryBrandColor: '#DD2450',
      colorMode: {
        sync: {
          target: syncTarget,
          attributes: ['class'],
          isDarkMode: (attributes) => !!attributes.class?.includes('dark'),
        },
      },
    },
    modalSettings: {
      ...inkeepConfig.modalSettings,
    },
    searchSettings: {
      ...inkeepConfig.searchSettings,
    },
    aiChatSettings: {
      ...inkeepConfig.aiChatSettings,
    },
  };

  return <InkeepChatButton {...config} />;
}
