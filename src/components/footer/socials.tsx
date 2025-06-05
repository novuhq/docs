import Link from 'next/link';
import clsx from 'clsx';

type Social = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className: string }>;
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
      {socials.map(({ name, href, icon: Icon }, index) => (
        <li key={index}>
          <Link
            className="flex items-center justify-center"
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{name}</span>
            <Icon className="w-5" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
