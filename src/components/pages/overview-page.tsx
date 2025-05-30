import { Bell, Blocks, Book, Layers, Braces } from 'lucide-react';
import Link from 'next/link';

import { DotnetIcon } from '@/components/icons/dotnet';
import { GolangIcon } from '@/components/icons/golang';
import { JavaIcon } from '@/components/icons/java';
import { LaravelIcon } from '@/components/icons/laravel';
import { PhpIcon } from '@/components/icons/php';
import { PythonIcon } from '@/components/icons/python';
import { RestApiIcon } from '@/components/icons/rest-api';
import { RubyIcon } from '@/components/icons/ruby';
import { TypescriptIcon } from '@/components/icons/typescript';
import { Button } from '@/components/ui/button';

export function OverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-[500] tracking-tight mb-1 text-foreground">Documentation</h1>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-normal font-[300] mt-0">
            Novu is the platform for adding real-time Inbox and notifications into your application.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="https://dashboard.novu.co/auth/sign-up" target="_blank">
              <Button className="rounded-md" color="primary">
                Create an Account
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-24">
          <div className="md:col-span-8 flex flex-col gap-4">
            <Link href="/platform/quickstart/nextjs" className="group no-underline block">
              <div className="relative flex flex-col p-5 rounded-lg border border-border hover:bg-accent transition-all duration-300 gap-5">
                <div className="flex size-11 items-center justify-center rounded-md border border-dotted border-border">
                  <Book className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="mt-auto max-w-xl">
                  <h2 className="text-base font-medium text-foreground mb-0 mt-0">Get started</h2>
                  <p className="text-sm text-muted-foreground font-[300] leading-normal mb-0">
                    Learn how to install and configure Novu into your Next.js project.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/platform/concepts/workflows" className="group no-underline block">
              <div className="relative flex flex-col p-5 rounded-lg border border-border hover:bg-accent transition-all duration-300 gap-5">
                <div className="flex size-11 items-center justify-center rounded-md border border-dotted border-border">
                  <Blocks className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="mt-auto max-w-xl">
                  <h2 className="text-base font-medium text-foreground mb-0 mt-0">The Basics</h2>
                  <p className="text-sm text-muted-foreground font-[300] leading-normal mb-0">
                    Learn about the basic concepts of Novu, including workflows, subscribers, etc...
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="md:col-span-4 h-full">
            <Link href="/platform/inbox/overview" className="group no-underline block h-full">
              <div className="relative flex flex-col p-5 rounded-lg border border-border hover:bg-accent transition-all duration-300 gap-5 h-full">
                <div className="flex size-11 items-center justify-center rounded-md border border-dotted border-border">
                  <Bell className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="mt-auto">
                  <h2 className="text-base font-medium text-foreground mb-0 mt-0">{'<Inbox />'}</h2>
                  <p className="text-sm text-muted-foreground font-[300] leading-normal mb-0">
                    Learn about the inbox component and how to customize it.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* API Reference Section */}
        <div>
          <h2 className="text-2xl font-medium mb-6 text-foreground">API Reference</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              {
                title: 'REST API',
                package: 'https://api.novu.co/v1',
                icon: Braces,
                color: 'text-foreground dark:text-foreground',
                href: '/api-reference/overview',
              },
              {
                title: 'Typescript',
                package: '@novu/api',
                icon: TypescriptIcon,
                color: 'text-[#339933] dark:text-[#43c743]',
                href: '/platform/sdks/server/typescript',
              },
              {
                title: 'Python',
                package: 'novu-py',
                icon: PythonIcon,
                color: 'text-[#3776AB] dark:text-[#4d9fe6]',
                href: '/platform/sdks/server/python',
              },
              {
                title: 'Go',
                package: 'github.com/novuhq/novu-go',
                icon: GolangIcon,
                color: 'text-[#00ADD8] dark:text-[#29c4ec]',
                href: '/platform/sdks/server/go',
              },
              {
                title: 'PHP',
                package: 'novuhq/novu',
                icon: PhpIcon,
                color: 'text-[#777BB4] dark:text-[#9b9fd8]',
                href: '/platform/sdks/server/php',
              },
              {
                title: 'Java',
                package: 'co.novu:novu-java',
                icon: JavaIcon,
                color: 'text-[#007396] dark:text-[#1a9fd1]',
                href: '/platform/sdks/server/java',
              },
              {
                title: 'Laravel',
                package: 'novu/novu-laravel',
                icon: LaravelIcon,
                color: 'text-[#FF2D20] dark:text-[#ff4d42]',
                href: '/platform/sdks/server/laravel',
              },
              {
                title: '.NET',
                package: 'Novu',
                icon: DotnetIcon,
                color: 'text-[#512BD4] dark:text-[#7048ec]',
                href: '/platform/sdks/server/dotnet',
              },
              {
                title: 'Ruby',
                package: 'novu',
                icon: RubyIcon,
                color: 'text-[#CC342D] dark:text-[#e65a54]',
                href: '/platform/sdks/server/ruby',
              },
              {
                title: 'Kotlin',
                package: 'co.novu:novu-kotlin',
                icon: Layers,
                color: 'text-[#7F52FF] dark:text-[#9c7aff]',
                href: '/platform/sdks/server/kotlin',
              },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="group no-underline">
                <div className="flex items-center gap-3 p-3.5 border border-border rounded-lg hover:bg-accent transition-colors">
                  <div
                    className={`${item.color} flex items-center h-12 w-12 justify-center rounded-lg border border-dotted border-border bg-background group-hover:border-border group-focus:border-border`}
                  >
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{item.title}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
