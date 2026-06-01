import Link from 'fumadocs-core/link';
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn';

const CARD_HOVER_BORDER = 'hover:border-[#4b73ec] dark:hover:border-[#00d5ff]';

const CARD_ICON_CLASS = 'text-[#4b73ec] dark:text-[#00d5ff] [&_svg]:text-current';

export function Cards(props: HTMLAttributes<HTMLDivElement>): React.ReactElement {
  return (
    <div {...props} className={cn('grid grid-cols-2 gap-4 @container', props.className)}>
      {props.children}
    </div>
  );
}

export type CardProps = HTMLAttributes<HTMLElement> & {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;

  href?: string;
  external?: boolean;
};

export function Card({ icon, title, description, ...props }: CardProps): React.ReactElement {
  const E = props.href ? Link : 'div';
  const isInteractive = Boolean(props.href);

  return (
    <E
      {...props}
      data-card
      className={cn(
        'block rounded-lg border bg-[var(--page-background)] p-4 text-fd-card-foreground shadow-md transition-colors duration-200 @max-lg:col-span-full',
        isInteractive && ['group', CARD_HOVER_BORDER],
        props.className
      )}
    >
      {icon ? (
        <div
          className={cn(
            'not-prose mb-2 w-fit rounded-md border bg-[var(--page-background)] p-1.5 [&_svg]:size-4',
            CARD_ICON_CLASS
          )}
        >
          {icon}
        </div>
      ) : null}
      <h3 className="not-prose mb-1 text-sm font-medium">{title}</h3>
      {description ? <p className="!my-0 text-sm text-fd-muted-foreground">{description}</p> : null}
      {props.children ? (
        <div className="text-sm text-fd-muted-foreground prose-no-margin">{props.children}</div>
      ) : null}
    </E>
  );
}
