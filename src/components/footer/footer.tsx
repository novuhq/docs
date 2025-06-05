import Image from 'next/image';
import certificateAicpa from '@/components/icons/footer/certificate-aicpa.svg';
import certificateGDPR from '@/components/icons/footer/certificate-gdpr.svg';
import certificateHIPAA from '@/components/icons/footer/certificate-hipaa.svg';
import certificateISO from '@/components/icons/footer/certificate-iso.svg';
import certificateOSS from '@/components/icons/footer/certificate-oss.svg';
import Link from 'next/link';
import githubIcon from '@/components/icons/footer/gh.svg';
// import vscodeIcon from '@/components/icons/footer/vscode.svg';
import xIcon from '@/components/icons/footer/x.svg';
import discordIcon from '@/components/icons/footer/discord.svg';
import Socials from '@/components/footer/socials';
import LogoLink from '@/components/footer/logo-link';
import Circle from '@/components/icons/footer/circle';
import Messages from '@/components/icons/footer/messages';
import Sparkls from '@/components/icons/footer/sparkls';
import Journey from '@/components/icons/footer/journey';
import Docs from '@/components/icons/footer/docs';

const CERTIFICATES = [
  {
    src: certificateISO,
    alt: 'Certificate ISO27001',
    width: 24,
  },
  {
    src: certificateAicpa,
    alt: 'Certificate Aicpa',
    width: 28,
  },
  {
    src: certificateGDPR,
    alt: 'Certificate GDPR',
    width: 28,
  },
  {
    src: certificateHIPAA,
    alt: 'Certificate HIPAA',
    width: 51,
  },
  {
    src: certificateOSS,
    alt: 'Certificate OSS',
    width: 49,
  },
];

const SOCIALS = [
  {
    name: 'Twitter',
    href: 'https://x.com/novuhq',
    icon: xIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/novuhq/novu',
    icon: githubIcon,
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/novu',
    icon: discordIcon,
  },
  // {
  //   name: 'VSCode',
  //   href: 'https://www.linkedin.com/company/novu',
  //   icon: vscodeIcon,
  // },
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
      href: '/',
      text: 'Read llms.txt',
      target: '_self',
    },
    mainText: 'LLM?',
  },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-10">
      <div className="max-w-[1216px] container px-5 sm:px-11 sm:gap-x-5 flex flex-col-reverse sm:flex-row justify-between gap-y-10 mx-auto py-10">
        <div className="flex flex-col justify-between gap-y-[66px]">
          <LogoLink className="hidden sm:flex" />
          <div>
            <ul className="flex gap-[18px] flex-wrap">
              {CERTIFICATES.map((certificate) => (
                <li key={certificate.alt}>
                  <Link href="https://trust.novu.co>">
                    <Image
                      className=""
                      src={certificate.src}
                      alt={certificate.alt}
                      width={certificate.width}
                      height={28}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-1.5 mt-10">
              <div className="w-1.5 h-1.5 bg-[#22C358] rounded-full" />
              <p className="text-sm leading-snug tracking-[-0.02em] text-gray-4">
                All systems operational
              </p>
            </div>
            <div className="mt-3.5 text-gray-4 flex items-center gap-1.5">
              <span className="text-[16px]">Ⓒ</span>
              <span className="text-[14px] leading-snug tracking-[-0.02em]">
                {new Date().getFullYear()} Novu
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <LogoLink className="flex sm:hidden" />
          <Socials socials={SOCIALS} className="flex sm:hidden" />
          <ul className="min-w-72 flex flex-col gap-y-5">
            {FOOTER_LINKS.map(({ icon: Icon, link, mainText }) => {
              return (
                <li key={link.href} className="flex items-start gap-x-2">
                  <Icon />
                  <span className="text-[15px] leading-none tracking-[-0.02em]">
                    {mainText}{' '}
                    <Link
                      href={link.href}
                      className="text-blue-600 hover:opacity-90"
                      target={link.target || '_blank'}
                    >
                      {link.text}
                    </Link>
                  </span>
                </li>
              );
            })}
          </ul>
          <Socials socials={SOCIALS} className="hidden sm:flex" />
        </div>
      </div>
    </footer>
  );
};
