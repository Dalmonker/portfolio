type Item = {
    title: string;
    value: string;
};

export default function MainTitleList({ items }: { items: Item[] }) {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {items.map(({ title, value }, i) => (
                <li key={i} className="flex flex-col w-full">
                    {/* Заголовок */}
                    <span className="font-inter text-[#C3C6CC] text-[17px] md:text-[18px] border-b border-[#C3C6CC] pb-[16px] lg:pb-[30px] mb-[16px] lg:mb-[30px]">
            {title}
          </span>

                    {/* Значение */}
                    {/* Добавлен класс whitespace-pre-line, который учитывает \n */}
                    <span className="text-[#404040] text-[20px] sm:text-[22px] lg:text-[30px] font-medium uppercase leading-tight whitespace-pre-line">
            {value}
          </span>
                </li>
            ))}
        </ul>
    );
}