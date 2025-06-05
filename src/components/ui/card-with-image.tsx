import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

const CardWithImage = ({
  image,
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}) => {
  return (
    <Link className="flex flex-col w-full gap-4 group" href={link}>
      <div className="relative rounded-lg overflow-hidden">
        <Image
          className="object-cover object-center rounded-lg w-full h-auto"
          src={image}
          alt={title}
          width={image.width / 2}
          height={image.height / 2}
          sizes={`${image.width}px`}
          quality={100}
        />
        <span
          className="absolute inset-0 pointer-events-none rounded-lg border border-white mix-blend-overlay"
          aria-hidden
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="transition-colors group-hover:text-[#333333] text-[18px] tracking-[-0.02em] leading-snug font-medium text-black line-clamp-1 md:line-clamp-2 lg:line-clamp-1 dark:text-white dark:group-hover:text-[#E6E6E6]">
          {title}
        </h3>
        <p className="text-[16px] mb-0 font-normal tracking-[-0.02em] text-[#666666] line-clamp-2 dark:text-[#999999] transition-colors">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default CardWithImage;
