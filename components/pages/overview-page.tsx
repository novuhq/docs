import { Book, Key, Layers, Send } from "lucide-react";
import Link from "next/link";

import { DotnetIcon } from "@/components/icons/dotnet";
import { GolangIcon } from "@/components/icons/golang";
import { JavaIcon } from "@/components/icons/java";
import { LaravelIcon } from "@/components/icons/laravel";
import { NodejsIcon } from "@/components/icons/nodejs";
import { PhpIcon } from "@/components/icons/php";
import { PythonIcon } from "@/components/icons/python";
import { RestApiIcon } from "@/components/icons/rest-api";
import { RubyIcon } from "@/components/icons/ruby";
import { Button } from "@/components/ui/button";

export function OverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-[500] tracking-tight mb-1">
            Documentation
          </h1>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-normal font-[300] mt-0">
            Novu is the platform for adding real-time Inbox and notifications
            into your application.
          </p>
          <div className="flex gap-3 justify-center">
            <Button className="rounded-md bg-[#111827] text-white hover:bg-[#111827]/90">
              Get started
            </Button>
            <Button color="outline" className="rounded-md">
              Browse examples
            </Button>
          </div>
        </div>

        {/* Main Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-24">
          {/* Left Column Stack */}
          <div className="md:col-span-8 flex flex-col gap-4">
            <Link
              href="/docs/getting-started"
              className="group no-underline block"
            >
              <div className="relative flex flex-col p-5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-all duration-300 gap-5">
                <div className="flex size-11 items-center justify-center rounded-md border border-dotted border-product-divider dark:border-product-divider-inverse-subtle">
                  <Book className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="mt-auto max-w-xl">
                  <h2 className="text-base font-medium text-slate-900 mb-0 mt-0">
                    Get started
                  </h2>
                  <p className="text-sm text-[#57565d] font-[300] leading-normal mb-0">
                    Learn how to install and configure Novu into your project.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/docs/platform/authentication"
              className="group no-underline block"
            >
              <div className="relative flex flex-col p-5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-all duration-300 gap-5">
                <div className="flex size-11 items-center justify-center rounded-md border border-dotted border-product-divider dark:border-product-divider-inverse-subtle">
                  <Key className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="mt-auto max-w-xl">
                  <h2 className="text-base font-medium text-slate-900 mb-0 mt-0">
                    Authentication
                  </h2>
                  <p className="text-sm text-[#57565d] font-[300] leading-normal mb-0">
                    Learn how to secure your Novu app and manage API keys.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column - Full Height */}
          <div className="md:col-span-4 h-full">
            <Link
              href="/docs/platform/quickstart"
              className="group no-underline block h-full"
            >
              <div className="relative flex flex-col p-5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-all duration-300 gap-5 h-full">
                <div className="flex size-11 items-center justify-center rounded-md border border-dotted border-product-divider dark:border-product-divider-inverse-subtle">
                  <Send className="w-5 h-5 text-pink-600" />
                </div>
                <div className="mt-auto">
                  <h2 className="text-base font-medium text-slate-900 mb-0 mt-0">
                    Tutorial
                  </h2>
                  <p className="text-sm text-[#57565d] font-[300] leading-normal mb-0">
                    Follow our interactive tutorial for adding notifications to
                    your app.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* API Reference Section */}
        <div>
          <h2 className="text-2xl font-medium mb-6">API Reference</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              {
                title: "REST API",
                package: "https://api.novu.co/v1",
                icon: RestApiIcon,
                color: "text-[#000000]",
                href: "/docs/api/overview",
              },
              {
                title: "Node.js",
                package: "@novu/api",
                icon: NodejsIcon,
                color: "text-[#339933]",
                href: "/docs/sdks/nodejs",
              },
              {
                title: "Python",
                package: "novu-py",
                icon: PythonIcon,
                color: "text-[#3776AB]",
                href: "/docs/sdks/python",
              },
              {
                title: "Go",
                package: "github.com/novuhq/novu-go",
                icon: GolangIcon,
                color: "text-[#00ADD8]",
                href: "/docs/sdks/go",
              },
              {
                title: "PHP",
                package: "novuhq/novu",
                icon: PhpIcon,
                color: "text-[#777BB4]",
                href: "/docs/sdks/php",
              },
              {
                title: "Java",
                package: "co.novu:novu-java",
                icon: JavaIcon,
                color: "text-[#007396]",
                href: "/docs/sdks/java",
              },
              {
                title: "Laravel",
                package: "novu/novu-laravel",
                icon: LaravelIcon,
                color: "text-[#FF2D20]",
                href: "/docs/sdks/laravel",
              },
              {
                title: ".NET",
                package: "Novu",
                icon: DotnetIcon,
                color: "text-[#512BD4]",
                href: "/docs/sdks/dotnet",
              },
              {
                title: "Ruby",
                package: "novu",
                icon: RubyIcon,
                color: "text-[#CC342D]",
                href: "/docs/sdks/ruby",
              },
              {
                title: "Kotlin",
                package: "co.novu:novu-kotlin",
                icon: Layers,
                color: "text-[#7F52FF]",
                href: "/docs/sdks/kotlin",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group no-underline"
              >
                <div className="flex items-center gap-3 p-3.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  <div
                    className={`${item.color} flex items-center text-product-bolder h-12 w-12 justify-center rounded-lg border border-dotted border-product-divider bg-product-surface-base group-hover:border-product-divider-bold group-focus:border-product-divider-bold`}
                  >
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {item.package}
                    </div>
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
