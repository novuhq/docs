const CardWithIconAndText = ({
  item,
}: {
  item: {
    title: string;
    icon: React.ElementType;
  };
}) => {
  return (
    <span className="flex items-center gap-2.5 p-2.5 border border-[#E6E6E6] bg-[#FAFAFA] rounded-lg hover:bg-accent transition-colors">
      <item.icon className="w-8 h-8" />
      <span className="text-[18px] font-medium text-black leading-none tracking-[-0.02em]">
        {item.title}
      </span>
    </span>
  );
};

export default CardWithIconAndText;
