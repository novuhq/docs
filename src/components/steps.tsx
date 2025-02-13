import type { ReactNode } from "react";

export function Steps({ children }: { children: ReactNode }) {
  return <div className="fd-steps pl-12 ">{children}</div>;
}

export function Step({ children }: { children: ReactNode }) {
  return <div className="fd-step mb-8">{children}</div>;
}
