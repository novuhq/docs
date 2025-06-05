import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

type Social = {
  name: string;
  href: string;
  icon: string;
};

const Socials = ({
  socials,
  className = 'hidden sm:flex',
}: {
  socials: Social[];
  className: string;
}) => {
  return (
    <ul className={clsx('items-center gap-x-5', className)}>
      {socials.map(({ name, href, icon }, index) => (
        <li key={index}>
          <Link
            className="flex items-center justify-center"
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{name}</span>
            <Image
              className="shrink-0 transition-opacity duration-200"
              src={icon}
              alt={name}
              width={20}
              height={20}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
