import NextLink from 'next/link';
import Link from '@/components/ui/link';
import Image from 'next/image';
import { clsx } from 'clsx';
import { GolangIcon } from '@/components/icons/golang';
import { PythonIcon } from '@/components/icons/python';
import { TypescriptIcon } from '@/components/icons/typescript';
import { PhpIcon } from '@/components/icons/php';
import { DotnetIcon } from '@/components/icons/dotnet';
import { JavaIcon } from '@/components/icons/java';
import { KotlinIcon } from '@/components/icons/kotlin';
import { LaravelIcon } from '@/components/icons/laravel';
import { RubyIcon } from '@/components/icons/ruby';
import { Button } from '@/components/ui/button';
import Card from '../ui/card';
import ReactIcon from '../icons/home-page/react';
import NextjsIcon from '../icons/home-page/next';
import ClerkIcon from '../icons/home-page/clerk';
import RemixIcon from '../icons/home-page/remix';
import CardWithImage from '../ui/card-with-image';
import JavaScriptIcon from '../icons/home-page/javascript';
import CardWithIconAndText from '../ui/card-wth-icon-and-text';
import { Inter } from 'next/font/google';
import mainIcon from '@/images/pages/home-page/main-icon.png';
import mainIconDark from '@/images/pages/home-page/main-icon-dark.png';
import { ArrowRightIcon } from '@/components/icons/home-page/arrow-right';
import authImage from '@/images/pages/home-page/concepts/auth.jpg';
import organizationsImage from '@/images/pages/home-page/concepts/organizations.jpg';

import authorFirstImage from '@/images/pages/home-page/guides/author-1.jpg';
import authorSecondImage from '@/images/pages/home-page/guides/author-2.jpg';
import authorThirdImage from '@/images/pages/home-page/guides/author-3.jpg';
import authorFourthImage from '@/images/pages/home-page/guides/author-4.jpg';

import XIcon from '@/components/icons/home-page/x-icon';
import DiscordIcon from '@/components/icons/home-page/discord-icon';
import GitHubIcon from '@/components/icons/home-page/github-icon';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const getStartedCards = [
  {
    icon: ReactIcon,
    title: 'React Quickstart',
    description: 'Add Novu to your React project in minutes.',
    link: '/platform/quickstart/react',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Quickstart',
    description: 'Add Novu to your Next.js project in minutes.',
    link: '/platform/quickstart/nextjs',
  },
  {
    icon: ClerkIcon,
    title: 'Clerk Quickstart',
    description: 'Add Novu to your Clerk project in minutes.',
    link: '/guides/webhooks/clerk',
  },
  {
    icon: RemixIcon,
    title: 'Remix Quickstart',
    description: 'Add Novu to your Remix project in minutes.',
    link: '/platform/quickstart/remix',
  },
];

const concepts = [
  {
    image: authImage,
    title: 'What is Novu authorization?',
    description:
      'Novu supports multiple authentication strategies so that you can implement the strategy that makes sense for your users.',
    link: '/',
  },
  {
    image: organizationsImage,
    title: 'How do organizations work?',
    description:
      'Novu is an open-source Inbox infrastructure, that allows you to easily add numerous Notification capabilities to your application across multiple channels.',
    link: '/',
  },
  {
    image: organizationsImage,
    title: 'How do organizations work?',
    description:
      'Novu is an open-source Inbox infrastructure, that allows you to easily add numerous Notification capabilities to your application across multiple channels.',
    link: '/',
  },
  {
    image: authImage,
    title: 'What is Novu authorization?',
    description:
      'Novu supports multiple authentication strategies so that you can implement the strategy that makes sense for your users.',
    link: '/',
  },
];

