const CardWithIconAndText = ({
  item: { title, icon: Icon },
}: {
  item: {
    title: string;
    icon: React.ElementType;
  };
}) => {
  return (
    <span className="flex items-center gap-2.5 p-2.5 border rounded-lg border-[#e6e6e6] dark:border-[#262626] hover:border-[#CCCCCC] dark:hover:border-[#333333] transition-colors">
      <Icon className="w-8 h-8 shrink-0" />
      <span className="text-[18px] font-medium text-black leading-none -tracking-[0.02em] dark:text-white transition-colors truncate">
        {title}
      </span>
    </span>
  );
};

export default CardWithIconAndText;
