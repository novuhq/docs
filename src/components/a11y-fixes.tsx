'use client';

import { useEffect } from 'react';

/**
 * Patches accessibility issues in third-party components (Fumadocs, Inkeep)
 * that cannot be fixed via props or configuration.
 */
export function A11yFixes() {
  useEffect(() => {
    // Fumadocs TOC progress indicator has role="progressbar" but no aria-label
    const observer = new MutationObserver(() => {
      const progressbars = document.querySelectorAll('svg[role="progressbar"]:not([aria-label])');
      progressbars.forEach((el) => {
        el.setAttribute('aria-label', 'Reading progress');
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Run once immediately for any already-rendered elements
    const progressbars = document.querySelectorAll('svg[role="progressbar"]:not([aria-label])');
    progressbars.forEach((el) => {
      el.setAttribute('aria-label', 'Reading progress');
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
