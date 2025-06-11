import NextLink, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import { ArrowRightIcon } from '@/components/icons/home-page/arrow-right';

interface ILinkProps extends PropsWithChildren<LinkProps> {
  withArrow?: boolean;
  target?: string;
}

function Link({ children, withArrow, target, ...props }: ILinkProps) {
  return (
    <NextLink
      className="text-[16px] mb-1.5 flex items-center gap-x-0.5 text-[#4B73EC] dark:text-[#00D5FF] hover:text-[#809FFF] dark:hover:text-[#80EAFF] focus-visible:text-[#809FFF] dark:focus-visible:text-[#80EAFF] leading-none -tracking-[0.02em] transition-colors"
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
      {withArrow && <ArrowRightIcon className="w-4 h-4" />}
    </NextLink>
  );
}

export default Link;
