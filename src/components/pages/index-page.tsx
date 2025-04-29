import Link from 'next/link';
import Image from 'next/image';
import { clsx } from 'clsx';
// TODO: delete all unused icons
// import { DotnetIcon } from '@/components/icons/dotnet';
import { GolangIcon } from '@/components/icons/golang';
// import { JavaIcon } from '@/components/icons/java';
// import { LaravelIcon } from '@/components/icons/laravel';
// import { PhpIcon } from '@/components/icons/php';
import { PythonIcon } from '@/components/icons/python';
// import { RestApiIcon } from '@/components/icons/rest-api';
// import { RubyIcon } from '@/components/icons/ruby';
import { TypescriptIcon } from '@/components/icons/typescript';
import { Button } from '@/components/ui/button';
import Card from '../ui/card';
import { ReactIcon } from '../icons/react';
import { NextjsIcon } from '../icons/nextjs';
import { ClerkIcon } from '../icons/clerk';
import { RemixIcon } from '../icons/remix';
import CardWithImage from '../ui/card-with-image';
import CardWithIconAndText from '../ui/card-wth-icon-and-text';
import { Inter } from 'next/font/google';
import MainIcon from '@/components/icons/index/main-icon.inline.svg';
import ArrowRightIcon from '@/components/icons/index/arrow-right.inline.svg';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const getStartedCards = [
  {
    icon: ReactIcon,
    title: 'React Quickstart',
    description: 'Add Novu to your React project in minutes.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Quickstart',
    description: 'Add Novu to your Next.js project in minutes.',
  },
  {
    icon: ClerkIcon,
    title: 'Clerk Quickstart',
    description: 'Add Novu to your Clerk project in minutes.',
  },
  {
    icon: RemixIcon,
    title: 'Remix Quickstart',
    description: 'Add Novu to your Remix project in minutes.',
  },
];

const concepts = [
  {
    image: '/images/concepts/notifications.png',
    title: 'What is Novu authorization?',
    description:
      'Novu supports multiple authentication strategies so that you can implement the strategy that makes sense for your users.',
  },
  {
    image: '/images/concepts/notifications.png',
    title: 'React Quickstart',
    description:
      'Novu supports multiple authentication strategies so that you can implement the strategy that makes sense for your users.',
  },
  {
    image: '/images/concepts/notifications.png',
    title: 'React Quickstart',
    description:
      'Novu supports multiple authentication strategies so that you can implement the strategy that makes sense for your users.',
  },
  {
    image: '/images/concepts/notifications.png',
    title: 'React Quickstart',
    description:
      'Novu supports multiple authentication strategies so that you can implement the strategy that makes sense for your users.',
  },
];

const guides = [
  {
    category: 'React',
    timeToRead: 10,
    title: 'React Quickstart',
    authors: [
      {
        image: null,
      },
      {
        image: null,
      },
    ],
  },
  {
    category: 'React',
    timeToRead: 10,
    title: 'React Quickstart',
    authors: [
      {
        image: null,
      },
    ],
  },
  {
    category: 'React',
    timeToRead: 10,
    title: 'React Quickstart',
    authors: [
      {
        image: null,
      },
    ],
  },
  {
    category: 'React',
    timeToRead: 10,
    title: 'React Quickstart',
    authors: [
      {
        image: null,
      },
    ],
  },
];

const sdks = {
  'client side': [
    {
      title: 'Typescript',
      icon: TypescriptIcon,
      href: '/platform/sdks/server/typescript',
    },
    {
      title: 'Python',
      icon: PythonIcon,
      href: '/platform/sdks/server/python',
    },
    {
      title: 'Go',
      icon: GolangIcon,
      href: '/platform/sdks/server/go',
    },
  ],
  'server side': [
    {
      title: 'Typescript',
      icon: TypescriptIcon,
      href: '/platform/sdks/server/typescript',
    },
    {
      title: 'Python',
      icon: PythonIcon,
      href: '/platform/sdks/server/python',
    },
    {
      title: 'Go',
      icon: GolangIcon,
      href: '/platform/sdks/server/go',
    },
    {
      title: 'Go',
      icon: GolangIcon,
      href: '/platform/sdks/server/go',
    },
    {
      title: 'Go',
      icon: GolangIcon,
      href: '/platform/sdks/server/go',
    },
  ],
};

const communityCards = [
  {
    icon: ReactIcon,
    title: 'React Quickstart',
    description: 'Add Novu to your React project in minutes.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Quickstart',
    description: 'Add Novu to your Next.js project in minutes.',
  },
  {
    icon: ClerkIcon,
    title: 'Clerk Quickstart',
    description: 'Add Novu to your Clerk project in minutes.',
  },
];

