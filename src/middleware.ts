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
    return NextResponse.redirect(new URL('/platform', request.url), {
      status: 308,
    });
  }

  // Section root redirects
  const sectionRedirects: Record<string, string> = {
    '/': '/platform',
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
    '/platform/integrations/sms/burst-sms': '/platform/integrations/sms/kudosity',

    // Guides
    '/guides/add-digest-to-inapp-notifications': '/platform/workflow/digest',

    // Additional Resources
    '/additional-resources/data-migrations': '/community/data-migrations',

    // Community
    '/community/machine-setup': '/community/run-in-local-machine',
    '/community/monorepo-structure': '/community/code-structure',

    // Inbox section (old → new structure)
    '/platform/inbox/react/get-started': '/platform/inbox/setup-inbox',
    '/platform/inbox/prepare-for-production#secure-your-inbox-with-hmac-encryption':
      '/platform/inbox/prepare-for-production',
    '/platform/inbox/react/migration-guide': '/platform/inbox/migration-guide',
    '/platform/inbox/react/hooks': '/platform/sdks/react/hooks/novu-provider',
    '/platform/inbox/react/components': '/platform/inbox/overview#composable-architecture',
    '/platform/inbox/react/components/overview': '/platform/inbox/overview#composable-architecture',
    '/platform/inbox/react/components/inbox': '/platform/inbox/overview',
    '/platform/inbox/react/components/inbox#data-object':
      '/platform/inbox/configuration/data-object',
    '/platform/inbox/react/components/inbox-content':
      '/platform/inbox/advanced-customization/customize-popover#inboxcontent-component',
    '/platform/inbox/react/components/bell':
      '/platform/inbox/advanced-customization/customize-bell',
    '/platform/inbox/react/components/preferences': '/platform/inbox/configuration/preferences',
    '/platform/inbox/react/styling': '/platform/inbox/configuration/styling',
    '/platform/inbox/react/styling#appearance-prop': '/platform/inbox/configuration/styling',
    '/platform/inbox/react/headless': '/platform/inbox/headless-mode',
    '/platform/inbox/react/localization': '/platform/inbox/advanced-concepts/localization',
    '/platform/inbox/advanced-concepts/localization':
      '/platform/inbox/advanced-features/localization',
    '/platform/inbox/advanced-concepts/multi-tenancy':
      '/platform/inbox/advanced-features/multi-tenancy',

    // Old overview paths to new section roots
    '/platform/overview': '/platform',
    '/guides/overview': '/guides',
    '/framework/overview': '/framework',
    '/community/overview': '/community',
    '/api-reference/overview': '/api-reference',
    '/platform/workflow/overview': '/platform/workflow',
    '/platform/workflows/notification-workflows': '/platform/workflow',
    '/platform/sdks/overview': '/platform/sdks',

    '/platform/inbox/overview': '/platform/inbox',
    '/platform/integrations/overview': '/platform/integrations',
    '/platform/subscription/overview': '/platform/subscription',
    '/platform/sdks/react/overview': '/platform/sdks/react',
    // Workflow section (old → new structure)
    '/platform/workflow/layouts':
      '/platform/workflow/add-notification-content/channels-template-editors#email-layouts',
    '/platform/workflow/template-editor':
      '/platform/workflow/add-notification-content/channels-template-editors',
    '/platform/workflow/build-a-workflow': '/platform/workflow/create-a-workflow',
    '/platform/workflow/build-a-workflow#manage-payload-schema':
      '/platform/workflow/configure-workflow#payload-schema',
    '/platform/workflow/delay': '/platform/workflow/add-and-configure-steps#delay',
    '/platform/workflow/digest': '/platform/workflow/add-and-configure-steps#digest',
    '/platform/workflow/throttle-step': '/platform/workflow/add-and-configure-steps#throttle',
    '/platform/workflow/step-conditions':
      '/platform/workflow/add-and-configure-steps/step-conditions',
    '/platform/workflow/channel-steps': '/platform/workflow/add-and-configure-steps#channel-steps',
    '/platform/workflow/tags': '/platform/workflow/configure-workflow#tags',
    '/community/project-differences': '/community/self-hosted-and-novu-cloud',

    // Legacy broken paths
    '/platform/concepts/endpoint': '/framework/endpoint',
    '/platform/concepts/environments': '/platform/developer/environments',
    '/platform/concepts/notifications': '/platform/concepts/notification-event',
    '/platform/additional-resources/roles-and-permissions':
      '/platform/account/roles-and-permissions',
    '/platform/inbox/headless/api-reference': '/platform/inbox/headless-mode',
    '/platform/inbox/headless/get-started': '/platform/inbox/headless-mode',
    '/platform/inbox/react/tabs': '/platform/inbox/configuration/tabs',
    '/platform/integrations/demo-providers': '/platform/integrations/demo-integration',
    '/platform/integrations/email/outlook-365': '/platform/integrations/email/outlook365',
    '/platform/integrations/email/email-webhook': '/platform/integrations/email/webhook',
    '/platform/integrations/sms/azure-sms': '/platform/integrations/sms/azure',
    '/platform/integrations/sms/bulksms': '/platform/integrations/sms/bulk-sms',
    '/platform/subscription/Headless-hooks': '/platform/subscription/headless-hooks',
    '/platform/workflow/add-notification-content':
      '/platform/workflow/add-notification-content/channels-template-editors',
    '/platform/workflow/translations': '/platform/workflow/advanced-features/translations',
    '/platform/workflow/add-and-configure-steps/action-steps/delay':
      '/platform/workflow/add-and-configure-steps/configure-action-steps/delay',
    '/platform/workflow/add-and-configure-steps/action-steps/throttle':
      '/platform/workflow/add-and-configure-steps/configure-action-steps/throttle',
    '/platform/framework/typescript/steps': '/framework/typescript/steps',
    '/framework/steps': '/framework/typescript/steps',

    // Additional 404 fixes
    '/platform/run-in-local-machine': '/community/run-in-local-machine',
    '/platform/workflow/workflows.mdx': '/platform/workflow',
    '/docs/platform/workflow/layouts':
      '/platform/workflow/add-notification-content/channels-template-editors#email-layouts',
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
