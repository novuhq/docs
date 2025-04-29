import NextIcon from '@/components/icons/index/next.inline.svg';

const Card = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <div className="flex flex-col gap-3.5 p-3.5 border border-[#e6e6e6] bg-[#fafafa] rounded-lg">
      <NextIcon width={32} height={32} className="h-8 w-8" />
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[18px] tracking-[-0.02em] font-medium text-black">{title}</h3>
        <p className="text-[16px] mb-0 tracking-[-0.02em] text-[#666666]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
