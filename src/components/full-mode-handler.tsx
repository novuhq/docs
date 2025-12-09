'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function FullModeHandler() {
  const searchParams = useSearchParams();
  const isFullMode = searchParams.get('full') === 'true';

  useEffect(() => {
    if (isFullMode) {
      document.body.classList.add('full-mode');
    } else {
      document.body.classList.remove('full-mode');
    }

    return () => {
      document.body.classList.remove('full-mode');
    };
  }, [isFullMode]);

  return null;
}
