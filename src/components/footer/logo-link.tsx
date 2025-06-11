import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

const LogoLink = ({ className = 'flex sm:hidden' }: { className: string }) => {
  return (
    <Link className={clsx('items-center gap-2.5', className)} href="/">
      <Image
        alt="Documentation"
        src={'/logo/standalone-gradient.svg'}
        width={30}
        height={30}
        aria-label="Novu"
      />
      <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">Novu Documentation</span>
    </Link>
  );
};

export default LogoLink;
