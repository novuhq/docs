import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      color: {
        primary:
          "bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80",
        outline: "border hover:bg-fd-accent hover:text-fd-accent-foreground",
        ghost: "hover:bg-fd-accent hover:text-fd-accent-foreground",
        secondary:
          "border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground",
      },
      size: {
        sm: "gap-1 p-0.5 text-xs",
        md: "gap-1 p-1 px-2 text-sm",
        icon: "p-1.5 [&_svg]:size-5",
      },
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ color, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
