import { AlertTriangle, CircleX } from 'lucide-react';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../lib/cn';

type CalloutProps = Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'type' | 'icon'> & {
  title?: ReactNode;
  /**
   * @defaultValue info
   */
  type?: 'info' | 'warn' | 'error';

  /**
   * Force an icon
   */
  icon?: ReactNode;
};

const InfoIcon = ({ className }: { className: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 3a.75.75 0 1 1 0 1.5A.75.75 0 0 1 8 4Zm2 8.063H6v-1.126h1.438V8.063H6.5V6.937h2.063v4H10v1.126Z" />
  </svg>
);

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, children, title, type = 'info', icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'element mb-4 flex w-full flex-col flex-wrap overflow-hidden border rounded-lg p-4 text-sm bg-[#f7f7f7] dark:bg-zinc-900 dark:border-zinc-800 leading-relaxed',
          className
        )}
        {...props}
      >
        <div className="relative flex items-start gap-3 pr-[4%]">
          <div className="flex items-center justify-center size-5">
            {icon ??
              {
                info: <InfoIcon className="size-4 fill-[#87858e] dark:fill-zinc-300" />,
                warn: <AlertTriangle className="size-4 fill-orange-500 text-fd-card" />,
                error: <CircleX className="size-4 fill-red-500 text-fd-card" />,
              }[type]}
          </div>
          <div className="flex flex-col gap-1">
            {title ? (
              <div className="font-medium text-[#1a1523] dark:text-white">{title}</div>
            ) : null}
            <div className="text-[#57565d] dark:text-zinc-200 [&>p]:mt-0 [&>p]:mb-0 [&>a]:text-blue-600 dark:[&>a]:text-blue-300 [&>a]:underline [&>a:hover]:opacity-80">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Callout.displayName = 'Callout';
