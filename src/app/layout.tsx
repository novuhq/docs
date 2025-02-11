import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./global.css";
import { baseOptions } from "./layout.config";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            links: [
              ["Home", "/"],
              ["Docs", "/docs"],
            ],
          }}
        >
          <DocsLayout
            tree={source.pageTree}
            {...baseOptions}
            githubUrl="https://github.com/novuhq/novu"
            sidebar={{
              defaultOpenLevel: 1,
            }}
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
