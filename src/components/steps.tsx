import type { ReactNode } from 'react';

export function Steps({ children }: { children: ReactNode }) {
  return <div className="fd-steps">{children}</div>;
}

export function Step({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div className="fd-step mb-0 relative !pl-3 pb-6 before:absolute before:left-[-45px] before:flex before:h-8 before:w-8 before:items-center before:justify-center before:border before:border-product-divider before:bg-fd-background before:font-mono before:text-xs before:font-medium before:text-product-subtle before:rounded-md before:content-[counter(step)] ">
      <div className="font-bold">{title}</div>
      <div className="mt-3 [&>*:first-child]:mt-0">{children}</div>
    </div>
  );
}
