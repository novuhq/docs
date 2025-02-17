'use client';

import { trackPageView } from '@/lib/analytics';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);

  return null;
}
