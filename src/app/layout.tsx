import "./global.css";

import { AnalyticsProvider } from "@/components/analytics-provider";
import { source } from "@/lib/source";
import { ClerkProvider } from "@clerk/nextjs";
import { GoogleTagManager } from "@next/third-parties/google";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { RootProvider } from "fumadocs-ui/provider";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Viewport } from "next";
import type { ReactNode } from "react";
import { baseUrl, createMetadata } from "../lib/metadata";
import { baseOptions } from "./layout.config";

export const metadata = createMetadata({
  title: {
    template: "%s | Novu Documentation",
    default: "Novu Documentation",
  },
  description: "The documentation for Novu",
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#fff" },
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
          <GoogleTagManager
            gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}
          />
        )}

        <body className="flex flex-col min-h-screen">
          <RootProvider
            theme={{
              defaultTheme: "light",
            }}
          >
            <DocsLayout
              tree={source.pageTree}
              {...baseOptions}
              githubUrl="https://github.com/novuhq/novu"
            >
              <AnalyticsProvider />
              {children}
            </DocsLayout>
          </RootProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
