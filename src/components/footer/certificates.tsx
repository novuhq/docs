import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const Certificates = ({
  certs,
  className,
}: {
  certs: { src: string; alt: string; width: number }[];
  className: string;
}) => {
  return (
    <ul className={clsx('gap-[18px] flex-wrap', className)}>
      {certs.map((certificate) => (
        <li key={certificate.alt}>
          <Link href="https://trust.novu.co>">
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
