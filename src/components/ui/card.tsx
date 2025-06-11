import Link from 'next/link';

const Card = ({
  title,
  description,
  icon: Icon,
  link,
  target,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
  target?: string;
}) => {
  return (
    <Link
      className="transition-colors flex flex-col gap-3.5 p-3.5 border border-[#e6e6e6] bg-[#fafafa] rounded-lg dark:bg-[#0D0D0D] dark:border-[#262626] hover:bg-[#F5F5F5] hover:border-[#CCCCCC] dark:hover:bg-[#1A1A1A]/60 dark:hover:border-[#333333]"
      href={link}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      <Icon className="h-8 w-8" width={32} height={32} />
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[18px] tracking-[-0.02em] font-medium text-black dark:text-white transition-colors">
          {title}
        </h3>
        <p className="text-[16px] mb-0 tracking-[-0.02em] text-[#666666] dark:text-[#999999] transition-colors">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
