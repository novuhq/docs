import { SignedIn, SignedOut } from '@clerk/nextjs';
import { GithubInfo } from '@/components/ui/gh-info';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { Button, buttonVariants } from '../components/ui/button';
import { cn } from '../lib/utils';

import LogoTextIcon from '@/components/icons/home-page/logo';

export const logo = (
  <>
    <Image
      alt="Documentation"
      src={'/logo/standalone-gradient.svg'}
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
      <div className="flex items-center gap-2.5">
        {logo}
        <LogoTextIcon />
        <span className="h-5 w-px bg-[#E6E6E6] dark:bg-[#333333] " aria-hidden />
        <span className="font-light text-[#666666] dark:text-[#999999] text-base/none tracking-[-0.02em] [.uwu_&]:hidden">
          Docs
        </span>
      </div>
    ),
    transparentMode: 'none',
  },
  disableThemeSwitch: true,
  links: [
    {
      url: '/platform',
      type: 'button',
      text: 'Documentation',
      active: 'nested-url',
    },
    {
      url: '/guides',
      type: 'button',
      text: 'Guides',
      active: 'nested-url',
    },
    {
      url: '/framework',
      type: 'button',
      text: 'Framework',
      active: 'nested-url',
    },
    {
      url: '/community',
      type: 'button',
      text: 'Community',
      active: 'nested-url',
    },
    {
      url: '/api-reference',
      type: 'button',
      text: 'API Reference',
      active: 'nested-url',
    },
    {
      type: 'custom',
      children: (
        <div className="flex items-center gap-2 mt-2 ml-auto shrink-0 grow lg:justify-end lg:mt-0">
          <SignedOut>
            <a
              href="https://dashboard.novu.co/auth/sign-in"
              className={cn(buttonVariants({ color: 'white', size: 'md' }))}
            >
              Sign In
            </a>
            <a
              href="https://dashboard.novu.co/auth/sign-up"
              className={cn(buttonVariants({ color: 'black', size: 'md' }))}
            >
              Sign Up
            </a>
          </SignedOut>
          <SignedIn>
            <Button color="white" href="https://dashboard.novu.co">
              Visit Dashboard
            </Button>
          </SignedIn>
        </div>
      ),
    },
    {
      type: 'custom',
      children: (
        <GithubInfo
          owner="novuhq"
          repo="novu"
          className="flex mt-2 lg:mt-0 lg:hidden xl:flex"
        />
      ),
    },
  ],
};
