'use client';

import { useCallback, useEffect, useState } from 'react';
import { InkeepChatButton, type InkeepChatButtonProps } from '@inkeep/cxkit-react';
import { inkeepConfig } from './common';

import { Button } from '@/components/ui/button';
import { Sparkles as SparklesIcon } from 'lucide-react';

export function InkeepAskAI() {
  const [open, setOpen] = useState(false);
  // color mode sync target
  const [syncTarget, setSyncTarget] = useState<HTMLElement | null>(null);

  // We do this because document is not available in the server
  useEffect(() => {
    setSyncTarget(document.documentElement);
  }, []);

  const handleOpenChange = useCallback((newOpen: boolean) => {
    setOpen(newOpen);
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
      isOpen: open,
      onOpenChange: handleOpenChange,
    },
    aiChatSettings: {
      ...inkeepConfig.aiChatSettings,
      placeholder: 'How do I get started?',
      introMessage: `How can I help you today?`,
      getHelpOptions: [
        {
          icon: { builtIn: 'FaEnvelope' },
          name: 'Contact Us',
          isPinnedToToolbar: true,
          action: {
            type: 'open_link',
            url: 'mailto:support@novu.co?subject=Support Request',
          },
        },
      ],
    },
    canToggleView: false,
    defaultView: 'chat',
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Button onClick={() => handleOpenChange(true)}>
        Ask AI <SparklesIcon className="w-4 h-4" />
      </Button>

      <InkeepChatButton {...config} />
    </div>
  );
}
