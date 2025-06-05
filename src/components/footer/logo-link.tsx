import Link from 'next/link';
import LogoTextIcon from '@/components/icons/home-page/logo';
import Image from 'next/image';
import clsx from 'clsx';

const LogoLink = ({ className = 'flex sm:hidden' }: { className: string }) => {
  return (
    <Link className={clsx('items-center gap-2.5', className)} href="/">
      <Image
        alt="Novu logo"
        src={'/logo/standalone-gradient.svg'}
        width={32}
        height={32}
        aria-label="Novu"
      />
      <span className="sr-only">Novu</span>
      <LogoTextIcon />
    </Link>
  );
};

export default LogoLink;
