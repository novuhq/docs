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
import { ThemeToggle } from '../components/theme-toggle';
import { TooltipProvider } from '../components/ui/tooltip';
import { baseUrl, createMetadata } from '../lib/metadata';
import { baseOptions } from './layout.config';
import { Provider } from './provider';
import { InkeepAskAI } from '@/components/inkeep/chat';
import InkeepSearch from '@/components/inkeep/search';

export const metadata = createMetadata({
  title: {
    template: '%s | Novu Documentation',
    default: 'Novu Documentation',
  },
  description: 'The documentation for Novu',
  metadataBase: baseUrl,
  icons: {
    icon: [
      {
        url: '/dark-favicon/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/light-favicon/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/dark-favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/light-favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/dark-favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/light-favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [
      {
        url: '/dark-favicon/apple-touch-icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/light-favicon/apple-touch-icon.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    other: [
      {
        url: '/dark-favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/light-favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/dark-favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/light-favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        rel: 'manifest',
        url: '/dark-favicon/site.webmanifest',
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'manifest',
        url: '/light-favicon/site.webmanifest',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
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
              <DocsLayout
                tabMode="sidebar"
                tree={source.pageTree}
                {...baseOptions}
                sidebar={{
                  collapsible: true,
                  tabs: false,
                  banner: (
                    <div className="flex gap-2 items-center mt-2 mb-2 w-full">
                      <InkeepSearch />
                      <InkeepAskAI />
                    </div>
                  ),
                  footer: (
                    <div className="flex gap-2 justify-start w-full">
                      <div className="ml-auto">
                        <ThemeToggle />
                      </div>
                    </div>
                  ),
                }}
              >
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