const guides = [
  {
    category: 'Get started',
    timeToRead: 8,
    title: 'Sign-up & sign-in overview',
    authors: [
      {
        image: authorFirstImage,
        alt: 'Author name',
      },
      {
        image: authorSecondImage,
        alt: 'Author name',
      },
    ],
  },
  {
    category: 'Routing',
    timeToRead: 12,
    title: 'Enable organizations in your application',
  },
  {
    category: 'API reference',
    timeToRead: 5,
    title: 'Connect with databases',
  },
  {
    category: 'Architecture',
    timeToRead: 9,
    title: 'Manage users in your app',
    authors: [
      {
        image: authorThirdImage,
        alt: 'Author name',
      },
      {
        image: authorFourthImage,
        alt: 'Author name',
      },
    ],
  },
];

const sdks = {
  'client side': [
    {
      title: 'React',
      icon: ReactIcon,
      href: '/platform/sdks/react',
    },
    {
      title: 'JavaScript',
      icon: JavaScriptIcon,
      href: '/platform/sdks/javascript',
    },
    {
      title: 'React Native',
      icon: ReactIcon,
      href: 'platform/sdks/react-native',
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
      title: 'PHP',
      icon: PhpIcon,
      href: '/platform/sdks/server/go',
    },
    {
      title: '.NET',
      icon: DotnetIcon,
      href: '/platform/sdks/server/go',
    },
    {
      title: 'Java',
      icon: JavaIcon,
      href: '/platform/sdks/server/go',
    },
    {
      title: 'Kotlin',
      icon: KotlinIcon,
      href: '/platform/sdks/server/go',
    },
    {
      title: 'Laravel',
      icon: LaravelIcon,
      href: '/platform/sdks/server/go',
    },
    {
      title: 'Ruby',
      icon: RubyIcon,
      href: '/platform/sdks/server/go',
    },
  ],
};

const communityCards = [
  {
    icon: XIcon,
    title: 'X',
    description: 'Follow us on X for the latest news and updates.',
    link: 'https://x.com/novuhq',
  },
  {
    icon: DiscordIcon,
    title: 'Discord',
    description: 'Join hundreds of developers building with Novu.',
    link: 'https://discord.gg/novu',
  },
  {
    icon: GitHubIcon,
    title: 'GitHub',
    description: 'Follow progress and contribute to the project.',
    link: 'https://github.com/novuhq/novu',
  },
];

