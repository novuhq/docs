import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

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
          Novu Documentation
        </span>
      </>
    ),
    transparentMode: "top",
  },
  links: [
    {
      url: "/getting-started/how-novu-works",
      type: "main",
      text: "Documentation",
    },
    {
      url: "/guides",
      type: "button",
      icon: "Book",
      text: "Guides",
    },
  ],
};
