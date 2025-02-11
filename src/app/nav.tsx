"use client";
import { SearchButton } from "@/components/search-button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavChildren() {
  const pathname = usePathname();

  const tabs = [
    {
      text: "Platform",
      url: "/platform",
    },
    {
      text: "Inbox",
      url: "/inbox",
    },
    {
      text: "API",
      url: "/api-reference",
    },
  ];

  const getIsActive = (path: string) => {
    // Remove trailing slash for consistency
    const normalizedPath = pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

    console.log(normalizedPath, path, `${path}`);

    // Check if the current path starts with the tab path
    return normalizedPath === path || normalizedPath.startsWith(`${path}`);
  };

  return (
    <div className="flex h-14 w-full items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-6 h-full">
        <Link href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 102 32"
            className="h-8"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M51.624 22.58v-7.393q0-1.914-.918-2.91t-2.885-.996q-1.337 0-2.124.262-.786.236-.996.34v10.698H42V10.154q.105-.053.577-.236.472-.184 1.259-.394t1.835-.367Q46.721 9 47.98 9q1.441 0 2.622.393 1.18.367 1.993 1.075a4.7 4.7 0 0 1 1.285 1.704q.446.996.446 2.255v8.154zM71.889 16q0 1.495-.525 2.779a6.6 6.6 0 0 1-1.416 2.229 6.95 6.95 0 0 1-2.203 1.468Q66.461 23 64.913 23t-2.858-.524a6.95 6.95 0 0 1-2.203-1.468 6.9 6.9 0 0 1-1.442-2.229A7.6 7.6 0 0 1 57.912 16q0-1.494.498-2.779a6.6 6.6 0 0 1 1.443-2.202 6.4 6.4 0 0 1 2.202-1.468Q63.366 9 64.913 9q1.548 0 2.832.55 1.285.525 2.203 1.469a6.3 6.3 0 0 1 1.416 2.202q.525 1.285.525 2.779m-2.806 0q0-1.05-.289-1.914a4.3 4.3 0 0 0-.839-1.52 3.37 3.37 0 0 0-1.31-.997q-.762-.366-1.732-.367-.996 0-1.783.367a3.64 3.64 0 0 0-1.31.996q-.525.63-.814 1.521A6 6 0 0 0 60.718 16q0 1.05.288 1.94.289.866.813 1.52.55.63 1.311.997.788.34 1.783.34.97 0 1.731-.34a3.7 3.7 0 0 0 1.311-.996q.55-.656.84-1.52A6.3 6.3 0 0 0 69.082 16M87.583 9.996q-.156.577-.55 1.547-.367.944-.866 2.124-.498 1.179-1.1 2.49a84 84 0 0 1-1.18 2.517q-.578 1.206-1.129 2.281-.524 1.05-.917 1.757h-2.806a75 75 0 0 1-.996-1.836 111 111 0 0 0-1.023-2.045 210 210 0 0 1-.97-2.07 110 110 0 0 0-.892-1.888q-.393-.892-.708-1.573-.287-.682-.446-1.05-.158-.366-.314-.786a2.3 2.3 0 0 1-.158-.786q0-.472.315-.865.315-.394 1.075-.394.524 0 .813.105t.315.131q.446 1.233 1.022 2.7.603 1.47 1.207 2.91.63 1.417 1.206 2.727.576 1.285 1.022 2.177.315-.603.813-1.705.525-1.127 1.075-2.464.578-1.337 1.154-2.753.578-1.416 1.023-2.595.21-.577.524-.892.315-.34 1.05-.34.628 0 .996.235.393.237.445.341M99.3 10.652q0-.63.366-.918.368-.315 1.049-.315.446 0 .787.105.367.105.498.158V22.58a5 5 0 0 1-.656.104q-.446.052-1.101.105a17 17 0 0 1-1.442.105q-.787.053-1.6.053-2.386 0-3.88-.577-1.47-.577-2.334-1.678-1.075-1.39-1.075-3.697v-6.344q0-.63.367-.918.366-.315 1.049-.315.445 0 .786.105.368.105.498.158v7.026q0 1.992.997 2.989 1.023.996 3.435.996.918 0 1.468-.053.577-.078.787-.13z"
            ></path>
            <path
              fill="url(#logo_inline_svg__a)"
              fillRule="evenodd"
              d="M24.64 12.826c0 .86-1.044 1.286-1.646.671L10.676.907A16 16 0 0 1 16 0c3.183 0 6.148.93 8.64 2.531zm4.48-5.986v5.986c0 4.875-5.919 7.289-9.328 3.804L6.545 3.091C2.576 6.003 0 10.701 0 16c0 3.407 1.065 6.565 2.88 9.16v-5.954c0-4.875 5.919-7.289 9.328-3.804l13.229 13.52C29.416 26.012 32 21.308 32 16c0-3.407-1.065-6.565-2.88-9.16M9.006 18.535 21.301 31.1C19.642 31.683 17.858 32 16 32c-3.182 0-6.148-.93-8.64-2.531V19.206c0-.86 1.045-1.286 1.646-.671"
              clipRule="evenodd"
            ></path>
            <path
              fill="url(#logo_inline_svg__b)"
              fillRule="evenodd"
              d="M24.64 12.826c0 .86-1.044 1.286-1.646.671L10.676.907A16 16 0 0 1 16 0c3.183 0 6.148.93 8.64 2.531zm4.48-5.986v5.986c0 4.875-5.919 7.289-9.328 3.804L6.545 3.091C2.576 6.003 0 10.701 0 16c0 3.407 1.065 6.565 2.88 9.16v-5.954c0-4.875 5.919-7.289 9.328-3.804l13.229 13.52C29.416 26.012 32 21.308 32 16c0-3.407-1.065-6.565-2.88-9.16M9.006 18.535 21.301 31.1C19.642 31.683 17.858 32 16 32c-3.182 0-6.148-.93-8.64-2.531V19.206c0-.86 1.045-1.286 1.646-.671"
              clipRule="evenodd"
            ></path>
            <path
              fill="url(#logo_inline_svg__c)"
              fillRule="evenodd"
              d="M24.64 12.826c0 .86-1.044 1.286-1.646.671L10.676.907A16 16 0 0 1 16 0c3.183 0 6.148.93 8.64 2.531zm4.48-5.986v5.986c0 4.875-5.919 7.289-9.328 3.804L6.545 3.091C2.576 6.003 0 10.701 0 16c0 3.407 1.065 6.565 2.88 9.16v-5.954c0-4.875 5.919-7.289 9.328-3.804l13.229 13.52C29.416 26.012 32 21.308 32 16c0-3.407-1.065-6.565-2.88-9.16M9.006 18.535 21.301 31.1C19.642 31.683 17.858 32 16 32c-3.182 0-6.148-.93-8.64-2.531V19.206c0-.86 1.045-1.286 1.646-.671"
              clipRule="evenodd"
            ></path>
            <defs>
              <linearGradient
                id="logo_inline_svg__b"
                x1="19.733"
                x2="16"
                y1="-1.067"
                y2="32"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.085" stopColor="#FFBA33"></stop>
                <stop offset="0.553" stopColor="#FF006A" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="logo_inline_svg__c"
                x1="16"
                x2="16"
                y1="0"
                y2="32"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.547" stopOpacity="0"></stop>
                <stop offset="1" stopOpacity="0.6"></stop>
              </linearGradient>
              <radialGradient
                id="logo_inline_svg__a"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="rotate(135 4.686 11.314)scale(22.6274)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.34" stopColor="#FF006A"></stop>
                <stop offset="0.613" stopColor="#E300BD"></stop>
                <stop offset="0.767" stopColor="#FF4CE1"></stop>
              </radialGradient>
            </defs>
          </svg>
        </Link>
        <nav className="flex h-full items-center">
          {tabs.map((tab) => {
            const isActive = getIsActive(tab.url);

            return (
              <Link
                key={tab.url}
                href={tab.url}
                className={`
                  group relative flex h-full items-center px-3 text-sm font-medium transition-colors
                  ${isActive ? "text-black dark:text-white font-semibold" : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"}
                `}
              >
                {tab.text}
                <span
                  className={`
                    absolute inset-x-0 -bottom-px h-[2px] origin-left transition-transform duration-200 ease-out
                    ${isActive ? "bg-black dark:bg-white scale-x-100" : "bg-black dark:bg-white scale-x-0 group-hover:scale-x-100"}
                  `}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <SearchButton />

        <Link
          href="https://github.com/novuhq/novu"
          target="_blank"
          className="flex items-center gap-2 rounded-lg border bg-background px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <span>Star</span>
          <span className="rounded-md bg-muted px-2 py-0.5 text-xs">3.7k</span>
        </Link>
      </div>
    </div>
  );
}
