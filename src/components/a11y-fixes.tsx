'use client';

import { useEffect } from 'react';

/**
 * Patches accessibility issues in third-party components (Fumadocs, Inkeep)
 * that cannot be fixed via props or configuration.
 */
function hasAccessibleName(el: Element): boolean {
  return !!(
    el.getAttribute('aria-label') ||
    el.getAttribute('aria-labelledby') ||
    el.hasAttribute('title')
  );
}

function patchProgressbars(root: Element) {
  root.querySelectorAll('svg[role="progressbar"]').forEach((el) => {
    if (!hasAccessibleName(el)) {
      el.setAttribute('aria-label', 'Reading progress');
    }
  });
}

export function A11yFixes() {
  useEffect(() => {
    const tocRoot = document.getElementById('nd-tocnav');
    if (!tocRoot) return;

    patchProgressbars(tocRoot);

    const observer = new MutationObserver(() => patchProgressbars(tocRoot));
    observer.observe(tocRoot, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
