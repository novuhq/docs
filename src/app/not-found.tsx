'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { HomeIcon, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center px-4">
      <div className="text-center space-y-5">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">404</h1>
          <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl">Page not found</h2>
        </div>

        <p className="max-w-[600px] text-muted-foreground">
          Oops! The page you&apos;re looking for has vanished into the digital void. Don&apos;t
          worry though, our documentation is still here to help.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Button>
            <Link href="/" className="flex items-center gap-2">
              <HomeIcon className="w-4 h-4" />
              Home
            </Link>
          </Button>
          <Button>
            <Link href="javascript:history.back()" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Link>
          </Button>
        </div>

        <div className="relative mt-8 text-muted-foreground">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2">Error Code: 404</span>
          </div>
        </div>
      </div>
    </div>
  );
}