export function IndexPage() {
  return (
    <div className={`min-h-screen home bg-background not-prose ${inter.className}`}>
      <div className="container mx-auto px-px flex flex-col lg:gap-y-16 md:gap-y-14 gap-y-12">
        <section>
          <div className="relative size-14">
            <Image
              className="absolute inset-0 w-full h-full opacity-100 dark:opacity-0"
              src={mainIcon.src}
              alt=""
              width={56}
              height={56}
              quality={100}
            />
            <Image
              className="absolute inset-0 w-full h-full opacity-0 dark:opacity-100"
              src={mainIconDark.src}
              alt=""
              width={56}
              height={56}
              quality={100}
            />
          </div>
          <h1 className="text-[32px] md:text-[40px] lg:text-[44px] mt-[18px] font-medium tracking-[-0.04em] text-black dark:text-white transition-colors leading-[1.125]">
            Novu Documentation
          </h1>
          <p className="text-base/normal lg:text-lg/normal transition-colors text-black/80 dark:text-white/80 mt-3 mb-0 max-w-[608px] tracking-[-0.02em] opacity-80 font-normal">
            Novu is an open-source Inbox infrastructure, that allows you to easily add Notification
            capabilities to your application across multiple channels.
          </p>
          <div className="flex gap-2.5 mt-7 flex-col md:flex-row">
            <Button
              className="rounded-md"
              color="black"
              size="medium"
              href="https://dashboard.novu.co/auth/sign-up"
            >
              Get Started
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
          <h2 className="text-2xl md:text-[28px] font-medium text-black leading-tight tracking-[-0.04em] dark:text-white transition-colors">
            Get started
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-7 md:grid-cols-2 lg:grid-cols-3">
            {getStartedCards.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </section>

        <section>
          <header className="flex justify-between gap-4 flex-col md:flex-row md:items-end">
            <h2 className="text-2xl md:text-[28px] font-medium text-black leading-tight tracking-[-0.04em] dark:text-white transition-colors">
              Learn the concepts
            </h2>
            <Link href="/" target="_blank">
              See all concepts
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </header>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 mt-8 md:mt-7 md:grid-cols-2 md:gap-y-7">
            {concepts.map((concept, index) => (
              <CardWithImage
                key={index}
                image={concept.image}
                title={concept.title}
                description={concept.description}
                link={concept.link}
              />
            ))}
          </div>
        </section>

        <section>
          <header className="flex justify-between gap-4 flex-col md:flex-row md:items-end">
            <h2 className="text-2xl md:text-[28px] font-medium text-black leading-tight tracking-[-0.04em] dark:text-white transition-colors">
              Explore guides
            </h2>
            <Link href="/" target="_blank">
              See all guides
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </header>
          <ul className="flex flex-col mt-6 border border-[#E6E6E6] rounded-lg divide-y divide-[#E6E6E6] dark:border-[#262626] dark:divide-[#262626] transition-colors md:mt-7">
            {guides.map(({ category, timeToRead, authors, title }, index) => {
              return (
                <li className="transition-colors group" key={index}>
                  <NextLink
                    className="relative w-full flex justify-between gap-x-6 p-4 hover:bg-[#FAFAFA] dark:hover:bg-[#0D0D0D] transition-colors group-first:rounded-t-lg group-last:rounded-b-lg"
                    href="/"
                    target="_blank"
                  >
                    <div>
                      <div className="flex items-center gap-x-2">
                        <span className="text-[13px] font-medium tracking-[-0.02em] text-[#C25CD6] dark:text-[#E18CF2] transition-colors">
                          {category}
                        </span>
                        <span
                          className="h-1 shrink-0 w-1 rounded-full bg-[#666666] dark:bg-[#999999] transition-colors"
                          aria-hidden="true"
                        ></span>
                        <span className="text-[13px] leading-tight tracking-tight text-[#666666] dark:text-[#999999] transition-colors">
                          {timeToRead} min
                        </span>
                      </div>
                      <h3 className="text-base/snug md:text-xl/snug font-medium tracking-[-0.02em] text-black dark:text-white transition-colors">
                        {title}
                      </h3>
                    </div>
                    {authors && (
                      <div className="flex items-center">
                        {authors.map(({ image, alt }, index) => (
                          <Image
                            className={clsx(
                              'shrink-0 rounded-full size-7 md:size-8',
                              index > 0 && '-ml-3',
                              authors.length > 1 &&
                                'outline outline-0.5 outline-white dark:outline-[#0D0D0D] transition-colors'
                            )}
                            src={image}
                            alt={alt}
                            width={32}
                            height={32}
                            key={index}
                            style={{ zIndex: index }}
                            quality={100}
                          />
                        ))}
                      </div>
                    )}
                  </NextLink>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-[28px] font-medium text-black leading-tight tracking-[-0.04em] dark:text-white transition-colors">
            SDKs
          </h2>
          {Object.entries(sdks).map(([key, items], index) => (
            <div className="mt-7" key={index}>
              <h3 className="text-[14px] uppercase text-[#666666] dark:text-[#999999] leading-none tracking-[-0.02em]">
                {key}
              </h3>
              <div className="grid grid-cols-1 gap-4 mt-[18px] md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, nestedIndex) => (
                  <NextLink
                    key={index + '-' + nestedIndex}
                    href={item.href}
                    className="group no-underline"
                  >
                    <CardWithIconAndText item={item} />
                  </NextLink>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl md:text-[28px] font-medium text-black leading-tight tracking-[-0.04em] dark:text-white transition-colors">
            Community
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-6 md:mt-7 md:grid-cols-2 lg:grid-cols-3">
            {communityCards.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
                target="_blank"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
