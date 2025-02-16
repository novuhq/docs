"use client";
import { RootProvider } from "fumadocs-ui/provider";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const SearchDialog = dynamic(() => import("@/components/search")); // lazy load

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      theme={{
        defaultTheme: "light",
      }}
      search={{
        SearchDialog: process.env.NEXT_PUBLIC_ORAMA_API_KEY
          ? SearchDialog
          : () => <></>,
      }}
    >
      {children}
    </RootProvider>
  );
}
