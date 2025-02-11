import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const redirects = {
  "/inbox": "/inbox/overview",
  "/concepts": "/concepts/workflows",
  "/api-reference": "/api-reference/topics/topics-controller_list-topics",
  "/platform": "/platform/getting-started/quickstart",
} as const;

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname in redirects) {
    return NextResponse.redirect(
      new URL(redirects[pathname as keyof typeof redirects], request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/inbox", "/concepts", "/api-reference"],
};
