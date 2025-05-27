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

  // Pattern-based redirects
  const redirectPatterns = [
    // API Reference pattern
    {
      pattern: /^\/api-reference\/([^/]+)\/([^/]+)$/,
      handler: (matches: string[]) => {
        const [, section, method] = matches;
        // Skip if the path already contains a controller name
        if (method.includes('controller_')) {
          return null;
        }
        // Map old paths to new controller-based paths
        const methodMap: Record<string, string> = {
          'get-subscribers': 'subscribers-v1-controller_list-subscribers',
          'get-subscriber': 'subscribers-controller_get-subscriber',
          'create-subscriber': 'subscribers-controller_create-subscriber',
          'bulk-create-subscribers': 'subscribers-v1-controller_bulk-create-subscribers',
          'update-subscriber': 'subscribers-controller_update-subscriber',
          'delete-subscriber': 'subscribers-controller_remove-subscriber',
          'get-subscriber-preferences': 'subscribers-controller_get-subscriber-preferences',
          'get-notifications': 'subscribers-v1-controller_get-notifications-feed',
          'trigger-event': 'events-controller_trigger',
          'bulk-trigger-event': 'events-controller_bulk-trigger',
          'broadcast-event': 'events-controller_broadcast-to-all',
          'get-workflows': 'workflows-controller_get-workflows',
          'create-workflow': 'workflows-controller_create-workflow',
        };

        return `/api-reference/${section}/${methodMap[method] || method}`;
      },
    },
    // Integrations providers pattern
    {
      pattern: /^\/integrations\/providers\/(email|sms|chat|push)\/(.+)$/,
      handler: (matches: string[]) => {
        const [, channel, provider] = matches;
        return provider === 'overview'
          ? `/platform/integrations/${channel}`
          : `/platform/integrations/${channel}/${provider}`;
      },
    },
    // Channels and providers root pattern
    {
      pattern: /^\/channels-and-providers(?:\/introduction)?$/,
      handler: () => '/platform/integrations/overview',
    },
    // Channels and providers pattern
    {
      pattern: /^\/channels-and-providers\/(email|sms|chat|push|in-app)\/(.+)$/,
      handler: (matches: string[]) => {
        const [, channel, page] = matches;
        return `/platform/integrations/${channel}/${page === 'introduction' ? 'overview' : page}`;
      },
    },
    // Notification center react pattern
    {
      pattern: /^\/notification-center\/client\/react\/(.+)$/,
      handler: (matches: string[]) => `/platform/inbox/react/${matches[1]}`,
    },
    // Inbox patterns
    {
      pattern: /^\/inbox\/react\/(.+)$/,
      handler: (matches: string[]) => {
        const [, page] = matches;
        // Special case for get-started
        if (page === 'get-started') {
          return '/platform/quickstart/nextjs';
        }
        const pageMap: Record<string, string> = {
          'components/overview': 'components',
          'multiple-tabs': 'tabs',
          styling: 'styling',
          'api-reference': 'api-reference',
        };
        return `/platform/inbox/react/${pageMap[page] || page}`;
      },
    },
    {
      pattern: /^\/inbox(?:\/introduction|\/overview)?$/,
      handler: () => '/platform/inbox/overview',
    },
    // Getting started pattern
    {
      pattern: /^\/getting-started\/(.+)$/,
      handler: (matches: string[]) => {
        const page = matches[1];
        const pageMap: Record<string, string> = {
          quickstart: '/platform/quickstart/nextjs',
          'what-is-novu': '/platform/what-is-novu',
          introduction: '/platform/what-is-novu',
          concepts: '/platform/concepts/overview',
          'non-technical': '/platform/overview/non-technical',
          'commercial-open-source': '/platform/overview/commercial-open-source',
          'send-your-first-notification': '/platform/quickstart/introduction',
        };
        return pageMap[page] || `/platform/${page}`;
      },
    },
    // Self hosting pattern
    {
      pattern: /^\/self-hosting-novu\/(.+)$/,
      handler: (matches: string[]) => {
        const page = matches[1];
        return page === 'introduction' ? '/community/overview' : `/community/${page}`;
      },
    },
    // Quickstart pattern
    {
      pattern: /^\/quickstarts?\/(.+)$/,
      handler: (matches: string[]) => `/platform/quickstart/${matches[1]}`,
    },
    // Concepts pattern
    {
      pattern: /^\/concepts\/(.+)$/,
      handler: (matches: string[]) => {
        const concept = matches[1];
        return concept === 'subscribers'
          ? '/platform/subscribers/overview'
          : `/platform/concepts/${concept}`;
      },
    },
    // Workflow pattern (both singular and plural)
    {
      pattern: /^\/workflows?\/(.+)$/,
      handler: (matches: string[]) => {
        const page = matches[1];
        const pageMap: Record<string, string> = {
          introduction: 'overview',
          studio: 'build-a-workflow',
          'notification-workflows': 'overview',
          'step-filters': 'step-conditions',
        };
        return `/platform/workflow/${pageMap[page] || page}`;
      },
    },
    // SDK pattern
    {
      pattern: /^\/sdks\/(.+)$/,
      handler: (matches: string[]) => {
        const path = matches[1];
        if (path.startsWith('framework/')) {
          return `/framework/${path.slice('framework/'.length)}`;
        }
        return path === 'introduction' || path === 'overview'
          ? '/platform/sdks/overview'
          : `/platform/sdks/server/${path}`;
      },
    },
    // Recipes pattern
    {
      pattern: /^\/recipes\/(.+)$/,
      handler: (matches: string[]) => {
        const page = matches[1];
        return `/framework/schema/${page}`;
      },
    },
  ];

  // Try to match against patterns first
  for (const { pattern, handler } of redirectPatterns) {
    const matches = pathname.match(pattern);
    if (matches) {
      const redirectPath = handler(matches);
      // Skip redirect if handler returns null
      if (redirectPath === null) {
        continue;
      }
      return NextResponse.redirect(new URL(redirectPath, request.url), {
        status: 308,
      });
    }
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
    '/community/add-a-new-provider': '/community/create-provider',
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
