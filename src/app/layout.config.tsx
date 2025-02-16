import { SignedIn, SignedOut } from "@clerk/nextjs";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import { Button, buttonVariants } from "../components/ui/button";
import { cn } from "../lib/utils";

export const logo = (
  <>
    <Image
      alt="Documentation"
      src={"/logo/standalone-gradient.svg"}
      width={30}
      height={30}
      aria-label="Novu"
    />
  </>
);

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        {logo}
        <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
          Documentation
        </span>
      </>
    ),
    transparentMode: "top",
  },
  links: [
    {
      url: "/docs/platform",
      type: "button",
      text: "Documentation",
      active: "nested-url",
    },
    {
      url: "/docs/framework",
      type: "button",
      text: "Framework",
      active: "nested-url",
    },
    {
      url: "/docs/community",
      type: "button",
      text: "Community",
      active: "nested-url",
    },
    {
      url: "/docs/api-reference",
      type: "button",
      text: "API Reference",
      active: "nested-url",
    },
    {
      type: "custom",
      children: (
        <div className="flex items-center gap-2 justify-end ml-auto">
          <SignedOut>
            <a
              href="https://dashboard-v2.novu.co/auth/sign-in"
              className={cn(buttonVariants({ color: "secondary", size: "md" }))}
            >
              Sign In
            </a>
            <a
              href="https://dashboard-v2.novu.co/auth/sign-up"
              className={cn(buttonVariants({ color: "primary", size: "md" }))}
            >
              Sign Up
            </a>
          </SignedOut>
          <SignedIn>
            <Button color="secondary">Visit Dashboard</Button>
          </SignedIn>
        </div>
      ),
    },
  ],
};
