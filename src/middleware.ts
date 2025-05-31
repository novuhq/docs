import { clerkMiddleware } from '@clerk/nextjs/server';
import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|robots.txt|sitemap.xml|llms.txt|static.json|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

export default async function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  // Root redirects
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/platform/overview', request.url), {
      status: 308,
    });
  }

  // Section root redirects
  const sectionRedirects: Record<string, string> = {
    '/overview/introduction': '/platform/overview',
    '/platform': '/platform/overview',
    '/community': '/community/overview',
    '/api-reference': '/api-reference/overview',
    '/framework': '/framework/overview',
    '/guides': '/guides/overview',
  };

  if (pathname in sectionRedirects) {
    return NextResponse.redirect(new URL(sectionRedirects[pathname], request.url), {
      status: 308,
    });
  }

  // Specific redirects for cases that don't fit patterns
  const redirectMap: Record<string, string> = {
    // Content and Design
    '/content-creation-design/handlebars-helpers': '/platform/templates/handlebars-helpers',
    '/content-creation-design/layouts': '/platform/templates/layouts',

    // Integrations
    '/integrations/content/react-email': '/framework/content/react-email',
    '/integrations/overview': '/platform/integrations/overview',
    '/guides/integrations/segment': '/platform/integrations/segment',

    // Guides
    '/guides/add-digest-to-inapp-notifications': '/platform/workflow/digest',

    // Additional Resources
    '/additional-resources/data-migrations': '/community/data-migrations',

    // Community
    '/community/machine-setup': '/community/run-in-local-machine',
    '/community/monorepo-structure': '/community/code-structure',
  };

  if (pathname in redirectMap) {
    return NextResponse.redirect(new URL(redirectMap[pathname], request.url), {
      status: 308,
    });
  }

  // Check if the path doesn't start with any of our known prefixes
  const knownPrefixes = ['/platform/', '/community/', '/api-reference/', '/framework/', '/guides/'];
  const startsWithKnownPrefix = knownPrefixes.some((prefix) => pathname.startsWith(prefix));

  // Skip the catch-all redirect for paths that:
  // 1. Already start with a known prefix
  // 2. Are exactly '/platform'
  // 3. Are static assets or API routes (these are handled by the matcher)
  // 4. Are root paths that we handle above
  const skipPaths = [
    '/',
    '/platform',
    '/community',
    '/api-reference',
    '/framework',
    '/guides',
    '/sitemap',
  ];

  if (!startsWithKnownPrefix && !skipPaths.includes(pathname)) {
    // Remove leading slash and redirect to /platform/[rest of path]
    const restOfPath = pathname.startsWith('/') ? pathname.slice(1) : pathname;

    // Prevent double redirects - if we're already redirecting to a known path, don't add platform prefix
    if (!knownPrefixes.some((prefix) => restOfPath.startsWith(prefix.slice(1)))) {
      return NextResponse.redirect(new URL(`/platform/${restOfPath}`, request.url), {
        status: 308,
      });
    }
  }

  return clerkMiddleware(request, event);
}
