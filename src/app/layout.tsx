import './global.css';

import { AnalyticsProvider } from '@/components/analytics-provider';
import { source } from '@/lib/source';
import { ClerkProvider } from '@clerk/nextjs';
import { GoogleTagManager } from '@next/third-parties/google';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Viewport } from 'next';
import type { ReactNode } from 'react';
import { TooltipProvider } from '../components/ui/tooltip';
import { baseUrl, createMetadata } from '../lib/metadata';
import { baseOptions } from './layout.config';
import { Provider } from './provider';

export const metadata = createMetadata({
  title: {
    template: '%s | Novu Documentation',
    default: 'Novu Documentation',
  },
  description: 'The documentation for Novu',
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${GeistSans.variable} ${GeistMono.variable}`}
        suppressHydrationWarning
      >
        {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
        )}

        <body className="flex flex-col min-h-screen">
          <Provider>
            <TooltipProvider delayDuration={50}>
              <DocsLayout tree={source.pageTree} {...baseOptions}>
                <AnalyticsProvider />
                {children}
              </DocsLayout>
            </TooltipProvider>
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
