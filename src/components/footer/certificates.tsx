'use client';

import { useTheme } from 'next-themes';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import certificateAicpa from '@/components/icons/footer/certificate-aicpa.svg';
import certificateAicpaDark from '@/components/icons/footer/certificate-aicpa-dark.svg';
import certificateGDPR from '@/components/icons/footer/certificate-gdpr.svg';
import certificateGDPRDark from '@/components/icons/footer/certificate-gdpr-dark.svg';
import certificateHIPAA from '@/components/icons/footer/certificate-hipaa.svg';
import certificateHIPAADark from '@/components/icons/footer/certificate-hipaa-dark.svg';
import certificateISO from '@/components/icons/footer/certificate-iso.svg';
import certificateISODark from '@/components/icons/footer/certificate-iso-dark.svg';
import certificateOSS from '@/components/icons/footer/certificate-oss.svg';
import certificateOSSDark from '@/components/icons/footer/certificate-oss-dark.svg';

const Certificates = ({ className }: { className: string }) => {
  const { theme } = useTheme();

  const certs = [
    {
      src: theme === 'dark' ? certificateISODark : certificateISO,
      alt: 'Certificate ISO27001',
      width: 24,
    },
    {
      src: theme === 'dark' ? certificateAicpaDark : certificateAicpa,
      alt: 'Certificate Aicpa',
      width: 28,
    },
    {
      src: theme === 'dark' ? certificateGDPRDark : certificateGDPR,
      alt: 'Certificate GDPR',
      width: 28,
    },
    {
      src: theme === 'dark' ? certificateHIPAADark : certificateHIPAA,
      alt: 'Certificate HIPAA',
      width: 51,
    },
    {
      src: theme === 'dark' ? certificateOSSDark : certificateOSS,
      alt: 'Certificate OSS',
      width: 49,
    },
  ];

  return (
    <ul className={clsx('gap-[18px] flex-wrap', className)}>
      {certs.map((certificate) => (
        <li key={certificate.alt}>
          <Link href="https://trust.novu.co" target="_blank">
            <Image
              src={certificate.src}
              alt={certificate.alt}
              width={certificate.width}
              height={28}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Certificates;
