import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../../lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 hover:no-underline hover:cursor-pointer',
  {
    variants: {
      color: {
        primary: 'bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80',
        outline: 'border hover:bg-fd-accent hover:text-fd-accent-foreground',
        ghost: 'hover:bg-fd-accent hover:text-fd-accent-foreground',
        secondary:
          'border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground',
      },
      size: {
        sm: 'gap-1 p-0.5 text-xs',
        md: 'gap-1 p-1 px-2 text-sm',
        icon: 'p-1.5 [&_svg]:size-5',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'md' | 'icon';
  isLoading?: boolean;
  asChild?: boolean;
  href?: string;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, color, size, href, ...props }, ref) => {
    if (href) {
      // Filter out button-specific props that shouldn't be passed to an anchor
      const {
        type,
        disabled,
        form,
        formAction,
        formEncType,
        formMethod,
        formNoValidate,
        formTarget,
        name,
        value,
        ...anchorProps
      } = props;

      return (
        <a
          className={cn(buttonVariants({ color, size, className }))}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return (
      <button
        className={cn(buttonVariants({ color, size, className }))}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