export function IndexPage() {
  return (
    <div className={`min-h-screen home bg-background not-prose ${inter.className}`}>
      <div className="container mx-auto px-4 py-12 flex flex-col gap-y-16">
        <section>
          <MainIcon className="w-14 h-14" />
          <h1 className="text-[44px] mt-[18px] font-medium tracking-tighter text-black leading-[1.125]">
            Novu Documentation
          </h1>
          <p className="text-lg text-black mt-3 mb-0 max-w-[608px] opacity-80 font-normal leading-normal">
            Novu is an open-source Inbox infrastructure, that allows you to easily add Notification
            capabilities to your application across multiple channels.
          </p>
          <div className="flex gap-2.5 mt-7">
            <Button
              className="rounded-md"
              color="black"
              size="medium"
              href="https://dashboard.novu.co/auth/sign-up"
            >
              Create an Account
            </Button>
            <Button
              className="rounded-md"
              color="white"
              size="medium"
              href="https://dashboard.novu.co/auth/sign-up"
            >
              Browse Examples
            </Button>
          </div>
        </section>
        <section>
          <h2 className="text-[28px] font-medium text-black leading-tight tracking-[-0.04em]">
            Get started
          </h2>
          <div className="grid grid-cols-3 gap-4 mt-7">
            {getStartedCards.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>

        <section>
          <header className="flex items-end justify-between gap-x-3">
            <h2 className="text-[28px] font-medium text-black leading-tight tracking-[-0.04em]">
              Learn the concepts
            </h2>
            <Link
              href="/"
              target="_blank"
              className="text-[16px] mb-1.5 flex items-center gap-x-0.5 text-[#4B73EC] font-medium leading-none tracking-[-0.02em]"
            >
              See all concepts
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </header>
          <div className="grid grid-cols-2 gap-x-6 gap-y-7 mt-7">
            {concepts.map((concept, index) => (
              <Link href="/" target="_blank" key={index}>
                <CardWithImage
                  image={concept.image}
                  title={concept.title}
                  description={concept.description}
                />
              </Link>
            ))}
          </div>
        </section>

        <section>
          <header className="flex items-end justify-between gap-x-3">
            <h2 className="text-[28px] font-medium text-black leading-tight tracking-[-0.04em]">
              Explore guides
            </h2>
            <Link
              href="/"
              target="_blank"
              className="text-[16px] mb-1.5 flex items-center gap-x-0.5 text-[#4B73EC] font-medium leading-none tracking-[-0.02em]"
            >
              See all guides
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </header>
          <ul className="flex flex-col mt-7 border border-[#E6E6E6] rounded-lg divide-y divide-[#E6E6E6]">
            {guides.map(({ category, timeToRead, authors, title }, index) => {
              const isMultipleAuthors = authors.length > 1;

              return (
                <li className="relative w-full flex justify-between gap-x-6 p-4" key={index}>
                  <div>
                    <div className="flex items-center gap-x-2">
                      <span className="text-[13px] font-medium tracking-[-0.02em] text-[#C25CD6]">
                        {category}
                      </span>
                      <span
                        className="h-1 shrink-0 w-1 rounded-full bg-[#666666]"
                        aria-hidden="true"
                      ></span>
                      <span className="text-[13px] leading-tight tracking-tight text-[#666666]">
                        {timeToRead} min
                      </span>
                    </div>
                    <h3 className="text-[20px] font-medium tracking-[-0.02em] text-black">
                      {title}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    {authors.map(({ image }, index) =>
                      image ? (
                        <Image
                          className={clsx(
                            'shrink-0 rounded-full',
                            index > 0 && '-ml-3',
                            isMultipleAuthors && 'outline outline-0.5 outline-white'
                          )}
                          src={image}
                          alt=""
                          width={32}
                          height={32}
                          key={index}
                          style={{ zIndex: index }}
                        />
                      ) : (
                        <div
                          key={index}
                          className={clsx(
                            'w-8 h-8 rounded-full bg-[#251F4E]',
                            isMultipleAuthors && 'outline outline-0.5 outline-white',
                            index > 0 && '-ml-3'
                          )}
                          style={{ zIndex: index }}
                        />
                      )
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2 className="text-[28px] font-medium text-black leading-tight tracking-[-0.04em]">
            SDKs
          </h2>
          {Object.entries(sdks).map(([key, items], index) => (
            <div className="mt-7" key={index}>
              <h3 className="text-[14px] uppercase text-[#666666] leading-none tracking-[-0.02em]">
                {key}
              </h3>
              <div className="grid grid-cols-3 gap-4 mt-[18px]">
                {items.map((item, nestedIndex) => (
                  <Link
                    key={index + '-' + nestedIndex}
                    href={item.href}
                    className="group no-underline"
                  >
                    <CardWithIconAndText item={item} />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-[28px] font-medium text-black leading-tight tracking-[-0.04em]">
            Community
          </h2>
          <div className="grid grid-cols-3 gap-4 mt-7">
            {communityCards.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
