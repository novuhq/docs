const CardWithIconAndText = ({
  item: { title, icon: Icon },
}: {
  item: {
    title: string;
    icon: React.ElementType;
  };
}) => {
  return (
    <span className="flex items-center gap-2.5 p-2.5 border rounded-lg border-[#e6e6e6] bg-[#fafafa] dark:bg-[#0D0D0D] dark:border-[#262626] hover:bg-[#F5F5F5] hover:border-[#CCCCCC] dark:hover:bg-[#1A1A1A]/60 dark:hover:border-[#333333] transition-colors">
      <Icon className="w-8 h-8" />
      <span className="text-[18px] font-medium text-black leading-none tracking-[-0.02em] dark:text-white transition-colors">
        {title}
      </span>
    </span>
  );
};

export default CardWithIconAndText;
