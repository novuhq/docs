import { clerkMiddleware } from "@clerk/nextjs/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent
) {
  if (
    request.nextUrl.pathname === "/" ||
    request.nextUrl.pathname === "/docs"
  ) {
    return NextResponse.redirect(
      new URL("/docs/platform/overview", request.url)
    );
  }

  // Handle platform redirect
  if (request.nextUrl.pathname === "/docs/platform") {
    return NextResponse.redirect(
      new URL("/docs/platform/overview", request.url)
    );
  }

  if (request.nextUrl.pathname === "/docs/community") {
    return NextResponse.redirect(
      new URL("/docs/community/overview", request.url)
    );
  }

  if (request.nextUrl.pathname === "/docs/api-reference") {
    return NextResponse.redirect(
      new URL("/docs/api-reference/overview", request.url)
    );
  }

  if (request.nextUrl.pathname === "/docs/framework") {
    return NextResponse.redirect(
      new URL("/docs/framework/overview", request.url)
    );
  }

  // Continue with Clerk middleware
  return clerkMiddleware(request, event);
}
