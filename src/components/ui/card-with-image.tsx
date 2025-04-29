// import Image from 'next/image';

const CardWithImage = ({
  image,
  title,
  description,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col w-full gap-4">
      {/* <Image src={image} alt={title} className="aspect-video object-cover object-center rounded-lg" /> */}
      <div className="bg-[#251F4E] rounded-lg aspect-video" />
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[18px] tracking-[-0.02em] leading-snug font-medium text-black line-clamp-1">
          {title}
        </h3>
        <p className="text-[16px] font-normal tracking-[-0.02em] text-[#666666] line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardWithImage;
