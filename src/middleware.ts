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
  // Handle platform redirect
  if (request.nextUrl.pathname === "/platform") {
    return NextResponse.redirect(new URL("/platform/quickstart", request.url));
  }

  if (request.nextUrl.pathname === "/api-reference") {
    return NextResponse.redirect(
      new URL("/api-reference/overview", request.url)
    );
  }

  if (request.nextUrl.pathname === "/framework") {
    return NextResponse.redirect(new URL("/framework/overview", request.url));
  }

  // Continue with Clerk middleware
  return clerkMiddleware(request, event);
}
