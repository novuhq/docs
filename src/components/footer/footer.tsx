import Link from 'next/link';
import Socials from '@/components/footer/socials';
import LogoLink from '@/components/footer/logo-link';
import Circle from '@/components/icons/footer/circle';
import Messages from '@/components/icons/footer/messages';
import Sparkls from '@/components/icons/footer/sparkls';
import Journey from '@/components/icons/footer/journey';
import Docs from '@/components/icons/footer/docs';
import Certificates from '@/components/footer/certificates';
import GhIcon from '@/components/icons/footer/gh';
import XIcon from '@/components/icons/footer/x';
import DiscordIcon from '@/components/icons/footer/discord';
import Status from '@/components/footer/status';

const SOCIALS = [
  {
    name: 'Twitter',
    href: 'https://x.com/novuhq',
    icon: XIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/novuhq/novu',
    icon: GhIcon,
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/novu',
    icon: DiscordIcon,
  },
];

const FOOTER_LINKS = [
  {
    icon: Circle,
    mainText: 'Need help?',
    link: {
      href: 'mailto:support@novu.co',
      text: 'Contact Support',
    },
  },
  {
    icon: Docs,
    mainText: 'Check out our',
    link: {
      href: 'https://roadmap.novu.co/changelog',
      text: 'Changelog',
    },
  },
  {
    icon: Journey,
    mainText: 'See what’s coming on our',
    link: {
      href: 'https://roadmap.novu.co/roadmap',
      text: 'Roadmap',
    },
  },
  {
    icon: Messages,
    link: {
      href: 'https://novu.co/contact-us/',
      text: 'Contact Sales',
    },
    mainText: 'Questions?',
  },
  {
    icon: Sparkls,
    link: {
      href: 'https://docs.novu.co/llms.txt',
      text: 'Read llms.txt',
      target: '_self',
    },
    mainText: 'LLM?',
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#ffffff] border-t border-[#E6E6E6] dark:border-[#1A1A1A] dark:bg-[#07070B]">
      <div className="max-w-[1216px] xl:px-0 container px-5 md:px-8 sm:gap-x-5 flex flex-col-reverse sm:flex-row justify-between gap-y-2 sm:gap-y-10 mx-auto py-10">
        <div className="flex flex-col justify-between gap-y-[66px]">
          <LogoLink className="hidden sm:flex" />
          <div>
            <Certificates className="hidden sm:flex" />
            <Status />
            <div className="mt-1.5 text-[#333333] dark:text-[#cccccc] flex items-center gap-1.5">
              <span className="text-[16px]">Ⓒ</span>
              <span className="text-[14px] leading-snug tracking-[-0.02em]">
                {new Date().getFullYear()} Novu
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <LogoLink className="flex sm:hidden" />
          <Certificates className="sm:hidden flex" />
          <ul className="min-w-72 flex flex-col gap-y-5">
            {FOOTER_LINKS.map(({ icon: Icon, link, mainText }) => {
              return (
                <li key={link.href} className="flex items-start gap-x-2">
                  <Icon />
                  <span className="text-[15px] text-[#333333] dark:text-[#E6E6E6] leading-none tracking-[-0.02em]">
                    {mainText}{' '}
                    <Link
                      href={link.href}
                      className="text-[#4B73EC] dark:text-[#00D5FF] hover:text-[#809FFF] dark:hover:text-[#80EAFF]"
                      target={link.target || '_blank'}
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </Link>
                  </span>
                </li>
              );
            })}
          </ul>
          <Socials socials={SOCIALS} className="flex" />
        </div>
      </div>
    </footer>
  );
};
